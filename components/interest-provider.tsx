"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

type InterestContextValue = {
  selected: string[];
  addInterest: (slug: string) => void;
  removeInterest: (slug: string) => void;
  clearInterests: () => void;
  isSelected: (slug: string) => boolean;
};

const InterestContext = createContext<InterestContextValue | null>(null);

export function InterestProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("cura-selected-services");

    if (stored) {
      try {
        const parsed = JSON.parse(stored) as string[];

        if (Array.isArray(parsed)) {
          setSelected(parsed);
        }
      } catch {
        window.localStorage.removeItem("cura-selected-services");
      }
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem("cura-selected-services", JSON.stringify(selected));
  }, [hydrated, selected]);

  const value = useMemo<InterestContextValue>(
    () => ({
      selected,
      addInterest: (slug) =>
        setSelected((current) => (current.includes(slug) ? current : [...current, slug])),
      removeInterest: (slug) =>
        setSelected((current) => current.filter((item) => item !== slug)),
      clearInterests: () => setSelected([]),
      isSelected: (slug) => selected.includes(slug)
    }),
    [selected]
  );

  return <InterestContext.Provider value={value}>{children}</InterestContext.Provider>;
}

export function useInterests() {
  const context = useContext(InterestContext);

  if (!context) {
    throw new Error("useInterests must be used within InterestProvider");
  }

  return context;
}
