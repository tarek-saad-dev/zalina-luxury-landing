/**
 * Use Cases Image Registry
 * Centralized image paths for hospitality use case displays
 */

export const USE_CASE_IMAGES = {
  /** Desert resorts and luxury desert experiences */
  DESERT: "/images/use-desert.png",

  /** Eco lodges and sustainable accommodation */
  ECO: "/images/use-eco.png",

  /** Beach resorts and coastal destinations */
  BEACH: "/images/use-beach.png",

  /** Wellness retreats and spa destinations */
  WELLNESS: "/images/use-wellness.png",

  /** Private camps and seasonal experiences */
  CAMP: "/images/use-camp.png",

  /** Investment projects and hospitality developments */
  INVESTMENT: "/images/use-investment.png",
} as const;

/** Type for use case image keys */
export type UseCaseImageKey = keyof typeof USE_CASE_IMAGES;

/** Array of all use case image paths */
export const ALL_USE_CASE_IMAGES = Object.values(USE_CASE_IMAGES);

/** Use case items with metadata for component consumption */
export const USE_CASE_ITEMS = [
  {
    title: "Desert Resorts",
    description:
      "Create premium stays in breathtaking desert landscapes with unforgettable views.",
    image: USE_CASE_IMAGES.DESERT,
  },
  {
    title: "Eco Lodges",
    description:
      "Offer sustainable, low-impact accommodation with a unique architectural identity.",
    image: USE_CASE_IMAGES.ECO,
  },
  {
    title: "Beach Resorts",
    description:
      "Add exclusive units for couples, honeymooners, and VIP guests seeking privacy and luxury.",
    image: USE_CASE_IMAGES.BEACH,
  },
  {
    title: "Wellness Retreats",
    description:
      "Perfect for yoga, meditation, and nature-connected experiences that promote relaxation and renewal.",
    image: USE_CASE_IMAGES.WELLNESS,
  },
  {
    title: "Private Camps",
    description:
      "Build luxury accommodation for seasonal camps, destination events, and exclusive gatherings.",
    image: USE_CASE_IMAGES.CAMP,
  },
  {
    title: "Investment Projects",
    description:
      "Launch a high-demand hospitality concept with strong ROI potential and exceptional guest appeal.",
    image: USE_CASE_IMAGES.INVESTMENT,
  },
];
