/**
 * Theme configuration interface.
 * FF6, SMB3, and Cinematic themes implement this contract.
 * Pages import from ../theme.ts and use these values
 * instead of hardcoding theme-specific strings.
 */

export interface HeroSprite {
  src: string;
  alt: string;
  className: string;
}

export interface MenuItem {
  href: string;
  sprite: string;
  label: string;
  sub: string;
}

export interface SocialItem {
  href: string;
  icon: string;
  label: string;
}

export interface PageMeta {
  location: string;
  title: string;
  headerSub: string;
}

export interface NotFoundPage {
  title: string;
  heading: string;
  subtitle: string;
  flavorHtml: string;
  explanationHtml: string;
  navLinks: Array<{ href: string; label: string; sub?: string }>;
}

export interface ThemeConfig {
  name: string;

  meta: {
    description: string;
    themeColor: string;
  };

  audio?: {
    storageKey: string;
    bgmPath: string;
    cursorSfxPath: string;
    selectSfxPath: string;
  };

  nav: {
    backLinkText: string;
  };

  landing: {
    heroSprites: HeroSprite[];
    siteTitle: string;
    subtitle: string;
    introHtml: string;
    tagline?: string;
  };

  pages: {
    resume: PageMeta;
    library: PageMeta;
    theater: PageMeta;
    creations: PageMeta & { pageHeading: string };
    notFound: NotFoundPage;
    books?: PageMeta;
    films?: PageMeta;
    videos?: PageMeta & { pageHeading: string };
  };

  menu: MenuItem[];

  socialItems: {
    title: string;
    items: SocialItem[];
  };

  prompt: string;

  footer?: {
    copyright: string;
    easterEggTitle?: string;
  };
}
