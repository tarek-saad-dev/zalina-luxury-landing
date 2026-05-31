"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Diamond } from "lucide-react";

const partners = [
  {
    name: "A1 Ewan Furniture",
    role: "Manufacturing Partner",
    logo: "/images/partner1.png",
    description: "Premium furniture manufacturing with decades of craftsmanship expertise",
  },
  {
    name: "DRVOTECH",
    role: "Technology Partner",
    logo: "/images/partner2.png",
    description: "Digital innovation and technical infrastructure solutions",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function ManufacturingPartnerSection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(100px, 12vw, 160px) 0",
        background: "linear-gradient(180deg, #070604 0%, #0A0806 50%, #070604 100%)",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% 50%, rgba(200,164,93,0.03) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(200,164,93,0.02) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 80% 20%, rgba(200,164,93,0.02) 0%, transparent 60%)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 72px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <motion.p
            {...fadeUp(0)}
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
            TRUSTED PARTNERS
          </motion.p>

          <motion.h2
            {...fadeUp(0.1)}
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#F6EFE4",
              marginBottom: "20px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Collaborating with Industry Leaders
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(246,239,228,0.6)",
              maxWidth: "580px",
              margin: "0 auto",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            Collaborating with industry-leading partners in manufacturing and digital innovation.
          </motion.p>
        </div>

        {/* Luxury Divider */}
        <motion.div
          {...fadeUp(0.3)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          <div
            style={{
              flex: 1,
              maxWidth: "120px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(200,164,93,0.4), transparent)",
            }}
          />
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid rgba(200,164,93,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(200,164,93,0.05)",
            }}
          >
            <Diamond size={18} color="#C8A45D" />
          </div>
          <div
            style={{
              flex: 1,
              maxWidth: "120px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(200,164,93,0.4), transparent)",
            }}
          />
        </motion.div>

        {/* Partner Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
          }}
          className="partners-grid"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              {...fadeUp(0.4 + index * 0.1)}
              className="partner-card"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "relative",
                borderRadius: "24px",
                padding: "clamp(40px, 5vw, 60px)",
                background: `
                  linear-gradient(135deg, rgba(18,16,12,0.8) 0%, rgba(12,10,8,0.9) 100%),
                  rgba(7,6,4,0.6)
                `,
                border: "1px solid rgba(200,164,93,0.15)",
                boxShadow: `
                  0 24px 64px rgba(0,0,0,0.4),
                  inset 0 1px 0 rgba(255,255,255,0.03)
                `,
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Card glow effect on hover */}
              <div
                className="card-glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "24px",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  background: `
                    radial-gradient(600px circle at 50% 50%, rgba(200,164,93,0.08), transparent 40%)
                  `,
                  pointerEvents: "none",
                }}
              />

              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(225deg, rgba(200,164,93,0.08) 0%, transparent 60%)",
                  borderTopRightRadius: "24px",
                  pointerEvents: "none",
                }}
              />

              {/* Logo Container */}
              <div
                style={{
                  position: "relative",
                  height: "clamp(120px, 15vw, 180px)",
                  marginBottom: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    padding: "20px",
                  }}
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    style={{
                      objectFit: "contain",
                      filter: "brightness(0.95) contrast(1.05)",
                    }}
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                </div>
              </div>

              {/* Partner Info */}
              <div style={{ textAlign: "center" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "clamp(20px, 2.5vw, 24px)",
                    fontWeight: 600,
                    color: "#F6EFE4",
                    marginBottom: "8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {partner.name}
                </h3>
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "3px",
                    color: "#C8A45D",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 500,
                    marginBottom: "12px",
                  }}
                >
                  {partner.role}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "rgba(246,239,228,0.5)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    maxWidth: "280px",
                    margin: "0 auto",
                  }}
                >
                  {partner.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px",
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, rgba(200,164,93,0.4), transparent)",
                  borderRadius: "1px",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .partner-card:hover .card-glow {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .partners-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .partner-card {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
