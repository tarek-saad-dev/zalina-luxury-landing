"use client";

import { motion } from "framer-motion";
import { bubbleModels, modelSharedFeatures } from "@/data/models";
import { Check, Wind, Sun, Shield } from "lucide-react";

export default function ModelsSection() {
  return (
    <section
      id="models"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "#070604",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(24px, 4vw, 64px)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
            OUR MODELS
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
            Luxury Bubble Tent Models
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
              maxWidth: "580px",
              margin: "0 auto",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            Choose the perfect unit size for your resort concept. Each model is designed for comfort, durability, and breathtaking guest experiences.
          </motion.p>
        </div>

        {/* Models grid */}
        <div className="models-grid" style={{ display: "grid", gap: "28px", marginBottom: "56px" }}>
          {bubbleModels.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-card-hover"
              style={{
                borderRadius: "16px",
                background: "rgba(10,8,5,0.58)",
                border: "1px solid rgba(200,164,93,0.15)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
              }}
            >
              {/* Image container - bright and clear with subtle bottom gradient for text readability */}
              <div
                style={{
                  height: "320px",
                  position: "relative",
                  overflow: "hidden",
                  borderBottom: "1px solid rgba(200,164,93,0.1)",
                }}
              >
                {/* Main product image - bright and clear */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={model.image}
                  alt={model.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                {/* Subtle bottom gradient for text readability - only at bottom 30% */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "35%",
                    background: "linear-gradient(to top, rgba(10,8,5,0.85) 0%, rgba(10,8,5,0.4) 50%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Optional size badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "20px",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    background: "rgba(200,164,93,0.15)",
                    border: "1px solid rgba(200,164,93,0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#C8A45D",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                    }}
                  >
                    {model.size}m Diameter
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "32px 28px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#F6EFE4",
                    marginBottom: "10px",
                  }}
                >
                  {model.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(246,239,228,0.6)",
                    marginBottom: "24px",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {model.description}
                </p>

                {/* Specs */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  {model.specs.map((spec) => (
                    <div key={spec.label}>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "rgba(200,164,93,0.7)",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          marginBottom: "4px",
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                        }}
                      >
                        {spec.label}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#F6EFE4",
                          fontWeight: 500,
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                        }}
                      >
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  {model.features.map((f) => (
                    <div key={f.text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Check size={14} color="#C8A45D" />
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgba(246,239,228,0.7)",
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                        }}
                      >
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    height: "40px",
                    padding: "0 20px",
                    borderRadius: "8px",
                    background: "rgba(200,164,93,0.08)",
                    border: "1px solid rgba(200,164,93,0.3)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#C8A45D",
                    textDecoration: "none",
                    letterSpacing: "0.3px",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                >
                  Request Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shared features strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="shared-features"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            padding: "28px 0",
            borderTop: "1px solid rgba(200,164,93,0.15)",
            borderBottom: "1px solid rgba(200,164,93,0.15)",
          }}
        >
          {modelSharedFeatures.map((feature, i) => {
            const icons = [Wind, Sun, Shield, Check];
            const Icon = icons[i % icons.length];
            return (
              <div key={feature} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Icon size={16} color="rgba(200,164,93,0.6)" />
                <span
                  style={{
                    fontSize: "13px",
                    color: "rgba(246,239,228,0.6)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {feature}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .models-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 768px) {
          .models-grid {
            grid-template-columns: 1fr !important;
          }
          .shared-features {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
