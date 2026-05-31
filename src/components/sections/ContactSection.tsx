"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { contactData } from "@/data/sections";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";

interface FormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  units: string;
  projectType: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  units?: string;
  projectType?: string;
  submit?: string;
}

export default function ContactSection() {
  const { eyebrow, heading, subtitle, contactPoints, projectTypes } = contactData;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormData>({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    units: "",
    projectType: "",
    message: "",
    honeypot: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (form.units && Number(form.units) < 1) newErrors.units = "Minimum 1 unit";
    if (!form.projectType) newErrors.projectType = "Please select project type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || loading) return;

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          companyName: form.company.trim() || undefined,
          phone: form.phone.trim(),
          email: form.email.trim(),
          projectLocation: form.location.trim() || undefined,
          numberOfUnits: form.units.trim() || undefined,
          projectType: form.projectType,
          message: form.message.trim() || undefined,
          honeypot: form.honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        submit: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "linear-gradient(180deg, #0A0804 0%, #0D0906 50%, #070604 100%)",
      }}
    >
      {/* Background pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.15 }} className="ornamental-pattern" />
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 4vw, 64px)",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            borderRadius: "20px",
            background: "rgba(10,8,5,0.65)",
            border: "1px solid rgba(200,164,93,0.15)",
            backdropFilter: "blur(18px)",
            padding: "clamp(32px, 5vw, 60px)",
            display: "grid",
            gap: "56px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
          }}
          className="contact-card"
        >
          {/* Left content */}
          <div>
            <p
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
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.15,
                fontWeight: 600,
                color: "#F6EFE4",
                marginBottom: "16px",
                maxWidth: "380px",
              }}
            >
              {heading}
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(246,239,228,0.6)",
                marginBottom: "32px",
                maxWidth: "360px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {subtitle}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {contactPoints.map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(200,164,93,0.1)",
                      border: "1px solid rgba(200,164,93,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={10} color="#C8A45D" />
                  </div>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "rgba(246,239,228,0.65)",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: "56px 40px",
                  textAlign: "center",
                  borderRadius: "16px",
                  border: "1px solid rgba(200,164,93,0.2)",
                  background: "rgba(200,164,93,0.03)",
                  minHeight: "280px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(200,164,93,0.15), rgba(200,164,93,0.06))",
                    border: "1px solid rgba(200,164,93,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: "0 8px 24px rgba(200,164,93,0.1)",
                  }}
                >
                  <Check size={26} color="#C8A45D" />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "22px",
                    color: "#F6EFE4",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  Request Sent
                </p>
                {/* Decorative gold line */}
                <div style={{ width: "40px", height: "1px", background: "rgba(200,164,93,0.4)", margin: "0 auto 14px" }} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(246,239,228,0.6)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    maxWidth: "340px",
                    margin: "0 auto",
                    lineHeight: 1.7,
                  }}
                >
                  Thank you. Your request has been received. Our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid" style={{ display: "grid", gap: "18px", marginBottom: "24px" }}>
                  {/* Honeypot field - hidden from users, visible to bots */}
                  <div style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
                    <Input
                      label="Leave this empty"
                      name="honeypot"
                      value={form.honeypot}
                      onChange={handleChange}
                    />
                  </div>
                  <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required error={errors.fullName} disabled={loading} />
                  <Input label="Company / Resort Name" name="company" value={form.company} onChange={handleChange} disabled={loading} />
                  <Input label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required error={errors.phone} disabled={loading} />
                  <Input label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required error={errors.email} disabled={loading} />
                  <Input label="Project Location" name="location" value={form.location} onChange={handleChange} disabled={loading} />
                  <Input label="Number of Units Needed" name="units" type="number" value={form.units} onChange={handleChange} min="1" error={errors.units} disabled={loading} />
                  <div style={{ gridColumn: "1 / -1" }}>
                    <Select label="Project Type" name="projectType" value={form.projectType} onChange={handleChange} options={projectTypes} required error={errors.projectType} disabled={loading} />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <Textarea label="Message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." disabled={loading} maxLength={2000} />
                  </div>
                </div>

                {/* Error Message */}
                <AnimatePresence>
                  {errors.submit && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 16px",
                        background: "rgba(239, 68, 68, 0.1)",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                        borderRadius: "8px",
                        marginBottom: "16px",
                      }}
                    >
                      <AlertCircle size={18} color="#ef4444" />
                      <span style={{ fontSize: "14px", color: "#ef4444" }}>{errors.submit}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    height: "50px",
                    padding: "0 32px",
                    borderRadius: "8px",
                    background: loading
                      ? "linear-gradient(135deg, #8F6B32, #6B4E24)"
                      : "linear-gradient(135deg, #C8A45D, #8F6B32)",
                    border: "1px solid rgba(225,201,130,0.3)",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    boxShadow: "0 10px 30px rgba(200,164,93,0.18)",
                    transition: "box-shadow 0.3s ease, transform 0.2s ease, opacity 0.3s ease",
                    opacity: loading ? 0.8 : 1,
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Consultation <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .contact-card {
          grid-template-columns: 1fr;
        }
        .form-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 1024px) {
          .contact-card {
            grid-template-columns: 38% 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
