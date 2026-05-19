export interface ModelSpec {
  label: string;
  value: string;
}

export interface ModelFeature {
  text: string;
}

export interface BubbleModel {
  id: string;
  name: string;
  size: string;
  description: string;
  image: string;
  specs: ModelSpec[];
  features: ModelFeature[];
  bestFor: string;
}

export const bubbleModels: BubbleModel[] = [
  {
    id: "8m",
    name: "8m Bubble Unit",
    size: "8",
    description:
      "Ideal for boutique resorts, compact glamping rooms, wellness cabins, and private retreat units.",
    image: "/images/model-8m.jpg",
    specs: [
      { label: "Diameter", value: "8 meters" },
      { label: "Capacity", value: "2–3 guests" },
      { label: "Area", value: "50–56 m²" },
      { label: "Best for", value: "Small resorts" },
    ],
    features: [
      { text: "Comfortable bedroom" },
      { text: "En-suite bathroom" },
      { text: "Lounge area" },
      { text: "Panoramic view" },
      { text: "Private terrace option" },
    ],
    bestFor: "Small resorts",
  },
  {
    id: "10m",
    name: "10m Bubble Unit",
    size: "10",
    description:
      "A larger premium unit designed for luxury suites, honeymoon experiences, and high-value resort stays.",
    image: "/images/model-10m.jpg",
    specs: [
      { label: "Diameter", value: "10 meters" },
      { label: "Capacity", value: "2–4 guests" },
      { label: "Area", value: "78–85 m²" },
      { label: "Best for", value: "High-end resorts" },
    ],
    features: [
      { text: "Spacious bedroom" },
      { text: "En-suite bathroom" },
      { text: "Living & lounge area" },
      { text: "Panoramic view" },
      { text: "Large private terrace" },
    ],
    bestFor: "High-end resorts",
  },
];

export const modelSharedFeatures = [
  "Engineered for all climates",
  "Wind & UV resistant",
  "Premium materials & insulation",
  "Hotel-grade quality",
];
