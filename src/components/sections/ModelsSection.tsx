"use client";

import { motion } from "framer-motion";
import { bubbleModels, modelSharedFeatures } from "@/data/models";
import { Check, Wind, Sun, Shield } from "lucide-react";

function CircularPlan({ size }: { size: string }) {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" style={{ position: "relative", zIndex: 1 }}>
      {/* Outer structural ring */}
      <circle cx="80" cy="80" r="74" stroke="rgba(200,164,93,0.35)" strokeWidth="1.2" />
      <circle cx="80" cy="80" r="71" stroke="rgba(200,164,93,0.12)" strokeWidth="0.6" />
      {/* Inner zoning ring */}
      <circle cx="80" cy="80" r="58" stroke="rgba(246,239,228,0.18)" strokeWidth="0.7" strokeDasharray="4 3" />
      {/* Center point */}
      <circle cx="80" cy="80" r="2.5" fill="rgba(200,164,93,0.6)" />
      {/* Grid lines */}
      <line x1="80" y1="10" x2="80" y2="150" stroke="rgba(246,239,228,0.06)" strokeWidth="0.5" />
      <line x1="10" y1="80" x2="150" y2="80" stroke="rgba(246,239,228,0.06)" strokeWidth="0.5" />
      <line x1="27" y1="27" x2="133" y2="133" stroke="rgba(246,239,228,0.04)" strokeWidth="0.4" />
      <line x1="133" y1="27" x2="27" y2="133" stroke="rgba(246,239,228,0.04)" strokeWidth="0.4" />
      {/* Bed zone */}
      <rect x="55" y="26" width="50" height="28" rx="4" stroke="rgba(200,164,93,0.4)" strokeWidth="0.8" fill="rgba(200,164,93,0.04)" />
      <text x="80" y="42" textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="rgba(200,164,93,0.45)" fontFamily="system-ui, sans-serif">BED</text>
      {/* Living zone */}
      <rect x="48" y="100" width="64" height="22" rx="4" stroke="rgba(246,239,228,0.2)" strokeWidth="0.7" fill="rgba(246,239,228,0.02)" />
      <text x="80" y="113" textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="rgba(246,239,228,0.3)" fontFamily="system-ui, sans-serif">LIVING</text>
      {/* Bath zone */}
      <rect x="22" y="58" width="24" height="28" rx="3" stroke="rgba(246,239,228,0.15)" strokeWidth="0.6" fill="rgba(246,239,228,0.02)" />
      <text x="34" y="74" textAnchor="middle" dominantBaseline="middle" fontSize="6" fill="rgba(246,239,228,0.25)" fontFamily="system-ui, sans-serif">BATH</text>
      {/* Entry marker */}
      <path d="M 80 148 L 74 155 L 86 155 Z" fill="rgba(200,164,93,0.3)" />
      {/* Size label */}
      <text x="80" y="80" textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="rgba(200,164,93,0.7)" fontFamily="Georgia, serif" fontWeight="500">
        {size}m
      </text>
    </svg>
  );
}

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
              {/* Image placeholder */}
              <div
                style={{
                  height: "240px",
                  background: `linear-gradient(135deg, rgba(26,18,11,0.85) 0%, rgba(12,10,7,0.92) 100%), url(${model.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(200,164,93,0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle geometric pattern overlay */}
                <div style={{ position: "absolute", inset: 0, opacity: 0.3 }} className="ornamental-pattern" />
                <CircularPlan size={model.size} />
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
