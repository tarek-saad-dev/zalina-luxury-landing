"use client";

import { motion } from "framer-motion";
import { positioningData } from "@/data/sections";

export default function PositioningSection() {
  const { eyebrow, heading, highlight, paragraph, quote, cards } = positioningData;

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
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "linear-gradient(180deg, #070604 0%, #12100C 50%, #1A120B 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 4vw, 64px)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "64px",
          alignItems: "start",
        }}
        className="positioning-grid"
      >
        {/* Left content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(30px, 3.2vw, 44px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(246,239,228,0.68)",
              maxWidth: "420px",
              marginBottom: "32px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {paragraph}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              paddingLeft: "20px",
              borderLeft: "2px solid rgba(200,164,93,0.4)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "16px",
                fontStyle: "italic",
                color: "rgba(246,239,228,0.55)",
                lineHeight: 1.5,
              }}
            >
              {quote}
            </p>
          </motion.div>
        </div>

        {/* Right cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}
          className="positioning-cards"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card-hover"
              style={{
                minHeight: "200px",
                padding: "28px 24px",
                borderRadius: "14px",
                background: "rgba(10,8,5,0.58)",
                border: "1px solid rgba(200,164,93,0.15)",
                backdropFilter: "blur(12px)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <card.icon
                size={18}
                color="rgba(200,164,93,0.5)"
                style={{ position: "absolute", top: "20px", right: "20px" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "28px",
                  fontWeight: 600,
                  color: "rgba(200,164,93,0.35)",
                  marginBottom: "16px",
                }}
              >
                {card.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#F6EFE4",
                  marginBottom: "8px",
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "rgba(246,239,228,0.55)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .positioning-grid {
            grid-template-columns: 42% 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .positioning-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
