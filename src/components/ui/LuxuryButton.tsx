"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface LuxuryButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  showArrow?: boolean;
  className?: string;
}

export default function LuxuryButton({
  variant = "primary",
  children,
  onClick,
  href,
  showArrow = true,
  className = "",
}: LuxuryButtonProps) {
  const baseStyle: React.CSSProperties =
    variant === "primary"
      ? {
        height: "52px",
        padding: "0 24px",
        borderRadius: "8px",
        background: "linear-gradient(135deg, #C8A45D 0%, #9A7438 100%)",
        border: "1px solid rgba(225,201,130,0.42)",
        fontSize: "15px",
        fontWeight: 500,
        color: "#fff",
        boxShadow: "0 12px 36px rgba(200,164,93,0.20)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        fontFamily: "inherit",
      }
      : {
        height: "52px",
        padding: "0 24px",
        borderRadius: "8px",
        background: "rgba(7,6,4,0.32)",
        border: "1px solid rgba(200,164,93,0.42)",
        color: "#F6EFE4",
        fontSize: "15px",
        fontWeight: 500,
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        fontFamily: "inherit",
      };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={14}
          style={{ opacity: variant === "primary" ? 1 : 0.7 }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        style={baseStyle}
        className={className}
        whileHover={{
          y: -2,
          boxShadow:
            variant === "primary"
              ? "0 16px 44px rgba(200,164,93,0.32)"
              : "0 6px 24px rgba(0,0,0,0.30)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      style={baseStyle}
      className={className}
      whileHover={{
        y: -2,
        boxShadow:
          variant === "primary"
            ? "0 18px 50px rgba(200,164,93,0.35)"
            : "0 8px 30px rgba(0,0,0,0.35)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.button>
  );
}
