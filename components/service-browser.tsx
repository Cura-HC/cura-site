"use client";

import { useMemo, useState } from "react";
import { services } from "@/data/site";
import { ServiceCategory } from "@/lib/types";
import { InterestDrawer } from "@/components/interest-drawer";
import { useInterests } from "@/components/interest-provider";
import { cn } from "@/lib/utils";

const categories: Array<ServiceCategory | "All"> = [
  "All",
  "Primary Care & Wellness",
  "Aesthetics",
  "Pain Management"
];

export function ServiceBrowser() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "All">("All");
  const { addInterest, removeInterest, isSelected } = useInterests();

  const filtered = useMemo(
    () => services.filter((service) => activeCategory === "All" || service.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div>
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                activeCategory === category
                  ? "border-charcoal bg-charcoal text-white"
                  : "border-black/10 bg-white/80 text-charcoal/70 hover:bg-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-5">
          {filtered.map((service) => {
            const selected = isSelected(service.slug);

            return (
              <article key={service.slug} className="panel overflow-hidden">
                <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.22em] text-taupe">{service.category}</p>
                    <h3 className="mt-3 font-serif text-2xl text-charcoal">{service.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-charcoal/70">{service.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => (selected ? removeInterest(service.slug) : addInterest(service.slug))}
                    aria-pressed={selected}
                    className={cn(
                      "shrink-0 rounded-full px-5 py-3 text-sm font-medium transition",
                      selected
                        ? "bg-sage text-white hover:opacity-90"
                        : "border border-black/10 bg-white/80 text-charcoal hover:bg-white"
                    )}
                  >
                    {selected ? "Added" : "Add Service"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="xl:block">
        <InterestDrawer />
      </div>
    </div>
  );
}
