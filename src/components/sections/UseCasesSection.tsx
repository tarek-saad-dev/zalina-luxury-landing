"use client";

import { motion } from "framer-motion";
import { Palmtree, Leaf, Waves, Heart, Tent, TrendingUp } from "lucide-react";
import { useCasesData } from "@/data/sections";

const useCaseIcons = [Palmtree, Leaf, Waves, Heart, Tent, TrendingUp];

export default function UseCasesSection() {
  const { eyebrow, heading, subtitle, cards, benefits } = useCasesData;

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "linear-gradient(180deg, #070604 0%, #0A0806 50%, #070604 100%)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(24px, 4vw, 64px)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
              marginBottom: "16px",
            }}
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(246,239,228,0.6)",
              maxWidth: "600px",
              margin: "0 auto",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="use-cases-grid" style={{ display: "grid", gap: "20px", marginBottom: "56px" }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card-hover"
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                position: "relative",
                minHeight: "280px",
                border: "1px solid rgba(200,164,93,0.12)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {/* Full image with contain to show complete picture */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />

              {/* Minimal overlay - max 15% opacity for text readability */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(7,6,4,0.05) 0%, rgba(7,6,4,0.15) 40%, rgba(7,6,4,0.55) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Decorative icon - subtle */}
              {(() => {
                const Icon = useCaseIcons[i % useCaseIcons.length];
                return (
                  <div style={{ position: "absolute", top: "16px", right: "16px", opacity: 0.25, zIndex: 1 }}>
                    <Icon size={22} color="#C8A45D" />
                  </div>
                );
              })()}

              {/* Text content */}
              <div style={{ position: "relative", zIndex: 1, padding: "28px 24px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#F6EFE4",
                    marginBottom: "6px",
                    textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "rgba(246,239,228,0.75)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    maxWidth: "260px",
                    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="use-benefits"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            padding: "24px 0",
            borderTop: "1px solid rgba(200,164,93,0.12)",
          }}
        >
          {benefits.map((b) => (
            <span
              key={b}
              style={{
                fontSize: "12px",
                letterSpacing: "1.5px",
                color: "rgba(246,239,228,0.5)",
                textTransform: "uppercase",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>

      <style>{`
        .use-cases-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1023px) {
          .use-cases-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .use-cases-grid {
            grid-template-columns: 1fr !important;
          }
          .use-benefits {
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
