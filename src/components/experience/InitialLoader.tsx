"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { BRAND_IMAGES } from "@/lib/images";
import { useHeroReady } from "./HeroReadyContext";

const MIN_VISIBLE_MS = 650;
const MAX_WAIT_MS = 4000;
const EXIT_MS = 480;

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function InitialLoader() {
  const { heroReady } = useHeroReady();
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [minMet, setMinMet] = useState(false);
  const [forceReveal, setForceReveal] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const minTimer = window.setTimeout(() => setMinMet(true), MIN_VISIBLE_MS);
    const maxTimer = window.setTimeout(() => setForceReveal(true), MAX_WAIT_MS);
    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
    };
  }, []);

  const shouldExit =
    !gone && minMet && (heroReady || forceReveal || reducedMotion);

  useEffect(() => {
    if (gone) {
      document.documentElement.style.removeProperty("overflow");
      return;
    }
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.removeProperty("overflow");
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      className={`zalina-loader${shouldExit ? " zalina-loader--exit" : ""}${reducedMotion ? " zalina-loader--reduced" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={!shouldExit}
      aria-label="Preparing your experience"
      onTransitionEnd={(event) => {
        if (event.propertyName !== "opacity") return;
        if (!shouldExit) return;
        setGone(true);
      }}
    >
      <div className="zalina-loader__glow" aria-hidden />
      <div className="zalina-loader__content">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BRAND_IMAGES.LOGO_FULL}
          alt="Zalina Luxury"
          className="zalina-loader__logo"
          width={220}
          height={120}
          decoding="async"
          fetchPriority="high"
        />
        <div className="zalina-loader__line" aria-hidden>
          <span className="zalina-loader__line-fill" />
        </div>
        <p className="zalina-loader__copy">PREPARING YOUR EXPERIENCE</p>
      </div>

      <style>{`
        .zalina-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          background: #070604;
          opacity: 1;
          transition: opacity ${EXIT_MS}ms cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: all;
        }
        .zalina-loader--exit {
          opacity: 0;
          pointer-events: none;
        }
        .zalina-loader__glow {
          position: absolute;
          width: min(52vw, 420px);
          height: min(52vw, 420px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,164,93,0.14) 0%, rgba(200,164,93,0.04) 42%, transparent 70%);
          filter: blur(8px);
          animation: zalina-glow 3.2s ease-in-out infinite;
        }
        .zalina-loader__content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          padding: 24px;
        }
        .zalina-loader__logo {
          width: auto;
          height: clamp(72px, 14vw, 118px);
          object-fit: contain;
          filter: drop-shadow(0 0 24px rgba(200,164,93,0.18));
        }
        .zalina-loader__line {
          width: min(180px, 42vw);
          height: 1px;
          background: rgba(200,164,93,0.18);
          overflow: hidden;
          position: relative;
        }
        .zalina-loader__line-fill {
          position: absolute;
          inset: 0 auto 0 0;
          width: 42%;
          background: linear-gradient(90deg, transparent, #C8A45D, #E1C982, transparent);
          animation: zalina-line 1.6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
        }
        .zalina-loader__copy {
          margin: 0;
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 10px;
          letter-spacing: 0.32em;
          color: rgba(200,164,93,0.72);
          text-transform: uppercase;
          font-weight: 500;
        }
        @keyframes zalina-glow {
          0%, 100% { opacity: 0.55; transform: scale(0.96); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        @keyframes zalina-line {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(280%); }
        }
        .zalina-loader--reduced .zalina-loader__glow,
        .zalina-loader--reduced .zalina-loader__line-fill {
          animation: none;
        }
        .zalina-loader--reduced .zalina-loader__line-fill {
          width: 100%;
          transform: none;
          background: rgba(200,164,93,0.55);
        }
        @media (prefers-reduced-motion: reduce) {
          .zalina-loader {
            transition-duration: 180ms;
          }
          .zalina-loader__glow,
          .zalina-loader__line-fill {
            animation: none !important;
          }
          .zalina-loader__line-fill {
            width: 100%;
            transform: none;
            background: rgba(200,164,93,0.55);
          }
        }
      `}</style>
    </div>
  );
}
