#!/usr/bin/env python3
import os
import re
import sys
import subprocess
import json
from datetime import datetime, timedelta

# Target projects config
PROJECTS = {
    'askfdalabel': {
        'dir_name': 'askFDALabel-Suite',
        'repo_url': 'https://github.com/seldas/askFDALabel-Suite.git'
    },
    'askmyfaers': {
        'dir_name': 'AskmyFAERS',
        'repo_url': 'https://github.com/seldas/AskMyFAERS.git'
    },
    'dbbtoolkits': {
        'dir_name': 'DBBToolkits',
        'repo_url': 'https://github.com/seldas/DBBToolkits.git'
    },
    'llm4ae': {
        'dir_name': 'LLM4AE',
        'repo_url': 'https://github.com/seldas/LLM4AE.git'
    }
}

CODING_DIR = '/Users/leihong/Coding'
UPDATES_DIR = os.path.join(CODING_DIR, 'LW-BLOG/src/content/updates')

def clone_if_missing(project_id, cfg):
    target_path = os.path.join(CODING_DIR, cfg['dir_name'])
    if not os.path.exists(target_path):
        print(f"Directory {target_path} not found. Attempting to clone...", file=sys.stderr)
        try:
            # We use git clone. If it is private, it depends on local git authentication.
            subprocess.run(
                ['git', 'clone', cfg['repo_url'], target_path],
                check=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )
            print(f"Successfully cloned {project_id} to {target_path}.", file=sys.stderr)
        except Exception as e:
            print(f"Warning: Could not clone {project_id} from {cfg['repo_url']}: {e}", file=sys.stderr)
            return None
    return target_path

def get_last_update(project_id):
    if not os.path.exists(UPDATES_DIR):
        return None, None
    
    files = os.listdir(UPDATES_DIR)
    pattern = re.compile(rf'^(\d{{4}}-\d{{2}}-\d{{2}})-{project_id}-.*\.md$')
    
    latest_date = None
    latest_file = None
    
    for f in files:
        match = pattern.match(f)
        if match:
            date_str = match.group(1)
            try:
                date_val = datetime.strptime(date_str, '%Y-%m-%d').date()
                if latest_date is None or date_val > latest_date:
                    latest_date = date_val
                    latest_file = f
            except ValueError:
                continue
                
    return latest_date, latest_file

def main():
    results = {}
    
    # 90 days ago default
    default_start = (datetime.today() - timedelta(days=90)).date()
    
    for pid, cfg in PROJECTS.items():
        # Ensure repo is cloned
        repo_path = clone_if_missing(pid, cfg)
        if not repo_path or not os.path.exists(repo_path):
            continue
            
        last_date, last_file = get_last_update(pid)
        
        # Determine start date
        if last_date is None or last_date < default_start:
            start_date = default_start
        else:
            # Git since is inclusive. Let's start from the last_date.
            start_date = last_date
            
        # Get last update content for context if available
        last_update_content = ""
        if last_file:
            try:
                with open(os.path.join(UPDATES_DIR, last_file), 'r', encoding='utf-8') as f:
                    last_update_content = f.read()
            except Exception as e:
                print(f"Error reading last update file {last_file}: {e}", file=sys.stderr)
                
        # Run git log
        commits_by_day = {}
        try:
            # Format: YYYY-MM-DD | subject
            cmd = [
                'git', '-C', repo_path, 'log',
                f'--since={start_date.isoformat()}',
                '--pretty=format:%ad | %s',
                '--date=short'
            ]
            proc = subprocess.run(cmd, capture_output=True, text=True, check=True)
            output = proc.stdout.strip()
            if output:
                for line in output.split('\n'):
                    line = line.strip()
                    if not line:
                        continue
                    parts = line.split(' | ', 1)
                    if len(parts) == 2:
                        day, msg = parts
                        # Filter out duplicate commits already described in last update
                        if last_update_content and msg.lower() in last_update_content.lower():
                            continue
                        if day not in commits_by_day:
                            commits_by_day[day] = []
                        commits_by_day[day].append(msg)
        except Exception as e:
            print(f"Error running git log for {pid}: {e}", file=sys.stderr)
            
        results[pid] = {
            'latest_update_date': last_date.isoformat() if last_date else None,
            'latest_update_file': last_file,
            'latest_update_content': last_update_content,
            'start_date_queried': start_date.isoformat(),
            'commits_by_day': commits_by_day
        }
        
    print(json.dumps(results, indent=2))

if __name__ == '__main__':
    main()
