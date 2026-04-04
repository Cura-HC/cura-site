"use client";

import { useMemo, useState } from "react";
import { services } from "@/data/site";
import { ServiceCategory } from "@/lib/types";
import { Button } from "@/components/button";
import { InterestDrawer } from "@/components/interest-drawer";
import { useInterests } from "@/components/interest-provider";
import { cn } from "@/lib/utils";

const categories: Array<ServiceCategory | "All"> = [
  "All",
  "Weight Loss",
  "Wellness",
  "Aesthetics",
  "Primary Care",
  "Membership"
];

export function ServiceBrowser() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "All">("All");
  const [expanded, setExpanded] = useState<string | null>(services[0]?.slug ?? null);
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
            const isOpen = expanded === service.slug;

            return (
              <article
                key={service.slug}
                className="panel overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <button
                  type="button"
                  className="w-full p-6 text-left"
                  onClick={() => setExpanded(isOpen ? null : service.slug)}
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs uppercase tracking-[0.22em] text-taupe">{service.category}</p>
                      <h3 className="mt-3 font-serif text-2xl text-charcoal">{service.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-charcoal/70">{service.description}</p>
                    </div>
                    <div className="rounded-3xl border border-black/10 bg-[#f9f6f1] px-5 py-4 lg:min-w-[180px]">
                      <p className="text-xs uppercase tracking-[0.22em] text-charcoal/45">Starting at</p>
                      <p className="mt-2 text-xl font-medium text-charcoal">{service.startingAt}</p>
                    </div>
                  </div>
                </button>

                <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <div className="border-t border-black/10 px-6 pb-6 pt-5">
                      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                        <ul className="space-y-3 text-sm leading-7 text-charcoal/70">
                          {service.details.map((detail) => (
                            <li key={detail} className="rounded-2xl bg-[#faf7f2] px-4 py-3">
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                          <Button href="/contact" variant="primary" className="justify-center">
                            {service.cta}
                          </Button>
                          <button
                            type="button"
                            onClick={() => (selected ? removeInterest(service.slug) : addInterest(service.slug))}
                            className={cn(
                              "rounded-full px-5 py-3 text-sm font-medium transition",
                              selected
                                ? "bg-sage text-white hover:opacity-90"
                                : "border border-black/10 bg-white/80 text-charcoal hover:bg-white"
                            )}
                          >
                            {selected ? "Saved to Interests" : "Save to My Interests"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
