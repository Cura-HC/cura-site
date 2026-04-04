"use client";

import { useState } from "react";
import { methodSteps } from "@/data/site";
import { cn } from "@/lib/utils";

export function MethodExplorer() {
  const [active, setActive] = useState(0);
  const current = methodSteps[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
      <div className="panel p-4">
        <div className="space-y-2">
          {methodSteps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "w-full rounded-[22px] px-4 py-4 text-left transition",
                index === active ? "bg-charcoal text-white" : "bg-transparent text-charcoal hover:bg-black/5"
              )}
            >
              <p className={cn("text-xs uppercase tracking-[0.22em]", index === active ? "text-white/60" : "text-taupe")}>
                Step {index + 1}
              </p>
              <p className="mt-2 font-serif text-2xl">{step.title}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="panel overflow-hidden">
        <div className="grid min-h-full gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] bg-[#faf7f2] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">Step Summary</p>
            <h3 className="mt-4 font-serif text-4xl text-charcoal">{current.title}</h3>
            <p className="mt-4 text-base leading-7 text-charcoal/70">{current.summary}</p>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-taupe">How It Feels</p>
              <p className="mt-4 text-lg leading-8 text-charcoal/75">{current.detail}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {methodSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={cn(
                    "rounded-3xl border px-4 py-4 text-sm",
                    index === active ? "border-charcoal bg-charcoal text-white" : "border-black/10 bg-white/70 text-charcoal/60"
                  )}
                >
                  {step.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
