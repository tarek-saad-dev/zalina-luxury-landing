"use client";

import { motion } from "framer-motion";
import { Shield, Hammer, Palette, Wrench, BadgeCheck } from "lucide-react";

const trustItems = [
  { icon: Hammer,    label: "Manufactured in Egypt" },
  { icon: Shield,    label: "Resort-Grade Construction" },
  { icon: Palette,   label: "Custom Design Available" },
  { icon: Wrench,    label: "Full Installation Support" },
  { icon: BadgeCheck, label: "Warranty Included" },
];

export default function TrustStrip() {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #070604 0%, #0C0A07 100%)",
        borderBottom: "1px solid rgba(200,164,93,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Top border glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(200,164,93,0.35), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 72px)",
        }}
      >
        <div className="trust-strip-inner">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="trust-item"
            >
              <div className="trust-icon-wrap">
                <item.icon size={16} strokeWidth={1.5} className="trust-icon" />
              </div>
              <span className="trust-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-strip-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          padding: 22px 0;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 28px;
          position: relative;
          cursor: default;
          transition: all 0.25s ease;
        }

        .trust-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 20px;
          background: rgba(200,164,93,0.18);
        }

        .trust-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1px solid rgba(200,164,93,0.18);
          background: rgba(200,164,93,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .trust-icon {
          color: rgba(200,164,93,0.75);
          transition: color 0.25s ease;
        }

        .trust-label {
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(246,239,228,0.65);
          letter-spacing: 0.03em;
          white-space: nowrap;
          font-family: var(--font-inter), system-ui, sans-serif;
          transition: color 0.25s ease;
        }

        .trust-item:hover .trust-icon-wrap {
          border-color: rgba(200,164,93,0.4);
          background: rgba(200,164,93,0.1);
        }

        .trust-item:hover .trust-icon {
          color: #C8A45D;
        }

        .trust-item:hover .trust-label {
          color: rgba(246,239,228,0.9);
        }

        @media (max-width: 768px) {
          .trust-strip-inner {
            gap: 0;
            justify-content: flex-start;
            overflow-x: auto;
            padding: 16px 0;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .trust-strip-inner::-webkit-scrollbar { display: none; }

          .trust-item {
            padding: 8px 20px;
            flex-shrink: 0;
          }

          .trust-label {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
