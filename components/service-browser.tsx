"use client";

import { useMemo, useState } from "react";
import { founderRatesEndDate, services } from "@/data/site";
import { ServiceCategory } from "@/lib/types";
import { InterestDrawer } from "@/components/interest-drawer";
import { useInterests } from "@/components/interest-provider";
import { CategoryToggle, CategoryOption } from "@/components/category-toggle";
import { cn } from "@/lib/utils";

const categoryHints: Record<ServiceCategory, string> = {
  Medical: "Weight loss · Peptides · Hormones · IV",
  Aesthetics: "Injectables · Skin · Laser",
  "Pain Management & Recovery": "Trigger points · Peptides"
};

const categories: CategoryOption[] = (Object.keys(categoryHints) as ServiceCategory[]).map((label) => ({
  label,
  hint: categoryHints[label],
  hasFounderRates: services.some((service) => service.categories.includes(label) && service.founderRate)
}));

export function ServiceBrowser() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("Medical");
  const { addInterest, removeInterest, isSelected } = useInterests();

  const filtered = useMemo(
    () => services.filter((service) => service.categories.includes(activeCategory)),
    [activeCategory]
  );

  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">What brings you in?</p>
        <CategoryToggle
          options={categories}
          active={activeCategory}
          onChange={(label) => setActiveCategory(label as ServiceCategory)}
          ariaLabel="Service categories"
          className="mb-8 sm:grid-cols-3"
        />

        <div className="space-y-5">
          {filtered.map((service) => {
            const selected = isSelected(service.slug);

            return (
              <article key={service.slug} className="panel overflow-hidden">
                <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.22em] text-taupe">{activeCategory}</p>
                    <h3 className="mt-3 font-serif text-2xl text-charcoal">{service.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-charcoal/70">{service.description}</p>
                    {service.founderRate ? (
                      <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-charcoal/70">
                        <span className="rounded-full border border-black/10 bg-white/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-charcoal">
                          Founder&apos;s Rate
                        </span>
                        <span>
                          <span className="font-serif text-xl text-charcoal">{service.founderRate.price}</span>{" "}
                          {service.founderRate.unit}
                          <span className="text-charcoal/50"> · through {founderRatesEndDate}</span>
                        </span>
                      </p>
                    ) : null}
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
