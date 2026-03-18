import type { ThemeConfig } from './types';

export const config: ThemeConfig = {
  name: 'cinematic',

  meta: {
    description:
      'Zachary Long — Institutional analytics, AI, and the worlds that stay with us. Books, films, and data storytelling.',
    themeColor: '#0e0d1a',
  },

  nav: {
    backLinkText: 'Home',
  },

  landing: {
    heroSprites: [],
    siteTitle: 'Zachary Long',
    subtitle: 'Systems Thinker &bull; Storyteller',
    tagline: 'I build clarity with data\u2009\u2014\u2009and spend the rest of my time exploring books, films, and epic story worlds.',
    positioningStatement: 'Technical Business Analyst in higher education, with a background in analytics, AI, and computer science. NYU Stern M.S. in Business Analytics & AI. Content creator covering sci-fi/fantasy books, world cinema, and the future of work.',
    ctaPrimary: { label: 'Professional Work', href: '/work' },
    ctaSecondary: { label: 'Books & Films', href: '/books' },
    ctaTertiary: { label: 'Resume', href: '/resume' },
    portalCards: [
      {
        title: 'The Workshop',
        description: 'Analytics, dashboards, AI, and higher-ed institutional research.',
        href: '/work',
        featuredLabel: 'Current role',
      },
      {
        title: 'The Stacks',
        description: 'Sci-fi, fantasy, and the reading life. Reviews and recommendations.',
        href: '/books',
        featuredLabel: 'Now reading',
      },
      {
        title: 'The Screening Room',
        description: 'Film diary, reviews, and world cinema. From arthouse to blockbuster.',
        href: '/films',
        featuredLabel: 'Recently watched',
      },
      {
        title: 'Transmissions',
        description: 'Data podcast, video essays, book & film reviews on YouTube.',
        href: '/transmissions',
        featuredLabel: 'Latest episode',
      },
    ],
    loreLogicHeading: 'Lore + Logic',
    loreLogicHtml: `<p>I think in systems and care about the humans inside them. By day, I help institutions make faster, better decisions with analytics that leaders actually use. After hours, I\u2019m drawn to books and films with scale, atmosphere, and strong worldbuilding\u2009\u2014\u2009the kind of stories that build entire civilizations and ask what it means to live in them. This site is where both halves meet.</p>`,
    credibilityLine: 'NYU Stern \u2022 SUNY Farmingdale \u2022 Analytics & AI',
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
      location: 'The Stacks',
      title: 'Books',
      headerSub: 'Science Fiction &bull; Fantasy &bull; Everything In Between',
    },
    theater: {
      location: 'The Screening Room',
      title: 'Films',
      headerSub: 'Recent Watches &bull; Ratings &bull; Reviews',
    },
    creations: {
      location: 'Transmissions',
      title: 'Transmissions',
      headerSub: 'Podcast &bull; Book Reviews &bull; Film Reviews',
      pageHeading: 'Transmissions',
    },
    books: {
      location: 'The Stacks',
      title: 'Books',
      headerSub: 'Science Fiction &bull; Fantasy &bull; Everything In Between',
    },
    films: {
      location: 'The Screening Room',
      title: 'Films',
      headerSub: 'Recent Watches &bull; Ratings &bull; Reviews',
    },
    videos: {
      location: 'Transmissions',
      title: 'Transmissions',
      headerSub: 'Podcast &bull; Book Reviews &bull; Film Reviews',
      pageHeading: 'Transmissions',
    },
    work: {
      location: 'The Workshop',
      title: 'Work',
      headerSub: 'Analytics &bull; AI &bull; Higher Education',
    },
    transmissions: {
      location: 'Transmissions',
      title: 'Transmissions',
      headerSub: 'Podcast &bull; Video Essays &bull; Reviews',
      pageHeading: 'Transmissions',
    },
    about: {
      location: 'About',
      title: 'About',
      headerSub: 'The person behind the systems and stories.',
    },
    now: {
      location: 'Now',
      title: 'Now',
      headerSub: 'What I\u2019m reading, watching, making, and thinking about.',
    },
    notFound: {
      title: '404 \u2014 Lost in the Archive',
      heading: '404',
      subtitle: 'Page Not Found',
      flavorHtml:
        '&ldquo;The mystery of life isn\u2019t a problem to solve, but a reality to experience.&rdquo;',
      explanationHtml:
        'The page you\u2019re looking for doesn\u2019t exist. It may have been moved or removed.',
      navLinks: [
        { href: '/', label: 'Return Home' },
        { href: '/work', label: 'The Workshop' },
        { href: '/books', label: 'The Stacks' },
        { href: '/films', label: 'The Screening Room' },
      ],
    },
  },

  menu: [
    { href: '/', sprite: '', label: 'Home', sub: '' },
    { href: '/work', sprite: '', label: 'Work', sub: '' },
    { href: '/books', sprite: '', label: 'Books', sub: '' },
    { href: '/films', sprite: '', label: 'Films', sub: '' },
    { href: '/transmissions', sprite: '', label: 'Transmissions', sub: '' },
    { href: '/about', sprite: '', label: 'About', sub: '' },
    { href: '/now', sprite: '', label: 'Now', sub: '' },
  ],

  socialItems: {
    title: 'Connect',
    items: [
      { href: 'https://www.linkedin.com/in/zaclong/', icon: '', label: 'LinkedIn' },
      { href: 'https://github.com/zacharylong', icon: '', label: 'GitHub' },
      { href: 'https://www.goodreads.com/zacharylong', icon: '', label: 'Goodreads' },
      { href: 'https://letterboxd.com/zarrsadus/diary/', icon: '', label: 'Letterboxd' },
      { href: 'https://www.youtube.com/@EverydayDataWithPnZ', icon: '', label: 'Podcast' },
      { href: 'https://www.strava.com/athletes/59082456', icon: '', label: 'Strava' },
    ],
  },

  prompt: '',

  footer: {
    copyright: '2026 Zachary Long',
    easterEggTitle: 'Once a pixel adventurer, always a pixel adventurer.',
  },
};
