import { SectionHeading } from "@/components/section-heading";
import { ServiceBrowser } from "@/components/service-browser";

export default function WhatWeOfferPage() {
  return (
    <main className="section-space">
      <div className="shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <SectionHeading
            eyebrow="What We Offer"
            title="A premium services showcase for personalized wellness, aesthetics, and concierge care."
            description="This page is designed as a polished consultation-first experience rather than a retail storefront. Browse by category, expand service details, and save offerings into My Interests before requesting a tailored consultation."
          />
          <div className="panel hidden p-6 lg:block">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">Consultation First</p>
            <p className="mt-4 text-sm leading-7 text-charcoal/70">
              Pricing is presented as starting-at guidance only. Final recommendations depend on medical history, goals, and individualized treatment planning.
            </p>
          </div>
        </section>

        <section>
          <ServiceBrowser />
        </section>

        <section className="panel p-8 md:p-10">
          <span className="eyebrow">Featured Focus | Concierge Medicine</span>
          <h2 className="headline-section max-w-3xl">
            Personalized access, longer visits, and a smaller patient panel make care feel more connected.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Direct relationship with your provider",
              "Same-day or next-day communication when appropriate",
              "Longer visits with space for questions and education",
              "Proactive follow-up and individualized treatment plans",
              "Guided support for weight, lifestyle, and long-term wellness",
              "A monthly membership model built around attentiveness and continuity"
            ].map((item) => (
              <div key={item} className="rounded-[24px] bg-[#faf7f2] px-5 py-4 text-sm leading-7 text-charcoal/70">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
