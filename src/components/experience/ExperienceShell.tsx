"use client";

import type { ReactNode } from "react";
import { HeroReadyProvider } from "./HeroReadyContext";
import InitialLoader from "./InitialLoader";

export default function ExperienceShell({ children }: { children: ReactNode }) {
  return (
    <HeroReadyProvider>
      <InitialLoader />
      {children}
    </HeroReadyProvider>
  );
}
