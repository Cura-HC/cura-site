"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { founderRatesEndDate, services } from "@/data/site";
import { ArrowRightIcon } from "@/components/icons";
import { CategoryToggle } from "@/components/category-toggle";
import { cn } from "@/lib/utils";

const featuredGroups = [
  {
    label: "Medical",
    hint: "Weight loss · Peptides · Primary care",
    slugs: ["glp-1-medical-weight-loss", "peptides", "concierge-primary-care"],
    gridClass: "lg:grid-cols-3",
  },
  {
    label: "Aesthetics",
    hint: "Injectables · Skin · Laser",
    slugs: ["neurotoxin-injections", "rf-microneedling", "dermal-fillers", "laser-hair-removal"],
    gridClass: "lg:grid-cols-4",
  },
].map((group) => ({
  ...group,
  hasFounderRates: group.slugs.some(
    (slug) => services.find((service) => service.slug === slug)?.founderRate
  ),
  services: group.slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service)),
}));

export function FeaturedServices() {
  const [activeLabel, setActiveLabel] = useState(featuredGroups[0].label);
  const group = featuredGroups.find((g) => g.label === activeLabel) ?? featuredGroups[0];

  return (
    <>
      <CategoryToggle
        options={featuredGroups}
        active={group.label}
        onChange={setActiveLabel}
        ariaLabel="Featured services"
        className="mx-auto mt-10 max-w-2xl grid-cols-2"
      />

      <div role="tabpanel" className={cn("mt-12 grid gap-8 sm:grid-cols-2", group.gridClass)}>
        {group.services.map((service, index) => (
          <article key={service.slug} className="flex h-full flex-col">
            {service.icon ? (
              <div className="relative aspect-[3/2] overflow-hidden rounded-[24px] border border-black/10 bg-[#f9f6f2] sm:aspect-square">
                <Image
                  src={service.icon}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4 sm:p-6"
                />
              </div>
            ) : service.image ? (
              <div className="relative aspect-[3/2] overflow-hidden rounded-[24px] border border-black/10 bg-[#faf7f2] sm:aspect-square">
                <Image
                  src={service.image}
                  alt={service.imageAlt ?? service.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="plate-deep halftone relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-[24px] border border-black/10 sm:aspect-square">
                <p className="absolute left-0 right-0 top-6 text-center text-[10px] uppercase tracking-[0.26em] text-taupe">
                  {group.label}
                </p>
                <span className="relative font-serif text-6xl text-charcoal/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            )}
            <h3 className="mt-6 font-serif text-2xl leading-snug text-charcoal">
              {service.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-charcoal/70">
              {service.description}
            </p>
            {service.founderRate ? (
              <div className="mt-4">
                <span className="inline-block rounded-full border border-black/10 bg-white/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-charcoal">
                  Founder&apos;s Rate
                </span>
                <p className="mt-2 text-sm text-charcoal/70">
                  <span className="font-serif text-2xl text-charcoal">{service.founderRate.price}</span>{" "}
                  {service.founderRate.unit}
                </p>
              </div>
            ) : null}
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 border-t border-black/10 pt-5 text-sm font-medium text-charcoal transition hover:text-black"
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>

      {group.services.some((service) => service.founderRate) ? (
        <p className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-taupe">
          Founder&apos;s rates available through {founderRatesEndDate}
        </p>
      ) : null}
    </>
  );
}
