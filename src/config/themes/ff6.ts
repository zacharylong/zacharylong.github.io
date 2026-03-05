import type { ThemeConfig } from './types';

export const config: ThemeConfig = {
  name: 'ff6',

  meta: {
    description:
      'Zachary Long — Data Analyst, Creator, Explorer. A Final Fantasy VI inspired personal website.',
    themeColor: '#060618',
  },

  audio: {
    storageKey: 'ff6-audio-pref',
    bgmPath: '/audio/terras-theme.mp3',
    cursorSfxPath: '/audio/cursor.mp3',
    selectSfxPath: '/audio/select.mp3',
  },

  nav: {
    backLinkText: 'World Map',
  },

  landing: {
    heroSprites: [
      { src: '/images/sprites/terra-walk.gif', alt: 'Terra', className: 'hero-sprite pixel' },
      { src: '/images/sprites/mog-walk.gif', alt: 'Mog', className: 'hero-sprite hero-sprite--mog pixel' },
    ],
    siteTitle: 'Zachary Long',
    subtitle: 'Data Analyst &bull; Creator &bull; Explorer',
    introHtml: `<p class="intro-text">
      I help organizations turn data into actionable insights
      people trust — using analytics, storytelling, and
      human-centered design.
    </p>
    <p class="intro-text" style="margin-top: var(--sp-3);">
      Off the clock, I'm a sci-fi/fantasy book reviewer
      obsessed with worldbuilding, a world-cinema writer with
      a soft spot for East Asian film, and a podcast host
      exploring what AI changes for work, culture, and
      everyday life.
    </p>`,
  },

  pages: {
    resume: {
      location: 'Narshe',
      title: 'Resume',
      headerSub: 'Technical Business Analyst &bull; Long Island, NY',
    },
    library: {
      location: 'Figaro Castle',
      title: 'The Library',
      headerSub: 'Science Fiction &bull; Fantasy &bull; Everything In Between',
    },
    theater: {
      location: 'Opera House',
      title: 'The Theater',
      headerSub: 'Recent Watches &bull; Ratings &bull; Reviews',
    },
    creations: {
      location: "Kefka's Tower",
      title: 'Creations',
      headerSub: 'Podcast &bull; Book Reviews &bull; Photography',
      pageHeading: "Kefka's Tower",
    },
    notFound: {
      title: '404 — Zozo',
      heading: '404',
      subtitle: 'Z O Z O',
      flavorHtml:
        '&ldquo;This place? It&rsquo;s called... er... I&rsquo;ve never heard of it, actually. Nobody lives here. Nope. Definitely not.&rdquo;',
      explanationHtml:
        'The page you&rsquo;re looking for doesn&rsquo;t exist. The citizens of Zozo are known for their honesty, though, so it probably never did.',
      navLinks: [
        { href: '/', label: 'Return to World Map' },
        { href: '/resume', label: 'Visit Narshe', sub: 'Resume' },
      ],
    },
  },

  menu: [
    { href: '/resume', sprite: '/images/sprites/terra-walk.gif', label: 'Narshe', sub: '(Resume)' },
    { href: '/library', sprite: '/images/sprites/edgar-walk.gif', label: 'Figaro Castle', sub: '(Recent Books)' },
    { href: '/theater', sprite: '/images/sprites/celes-walk.gif', label: 'Opera House', sub: '(Recent Films)' },
    { href: '/creations', sprite: '/images/sprites/kefka-walk.gif', label: "Kefka's Tower", sub: '(Videos)' },
  ],

  socialItems: {
    title: 'Items',
    items: [
      { href: 'https://www.linkedin.com/in/zaclong/', icon: '/images/sprites/treasure-chest.gif', label: 'LinkedIn' },
      { href: 'https://github.com/zacharylong', icon: '/images/sprites/magicite.gif', label: 'GitHub' },
      { href: 'https://www.goodreads.com/zacharylong', icon: '/images/sprites/ghost-train.gif', label: 'Goodreads' },
      { href: 'https://letterboxd.com/zarrsadus/diary/', icon: '/images/sprites/falcon.gif', label: 'Letterboxd' },
      { href: 'https://www.strava.com/athletes/59082456', icon: '/images/sprites/chocobo-walk.gif', label: 'Strava' },
    ],
  },

  prompt: '— Select a destination —',
};
