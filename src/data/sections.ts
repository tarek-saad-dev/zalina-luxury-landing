import { Truck, Construction, Gem, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PositioningCard {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const positioningData = {
  eyebrow: "WHY ZALINA",
  heading: "A Premium Egyptian Partner for Luxury Resort Development",
  highlight: "Egyptian Partner",
  paragraph:
    "Zalina combines local manufacturing, refined design, and on-site support to help resorts, glamping camps, and hospitality developers launch premium bubble hotel experiences faster and more efficiently.",
  quote: "Built locally. Designed for world-class hospitality.",
  cards: [
    {
      number: "01",
      title: "Faster Delivery",
      description:
        "Local production helps reduce lead times and keeps your project moving faster.",
      icon: Truck,
    },
    {
      number: "02",
      title: "Local Installation",
      description:
        "Professional installation teams available across Egypt and selected Middle East locations.",
      icon: Construction,
    },
    {
      number: "03",
      title: "Better Value",
      description:
        "Premium quality with more competitive pricing than imported alternatives.",
      icon: Gem,
    },
    {
      number: "04",
      title: "Long-Term Support",
      description:
        "Warranty, maintenance, and Arabic-English support for smoother operations.",
      icon: ShieldCheck,
    },
  ] as PositioningCard[],
};

export const customDesignData = {
  eyebrow: "CUSTOM DESIGN SERVICES",
  heading: "Custom Units Designed Around Your Resort Identity",
  highlight: "Your Resort Identity",
  paragraph:
    "Every project is unique. Zalina provides fully customizable bubble tent units that reflect your brand, location, landscape, and guest experience.",
  features: [
    "Exterior finishes",
    "Panoramic & glass options",
    "Interior furniture packages",
    "Bathroom configurations",
    "Lighting & ambiance",
    "Decking & outdoor areas",
    "Branding & signage",
    "Climate & insulation options",
  ],
  trustStrip: [
    "Unlimited Customization",
    "Expert Design Team",
    "Premium Materials",
    "Made in Egypt",
  ],
  image: "/images/custom-interior.jpg",
};

export interface UseCaseCard {
  title: string;
  description: string;
  image: string;
}

export const useCasesData = {
  eyebrow: "PERFECT FOR EVERY VISION",
  heading: "Designed for High-Value Hospitality Experiences",
  subtitle:
    "Zalina bubble units are versatile and adaptable to a wide range of hospitality concepts, helping you create unforgettable stays and maximize your investment.",
  cards: [
    {
      title: "Desert Resorts",
      description:
        "Create premium stays in breathtaking desert landscapes with unforgettable views.",
      image: "/images/use-desert.jpg",
    },
    {
      title: "Eco Lodges",
      description:
        "Offer sustainable, low-impact accommodation with a unique architectural identity.",
      image: "/images/use-eco.jpg",
    },
    {
      title: "Beach Resorts",
      description:
        "Add exclusive units for couples, honeymooners, and VIP guests seeking privacy and luxury.",
      image: "/images/use-beach.jpg",
    },
    {
      title: "Wellness Retreats",
      description:
        "Perfect for yoga, meditation, and nature-connected experiences that promote relaxation and renewal.",
      image: "/images/use-wellness.jpg",
    },
    {
      title: "Private Camps",
      description:
        "Build luxury accommodation for seasonal camps, destination events, and exclusive gatherings.",
      image: "/images/use-camp.jpg",
    },
    {
      title: "Investment Projects",
      description:
        "Launch a high-demand hospitality concept with strong ROI potential and exceptional guest appeal.",
      image: "/images/use-investment.jpg",
    },
  ] as UseCaseCard[],
  benefits: [
    "High Guest Appeal",
    "Strong ROI Potential",
    "Durable & Reliable",
    "Scalable Solutions",
    "Local Partner Support",
  ],
};

export const installationData = {
  eyebrow: "FROM CONCEPT TO OPERATION",
  heading: "From Manufacturing to On-Site Installation",
  note: "A complete local team to support your project before, during, and after installation.",
  steps: [
    {
      number: "01",
      title: "Consultation",
      description:
        "We understand your project location, capacity, target guests, and business goals.",
    },
    {
      number: "02",
      title: "Design & Specification",
      description:
        "We define unit size, layout, materials, interior package, and customization requirements.",
    },
    {
      number: "03",
      title: "Manufacturing",
      description:
        "Units are manufactured locally in Egypt with quality control and project-specific finishing.",
    },
    {
      number: "04",
      title: "Delivery & Installation",
      description:
        "Our team coordinates transportation, site setup, and installation.",
    },
    {
      number: "05",
      title: "Maintenance Support",
      description:
        "Warranty and on-site maintenance options are available for long-term operation.",
    },
  ],
};

export const contactData = {
  eyebrow: "START YOUR PROJECT",
  heading: "Start Your Luxury Bubble Resort Project",
  subtitle:
    "Tell us about your project and our team will contact you with suitable unit options, pricing direction, and installation possibilities.",
  contactPoints: [
    "Project consultation",
    "Model recommendations",
    "Custom design options",
    "Installation planning",
    "Warranty and maintenance support",
  ],
  projectTypes: [
    "Resort",
    "Glamping Camp",
    "Eco Lodge",
    "Beach Project",
    "Desert Camp",
    "Wellness Retreat",
    "Private Investment",
    "Other",
  ],
  successMessage:
    "Thank you. Your request has been received. Our team will contact you shortly.",
};

export const manufacturingData = {
  eyebrow: "MANUFACTURING PARTNERSHIP",
  heading: "Delivered Through Trusted Manufacturing Expertise",
  paragraph:
    "Zalina works in collaboration with trusted manufacturing partners to deliver high-quality bubble tent units tailored for hospitality and resort projects.",
  partner: "In collaboration with A1 Ewan Furniture.",
};
