"use client";

import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import LuxuryButton from "@/components/ui/LuxuryButton";
import ModelPreviewCard from "@/components/ui/ModelPreviewCard";
import { heroCopy } from "@/data/hero";
import { HERO_IMAGES } from "@/lib/images";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        paddingTop: "24px",
        background: "#070604",
      }}
    >
      {/* ── Background image ── */}
      {/* Desktop and Mobile hero images with responsive switching */}
      <div
        className="hero-background"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {/* Desktop Hero Image */}
        <div
          className="hero-desktop"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGES.SECONDARY}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
        {/* Mobile Hero Image */}
        <div
          className="hero-mobile"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "none",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGES.MOBILE}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
      </div>

      {/* ── Desktop Overlay: lighter directional gradient (left to right) ── */}
      <div
        className="hero-overlay-desktop"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.05) 100%)",
        }}
      />
      {/* ── Mobile Overlay: lighter top-to-bottom gradient ── */}
      <div
        className="hero-overlay-mobile"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.10) 100%)",
          display: "none",
        }}
      />
      {/* ── Ornamental geometric pattern (left edge) - very subtle ── */}
      <div
        aria-hidden
        className="ornamental-pattern"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "320px",
          height: "100%",
          opacity: 0.06,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── Page container ── */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingInline: "clamp(24px, 5vw, 72px)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Navbar />

        {/* ── Hero content grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0.85fr",
            alignItems: "center",
            minHeight: "calc(100vh - 120px)",
            paddingTop: "clamp(60px, 8vh, 100px)",
            paddingBottom: "60px",
            gap: "60px",
          }}
          className="hero-grid"
        >
          {/* ── LEFT COLUMN ── */}
          <div
            style={{
              maxWidth: "560px",
              marginLeft: "clamp(0px, 2vw, 32px)",
            }}
          >
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.15)}
              className="hero-eyebrow"
              style={{
                fontSize: "8px",
                letterSpacing: "6px",
                fontWeight: 600,
                color: "#C8A45D",
                textTransform: "uppercase",
                marginBottom: "32px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {heroCopy.eyebrow}
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.28)}
              className="hero-title"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(42px, 4vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                fontWeight: 600,
                color: "#F6EFE4",
                maxWidth: "900px",
                marginBottom: "24px",
              }}
            >
              <span>{heroCopy.headlineLine1}</span>
              <span>{heroCopy.headlineLine2} <em style={{ color: "#C8A45D", fontStyle: "normal" }}>{heroCopy.headlineGold}</em></span>
            </motion.h1>

            {/* Gold divider */}
            <motion.div
              {...fadeUp(0.38)}
              className="gold-divider"
              style={{ marginBottom: "24px" }}
            >
              <span className="gold-divider-dot" />
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.48)}
              className="hero-desc"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "rgba(246,239,228,0.72)",
                maxWidth: "420px",
                marginBottom: "32px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {heroCopy.description}
            </motion.p>

            {/* CTA row */}
            <motion.div
              {...fadeUp(0.58)}
              className="hero-cta-row"
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <LuxuryButton variant="primary" href="#contact">
                {heroCopy.primaryCta}
              </LuxuryButton>
              <LuxuryButton variant="secondary" href="#models">
                {heroCopy.secondaryCta}
              </LuxuryButton>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN – Model card ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              paddingBottom: "20px",
              paddingRight: "12px",
            }}
            className="model-card-col"
          >
            <ModelPreviewCard />
          </div>
        </div>
      </div>

      {/* ── Partner note (absolute bottom-left) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        style={{
          position: "absolute",
          left: "clamp(20px, 6vw, 88px)",
          bottom: "24px",
          zIndex: 20,
          fontSize: "12px",
          color: "rgba(246,239,228,0.38)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
        className="partner-note"
      >
        <Gem size={12} color="rgba(200,164,93,0.6)" />
        <span>{heroCopy.partnerNote}</span>
      </motion.div>

      {/* ── Responsive styles via <style> tag ── */}
      <style>{`
        /* Hero background image switching - Desktop default */
        .hero-desktop {
          display: block;
        }
        .hero-mobile {
          display: none !important;
        }
        .hero-overlay-desktop {
          display: block;
        }
        .hero-overlay-mobile {
          display: none !important;
        }

        /* Mobile: switch to portrait hero image and overlay */
        @media (max-width: 768px) {
          .hero-desktop {
            display: none !important;
          }
          .hero-mobile {
            display: block !important;
          }
          .hero-overlay-desktop {
            display: none !important;
          }
          .hero-overlay-mobile {
            display: block !important;
          }
        }

        /* Hero title - desktop: exactly 2 lines, no wrap */
        .hero-title span {
          display: block;
          white-space: nowrap;
        }

        @media (max-width: 1023px) {
          .hero-navbar {
            height: 68px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .model-card-col {
            justify-content: center !important;
            padding: 20px 0 40px 0 !important;
          }
          .model-card-col > div {
            width: 100% !important;
            max-width: 340px !important;
          }
          /* Tablet: allow wrapping, reduce font size */
          .hero-title {
            font-size: clamp(42px, 5.5vw, 64px) !important;
            max-width: 700px !important;
          }
          .hero-title span {
            white-space: normal;
          }
        }

        @media (max-width: 767px) {
          .hero-navbar {
            height: 64px !important;
            padding: 0 20px !important;
          }
          .hero-grid {
            padding-top: 48px !important;
            padding-bottom: 32px !important;
            min-height: calc(100vh - 100px) !important;
          }
          .partner-note {
            position: static !important;
            margin-top: 20px !important;
            padding-inline: 24px;
            padding-bottom: 20px;
          }
          .hero-eyebrow {
            font-size: 10px !important;
            letter-spacing: 3px !important;
            margin-bottom: 24px !important;
          }
          .hero-title {
            font-size: clamp(36px, 9vw, 52px) !important;
            max-width: 100% !important;
            line-height: 1.0 !important;
          }
          .hero-title span {
            white-space: normal;
          }
          .hero-desc {
            font-size: 15px !important;
            margin-bottom: 36px !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            gap: 12px !important;
            margin-bottom: 48px !important;
          }
          .hero-cta-row a,
          .hero-cta-row button {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 479px) {
          /* Mobile specific styles if needed */
        }
      `}</style>
    </section>
  );
}
