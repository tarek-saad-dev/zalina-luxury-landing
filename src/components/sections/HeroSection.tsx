"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import LuxuryButton from "@/components/ui/LuxuryButton";
import ModelPreviewCard from "@/components/ui/ModelPreviewCard";
import { heroCopy } from "@/data/hero";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => { });
  }, []);

  return (
    <section
      style={{
        minHeight: "100dvh",
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
        {/* Desktop Hero Video */}
        <div
          className="hero-desktop"
          style={{
            position: "absolute",
            top: "-3%",
            left: "-3%",
            width: "106%",
            height: "106%",
            willChange: "auto",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-bg"
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              filter: "blur(1.2px)",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          >
            <source src="/images/bg_horizontal.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Mobile Hero Video */}
        <div
          className="hero-mobile"
          style={{
            position: "absolute",
            top: "-3%",
            left: "-3%",
            width: "106%",
            height: "106%",
            display: "none",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              filter: "blur(1.2px)",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          >
            <source src="/images/vertical.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ── Desktop Overlay: cinematic directional gradient ── */}
      <div
        className="hero-overlay-desktop"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(105deg,
              rgba(4,3,2,0.80) 0%,
              rgba(4,3,2,0.52) 38%,
              rgba(4,3,2,0.22) 65%,
              rgba(4,3,2,0.35) 100%
            )
          `,
          pointerEvents: "none",
        }}
      />
      {/* ── Desktop vignette: stronger edge containment ── */}
      <div
        className="hero-overlay-desktop"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `
            radial-gradient(ellipse 110% 90% at 50% 50%,
              transparent 30%,
              rgba(2,2,1,0.55) 72%,
              rgba(2,2,1,0.82) 100%
            )
          `,
          pointerEvents: "none",
        }}
      />
      {/* ── Mobile Overlay ── */}
      <div
        className="hero-overlay-mobile"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(4,3,2,0.6) 0%, rgba(4,3,2,0.3) 40%, rgba(4,3,2,0.15) 100%)",
          display: "none",
        }}
      />
      {/* ── Glow behind headline (left-center) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-5%",
          top: "20%",
          width: "55%",
          height: "60%",
          background: "radial-gradient(ellipse at 30% 50%, rgba(200,164,93,0.07) 0%, transparent 65%)",
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
            minHeight: "calc(100dvh - 120px)",
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
        /* Video — no motion, GPU-composited, stable */
        .hero-video-bg {
          animation: none !important;
          transform: translateZ(0);
          will-change: auto;
        }

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
            padding-top: 24px !important;
            padding-bottom: 16px !important;
            min-height: calc(100dvh - 90px) !important;
            gap: 20px !important;
          }
          .partner-note {
            position: static !important;
            margin-top: 12px !important;
            padding-inline: 24px;
            padding-bottom: 16px;
          }
          .hero-eyebrow {
            font-size: 9px !important;
            letter-spacing: 3px !important;
            margin-bottom: 16px !important;
          }
          .hero-title {
            font-size: clamp(32px, 8.5vw, 48px) !important;
            max-width: 100% !important;
            line-height: 1.05 !important;
            margin-bottom: 16px !important;
          }
          .hero-title span {
            white-space: normal;
          }
          .gold-divider {
            margin-bottom: 16px !important;
          }
          .hero-desc {
            font-size: 14px !important;
            line-height: 1.55 !important;
            margin-bottom: 24px !important;
            max-width: 100% !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            gap: 10px !important;
            margin-bottom: 0 !important;
          }
          .hero-cta-row a,
          .hero-cta-row button {
            width: 100% !important;
            justify-content: center !important;
            padding: 14px 20px !important;
            font-size: 14px !important;
          }
          /* Ensure bubble is visible - adjust image position for smaller screens */
          .hero-mobile-img {
            object-position: center 80% !important;
          }
        }

        /* iPhone 14/15 Pro Max (430px), iPhone 14/15 Pro (393px), iPhone SE (375px) */
        @media (max-width: 430px) {
          .hero-grid {
            min-height: calc(100dvh - 85px) !important;
            padding-top: 20px !important;
          }
          .hero-title {
            font-size: clamp(30px, 8vw, 40px) !important;
          }
          .hero-desc {
            font-size: 13.5px !important;
          }
        }

        /* iPhone SE, smaller devices (375px and below) */
        @media (max-width: 375px) {
          .hero-grid {
            min-height: calc(100dvh - 80px) !important;
            padding-top: 16px !important;
          }
          .hero-eyebrow {
            margin-bottom: 12px !important;
          }
          .hero-title {
            font-size: 28px !important;
          }
          .hero-desc {
            font-size: 13px !important;
            margin-bottom: 20px !important;
          }
          .hero-mobile-img {
            object-position: center 85% !important;
          }
        }

        /* Very small devices (360px) */
        @media (max-width: 360px) {
          .hero-grid {
            min-height: calc(100dvh - 75px) !important;
          }
          .hero-title {
            font-size: 26px !important;
          }
          .hero-desc {
            font-size: 12.5px !important;
          }
        }

        /* Handle notch areas and safe zones */
        @supports (padding-top: env(safe-area-inset-top)) {
          @media (max-width: 767px) {
            section {
              min-height: calc(100dvh - env(safe-area-inset-top)) !important;
            }
            .hero-grid {
              min-height: calc(100dvh - 90px - env(safe-area-inset-top)) !important;
            }
          }
        }
      `}</style>
    </section>
  );
}
