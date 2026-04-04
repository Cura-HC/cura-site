"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <article key={item.question} className="panel overflow-hidden">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            <span className="font-medium text-charcoal">{item.question}</span>
            <span className="text-2xl text-charcoal/40">{open === index ? "-" : "+"}</span>
          </button>
          <div className={cn("grid transition-all duration-300", open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
            <div className="overflow-hidden">
              <p className="border-t border-black/10 px-6 py-5 text-sm leading-7 text-charcoal/70">{item.answer}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
