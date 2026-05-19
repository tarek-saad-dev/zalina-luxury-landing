"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Layout, Wrench, Sparkles } from "lucide-react";
import { galleryItems } from "@/data/gallery";

const categoryIcons = [Sun, Sparkles, Moon, Layout, Wrench];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "linear-gradient(180deg, #070604 0%, #12100C 100%)",
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
            VISUAL INSPIRATION
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
            A New Icon for Luxury Resort Stays
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
            Visual references and design directions. Final project renders can be adapted to each resort identity.
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="gallery-grid" style={{ display: "grid", gap: "16px" }}>
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`${item.span === "large" ? "gallery-large" : "gallery-normal"} glass-card-hover`}
              style={{
                position: "relative",
                borderRadius: "14px",
                overflow: "hidden",
                minHeight: item.span === "large" ? "320px" : "240px",
                background: `linear-gradient(180deg, rgba(7,6,4,0.15) 0%, rgba(7,6,4,0.8) 100%), linear-gradient(135deg, rgba(18,14,10,0.9), rgba(10,8,5,0.95)), url(${item.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid rgba(200,164,93,0.1)",
                cursor: "pointer",
              }}
            >
              {/* Centered decorative icon */}
              {(() => {
                const Icon = categoryIcons[i % categoryIcons.length];
                return (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -60%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                      opacity: 0.4,
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        border: "1px solid rgba(200,164,93,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={22} color="#C8A45D" />
                    </div>
                  </div>
                );
              })()}
              {/* Label */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "3px",
                    color: "rgba(200,164,93,0.7)",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {item.category}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "15px",
                    color: "#F6EFE4",
                    fontWeight: 500,
                  }}
                >
                  {item.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-grid {
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto;
        }
        .gallery-large {
          grid-column: span 2;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-large {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-large {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
