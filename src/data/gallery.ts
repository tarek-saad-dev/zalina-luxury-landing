import { GALLERY_IMAGES } from "@/lib/images";

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  span?: "large" | "normal";
}

export const galleryItems: GalleryItem[] = [
  {
    src: GALLERY_IMAGES.EXTERIOR_SUNSET,
    alt: "Luxury bubble tent exterior at sunset",
    category: "Exterior Views",
    span: "large",
  },
  {
    src: GALLERY_IMAGES.INTERIOR_SUITE,
    alt: "Premium bubble tent interior suite",
    category: "Interior Experience",
    span: "normal",
  },
  {
    src: GALLERY_IMAGES.NIGHT_AMBIENCE,
    alt: "Bubble tent resort at night with warm lighting",
    category: "Night Ambience",
    span: "normal",
  },
  {
    src: GALLERY_IMAGES.RESORT_LAYOUT,
    alt: "Multiple bubble units in resort layout",
    category: "Resort Layouts",
    span: "normal",
  },
  {
    src: GALLERY_IMAGES.TECHNICAL_DETAILS,
    alt: "Technical construction details",
    category: "Technical Details",
    span: "large",
  },
];

export const galleryCategories = [
  "All",
  "Exterior Views",
  "Interior Experience",
  "Night Ambience",
  "Resort Layouts",
  "Technical Details",
];
