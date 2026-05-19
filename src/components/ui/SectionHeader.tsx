import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  heading,
  highlight,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "center" : "left";
  const maxWidth = align === "center" ? "720px" : "100%";
  const margin = align === "center" ? "0 auto" : undefined;

  const renderHeading = () => {
    if (!highlight) return heading;
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
    <div style={{ textAlign, maxWidth, margin }}>
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
          fontSize: "clamp(32px, 3.5vw, 48px)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          fontWeight: 600,
          color: "#F6EFE4",
          marginBottom: subtitle ? "18px" : "0",
        }}
      >
        {renderHeading()}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "rgba(246,239,228,0.65)",
            maxWidth: "600px",
            margin: align === "center" ? "0 auto" : undefined,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
