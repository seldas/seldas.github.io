# Weekly Updates Automation

## Goal
Generate weekly update summaries for local repositories and save them to the Astro blog's `updates` content collection.

## Repositories to Track
The local repositories are located in `d:\Coding\`. By default, track the following:
- `AskFDALabel`
- `AskFDALabel-v2` (AskMyFAERS)
- `LLM4AE`
- `DBBToolkits`

## Steps to Execute
1. **Determine the Start Date**
   Look in `d:\Coding\LW-BLOG\src\content\updates` to find the most recent update file for each project.
   - If a project has recent updates, set the start date to the date of its last update.
   - If a project has no recent updates or the last update is older than 3 months, set the start date to 3 months ago (`90 days ago`).

2. **Fetch Commits**
   For each repository in `d:\Coding\`, run the following command to get the commit logs since the start date:
   ```powershell
   git -C d:\Coding\<RepoName> log --since="<StartDate>" --pretty=format:"%ad | %s" --date=short
   ```

3. **Group by Week**
   Group the fetched commits by week.

4. **Summarize using AI**
   For each week and each project that has commits, summarize the changes into a cohesive technical update. Focus on new features, bug fixes, architecture changes, and major milestones.

5. **Generate Markdown Files**
   Save each weekly summary as a new file in `d:\Coding\LW-BLOG\src\content\updates\`. 
   The filename should follow the format: `YYYY-MM-DD-<project>-weekly.md`.
   The file content must include the following Astro content collection frontmatter:
   ```markdown
   ---
   title: "<A short, catchy title for the week's update>"
   date: "YYYY-MM-DD"
   project: "<project_name_lowercase>"
   tags: ["<Tag1>", "<Tag2>"]
   ---

   <Your AI-generated summary here>
   ```

## Note on Bulk Generation
If the start date is 3 months ago, you might need to generate up to 12 files per project. Process these systematically and create the files.
