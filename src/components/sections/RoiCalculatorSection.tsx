"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";

export default function RoiCalculatorSection() {
  const [units, setUnits] = useState(6);
  const [nightlyRate, setNightlyRate] = useState(6500);
  const [occupancy, setOccupancy] = useState(55);
  const [operatingCost, setOperatingCost] = useState(28);

  const monthlyRevenue = units * nightlyRate * 30 * (occupancy / 100);
  const monthlyOpCost = monthlyRevenue * (operatingCost / 100);
  const netMonthly = monthlyRevenue - monthlyOpCost;
  const annualNet = netMonthly * 12;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-EG", { style: "decimal", maximumFractionDigits: 0 }).format(val) + " EGP";

  return (
    <section
      id="roi"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "linear-gradient(180deg, #0A0804 0%, #12100C 50%, #070604 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 4vw, 64px)",
          display: "grid",
          gap: "56px",
          alignItems: "start",
        }}
        className="roi-grid"
      >
        {/* Left content */}
        <div>
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
            INVESTMENT ESTIMATE
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
              marginBottom: "18px",
              maxWidth: "420px",
            }}
          >
            Estimate Your Bubble Hotel <span style={{ color: "#C8A45D" }}>ROI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(246,239,228,0.65)",
              maxWidth: "400px",
              marginBottom: "32px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            Calculate a simple revenue projection based on your expected nightly rate, occupancy, and number of units.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Calculator size={16} color="rgba(200,164,93,0.6)" />
            <span
              style={{
                fontSize: "12px",
                color: "rgba(246,239,228,0.45)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              This calculator provides an indicative estimate only.
            </span>
          </motion.div>
        </div>

        {/* Right calculator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            borderRadius: "18px",
            background: "rgba(10,8,5,0.62)",
            border: "1px solid rgba(200,164,93,0.15)",
            backdropFilter: "blur(16px)",
            padding: "clamp(24px, 3vw, 40px)",
          }}
        >
          {/* Section label */}
          <p style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(200,164,93,0.5)", textTransform: "uppercase", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            ADJUST PARAMETERS
          </p>
          {/* Inputs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "32px" }} className="roi-inputs">
            <div>
              <label style={{ fontSize: "11px", color: "rgba(246,239,228,0.6)", letterSpacing: "0.5px", display: "block", marginBottom: "6px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Number of Units
              </label>
              <input
                type="number"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value) || 0)}
                min="1"
                style={{
                  width: "100%",
                  height: "44px",
                  padding: "0 14px",
                  borderRadius: "8px",
                  background: "rgba(7,6,4,0.6)",
                  border: "1px solid rgba(200,164,93,0.2)",
                  color: "#F6EFE4",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: "11px", color: "rgba(246,239,228,0.6)", letterSpacing: "0.5px", display: "block", marginBottom: "6px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Avg. Nightly Rate (EGP)
              </label>
              <input
                type="number"
                value={nightlyRate}
                onChange={(e) => setNightlyRate(Number(e.target.value) || 0)}
                min="0"
                style={{
                  width: "100%",
                  height: "44px",
                  padding: "0 14px",
                  borderRadius: "8px",
                  background: "rgba(7,6,4,0.6)",
                  border: "1px solid rgba(200,164,93,0.2)",
                  color: "#F6EFE4",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: "11px", color: "rgba(246,239,228,0.6)", letterSpacing: "0.5px", display: "block", marginBottom: "6px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Monthly Occupancy %
              </label>
              <input
                type="number"
                value={occupancy}
                onChange={(e) => setOccupancy(Math.min(100, Number(e.target.value) || 0))}
                min="0"
                max="100"
                style={{
                  width: "100%",
                  height: "44px",
                  padding: "0 14px",
                  borderRadius: "8px",
                  background: "rgba(7,6,4,0.6)",
                  border: "1px solid rgba(200,164,93,0.2)",
                  color: "#F6EFE4",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: "11px", color: "rgba(246,239,228,0.6)", letterSpacing: "0.5px", display: "block", marginBottom: "6px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Operating Cost %
              </label>
              <input
                type="number"
                value={operatingCost}
                onChange={(e) => setOperatingCost(Math.min(100, Number(e.target.value) || 0))}
                min="0"
                max="100"
                style={{
                  width: "100%",
                  height: "44px",
                  padding: "0 14px",
                  borderRadius: "8px",
                  background: "rgba(7,6,4,0.6)",
                  border: "1px solid rgba(200,164,93,0.2)",
                  color: "#F6EFE4",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              />
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,164,93,0.2), transparent)", marginBottom: "28px" }} />

          {/* Results label */}
          <p style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(200,164,93,0.5)", textTransform: "uppercase", marginBottom: "16px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            PROJECTED RETURNS
          </p>

          {/* Results */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "16px" }} className="roi-results">
            <div style={{ padding: "18px", borderRadius: "12px", background: "rgba(7,6,4,0.5)", border: "1px solid rgba(200,164,93,0.1)" }}>
              <p style={{ fontSize: "10px", letterSpacing: "1px", color: "rgba(246,239,228,0.5)", textTransform: "uppercase", marginBottom: "8px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Monthly Revenue</p>
              <p style={{ fontSize: "18px", fontWeight: 600, color: "#C8A45D", fontFamily: "var(--font-playfair), Georgia, serif" }}>{formatCurrency(monthlyRevenue)}</p>
            </div>
            <div style={{ padding: "18px", borderRadius: "12px", background: "rgba(7,6,4,0.5)", border: "1px solid rgba(200,164,93,0.1)" }}>
              <p style={{ fontSize: "10px", letterSpacing: "1px", color: "rgba(246,239,228,0.5)", textTransform: "uppercase", marginBottom: "8px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Operating Cost</p>
              <p style={{ fontSize: "18px", fontWeight: 600, color: "rgba(246,239,228,0.6)", fontFamily: "var(--font-playfair), Georgia, serif" }}>{formatCurrency(monthlyOpCost)}</p>
            </div>
            <div style={{ padding: "18px", borderRadius: "12px", background: "rgba(7,6,4,0.5)", border: "1px solid rgba(200,164,93,0.1)" }}>
              <p style={{ fontSize: "10px", letterSpacing: "1px", color: "rgba(246,239,228,0.5)", textTransform: "uppercase", marginBottom: "8px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Net Monthly</p>
              <p style={{ fontSize: "18px", fontWeight: 600, color: "#C8A45D", fontFamily: "var(--font-playfair), Georgia, serif" }}>{formatCurrency(netMonthly)}</p>
            </div>
            <div style={{ padding: "18px", borderRadius: "12px", background: "rgba(200,164,93,0.05)", border: "1px solid rgba(200,164,93,0.2)" }}>
              <p style={{ fontSize: "10px", letterSpacing: "1px", color: "rgba(200,164,93,0.7)", textTransform: "uppercase", marginBottom: "8px", fontFamily: "var(--font-inter), system-ui, sans-serif", display: "flex", alignItems: "center", gap: "6px" }}>
                <TrendingUp size={12} /> Annual Net Revenue
              </p>
              <p style={{ fontSize: "24px", fontWeight: 600, color: "#E1C982", fontFamily: "var(--font-playfair), Georgia, serif" }}>{formatCurrency(annualNet)}</p>
            </div>
          </div>

          {/* Disclaimer */}
          <p style={{ fontSize: "11px", color: "rgba(246,239,228,0.3)", marginTop: "20px", lineHeight: 1.5, fontFamily: "var(--font-inter), system-ui, sans-serif", fontStyle: "italic" }}>
            Actual ROI depends on project location, operating model, seasonality, pricing strategy, and setup costs.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            style={{
              marginTop: "24px",
              height: "46px",
              padding: "0 24px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #C8A45D, #8F6B32)",
              border: "1px solid rgba(225,201,130,0.3)",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(200,164,93,0.15)",
            }}
          >
            Get a Custom Investment Estimate
          </a>
        </motion.div>
      </div>

      <style>{`
        .roi-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .roi-grid {
            grid-template-columns: 38% 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .roi-inputs {
            grid-template-columns: 1fr !important;
          }
          .roi-results {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
