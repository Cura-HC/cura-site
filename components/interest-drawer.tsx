"use client";

import Link from "next/link";
import { services } from "@/data/site";
import { useInterests } from "@/components/interest-provider";

export function InterestDrawer() {
  const { selected, removeInterest, clearInterests } = useInterests();
  const selectedServices = services.filter((service) => selected.includes(service.slug));

  return (
    <aside className="panel sticky top-24 p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="mt-2 font-serif text-2xl text-charcoal">Consultation Summary</h3>
        {selectedServices.length > 0 ? (
          <button
            type="button"
            onClick={clearInterests}
            className="text-xs uppercase tracking-[0.22em] text-charcoal/50 transition hover:text-charcoal"
          >
            Clear
          </button>
        ) : null}
      </div>

      <div className="mt-6 space-y-3">
        {selectedServices.length === 0 ? (
          <div className="rounded-3xl bg-[#fbf8f3] p-5 text-sm leading-6 text-charcoal/60">
            Select one or more services to begin.
          </div>
        ) : (
          selectedServices.map((service) => (
            <div key={service.slug} className="rounded-3xl border border-black/10 bg-white/70 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-sm font-medium text-charcoal">{service.name}</h4>
                  <p className="mt-1 text-xs text-charcoal/55">{service.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeInterest(service.slug)}
                  className="text-xs uppercase tracking-[0.2em] text-charcoal/45 transition hover:text-charcoal"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedServices.length > 0 && <div className="mt-6 rounded-3xl bg-charcoal p-5 text-white">
        <Link
          href="/request-consultation"
          className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-charcoal transition hover:bg-sand"
        >
          Request Consultation
        </Link>
      </div>}
    </aside>
  );
}
