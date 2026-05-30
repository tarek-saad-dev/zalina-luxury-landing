/**
 * Gallery Image Registry
 * Centralized image paths for visual inspiration gallery
 */

export const GALLERY_IMAGES = {
  /** Exterior sunset view of luxury bubble tent */
  EXTERIOR_SUNSET: "/images/gallery-1.jpg",
  
  /** Premium interior suite showcase */
  INTERIOR_SUITE: "/images/gallery-2.jpg",
  
  /** Night ambience with warm resort lighting */
  NIGHT_AMBIENCE: "/images/gallery-3.jpg",
  
  /** Multiple units in resort layout */
  RESORT_LAYOUT: "/images/gallery-4.jpg",
  
  /** Technical construction details */
  TECHNICAL_DETAILS: "/images/gallery-5.jpg",
} as const;

/** Type for gallery image keys */
export type GalleryImageKey = keyof typeof GALLERY_IMAGES;

/** Array of all gallery image paths */
export const ALL_GALLERY_IMAGES = Object.values(GALLERY_IMAGES);

/** Gallery items with metadata for component consumption */
export const GALLERY_ITEMS = [
  {
    src: GALLERY_IMAGES.EXTERIOR_SUNSET,
    alt: "Luxury bubble tent exterior at sunset",
    category: "Exterior Views",
    span: "large" as const,
  },
  {
    src: GALLERY_IMAGES.INTERIOR_SUITE,
    alt: "Premium bubble tent interior suite",
    category: "Interior Experience",
    span: "normal" as const,
  },
  {
    src: GALLERY_IMAGES.NIGHT_AMBIENCE,
    alt: "Bubble tent resort at night with warm lighting",
    category: "Night Ambience",
    span: "normal" as const,
  },
  {
    src: GALLERY_IMAGES.RESORT_LAYOUT,
    alt: "Multiple bubble units in resort layout",
    category: "Resort Layouts",
    span: "normal" as const,
  },
  {
    src: GALLERY_IMAGES.TECHNICAL_DETAILS,
    alt: "Technical construction details",
    category: "Technical Details",
    span: "large" as const,
  },
];
