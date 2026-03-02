/**
 * RSS feed utilities for Goodreads and Letterboxd integration.
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

function extractItems(xml: string): string[] {
  const items: string[] = [];
  const regex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    items.push(match[1]);
  }
  return items;
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
    return extractItems(xml).map((item) => ({
      title: extractTag(item, 'letterboxd:filmTitle') || extractTag(item, 'title'),
      year: extractTag(item, 'letterboxd:filmYear'),
      link: extractTag(item, 'link'),
      rating: parseFloat(extractTag(item, 'letterboxd:memberRating')) || 0,
      watchedDate: extractTag(item, 'letterboxd:watchedDate'),
      posterHtml: extractTag(item, 'description'),
    })).slice(0, limit);
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
