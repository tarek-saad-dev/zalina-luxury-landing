/**
 * Gallery Image Registry
 * Centralized image paths for premium masonry gallery
 */

export const GALLERY_IMAGES = {
  IMAGE_01: "/images/images-01.jpg",
  IMAGE_02: "/images/images-02.jpg",
  IMAGE_03: "/images/images-03.jpg",
  IMAGE_04: "/images/images-04.jpg",
  IMAGE_05: "/images/images-05.jpg",
  IMAGE_06: "/images/images-06.jpg",
  IMAGE_07: "/images/images-07.jpg",
  IMAGE_08: "/images/images-08.jpg",
  IMAGE_09: "/images/images-09.jpg",
  IMAGE_10: "/images/images-10.jpg",
  IMAGE_11: "/images/images-11.jpg",
  IMAGE_12: "/images/images-12.jpg",
  IMAGE_13: "/images/images-13.jpg",
  IMAGE_14: "/images/images-14.jpg",
  IMAGE_15: "/images/images-15.jpg",
  IMAGE_16: "/images/images-16.jpg",
  IMAGE_17: "/images/images-17.jpg",
} as const;

/** Type for gallery image keys */
export type GalleryImageKey = keyof typeof GALLERY_IMAGES;

/** Array of all gallery image paths */
export const ALL_GALLERY_IMAGES = Object.values(GALLERY_IMAGES);

/** Gallery size types for masonry layout */
export type GallerySize = "large" | "medium" | "small" | "tall" | "wide";

/** Gallery item interface */
export interface GalleryItemData {
  src: string;
  alt: string;
  category: string;
  size: GallerySize;
  aspectRatio?: string;
}

/** Gallery items with editorial layout configuration
 * Pattern: Large, Small Small, Medium Medium, Large, Small Small Small
 */
export const GALLERY_ITEMS: GalleryItemData[] = [
  {
    src: GALLERY_IMAGES.IMAGE_01,
    alt: "Luxury bubble tent exterior at golden hour",
    category: "Exterior",
    size: "large",
  },
  {
    src: GALLERY_IMAGES.IMAGE_02,
    alt: "Premium interior suite with panoramic views",
    category: "Interior",
    size: "small",
  },
  {
    src: GALLERY_IMAGES.IMAGE_03,
    alt: "Evening ambience with warm lighting",
    category: "Ambience",
    size: "small",
  },
  {
    src: GALLERY_IMAGES.IMAGE_04,
    alt: "Resort layout with multiple units",
    category: "Resort",
    size: "medium",
  },
  {
    src: GALLERY_IMAGES.IMAGE_05,
    alt: "Bubble tent under starlit sky",
    category: "Night",
    size: "medium",
  },
  {
    src: GALLERY_IMAGES.IMAGE_06,
    alt: "Luxury bedroom interior design",
    category: "Interior",
    size: "large",
  },
  {
    src: GALLERY_IMAGES.IMAGE_07,
    alt: "Desert landscape installation",
    category: "Exterior",
    size: "small",
  },
  {
    src: GALLERY_IMAGES.IMAGE_08,
    alt: "Sunset view from bubble tent",
    category: "Views",
    size: "small",
  },
  {
    src: GALLERY_IMAGES.IMAGE_09,
    alt: "Private deck and lounge area",
    category: "Amenities",
    size: "small",
  },
  {
    src: GALLERY_IMAGES.IMAGE_10,
    alt: "Architectural detail showcase",
    category: "Design",
    size: "tall",
  },
  {
    src: GALLERY_IMAGES.IMAGE_11,
    alt: "Resort pool and bubble tent vista",
    category: "Resort",
    size: "wide",
  },
  {
    src: GALLERY_IMAGES.IMAGE_12,
    alt: "Cozy interior lighting at dusk",
    category: "Interior",
    size: "medium",
  },
  {
    src: GALLERY_IMAGES.IMAGE_13,
    alt: "Morning mist around bubble tent",
    category: "Nature",
    size: "medium",
  },
  {
    src: GALLERY_IMAGES.IMAGE_14,
    alt: "Luxury bathroom fixtures",
    category: "Interior",
    size: "small",
  },
  {
    src: GALLERY_IMAGES.IMAGE_15,
    alt: "Outdoor dining setup",
    category: "Amenities",
    size: "large",
  },
  {
    src: GALLERY_IMAGES.IMAGE_16,
    alt: "Night sky through transparent dome",
    category: "Experience",
    size: "small",
  },
  {
    src: GALLERY_IMAGES.IMAGE_17,
    alt: "Resort aerial perspective",
    category: "Resort",
    size: "wide",
  },
];
