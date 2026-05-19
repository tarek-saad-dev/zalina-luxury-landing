---
name: zalina-luxury-landing
description: Design and implement premium one-page landing pages for Zalina Luxury Bubble Tents / Zalina Arabian Village. Use this skill when creating or refining the Zalina frontend, especially hero sections, luxury landing sections, UI prompts for Windsurf/Cursor, responsive layouts, visual identity, image direction, and conversion-focused B2B hospitality pages.
license: Internal project usage
---

# Zalina Luxury Landing Skill

This skill guides the creation of a distinctive, production-grade frontend for **Zalina Luxury Bubble Tents**: a premium Egyptian supplier/manufacturer of luxury bubble hotel units for resorts, glamping camps, eco lodges, desert camps, beach resorts, hospitality developers, and visionary investors.

The design must feel like:

**Luxury hospitality + architectural product + investment pitch deck.**

The page is not a normal hotel website. It is a high-converting, one-page B2B landing page targeting resort owners, developers, hospitality investors, and glamping project owners.

---

## 1. Core Positioning

Zalina should be presented as a premium local partner, not just a seller of tents.

Main positioning:

> Luxury Bubble Tents Manufactured in Egypt for Resorts, Developers, and Visionary Investors.

Key meaning:
- Locally manufactured in Egypt
- Designed for resorts and hospitality investors
- Faster delivery than imported alternatives
- Local installation and support
- Customizable interiors and finishes
- Suitable for desert and coastal climates
- Warranty and maintenance support
- Arabic and English support
- Better pricing without sacrificing premium quality

Tone:
- Premium
- Calm
- Confident
- Investor-focused
- Architectural
- Trustworthy
- Minimal but visually memorable

Avoid:
- Generic travel website tone
- Cheap camping language
- Overly touristy copy
- SaaS-style corporate blocks
- Cluttered visuals
- Loud gradients
- Random icons
- Oversized, cramped typography

---

## 2. Visual Identity

### Aesthetic Direction

Use:

**Luxury Desert Engineering**

The interface should combine:
- Dark cinematic atmosphere
- Warm desert light
- Black and gold luxury identity
- Editorial spacing
- Architectural product-showcase feeling
- Premium hospitality storytelling

### Color Palette

Use CSS variables:

```css
:root {
  --background: #070604;
  --background-soft: #12100C;
  --background-warm: #1A120B;
  --charcoal: #0D0D0D;
  --gold: #C8A45D;
  --gold-light: #E1C982;
  --gold-dark: #8F6B32;
  --sand: #D8C2A3;
  --cream: #F6EFE4;
  --muted: #A99B89;
  --border-gold: rgba(200, 164, 93, 0.22);
  --glass-dark: rgba(10, 8, 5, 0.58);
}
```

Usage:
- Backgrounds: black, charcoal, warm dark brown
- Headings: cream
- Highlight words: gold
- Borders: transparent gold
- Cards: dark glass
- Body text: muted warm cream/gray
- Buttons: gold primary, dark glass secondary

Do not overuse gold. It should be a premium accent, not the dominant color.

---

## 3. Typography

Recommended fonts:
- Headings: `Playfair Display`
- Body/UI: `Inter`

Alternative heading fonts:
- `Cormorant Garamond`
- `Libre Baskerville`

Rules:
- Use large serif headings, but keep them elegant and controlled.
- Avoid oversized typography that makes sections feel crowded.
- Use high line-height for body text.
- Use letter-spaced uppercase labels for section eyebrows.

Suggested desktop sizes:
- Hero heading: `clamp(54px, 4.6vw, 72px)`
- Section headings: `clamp(42px, 4vw, 64px)`
- Body text: `16px–17px`
- Eyebrow: `12px–13px`, uppercase, `letter-spacing: 5px–7px`
- Card titles: `20px–24px`
- Card body: `14px–15px`

Mobile:
- Hero heading: `40px–48px`
- Section heading: `34px–42px`
- Body: `15px–16px`

---

## 4. Page Strategy

The page should be one impressive landing page, not multiple pages.

Primary goal:
- Explain the full offer in one scroll
- Build trust
- Show models
- Communicate investment value
- Convert users into consultation leads

The landing page must act as:
- Premium website
- Sales pitch deck
- Product catalog
- ROI conversation starter
- Lead-generation page

---

## 5. Recommended Page Structure

Use this order:

1. `HeroSection`
2. `PositioningSection`
3. `ModelsSection`
4. `CustomDesignSection`
5. `UseCasesSection`
6. `RoiCalculatorSection`
7. `InstallationSection`
8. `GallerySection`
9. `FaqSection`
10. `ContactSection`
11. `ManufacturingPartnerSection`
12. `Footer`

---

## 6. Hero Section

### Goal

First screen must immediately communicate:

- What Zalina is
- Who it serves
- Why it is valuable
- What the user should do next

### Content

Eyebrow:

```text
MANUFACTURED IN EGYPT · BUILT FOR RESORTS
```

Headline:

```text
Luxury Bubble Tents
Manufactured in Egypt
```

Highlight:
- `Egypt` in gold

Description:

```text
Premium bubble hotel units for resorts, glamping camps, and hospitality developers — with faster delivery, local installation, custom design, and long-term maintenance support.
```

CTA buttons:
- `Request a Consultation`
- `Explore Models`

Navbar links:
- Home
- Models
- ROI
- Gallery
- Contact

Benefit cards:
1. Faster Delivery
   - Built & delivered on time, every time.
2. Local Installation
   - Expert local teams across Egypt.
3. Custom Designs
   - Tailored layouts to your vision.
4. Warranty & Maintenance
   - Long-term support for peace of mind.

Floating model card:
- Available Models
- 8m Bubble
- 10m Bubble
- View Model Details →

Partner note:
- Manufacturing partner: A1 Ewan Furniture

### Hero Visual Rules

- Full-screen cinematic hero
- Background image of luxury bubble hotel units in desert/resort setting
- Image should feel wide and cinematic, not zoomed-in or cramped
- Main units can be on the right
- Left side dark overlay for readability
- Right side should preserve warm interior glow
- Use glassmorphism navbar
- Add faint geometric pattern on far left or edges
- Keep composition spacious

### Hero Layout Guidance

Desktop:
- Max container: `1400px–1500px`
- Navbar height: `72px–78px`
- Hero content has two-column feeling
- Left content max-width: `580px–640px`
- Model preview card on right/lower-right
- Benefit cards below text

Mobile:
- Stack content
- Hide nav links
- Show hamburger
- Keep image darker
- Put model card in normal flow
- Benefit cards stack or become 2-column depending width

---

## 7. Section 2 — Positioning Section

Component:
`PositioningSection`

### Purpose

Establish Zalina as a premium Egyptian manufacturing and installation partner.

### Content

Eyebrow:

```text
WHY ZALINA
```

Heading:

```text
A Premium Egyptian Partner for Luxury Resort Development
```

Highlight:
- `Egyptian Partner`

Paragraph:

```text
Zalina combines local manufacturing, refined design, and on-site support to help resorts, glamping camps, and hospitality developers launch premium bubble hotel experiences faster and more efficiently.
```

Quote:

```text
Built locally. Designed for world-class hospitality.
```

Cards:

01 — Faster Delivery  
Local production helps reduce lead times and keeps your project moving faster.

02 — Local Installation  
Professional installation teams available across Egypt and selected Middle East locations.

03 — Better Value  
Premium quality with more competitive pricing than imported alternatives.

04 — Long-Term Support  
Warranty, maintenance, and Arabic-English support for smoother operations.

### Layout

Desktop:
- Two-column layout
- Left: editorial text
- Right: 2x2 card grid

Design:
- Background: dark black to warm brown gradient
- Gold numbers
- Gold icons
- Glass cards
- Subtle geometric background pattern

---

## 8. Section 3 — Models Section

Component:
`ModelsSection`

### Purpose

Show available bubble tent models.

### Content

Eyebrow:

```text
OUR MODELS
```

Heading:

```text
Luxury Bubble Tent Models
```

Subtitle:

```text
Choose the perfect unit size for your resort concept. Each model is designed for comfort, durability, and breathtaking guest experiences.
```

### Model 1

Title:

```text
8m Bubble Unit
```

Description:

```text
Ideal for boutique resorts, compact glamping rooms, wellness cabins, and private retreat units.
```

Specs:
- Diameter: 8 meters
- Capacity: 2–3 guests
- Area: 50–56 m²
- Best for: Small resorts

Features:
- Comfortable bedroom
- En-suite bathroom
- Lounge area
- Panoramic view
- Private terrace option

CTA:
- Request Model Details

### Model 2

Title:

```text
10m Bubble Unit
```

Description:

```text
A larger premium unit designed for luxury suites, honeymoon experiences, and high-value resort stays.
```

Specs:
- Diameter: 10 meters
- Capacity: 2–4 guests
- Area: 78–85 m²
- Best for: High-end resorts

Features:
- Spacious bedroom
- En-suite bathroom
- Living & lounge area
- Panoramic view
- Large private terrace

CTA:
- Request Model Details

Shared feature strip:
- Engineered for all climates
- Wind & UV resistant
- Premium materials & insulation
- Hotel-grade quality

### Design

- Two large product cards on desktop
- Each card includes:
  - Large image
  - Technical spec chips
  - Circular floor plan visual
  - Feature checklist
  - CTA
- Use dark glass, gold borders, and technical line details

---

## 9. Section 4 — Custom Design Section

Component:
`CustomDesignSection`

### Purpose

Communicate that Zalina units can be customized around the resort identity.

### Content

Eyebrow:

```text
CUSTOM DESIGN SERVICES
```

Heading:

```text
Custom Units Designed Around Your Resort Identity
```

Highlight:
- `Your Resort Identity`

Paragraph:

```text
Every project is unique. Zalina provides fully customizable bubble tent units that reflect your brand, location, landscape, and guest experience.
```

Customization items:
- Exterior finishes
- Panoramic & glass options
- Interior furniture packages
- Bathroom configurations
- Lighting & ambiance
- Decking & outdoor areas
- Branding & signage
- Climate & insulation options

CTA buttons:
- Discuss Your Custom Project
- View Inspiration Gallery

Trust strip:
- Unlimited Customization
- Expert Design Team
- Premium Materials
- Made in Egypt

### Design

- Split layout
- Left: text and customization grid
- Right: large immersive interior image
- Use a circular/arched gold outline
- Warm interior lighting
- Dark editorial feel

---

## 10. Section 5 — Use Cases Section

Component:
`UseCasesSection`

### Purpose

Show which types of hospitality projects Zalina units are suitable for.

### Content

Eyebrow:

```text
PERFECT FOR EVERY VISION
```

Heading:

```text
Designed for High-Value Hospitality Experiences
```

Subtitle:

```text
Zalina bubble units are versatile and adaptable to a wide range of hospitality concepts, helping you create unforgettable stays and maximize your investment.
```

Cards:

1. Desert Resorts  
Create premium stays in breathtaking desert landscapes with unforgettable views.

2. Eco Lodges  
Offer sustainable, low-impact accommodation with a unique architectural identity.

3. Beach Resorts  
Add exclusive units for couples, honeymooners, and VIP guests seeking privacy and luxury.

4. Wellness Retreats  
Perfect for yoga, meditation, and nature-connected experiences that promote relaxation and renewal.

5. Private Camps  
Build luxury accommodation for seasonal camps, destination events, and exclusive gatherings.

6. Investment Projects  
Launch a high-demand hospitality concept with strong ROI potential and exceptional guest appeal.

Bottom strip:
- High Guest Appeal
- Strong ROI Potential
- Durable & Reliable
- Scalable Solutions
- Local Partner Support

### Design

- 3-column by 2-row card grid on desktop
- Each card: image, overlay, icon, title, description
- Mobile: stacked cards
- Use cinematic imagery

---

## 11. Section 6 — ROI Calculator

Component:
`RoiCalculatorSection`

### Purpose

Provide an interactive estimate for investor revenue potential.

### Content

Eyebrow:

```text
INVESTMENT ESTIMATE
```

Heading:

```text
Estimate Your Bubble Hotel ROI
```

Subtitle:

```text
Calculate a simple revenue projection based on your expected nightly rate, occupancy, and number of units.
```

Inputs:
- Number of Units
- Average Nightly Rate
- Monthly Occupancy %
- Average Operating Cost %

Outputs:
- Estimated Monthly Revenue
- Estimated Monthly Operating Cost
- Estimated Monthly Net Revenue
- Estimated Annual Net Revenue

Default values:
- units: 6
- nightlyRate: 6500
- occupancy: 55
- operatingCost: 28

Formula:

```js
monthlyRevenue = units * nightlyRate * 30 * occupancyRate
operatingCost = monthlyRevenue * operatingCostRate
netMonthly = monthlyRevenue - operatingCost
annualNet = netMonthly * 12
```

Currency:
- EGP

Disclaimer:

```text
This calculator provides an indicative estimate only. Actual ROI depends on project location, operating model, seasonality, pricing strategy, and setup costs.
```

CTA:
- Get a Custom Investment Estimate

### Design

- Premium calculator panel
- Inputs on left, outputs on right
- Large gold result numbers
- Responsive stacking
- Use sliders or number inputs
- No backend needed

---

## 12. Section 7 — Installation Section

Component:
`InstallationSection`

### Purpose

Explain the process from consultation to maintenance.

### Content

Eyebrow:

```text
FROM CONCEPT TO OPERATION
```

Heading:

```text
From Manufacturing to On-Site Installation
```

Steps:

01 — Consultation  
We understand your project location, capacity, target guests, and business goals.

02 — Design & Specification  
We define unit size, layout, materials, interior package, and customization requirements.

03 — Manufacturing  
Units are manufactured locally in Egypt with quality control and project-specific finishing.

04 — Delivery & Installation  
Our team coordinates transportation, site setup, and installation.

05 — Maintenance Support  
Warranty and on-site maintenance options are available for long-term operation.

Supporting note:

```text
A complete local team to support your project before, during, and after installation.
```

### Design

- Horizontal timeline on desktop
- Vertical timeline on mobile
- Gold connecting line
- Glass cards
- Process icons

---

## 13. Section 8 — Gallery Section

Component:
`GallerySection`

### Purpose

Show visual inspiration and premium design direction.

### Content

Eyebrow:

```text
VISUAL INSPIRATION
```

Heading:

```text
A New Icon for Luxury Resort Stays
```

Subtitle:

```text
Visual references and design directions. Final project renders can be adapted to each resort identity.
```

Categories:
- Exterior Views
- Interior Experience
- Night Ambience
- Resort Layouts
- Technical Details

### Design

- Asymmetric masonry grid on desktop
- Horizontal/stacked cards on mobile
- Subtle image zoom on hover
- Dark overlays
- Gold labels

---

## 14. Section 9 — FAQ Section

Component:
`FaqSection`

### Purpose

Answer investor objections clearly.

### Content

Eyebrow:

```text
QUESTIONS & ANSWERS
```

Heading:

```text
Everything Investors Need to Know
```

FAQs:

**Are the bubble tents manufactured in Egypt?**  
Yes. Zalina units are locally manufactured in Egypt, which supports faster delivery, better pricing, and easier maintenance.

**Can the units be customized?**  
Yes. Exterior finishes, interior layouts, furniture, lighting, decking, and guest experience details can be customized based on the project.

**Are the units suitable for desert and coastal climates?**  
The units are designed with climate considerations such as UV exposure, wind resistance, insulation, and outdoor durability.

**Do you provide installation?**  
Yes. Zalina can support on-site installation across Egypt and selected Middle East locations.

**Do you offer warranty and maintenance?**  
Yes. Warranty and maintenance support can be arranged depending on the project scope and location.

**Who are these units designed for?**  
They are ideal for resorts, glamping camps, eco lodges, desert camps, wellness retreats, beach resorts, and hospitality investors.

### Design

- Minimal accordion
- Gold plus/minus
- Left heading, right questions on desktop
- Stacked on mobile

---

## 15. Section 10 — Contact Section

Component:
`ContactSection`

### Purpose

Convert visitor into consultation lead.

### Content

Eyebrow:

```text
START YOUR PROJECT
```

Heading:

```text
Start Your Luxury Bubble Resort Project
```

Subtitle:

```text
Tell us about your project and our team will contact you with suitable unit options, pricing direction, and installation possibilities.
```

Contact points:
- Project consultation
- Model recommendations
- Custom design options
- Installation planning
- Warranty and maintenance support

Form fields:
- Full Name
- Company / Resort Name
- Phone Number
- Email Address
- Project Location
- Number of Units Needed
- Project Type
- Message

Project Type options:
- Resort
- Glamping Camp
- Eco Lodge
- Beach Project
- Desert Camp
- Wellness Retreat
- Private Investment
- Other

Submit:
- Request Consultation

Success message:

```text
Thank you. Your request has been received. Our team will contact you shortly.
```

Validation:
- Full name required
- Phone required
- Email valid if provided
- Number of units minimum 1
- Project type required

### Design

- 2-column layout desktop
- Left: persuasive copy
- Right: premium dark glass form
- Gold focus states
- Rounded inputs
- Clear labels

---

## 16. Manufacturing Partner Section

Component:
`ManufacturingPartnerSection`

### Content

Eyebrow:

```text
MANUFACTURING PARTNERSHIP
```

Heading:

```text
Delivered Through Trusted Manufacturing Expertise
```

Paragraph:

```text
Zalina works in collaboration with trusted manufacturing partners to deliver high-quality bubble tent units tailored for hospitality and resort projects.
```

Optional line:

```text
In collaboration with A1 Ewan Furniture.
```

### Design

- Slim premium strip before footer
- Understated, not sponsor-like
- Dark background
- Gold border top/bottom

---

## 17. Footer

Component:
`Footer`

Content:
- Zalina Luxury Bubble Tents
- Luxury bubble tents manufactured in Egypt for resorts, glamping camps, and hospitality developers.

Links:
- Home
- Models
- ROI
- Gallery
- Contact

Services:
- Custom Design
- Installation
- Maintenance
- Warranty

Contact:
- Request Consultation
- info@zalina.com
- +20 000 000 0000

Bottom:
```text
© 2026 Zalina Luxury Bubble Tents. All rights reserved.
```

---

## 18. Recommended Technical Stack

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- `next/font/google`

Only use `"use client"` where required:
- ROI calculator
- FAQ accordion
- Contact form
- Possibly mobile menu

Keep other sections as server components when possible.

---

## 19. Suggested Component Structure

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    layout/
      Navbar.tsx
      Footer.tsx

    sections/
      HeroSection.tsx
      PositioningSection.tsx
      ModelsSection.tsx
      CustomDesignSection.tsx
      UseCasesSection.tsx
      RoiCalculatorSection.tsx
      InstallationSection.tsx
      GallerySection.tsx
      FaqSection.tsx
      ContactSection.tsx
      ManufacturingPartnerSection.tsx

    ui/
      LuxuryButton.tsx
      GlassCard.tsx
      SectionHeader.tsx
      ModelPreviewCard.tsx
      StatCard.tsx
      Input.tsx
      Textarea.tsx
      Select.tsx

  data/
    site.ts
    sections.ts
    models.ts
    faqs.ts
    gallery.ts
```

---

## 20. Image Requirements

Use local image paths:

```txt
public/images/hero-bubble.jpg
public/images/model-8m.jpg
public/images/model-10m.jpg
public/images/custom-interior.jpg
public/images/use-desert.jpg
public/images/use-eco.jpg
public/images/use-beach.jpg
public/images/use-wellness.jpg
public/images/use-camp.jpg
public/images/use-investment.jpg
public/images/gallery-1.jpg
public/images/gallery-2.jpg
public/images/gallery-3.jpg
public/images/gallery-4.jpg
public/images/gallery-5.jpg
```

If images are missing:
- Use premium dark gradient placeholders
- Add subtle gold outlines
- Do not break layout

### Image Style Direction

Images should feel:
- Wide cinematic
- High-end resort
- Warm sunset/dusk
- Desert or coastal luxury
- Bubble hotel units visible but not overly zoomed
- Warm interior lighting
- No text overlays inside the image itself

Hero image should be extra-wide and suitable for background use.

---

## 21. UI Rules

Always:
- Use consistent spacing
- Use subtle gold accents
- Use readable contrast
- Use polished hover states
- Use high-quality section rhythm
- Keep visual hierarchy clear
- Design mobile carefully

Never:
- Use random gradients
- Use too many icons
- Use overly large blocks
- Create cramped cards
- Put too much text in one area
- Use bright blue, purple, neon colors
- Make it look like a template

---

## 22. Motion Rules

Use Framer Motion lightly:
- Fade-up
- Staggered card reveal
- Subtle hover lift
- Smooth open/close FAQ
- Animated ROI results if desired

Avoid:
- Bouncy effects
- Overly dramatic parallax
- Text flying from random directions
- Distracting animations

---

## 23. Conversion Rules

Every major section should help the visitor move toward consultation.

Use CTAs:
- Request a Consultation
- Explore Models
- Request Model Details
- Discuss Your Custom Project
- Get a Custom Investment Estimate

All CTAs should scroll to `#contact`.

---

## 24. SEO Metadata

Use:

```ts
export const metadata = {
  title: "Zalina Luxury Bubble Tents | Manufactured in Egypt for Resorts",
  description:
    "Premium bubble hotel units manufactured in Egypt for resorts, glamping camps, eco lodges, and hospitality developers.",
};
```

Suggested keywords:
- Bubble Tent Egypt
- Glamping Domes Egypt
- Luxury Camping Tents Egypt
- Eco Resort Structures Egypt
- Desert Bubble Hotel Egypt
- خيام فقاعية في مصر
- خيام جلامبينج فاخرة
- تصنيع خيام سياحية
- خيام شفافة للمنتجعات
- وحدات إقامة صحراوية فاخرة

---

## 25. Prompt Template for Windsurf / Cursor

Use this when asking an AI coding tool to build Zalina pages:

```text
Use the frontend-design skill.

I want you to design and implement [section/page/component name] for Zalina Luxury Bubble Tents.

Context:
Zalina is a premium Egyptian manufacturer/supplier of luxury bubble hotel units for resorts, glamping camps, eco lodges, desert camps, beach resorts, hospitality developers, and visionary investors.

This is not a normal hotel website. It is a high-converting luxury B2B landing page targeting resort owners, developers, hospitality investors, and glamping project owners.

Aesthetic direction:
Luxury Desert Engineering.
Dark cinematic black background, warm desert imagery, refined gold accents, elegant serif typography, glassmorphism cards, premium editorial spacing, subtle geometric Arabian/desert-inspired patterns, and calm high-end animations.

Technical stack:
Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React icons, responsive mobile-first design.

Requirements:
[Insert exact section requirements here.]

Important:
Avoid generic AI design. Make it visually distinctive, production-ready, responsive, polished, and consistent with the current Zalina hero design.

Keep the design luxury, spacious, investor-focused, and visually memorable.
```

---

## 26. Acceptance Checklist

Before finalizing any Zalina frontend work, verify:

1. Does it feel like a luxury hospitality investment website?
2. Is the design premium and distinctive, not generic?
3. Is the black/gold identity consistent?
4. Is spacing generous and editorial?
5. Is typography elegant and readable?
6. Are images cinematic and high quality?
7. Are cards aligned and not crowded?
8. Are CTAs clear and conversion-focused?
9. Is it responsive on desktop, tablet, and mobile?
10. Is the code componentized and production-ready?
11. Does it avoid visual clutter?
12. Does it support the one-page landing strategy?
