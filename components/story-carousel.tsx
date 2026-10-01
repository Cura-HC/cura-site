"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Slide = {
  id: string;
  eyebrow?: string;
  title: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  plate?: {
    kicker?: string;
    display: string;
    caption?: string;
  };
};

type StoryCarouselProps = {
  slides: Slide[];
  label?: string;
  className?: string;
};

export function StoryCarousel({
  slides,
  label = "About Cura",
  className,
}: StoryCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = (direction: 1 | -1) =>
    setIndex((current) => (current + direction + total) % total);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className={cn(
        "relative overflow-hidden border-y border-black/10 bg-[#faf5ef]",
        className
      )}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(1);
        if (event.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="grid lg:min-h-[640px] lg:grid-cols-2">
        <div className="relative min-h-[300px] overflow-hidden bg-stone/30 sm:min-h-[400px] lg:min-h-full">
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.id}
              aria-hidden={slideIndex !== index}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                slideIndex === index ? "opacity-100" : "opacity-0"
              )}
            >
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.imageAlt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
                />
              ) : (
                <SlidePlate plate={slide.plate} fallback={slide.title} />
              )}
            </div>
          ))}
        </div>

        <div className="halftone relative flex flex-col justify-center px-6 py-14 sm:px-12 md:px-16 lg:py-20">
          <div className="relative mx-auto grid w-full max-w-xl text-center">
            {slides.map((slide, slideIndex) => (
              <div
                key={slide.id}
                aria-hidden={slideIndex !== index}
                className={cn(
                  "col-start-1 row-start-1 transition-opacity duration-500",
                  slideIndex === index
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                )}
              >
                {slide.eyebrow ? (
                  <p className="text-[11px] uppercase tracking-[0.3em] text-taupe">
                    {slide.eyebrow}
                  </p>
                ) : null}
                <h2 className="font-serif text-3xl uppercase tracking-[0.12em] text-charcoal/85 sm:text-4xl">
                  {slide.title}
                </h2>
                <div className="mt-8 space-y-5 text-base leading-8 text-charcoal/70">
                  {slide.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-12 flex items-center gap-8">
            <CarouselButton label="Previous slide" onClick={() => go(-1)} />
            <p className="text-sm tracking-[0.2em] text-taupe">
              <span className="sr-only">Slide </span>
              {index + 1} / {total}
            </p>
            <CarouselButton label="Next slide" onClick={() => go(1)} next />
          </div>
        </div>
      </div>
    </section>
  );
}

function SlidePlate({
  plate,
  fallback,
}: {
  plate?: Slide["plate"];
  fallback: string;
}) {
  return (
    <div className="plate-deep halftone relative flex h-full items-center justify-center px-8 py-12">
      <div className="absolute inset-6 rounded-[28px] border border-black/10" />
      <div className="relative max-w-sm text-center">
        {plate?.kicker ? (
          <p className="text-[11px] uppercase tracking-[0.3em] text-taupe">
            {plate.kicker}
          </p>
        ) : null}
        <p className="mt-6 font-serif text-3xl leading-snug text-charcoal/80 sm:text-4xl">
          {plate?.display ?? fallback}
        </p>
        {plate?.caption ? (
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-taupe">
            {plate.caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  next,
}: {
  label: string;
  onClick: () => void;
  next?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-taupe transition hover:border-charcoal/40 hover:bg-white/70 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal/40"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("h-5 w-5", !next && "rotate-180")}
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </button>
  );
}
