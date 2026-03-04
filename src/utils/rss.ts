/**
 * RSS feed utilities for Goodreads, Letterboxd, and YouTube integration.
 * Feeds are fetched at build time for zero client-side API calls.
 */

export interface BookItem {
  title: string;
  author: string;
  link: string;
  imageUrl: string;
  rating: number;
  readAt: string;
}

export interface FilmItem {
  title: string;
  year: string;
  link: string;
  rating: number;
  watchedDate: string;
  posterHtml: string;
  review: string;
}

export interface VideoItem {
  title: string;
  videoId: string;
  thumbnailUrl: string;
  description: string;
  publishedDate: string;
  link: string;
}

/** Decode common XML/HTML entities */
function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'");
}

function extractTag(xml: string, tag: string): string {
  // Handle CDATA wrapped content
  const cdataRegex = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`);
  const cdataMatch = cdataRegex.exec(xml);
  if (cdataMatch) return cdataMatch[1].trim();

  // Handle plain content
  const plainRegex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`);
  const plainMatch = plainRegex.exec(xml);
  return plainMatch ? plainMatch[1].trim() : '';
}

/** Extract attribute value from a tag */
function extractAttr(xml: string, tag: string, attr: string): string {
  const regex = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, 'i');
  const match = regex.exec(xml);
  return match ? match[1] : '';
}

function extractItems(xml: string): string[] {
  const items: string[] = [];
  const regex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    items.push(match[1]);
  }
  return items;
}

/** Extract Atom <entry> elements (for YouTube feeds) */
function extractEntries(xml: string): string[] {
  const entries: string[] = [];
  const regex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    entries.push(match[1]);
  }
  return entries;
}

/** Extract review text from Letterboxd description HTML.
 *  The description contains a poster <img> in the first <p>,
 *  followed by review text in subsequent <p> tags. */
function extractReviewText(html: string): string {
  if (!html) return '';
  // Get all <p> contents
  const pTags: string[] = [];
  const pRegex = /<p>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = pRegex.exec(html)) !== null) {
    pTags.push(match[1].trim());
  }
  // First <p> is the poster image, rest are review text
  const reviewParts = pTags.slice(1).filter(p => p.length > 0);
  if (reviewParts.length === 0) return '';
  // Strip remaining HTML tags, keep text
  const raw = reviewParts
    .join(' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '');
  return decodeEntities(raw).replace(/\s+/g, ' ').trim();
}

export async function fetchGoodreadsBooks(
  userId: string,
  shelf: string = 'read',
  limit: number = 20
): Promise<BookItem[]> {
  try {
    const res = await fetch(
      `https://www.goodreads.com/review/list_rss/${userId}?shelf=${shelf}&per_page=${limit}`
    );
    if (!res.ok) return [];
    const xml = await res.text();
    return extractItems(xml).map((item) => ({
      title: extractTag(item, 'title'),
      author: extractTag(item, 'author_name'),
      link: extractTag(item, 'link'),
      imageUrl: extractTag(item, 'book_large_image_url') || extractTag(item, 'book_image_url'),
      rating: parseInt(extractTag(item, 'user_rating')) || 0,
      readAt: extractTag(item, 'user_read_at'),
    })).slice(0, limit);
  } catch {
    return [];
  }
}

export async function fetchLetterboxdFilms(
  username: string,
  limit: number = 20
): Promise<FilmItem[]> {
  try {
    const res = await fetch(`https://letterboxd.com/${username}/rss/`);
    if (!res.ok) return [];
    const xml = await res.text();
    return extractItems(xml).map((item) => {
      const posterHtml = extractTag(item, 'description');
      return {
        title: extractTag(item, 'letterboxd:filmTitle') || extractTag(item, 'title'),
        year: extractTag(item, 'letterboxd:filmYear'),
        link: extractTag(item, 'link'),
        rating: parseFloat(extractTag(item, 'letterboxd:memberRating')) || 0,
        watchedDate: extractTag(item, 'letterboxd:watchedDate'),
        posterHtml,
        review: extractReviewText(posterHtml),
      };
    }).slice(0, limit);
  } catch {
    return [];
  }
}

export async function fetchYouTubeVideos(
  channelId: string,
  limit: number = 15
): Promise<VideoItem[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    );
    if (!res.ok) return [];
    const xml = await res.text();
    return extractEntries(xml).map((entry) => {
      const videoId = extractTag(entry, 'yt:videoId');
      return {
        title: decodeEntities(extractTag(entry, 'title')),
        videoId,
        thumbnailUrl: extractAttr(entry, 'media:thumbnail', 'url')
          || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        description: decodeEntities(extractTag(entry, 'media:description')),
        publishedDate: extractTag(entry, 'published'),
        link: `https://www.youtube.com/watch?v=${videoId}`,
      };
    }).slice(0, limit);
  } catch {
    return [];
  }
}

/** Convert numeric rating to FF6-style stars */
export function ratingToStars(rating: number, maxStars: number = 5): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = maxStars - full - half;
  return '★'.repeat(full) + (half ? '☆' : '') + '·'.repeat(empty);
}
