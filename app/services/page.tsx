import { SectionHeading } from "@/components/section-heading";
import { ServiceBrowser } from "@/components/service-browser";

export default function WhatWeOfferPage() {
  return (
    <main className="section-space">
      <div className="shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <SectionHeading
            eyebrow="What We Offer"
            title="Personalized care for lifelong health."
            description="Cura offers clinically-guided personalized services focused on weight loss, primary care, longevity, recovery, and aesthetic wellness."
          />
          <div className="panel p-6 lg:block">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">Consultation First</p>
            <p className="mt-4 text-sm leading-7 text-charcoal/70">
              Select services you are interested in for a tailored consultation request. Final recommendations depend on medical history, goals, clinical needs, and individualized treatment planning. 
            </p>
          </div>
        </section>

        <section>
          <ServiceBrowser />
        </section>
      </div>
    </main>
  );
}
