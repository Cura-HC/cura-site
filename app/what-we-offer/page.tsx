import { SectionHeading } from "@/components/section-heading";
import { ServiceBrowser } from "@/components/service-browser";

export default function WhatWeOfferPage() {
  return (
    <main className="section-space">
      <div className="shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <SectionHeading
            eyebrow="What We Offer"
            title="Personalized care for weight loss, wellness, performance, and long-term health optimization."
            description="Cura offers clinically guided services designed to support sustainable weight loss, metabolic health, recovery, proactive primary care, and long-term wellbeing."
          />
          <div className="panel hidden p-6 lg:block">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">Consultation First</p>
            <p className="mt-4 text-sm leading-7 text-charcoal/70">
              Final recommendations depend on medical history, goals, clinical needs, and individualized treatment planning.
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
