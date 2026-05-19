"use client";

import { motion } from "framer-motion";
import { manufacturingData } from "@/data/sections";

export default function ManufacturingPartnerSection() {
  const { eyebrow, heading, paragraph, partner } = manufacturingData;

  return (
    <section
      style={{
        position: "relative",
        padding: "72px 0",
        background: "#070604",
        borderTop: "1px solid rgba(200,164,93,0.12)",
        borderBottom: "1px solid rgba(200,164,93,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 clamp(24px, 4vw, 64px)",
          textAlign: "center",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "10px",
            letterSpacing: "4px",
            fontWeight: 600,
            color: "rgba(200,164,93,0.6)",
            textTransform: "uppercase",
            marginBottom: "18px",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          {eyebrow}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(22px, 2.5vw, 30px)",
            lineHeight: 1.2,
            fontWeight: 600,
            color: "#F6EFE4",
            marginBottom: "14px",
          }}
        >
          {heading}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "rgba(246,239,228,0.55)",
            marginBottom: "16px",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          {paragraph}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: "13px",
            color: "rgba(200,164,93,0.55)",
            fontStyle: "italic",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          {partner}
        </motion.p>
      </div>
    </section>
  );
}
