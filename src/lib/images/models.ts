/**
 * Model Image Registry
 * Centralized image paths for bubble tent model displays
 */

export const MODEL_IMAGES = {
  /** 8-meter bubble unit - ideal for boutique resorts and compact glamping */
  BUBBLE_8M: "/images/8m.png",

  /** 10-meter bubble unit - luxury suites and high-end resorts */
  BUBBLE_10M: "/images/10m.png",
} as const;

/** Type for model image keys */
export type ModelImageKey = keyof typeof MODEL_IMAGES;

/** Array of all model image paths for iteration */
export const ALL_MODEL_IMAGES = Object.values(MODEL_IMAGES);
