/**
 * Hero & Branding Image Registry
 * Centralized image paths for hero section and brand assets
 */

export const HERO_IMAGES = {
  /** Primary hero background image */
  PRIMARY: "/images/hero.png",

  /** Secondary hero background (currently active) */
  SECONDARY: "/images/hero2.png",
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
