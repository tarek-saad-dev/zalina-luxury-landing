"use client";

import { motion } from "framer-motion";
import { models, heroCopy } from "@/data/hero";

function CircularFloorPlan({ size }: { size: string }) {
  return (
    <div
      style={{
        width: "72px",
        height: "72px",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Outer ring */}
        <circle cx="46" cy="46" r="44" stroke="rgba(246,239,228,0.55)" strokeWidth="1" />
        {/* Inner wall ring */}
        <circle cx="46" cy="46" r="36" stroke="rgba(200,164,93,0.45)" strokeWidth="0.8" strokeDasharray="3 2" />
        {/* Center dot */}
        <circle cx="46" cy="46" r="2.2" fill="rgba(200,164,93,0.7)" />
        {/* Cross axis lines */}
        <line x1="46" y1="10" x2="46" y2="82" stroke="rgba(246,239,228,0.12)" strokeWidth="0.7" />
        <line x1="10" y1="46" x2="82" y2="46" stroke="rgba(246,239,228,0.12)" strokeWidth="0.7" />
        {/* Bed (rectangle top) */}
        <rect x="34" y="15" width="24" height="13" rx="2" stroke="rgba(200,164,93,0.55)" strokeWidth="0.9" fill="rgba(200,164,93,0.06)" />
        {/* Sofa (bottom arc hint) */}
        <rect x="31" y="64" width="30" height="10" rx="3" stroke="rgba(246,239,228,0.35)" strokeWidth="0.9" fill="rgba(246,239,228,0.04)" />
        {/* Bathroom (small rect right) */}
        <rect x="66" y="36" width="12" height="20" rx="2" stroke="rgba(246,239,228,0.3)" strokeWidth="0.8" fill="rgba(246,239,228,0.03)" />
        {/* Bathroom tub arc */}
        <path d="M68 40 Q73 46 68 52" stroke="rgba(200,164,93,0.3)" strokeWidth="0.7" fill="none" />
        {/* Entry door arc left */}
        <path d="M10 42 Q16 46 10 50" stroke="rgba(246,239,228,0.25)" strokeWidth="0.7" fill="none" />
        {/* Size label */}
        <text
          x="46"
          y="49"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="7"
          fill="rgba(200,164,93,0.65)"
          fontFamily="Georgia, serif"
          letterSpacing="0.5"
        >
          {size}m
        </text>
        {/* Diagonal accent lines */}
        <line x1="24" y1="24" x2="30" y2="30" stroke="rgba(200,164,93,0.18)" strokeWidth="0.6" />
        <line x1="62" y1="62" x2="68" y2="68" stroke="rgba(200,164,93,0.18)" strokeWidth="0.6" />
      </svg>
    </div>
  );
}

export default function ModelPreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, boxShadow: "0 28px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,164,93,0.28)" }}
      style={{
        background: "linear-gradient(145deg, rgba(18,13,8,0.72) 0%, rgba(10,8,5,0.82) 100%)",
        border: "1px solid rgba(200,164,93,0.22)",
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        borderRadius: "12px",
        boxShadow: "0 20px 56px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.04)",
        padding: "16px 18px",
        width: "290px",
        maxWidth: "100%",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Card title */}
      <div
        style={{
          fontSize: "9.5px",
          letterSpacing: "3.5px",
          color: "#C8A45D",
          textTransform: "uppercase",
          marginBottom: "4px",
          fontWeight: 600,
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        {heroCopy.modelsCardTitle}
      </div>
      <div
        style={{
          width: "28px",
          height: "1px",
          background: "linear-gradient(90deg, rgba(200,164,93,0.6), transparent)",
          marginBottom: "12px",
        }}
      />

      {/* Floor plans grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        {models.map((model) => (
          <div
            key={model.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <CircularFloorPlan size={model.size} />
            <span
              style={{
                fontSize: "11px",
                color: "#F6EFE4",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              {model.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: "12px",
          borderTop: "1px solid rgba(200,164,93,0.1)",
          paddingTop: "10px",
          textAlign: "center",
        }}
      >
        <motion.a
          href="#models"
          style={{
            color: "#C8A45D",
            fontSize: "11.5px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.22 }}
        >
          {heroCopy.modelsCardCta} →
        </motion.a>
      </div>
    </motion.div>
  );
}
