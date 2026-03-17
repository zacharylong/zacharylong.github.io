import type { ThemeConfig } from './types';

export const config: ThemeConfig = {
  name: 'cinematic',

  meta: {
    description:
      'Zachary Long — Data analytics, books, films, and the worlds that stay with us.',
    themeColor: '#0f1a14',
  },

  nav: {
    backLinkText: 'Home',
  },

  landing: {
    heroSprites: [],
    siteTitle: 'Zachary Long',
    subtitle: 'Data &bull; Books &bull; Films',
    tagline: 'Turning data into insight. Exploring the worlds that stay with us.',
    introHtml: `<p class="intro-text">
      Off the clock, I&rsquo;m a sci-fi/fantasy book reviewer
      obsessed with worldbuilding, a film critic with
      a soft spot for East Asian cinema, and a podcast host
      exploring what AI changes for work, culture, and
      everyday life.
    </p>`,
  },

  pages: {
    resume: {
      location: 'Resume',
      title: 'Resume',
      headerSub: 'Technical Business Analyst &bull; Long Island, NY',
    },
    library: {
      location: 'Books',
      title: 'Books',
      headerSub: 'Science Fiction &bull; Fantasy &bull; Everything In Between',
    },
    theater: {
      location: 'Films',
      title: 'Films',
      headerSub: 'Recent Watches &bull; Ratings &bull; Reviews',
    },
    creations: {
      location: 'Videos',
      title: 'Videos',
      headerSub: 'Book Reviews &bull; Podcast &bull; Photography',
      pageHeading: 'Videos',
    },
    books: {
      location: 'Books',
      title: 'Books',
      headerSub: 'Science Fiction &bull; Fantasy &bull; Everything In Between',
    },
    films: {
      location: 'Films',
      title: 'Films',
      headerSub: 'Recent Watches &bull; Ratings &bull; Reviews',
    },
    videos: {
      location: 'Videos',
      title: 'Videos',
      headerSub: 'Book Reviews &bull; Podcast &bull; Photography',
      pageHeading: 'Videos',
    },
    notFound: {
      title: '404 — Lost in the Stacks',
      heading: '404',
      subtitle: 'Page Not Found',
      flavorHtml:
        '&ldquo;Not all those who wander are lost&hellip; but this page certainly is.&rdquo;',
      explanationHtml:
        'The page you&rsquo;re looking for doesn&rsquo;t exist. It may have been moved or removed.',
      navLinks: [
        { href: '/', label: 'Return Home' },
        { href: '/books', label: 'Browse Books' },
        { href: '/films', label: 'Browse Films' },
      ],
    },
  },

  menu: [
    { href: '/books', sprite: '', label: 'Books', sub: 'Goodreads reviews' },
    { href: '/films', sprite: '', label: 'Films', sub: 'Letterboxd diary' },
    { href: '/videos', sprite: '', label: 'Videos', sub: 'YouTube reviews & podcast' },
    { href: '/resume', sprite: '', label: 'Resume', sub: '' },
  ],

  socialItems: {
    title: 'Connect',
    items: [
      { href: 'https://www.linkedin.com/in/zaclong/', icon: '', label: 'LinkedIn' },
      { href: 'https://github.com/zacharylong', icon: '', label: 'GitHub' },
      { href: 'https://www.goodreads.com/zacharylong', icon: '', label: 'Goodreads' },
      { href: 'https://letterboxd.com/zarrsadus/diary/', icon: '', label: 'Letterboxd' },
      { href: 'https://www.strava.com/athletes/59082456', icon: '', label: 'Strava' },
    ],
  },

  prompt: '',

  footer: {
    copyright: '2025 Zachary Long',
    easterEggTitle: 'Once a pixel adventurer, always a pixel adventurer.',
  },
};
