"use client";

import { motion } from "framer-motion";
import { installationData } from "@/data/sections";
import { MessageCircle, Pencil, Factory, Truck, Wrench } from "lucide-react";

const stepIcons = [MessageCircle, Pencil, Factory, Truck, Wrench];

export default function InstallationSection() {
  const { eyebrow, heading, note, steps } = installationData;

  return (
    <section
      id="installation"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "linear-gradient(180deg, #070604 0%, #0D0A07 50%, #070604 100%)",
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
            }}
          >
            {heading}
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="timeline-grid" style={{ position: "relative" }}>
          {/* Gold line - desktop horizontal */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              top: "28px",
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(200,164,93,0.4), transparent)",
            }}
          />

          <div
            style={{
              display: "grid",
              gap: "20px",
              position: "relative",
            }}
            className="timeline-steps"
          >
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card-hover"
                  style={{
                    borderRadius: "14px",
                    background: "rgba(10,8,5,0.58)",
                    border: "1px solid rgba(200,164,93,0.12)",
                    backdropFilter: "blur(12px)",
                    padding: "28px 24px",
                    textAlign: "center",
                  }}
                >
                  {/* Step circle */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "1px solid rgba(200,164,93,0.35)",
                      background: "rgba(200,164,93,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <Icon size={18} color="#C8A45D" />
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      letterSpacing: "3px",
                      color: "rgba(200,164,93,0.5)",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    STEP {step.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "#F6EFE4",
                      marginBottom: "8px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "rgba(246,239,228,0.55)",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      maxWidth: "220px",
                      margin: "0 auto",
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "rgba(246,239,228,0.5)",
            marginTop: "48px",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontStyle: "italic",
          }}
        >
          {note}
        </motion.p>
      </div>

      <style>{`
        .timeline-steps {
          grid-template-columns: repeat(5, 1fr);
        }
        @media (max-width: 1023px) {
          .timeline-steps {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .timeline-line {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .timeline-steps {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
