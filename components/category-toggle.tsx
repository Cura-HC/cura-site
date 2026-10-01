"use client";

import { cn } from "@/lib/utils";

export type CategoryOption = {
  label: string;
  hint: string;
  hasFounderRates?: boolean;
};

type CategoryToggleProps = {
  options: CategoryOption[];
  active: string;
  onChange: (label: string) => void;
  ariaLabel: string;
  className?: string;
};

export function CategoryToggle({ options, active, onChange, ariaLabel, className }: CategoryToggleProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        "grid gap-1.5 rounded-[28px] border border-black/10 bg-white/70 p-1.5 shadow-soft",
        className
      )}
    >
      {options.map((option) => {
        const selected = option.label === active;

        return (
          <button
            key={option.label}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(option.label)}
            className={cn(
              "rounded-[22px] px-4 py-4 text-center transition sm:px-6 sm:py-5",
              selected ? "bg-charcoal text-white shadow-float" : "text-charcoal hover:bg-white"
            )}
          >
            <span className="flex flex-wrap items-center justify-center gap-2">
              <span className="font-serif text-xl sm:text-2xl">{option.label}</span>
              {option.hasFounderRates ? (
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em]",
                    selected ? "bg-white/15 text-white" : "border border-black/10 bg-white text-charcoal"
                  )}
                >
                  Founder&apos;s rates
                </span>
              ) : null}
            </span>
            <span className={cn("mt-1.5 block text-xs leading-5", selected ? "text-white/70" : "text-charcoal/55")}>
              {option.hint}
            </span>
          </button>
        );
      })}
    </div>
  );
}
