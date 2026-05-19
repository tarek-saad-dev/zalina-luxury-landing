import { siteConfig, footerLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        padding: "72px 0 32px",
        background: "#050403",
        borderTop: "1px solid rgba(200,164,93,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 4vw, 64px)",
        }}
      >
        <div className="footer-grid" style={{ display: "grid", gap: "48px", marginBottom: "56px" }}>
          {/* Brand */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "22px",
                fontWeight: 600,
                color: "#F6EFE4",
                marginBottom: "12px",
              }}
            >
              {siteConfig.name}
            </h3>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                color: "rgba(246,239,228,0.5)",
                maxWidth: "280px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "rgba(200,164,93,0.7)",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 600,
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    color: "rgba(246,239,228,0.6)",
                    textDecoration: "none",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "rgba(200,164,93,0.7)",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 600,
              }}
            >
              Services
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.services.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    color: "rgba(246,239,228,0.6)",
                    textDecoration: "none",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "rgba(200,164,93,0.7)",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 600,
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="#contact"
                style={{
                  fontSize: "13px",
                  color: "#C8A45D",
                  textDecoration: "none",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Request Consultation
              </a>
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(246,239,228,0.5)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {siteConfig.email}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(246,239,228,0.5)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {siteConfig.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(200,164,93,0.08)",
            paddingTop: "24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(246,239,228,0.35)",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {siteConfig.copyright}
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
        }
        .footer-grid a:hover {
          color: #C8A45D !important;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
