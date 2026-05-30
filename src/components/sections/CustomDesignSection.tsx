"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { customDesignData } from "@/data/sections";

export default function CustomDesignSection() {
  const { eyebrow, heading, highlight, paragraph, features, trustStrip, image } = customDesignData;

  const renderHeading = () => {
    const parts = heading.split(highlight);
    return (
      <>
        {parts[0]}
        <span style={{ color: "#C8A45D" }}>{highlight}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <section
      id="custom"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "linear-gradient(180deg, #12100C 0%, #0A0804 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 4vw, 64px)",
          display: "grid",
          gap: "56px",
          alignItems: "center",
        }}
        className="custom-grid"
      >
        {/* Left content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "11px",
              letterSpacing: "5px",
              fontWeight: 600,
              color: "#C8A45D",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(30px, 3.2vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#F6EFE4",
              marginBottom: "24px",
              maxWidth: "480px",
            }}
          >
            {renderHeading()}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(246,239,228,0.65)",
              maxWidth: "420px",
              marginBottom: "36px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {paragraph}
          </motion.p>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px 24px",
              marginBottom: "40px",
            }}
            className="features-list"
          >
            {features.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "rgba(200,164,93,0.1)",
                    border: "1px solid rgba(200,164,93,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Check size={11} color="#C8A45D" />
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    color: "rgba(246,239,228,0.7)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
          >
            <a
              href="#contact"
              style={{
                height: "46px",
                padding: "0 24px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #C8A45D, #8F6B32)",
                border: "1px solid rgba(225,201,130,0.3)",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(200,164,93,0.15)",
              }}
            >
              Discuss Your Custom Project
            </a>
            <a
              href="#gallery"
              style={{
                height: "46px",
                padding: "0 24px",
                borderRadius: "8px",
                background: "rgba(10,8,5,0.5)",
                border: "1px solid rgba(200,164,93,0.35)",
                color: "#F6EFE4",
                fontSize: "13px",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              View Inspiration Gallery
            </a>
          </motion.div>
        </div>

        {/* Right image - bright and clear interior showcase */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            aspectRatio: "4/5",
            maxHeight: "520px",
            border: "1px solid rgba(200,164,93,0.12)",
          }}
        >
          {/* Full bright interior image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt="Custom Interior Design"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Minimal bottom gradient for subtle depth - only 8% opacity */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "25%",
              background: "linear-gradient(to top, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 50%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: "1400px",
          margin: "56px auto 0",
          padding: "0 clamp(24px, 4vw, 64px)",
        }}
      >
        <div
          className="trust-strip"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            padding: "24px 0",
            borderTop: "1px solid rgba(200,164,93,0.12)",
          }}
        >
          {trustStrip.map((item) => (
            <span
              key={item}
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                color: "rgba(246,239,228,0.5)",
                textTransform: "uppercase",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        .custom-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .custom-grid {
            grid-template-columns: 45% 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .features-list {
            grid-template-columns: 1fr !important;
          }
          .trust-strip {
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
