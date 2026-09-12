/**
 * Hero & Branding Image Registry
 * Centralized image paths for hero section and brand assets
 */

export const HERO_IMAGES = {
  /** Primary hero background image - Desktop (landscape 1920x1080) */
  PRIMARY: "/images/hero.png",

  /** Secondary hero background - Desktop alternative (landscape) */
  SECONDARY: "/images/hero2.png",

  /** Mobile hero background - Portrait optimized (1440x2560) */
  MOBILE: "/images/hero_mobile.png",
} as const;

/** Optimized hero background media (versioned for long-cache CDNs) */
export const HERO_MEDIA = {
  DESKTOP_VIDEO: "/images/hero-desktop-v2.mp4",
  MOBILE_VIDEO: "/images/hero-mobile-v2.mp4",
  DESKTOP_POSTER: "/images/hero-desktop-poster-v2.webp",
  MOBILE_POSTER: "/images/hero-mobile-poster-v2.webp",
  /** Matches HeroSection CSS breakpoint for portrait video */
  MOBILE_MQ: "(max-width: 768px)",
} as const;

/** Type for hero image keys */
export type HeroImageKey = keyof typeof HERO_IMAGES;

export const BRAND_IMAGES = {
  /** Full Zalina logo with tagline */
  LOGO_FULL: "/images/zalina-logo-full.png",
} as const;

/** Type for brand image keys */
export type BrandImageKey = keyof typeof BRAND_IMAGES;

/** Custom design showcase image */
export const CUSTOM_DESIGN_IMAGES = {
  /** Interior customization showcase */
  INTERIOR: "/images/custom-interior.png",
} as const;

/** Type for custom design image keys */
export type CustomDesignImageKey = keyof typeof CUSTOM_DESIGN_IMAGES;
