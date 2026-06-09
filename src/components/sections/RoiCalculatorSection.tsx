"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";

const inputStyle: React.CSSProperties = {
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
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontSize: "11px",
  color: "rgba(246,239,228,0.6)",
  letterSpacing: "0.5px",
  display: "block",
  marginBottom: "6px",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
};

export default function RoiCalculatorSection() {
  const [numberOfUnits, setNumberOfUnits] = useState(6);
  const [unitCost, setUnitCost] = useState(1500000);
  const [nightlyRate, setNightlyRate] = useState(6500);
  const [occupancyRate, setOccupancyRate] = useState(55);
  const [monthlyOperatingCost, setMonthlyOperatingCost] = useState(18000);

  const totalInvestment = unitCost * numberOfUnits;

  const annualRevenue =
    nightlyRate * (occupancyRate / 100) * 365 * numberOfUnits;

  const annualOperatingCost = monthlyOperatingCost * 12 * numberOfUnits;

  const netProfit = annualRevenue - annualOperatingCost;

  const roiPercentage =
    totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;

  const paybackPeriodYears =
    netProfit > 0 ? totalInvestment / netProfit : 0;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-EG", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(val) + " EGP";

  const formatNumber = (val: number, decimals = 1) =>
    new Intl.NumberFormat("en-EG", {
      style: "decimal",
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(val);

  return (
    <section
      id="roi"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background:
          "linear-gradient(180deg, #0A0804 0%, #12100C 50%, #070604 100%)",
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
            Estimate Your Bubble Hotel{" "}
            <span style={{ color: "#C8A45D" }}>ROI</span>
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
            Calculate a full return-on-investment projection based on your unit
            cost, nightly rate, occupancy, and operating expenses.
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
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              color: "rgba(200,164,93,0.5)",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            ADJUST PARAMETERS
          </p>

          {/* Inputs */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
              marginBottom: "32px",
            }}
            className="roi-inputs"
          >
            <div>
              <label style={labelStyle}>Number of Units</label>
              <input
                type="number"
                value={numberOfUnits}
                onChange={(e) =>
                  setNumberOfUnits(Math.max(1, Number(e.target.value) || 1))
                }
                min="1"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Unit Cost (EGP)</label>
              <input
                type="number"
                value={unitCost}
                onChange={(e) =>
                  setUnitCost(Math.max(0, Number(e.target.value) || 0))
                }
                min="0"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Avg. Nightly Rate (EGP)</label>
              <input
                type="number"
                value={nightlyRate}
                onChange={(e) =>
                  setNightlyRate(Math.max(0, Number(e.target.value) || 0))
                }
                min="0"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Occupancy Rate (%)</label>
              <input
                type="number"
                value={occupancyRate}
                onChange={(e) =>
                  setOccupancyRate(
                    Math.min(100, Math.max(0, Number(e.target.value) || 0))
                  )
                }
                min="0"
                max="100"
                style={inputStyle}
              />
            </div>
            <div className="roi-input-full">
              <label style={labelStyle}>
                Monthly Operating Cost / Unit (EGP)
              </label>
              <input
                type="number"
                value={monthlyOperatingCost}
                onChange={(e) =>
                  setMonthlyOperatingCost(
                    Math.max(0, Number(e.target.value) || 0)
                  )
                }
                min="0"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(200,164,93,0.2), transparent)",
              marginBottom: "28px",
            }}
          />

          {/* Results label */}
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              color: "rgba(200,164,93,0.5)",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            PROJECTED RETURNS
          </p>

          {/* Results grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              marginBottom: "16px",
            }}
            className="roi-results"
          >
            {/* Total Investment */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "rgba(7,6,4,0.5)",
                border: "1px solid rgba(200,164,93,0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  color: "rgba(246,239,228,0.5)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Total Investment
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgba(246,239,228,0.75)",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {formatCurrency(totalInvestment)}
              </p>
            </div>

            {/* Annual Revenue */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "rgba(7,6,4,0.5)",
                border: "1px solid rgba(200,164,93,0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  color: "rgba(246,239,228,0.5)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Annual Revenue
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#C8A45D",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {formatCurrency(annualRevenue)}
              </p>
            </div>

            {/* Annual Operating Cost */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "rgba(7,6,4,0.5)",
                border: "1px solid rgba(200,164,93,0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  color: "rgba(246,239,228,0.5)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Annual Operating Cost
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgba(246,239,228,0.55)",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {formatCurrency(annualOperatingCost)}
              </p>
            </div>

            {/* Net Annual Profit */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "rgba(7,6,4,0.5)",
                border: "1px solid rgba(200,164,93,0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  color: "rgba(246,239,228,0.5)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Net Annual Profit
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: netProfit >= 0 ? "#C8A45D" : "#e07070",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {formatCurrency(netProfit)}
              </p>
            </div>

            {/* ROI % — highlighted */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "rgba(200,164,93,0.07)",
                border: "1px solid rgba(200,164,93,0.25)",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  color: "rgba(200,164,93,0.7)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <TrendingUp size={12} /> ROI
              </p>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#E1C982",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  lineHeight: 1,
                }}
              >
                {formatNumber(roiPercentage)}%
              </p>
            </div>

            {/* Payback Period — highlighted */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "rgba(200,164,93,0.07)",
                border: "1px solid rgba(200,164,93,0.25)",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  color: "rgba(200,164,93,0.7)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Payback Period
              </p>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#E1C982",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  lineHeight: 1,
                }}
              >
                {paybackPeriodYears > 0
                  ? `${formatNumber(paybackPeriodYears)} yrs`
                  : "—"}
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <p
            style={{
              fontSize: "11px",
              color: "rgba(246,239,228,0.3)",
              marginTop: "20px",
              lineHeight: 1.5,
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontStyle: "italic",
            }}
          >
            Actual ROI depends on project location, operating model,
            seasonality, pricing strategy, and setup costs.
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
        .roi-input-full {
          grid-column: 1 / -1;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          opacity: 0.4;
        }
        input[type="number"]:focus {
          border-color: rgba(200,164,93,0.5) !important;
          box-shadow: 0 0 0 3px rgba(200,164,93,0.08);
        }
      `}</style>
    </section>
  );
}
