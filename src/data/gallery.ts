export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  span?: "large" | "normal";
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Luxury bubble tent exterior at sunset",
    category: "Exterior Views",
    span: "large",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Premium bubble tent interior suite",
    category: "Interior Experience",
    span: "normal",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Bubble tent resort at night with warm lighting",
    category: "Night Ambience",
    span: "normal",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Multiple bubble units in resort layout",
    category: "Resort Layouts",
    span: "normal",
  },
  {
    src: "/images/gallery-5.jpg",
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
