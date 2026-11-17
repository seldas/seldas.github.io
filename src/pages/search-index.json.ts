import { getCollection } from 'astro:content';
import { PROJECTS } from '../data/site';
import { PUBLICATIONS } from '../data/publications';
import essays from '../data/essays.json';

export async function GET() {
  const updates = await getCollection('updates');

  const items = [
    ...PROJECTS.map((p) => ({
      type: 'project',
      title: p.name,
      subtitle: `${p.status} · ${p.summary.en}`,
      url: `/projects#${p.id}`,
      tags: p.tags,
      date: p.updatedAt || '',
    })),
    ...PUBLICATIONS.map((pub) => ({
      type: 'paper',
      title: pub.title.en,
      subtitle: `${pub.journal} (${pub.date}) · ${pub.summary.en}`,
      url: `/research#${pub.id}`,
      tags: [pub.journal, pub.doi],
      date: pub.date,
    })),
    ...essays.map((e) => ({
      type: 'essay',
      title: e.title,
      subtitle: `Research Essay · ${e.date}`,
      url: `/research#${e.id}`,
      tags: ['askFDALabel 3.0', 'Architecture'],
      date: e.date,
    })),
    ...updates
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((u) => ({
        type: 'update',
        title: u.data.title,
        subtitle: `${u.data.project} · ${u.data.summary}`,
        url: `/updates/${u.id}`,
        tags: [u.data.project, ...u.data.tags],
        date: u.data.date.toISOString().slice(0, 10),
      })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
}
