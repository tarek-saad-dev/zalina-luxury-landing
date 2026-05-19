"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/hero";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="hero-navbar"
      style={{
        position: "relative",
        zIndex: 30,
        height: "72px",
        marginTop: "16px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(8,8,8,0.38)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 16px 60px rgba(0,0,0,0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 44px",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/zalina-logo-full.png"
          alt="Zalina Luxury Bubble Tents"
          style={{
            height: "120px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Desktop Nav Links */}
      <div
        className="hidden lg:flex"
        style={{ alignItems: "center", gap: "40px" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: link.active ? "#E1C982" : "rgba(246,239,228,0.82)",
              textDecoration: "none",
              position: "relative",
              paddingBottom: "4px",
              transition: "color 0.2s",
            }}
          >
            {link.label}
            {link.active && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "#E1C982",
                  borderRadius: "1px",
                }}
              />
            )}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:flex">
        <motion.a
          href="#contact"
          style={{
            height: "40px",
            padding: "0 22px",
            borderRadius: "6px",
            background: "linear-gradient(135deg, #C8A45D, #8F6B32)",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(200,164,93,0.18)",
            whiteSpace: "nowrap",
          }}
          whileHover={{
            y: -2,
            boxShadow: "0 8px 24px rgba(200,164,93,0.28)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          Request a Consultation
          <ArrowRight size={12} />
        </motion.a>
      </div>

      {/* Mobile Hamburger - only visible on tablet and mobile */}
      <button
        className="flex lg:hidden items-center justify-center"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          background: "none",
          border: "1px solid rgba(200,164,93,0.3)",
          borderRadius: "8px",
          width: "38px",
          height: "38px",
          cursor: "pointer",
          color: "#C8A45D",
        }}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              left: 0,
              right: 0,
              background: "rgba(10,8,5,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(200,164,93,0.2)",
              borderRadius: "12px",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              zIndex: 50,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: link.active ? "#E1C982" : "rgba(246,239,228,0.82)",
                  textDecoration: "none",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{
                height: "44px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #C8A45D, #8F6B32)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none",
                marginTop: "4px",
              }}
            >
              Request a Consultation
              <ArrowRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
