import type { ThemeConfig } from './types';

export const config: ThemeConfig = {
  name: 'smb3',

  meta: {
    description:
      'Zachary Long — Data Analyst, Creator, Explorer. A Super Mario Bros. 3 inspired personal website.',
    themeColor: '#6888fc',
  },

  audio: {
    storageKey: 'smb3-audio-pref',
    bgmPath: '',  // TODO: add SMB3 overworld theme
    cursorSfxPath: '',
    selectSfxPath: '',
  },

  nav: {
    backLinkText: 'World Map',
  },

  landing: {
    heroSprites: [
      { src: '/images/smb3/mario/raccoon-mario-fly.gif', alt: 'Raccoon Mario', className: 'hero-sprite pixel' },
      { src: '/images/smb3/title/MarioBannerZac.png', alt: 'Zachary Long — Mario Banner', className: 'hero-sprite hero-sprite--title' },
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
      location: 'Desert Land',
      title: 'Resume',
      headerSub: 'Technical Business Analyst &bull; Long Island, NY',
    },
    library: {
      location: 'Water Land',
      title: 'The Library',
      headerSub: 'Science Fiction &bull; Fantasy &bull; Everything In Between',
    },
    theater: {
      location: 'Sky Land',
      title: 'The Theater',
      headerSub: 'Recent Watches &bull; Ratings &bull; Reviews',
    },
    creations: {
      location: 'Pipe Land',
      title: 'Creations',
      headerSub: 'Podcast &bull; Book Reviews &bull; Photography',
      pageHeading: 'Pipe Land',
    },
    notFound: {
      title: '404 — Dark Land',
      heading: '404',
      subtitle: 'D A R K  L A N D',
      flavorHtml:
        '&ldquo;Bowser&rsquo;s taken over this part of the Mushroom Kingdom. This page doesn&rsquo;t exist &mdash; it never made it past the fortress.&rdquo;',
      explanationHtml:
        'The page you&rsquo;re looking for has been claimed by the Koopa King. Try heading back to Grass Land.',
      navLinks: [
        { href: '/', label: 'Return to Grass Land' },
        { href: '/resume', label: 'Visit Desert Land', sub: 'Resume' },
      ],
    },
  },

  menu: [
    { href: '/resume', sprite: '/images/smb3/mario/raccoon-mario-fly.gif', label: 'Desert Land', sub: '(Resume)' },
    { href: '/library', sprite: '/images/smb3/mario/frog-mario-swim.gif', label: 'Water Land', sub: '(Recent Books on Goodreads)' },
    { href: '/theater', sprite: '/images/smb3/mario/tanooki-mario-float.gif', label: 'Sky Land', sub: '(Recent Films on Letterboxd)' },
    { href: '/creations', sprite: '/images/smb3/mario/hammer-mario-throw.gif', label: 'Pipe Land', sub: '(YouTube Video Reviews & Data Podcast)' },
  ],

  socialItems: {
    title: 'Power-Ups',
    items: [
      { href: 'https://www.linkedin.com/in/zaclong/', icon: '/images/smb3/items/super-mushroom.png', label: 'LinkedIn' },
      { href: 'https://github.com/zacharylong', icon: '/images/smb3/items/fire-flower.png', label: 'GitHub' },
      { href: 'https://www.goodreads.com/zacharylong', icon: '/images/smb3/items/super-star.gif', label: 'Goodreads' },
      { href: 'https://letterboxd.com/zarrsadus/diary/', icon: '/images/smb3/items/1up-mushroom.png', label: 'Letterboxd' },
      { href: 'https://www.strava.com/athletes/59082456', icon: '/images/smb3/items/coin.gif', label: 'Strava' },
    ],
  },

  prompt: '— Select a World —',
};
