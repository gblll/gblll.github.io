import { getCollection, type CollectionEntry } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;

export async function getPublishedPosts(): Promise<WritingEntry[]> {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date, style: 'short' | 'long' = 'short'): string {
  if (style === 'long') {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(date);
  }
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(date);
}

export function formatMonthDay(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(date);
}

export function estimateReadingTime(body: string | undefined): string {
  if (!body) return '1 min read';
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}
