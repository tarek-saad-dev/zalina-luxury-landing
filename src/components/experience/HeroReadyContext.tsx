"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type HeroReadyContextValue = {
  heroReady: boolean;
  markHeroReady: () => void;
};

const HeroReadyContext = createContext<HeroReadyContextValue | null>(null);

export function HeroReadyProvider({ children }: { children: ReactNode }) {
  const [heroReady, setHeroReady] = useState(false);

  const markHeroReady = useCallback(() => {
    setHeroReady(true);
  }, []);

  const value = useMemo(
    () => ({ heroReady, markHeroReady }),
    [heroReady, markHeroReady],
  );

  return (
    <HeroReadyContext.Provider value={value}>
      {children}
    </HeroReadyContext.Provider>
  );
}

export function useHeroReady() {
  const ctx = useContext(HeroReadyContext);
  if (!ctx) {
    throw new Error("useHeroReady must be used within HeroReadyProvider");
  }
  return ctx;
}
