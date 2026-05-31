import { GALLERY_ITEMS, type GalleryItemData } from "@/lib/images/gallery";

export type GalleryItem = GalleryItemData;

export const galleryItems: GalleryItem[] = GALLERY_ITEMS;

export const galleryCategories = [
  "All",
  "Exterior",
  "Interior",
  "Ambience",
  "Night",
  "Resort",
  "Design",
  "Amenities",
  "Views",
  "Nature",
  "Experience",
];
