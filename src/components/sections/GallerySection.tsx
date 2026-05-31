"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryItems } from "@/data/gallery";

// Get size-based class for masonry layout
const getSizeClass = (size: string): string => {
  switch (size) {
    case "large":
      return "gallery-large";
    case "tall":
      return "gallery-tall";
    case "wide":
      return "gallery-wide";
    case "medium":
      return "gallery-medium";
    case "small":
    default:
      return "gallery-small";
  }
};

// Get aspect ratio style for consistent grid
const getAspectRatio = (size: string): string => {
  switch (size) {
    case "large":
      return "aspect-[16/10]";
    case "tall":
      return "aspect-[3/4]";
    case "wide":
      return "aspect-[21/9]";
    case "medium":
      return "aspect-[4/3]";
    case "small":
    default:
      return "aspect-[4/3]";
  }
};

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  // Handle body overflow when lightbox opens/closes
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1);
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1);
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
    setTouchStart(null);
  };

  return (
    <section
      id="gallery"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "linear-gradient(180deg, #070604 0%, #0A0806 50%, #12100C 100%)",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 48px)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
            GALLERY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(32px, 3.5vw, 48px)",
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#F6EFE4",
              marginBottom: "16px",
            }}
          >
            Explore Our Bubble Tent Installations
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
              maxWidth: "620px",
              margin: "0 auto",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            Discover completed projects, luxury interiors, and hospitality experiences designed for resorts, camps, and premium destinations.
          </motion.p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="gallery-masonry">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`gallery-item ${getSizeClass(item.size)}`}
              onClick={() => openLightbox(index)}
            >
              <div className={`gallery-image-wrapper ${getAspectRatio(item.size)}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                  className="gallery-image"
                  loading={index < 6 ? "eager" : "lazy"}
                  quality={85}
                />
                {/* Hover Overlay */}
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <div className="gallery-zoom-icon">
                      <ZoomIn size={24} color="#C8A45D" />
                    </div>
                    <span className="gallery-category">{item.category}</span>
                    <span className="gallery-title">{item.alt}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Backdrop blur */}
            <div className="lightbox-backdrop" />

            {/* Close button */}
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              <X size={28} color="#F6EFE4" />
            </button>

            {/* Navigation buttons */}
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} color="#F6EFE4" />
            </button>
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={36} color="#F6EFE4" />
            </button>

            {/* Image container */}
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="lightbox-image-container"
                >
                  <Image
                    src={galleryItems[selectedIndex].src}
                    alt={galleryItems[selectedIndex].alt}
                    fill
                    sizes="90vw"
                    className="lightbox-image"
                    priority
                    quality={90}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image info */}
              <div className="lightbox-info">
                <span className="lightbox-category">{galleryItems[selectedIndex].category}</span>
                <span className="lightbox-title">{galleryItems[selectedIndex].alt}</span>
                <span className="lightbox-counter">
                  {selectedIndex + 1} / {galleryItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-masonry {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(200px, auto);
          gap: 20px;
        }

        .gallery-item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease;
        }

        .gallery-item:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(200, 164, 93, 0.15);
        }

        .gallery-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gallery-image {
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.08);
        }

        /* Masonry Layout Classes */
        .gallery-large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-wide {
          grid-column: span 2;
          grid-row: span 1;
        }

        .gallery-tall {
          grid-column: span 1;
          grid-row: span 2;
        }

        .gallery-medium {
          grid-column: span 1;
          grid-row: span 1;
        }

        .gallery-small {
          grid-column: span 1;
          grid-row: span 1;
        }

        /* Hover Overlay */
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(7, 6, 4, 0.6) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .gallery-zoom-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(200, 164, 93, 0.15);
          border: 1px solid rgba(200, 164, 93, 0.3);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.8);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gallery-item:hover .gallery-zoom-icon {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .gallery-category {
          font-size: 10px;
          letter-spacing: 3px;
          color: rgba(200, 164, 93, 0.9);
          text-transform: uppercase;
          font-family: var(--font-inter), system-ui, sans-serif;
        }

        .gallery-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 16px;
          color: #F6EFE4;
          font-weight: 500;
          line-height: 1.4;
        }

        /* Lightbox Styles */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(7, 6, 4, 0.95);
          backdrop-filter: blur(20px);
        }

        .lightbox-content {
          position: relative;
          width: 90vw;
          height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .lightbox-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
        }

        .lightbox-image {
          object-fit: contain;
        }

        .lightbox-info {
          position: absolute;
          bottom: -60px;
          left: 0;
          right: 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .lightbox-category {
          font-size: 11px;
          letter-spacing: 3px;
          color: rgba(200, 164, 93, 0.9);
          text-transform: uppercase;
          font-family: var(--font-inter), system-ui, sans-serif;
        }

        .lightbox-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 18px;
          color: #F6EFE4;
          font-weight: 500;
        }

        .lightbox-counter {
          font-size: 13px;
          color: rgba(246, 239, 228, 0.5);
          font-family: var(--font-inter), system-ui, sans-serif;
          margin-top: 8px;
        }

        .lightbox-close {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(200, 164, 93, 0.1);
          border: 1px solid rgba(200, 164, 93, 0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .lightbox-close:hover {
          background: rgba(200, 164, 93, 0.2);
          border-color: rgba(200, 164, 93, 0.4);
          transform: scale(1.05);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(200, 164, 93, 0.1);
          border: 1px solid rgba(200, 164, 93, 0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .lightbox-nav:hover {
          background: rgba(200, 164, 93, 0.2);
          border-color: rgba(200, 164, 93, 0.4);
        }

        .lightbox-prev {
          left: 24px;
        }

        .lightbox-next {
          right: 24px;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .gallery-masonry {
            grid-template-columns: repeat(3, 1fr);
          }

          .gallery-large {
            grid-column: span 2;
            grid-row: span 2;
          }

          .gallery-wide {
            grid-column: span 2;
          }
        }

        @media (max-width: 900px) {
          .gallery-masonry {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .gallery-large {
            grid-column: span 2;
            grid-row: span 2;
          }

          .gallery-tall {
            grid-row: span 1;
          }

          .lightbox-nav {
            width: 44px;
            height: 44px;
          }

          .lightbox-prev {
            left: 12px;
          }

          .lightbox-next {
            right: 12px;
          }
        }

        @media (max-width: 640px) {
          .gallery-masonry {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .gallery-large,
          .gallery-wide,
          .gallery-tall,
          .gallery-medium,
          .gallery-small {
            grid-column: span 1;
            grid-row: span 1;
          }

          .lightbox-content {
            width: 95vw;
            height: 70vh;
          }

          .lightbox-info {
            bottom: -80px;
          }

          .lightbox-title {
            font-size: 16px;
          }

          .lightbox-close {
            top: 16px;
            right: 16px;
          }
        }

        /* Aspect ratio utilities */
        .aspect-\[16\/10\] {
          aspect-ratio: 16 / 10;
        }

        .aspect-\[3\/4\] {
          aspect-ratio: 3 / 4;
        }

        .aspect-\[21\/9\] {
          aspect-ratio: 21 / 9;
        }

        .aspect-\[4\/3\] {
          aspect-ratio: 4 / 3;
        }
      `}</style>
    </section>
  );
}
