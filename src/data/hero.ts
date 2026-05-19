import { Truck, UserCog, LayoutDashboard, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ModelItem {
  label: string;
  size: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", active: true },
  { label: "Models", href: "#models" },
  { label: "ROI", href: "#roi" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const benefits: Benefit[] = [
  {
    icon: Truck,
    title: "Faster Delivery",
    description: "Built & delivered on time, every time.",
  },
  {
    icon: UserCog,
    title: "Local Installation",
    description: "Expert local teams across Egypt.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Designs",
    description: "Tailored layouts to your vision.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Maintenance",
    description: "Long-term support for peace of mind.",
  },
];

export const models: ModelItem[] = [
  { label: "8m Bubble", size: "8" },
  { label: "10m Bubble", size: "10" },
];

export const heroCopy = {
  eyebrow: "MANUFACTURED IN EGYPT · BUILT FOR RESORTS",
  headlineLine1: "Luxury Bubble Tents",
  headlineLine2: "Manufactured in",
  headlineGold: "Egypt",
  description:
    "Premium bubble hotel units for resorts, glamping camps, and hospitality developers — with faster delivery, local installation, custom design, and long-term maintenance support.",
  primaryCta: "Request a Consultation",
  secondaryCta: "Explore Models",
  partnerNote: "Manufacturing partner: A1 Ewan Furniture",
  modelsCardTitle: "Available Models",
  modelsCardCta: "View Model Details →",
};
