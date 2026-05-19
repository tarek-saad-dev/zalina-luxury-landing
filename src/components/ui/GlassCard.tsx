"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  style = {},
  hover = true,
}: GlassCardProps) {
  const baseStyle: React.CSSProperties = {
    background: "rgba(8,7,5,0.48)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 50px rgba(0,0,0,0.28)",
    backdropFilter: "blur(16px)",
    borderRadius: "10px",
    ...style,
  };

  if (!hover) {
    return (
      <div style={baseStyle} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      style={baseStyle}
      className={className}
      whileHover={{
        y: -4,
        borderColor: "rgba(200,164,93,0.42)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.38)",
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
