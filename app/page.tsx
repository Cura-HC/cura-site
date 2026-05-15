import { Button } from "@/components/button";
import { OfficeFrame } from "@/components/office-frame";
import { SectionHeading } from "@/components/section-heading";
import { heroStats, services } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="eyebrow reveal">Direct Personalized Medicine | Weight Loss | Peptides | Longevity</span>
            <h1 className="headline-display reveal reveal-delay-1 text-balance">
              Proactive, individualized care for prevention, optimization, and a life lived at your best
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
              At Cura Health Collective, we take a proactive, whole-person approach to primary care. Our practice is built around understanding each patient deeply, addressing the root causes of disease, and providing the ongoing support needed to sustain long-term wellbeing.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Book an Appointment</Button>
              <Button href="/what-we-offer" variant="secondary">
                Explore Services
              </Button>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.value} className="panel p-5">
                  <p className="font-serif text-2xl text-charcoal">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-charcoal/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <OfficeFrame
            title="Welcome to Cura Health Collective"
            subtitle="A calm, elevated clinical experience in Jersey City for direct primary care, medical wellness, and long-term vitality."
            imageSrc="/images/cura-office-sign.jpeg"
            imageAlt="Cura Health Collective exterior sign"
            className="min-h-[580px]"
          />
        </div>
      </section>

      <section className="section-space bg-[#f5eee5]">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured Services"
            title="Personalized medical care for weight loss, wellness, and long-term health optimization."
            description="Cura offers direct-access, clinically guided services designed to support sustainable weight loss, metabolic health, recovery, performance, and proactive primary care."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <article key={service.slug} className="panel flex h-full flex-col p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-taupe">{service.category}</p>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">{service.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-charcoal/70">{service.summary}</p>
                <Button href="/what-we-offer" variant="secondary" className="mt-6 justify-center">
                  Learn More
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="panel p-8 md:p-10">
            <span className="eyebrow">Direct Primary Care</span>
            <h2 className="headline-section max-w-2xl">A more direct, attentive relationship between patient and provider.</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-charcoal/75">
              <p>
                Cura creates space for deeper visits, proactive follow-up, and personalized guidance across prevention, metabolic health, recovery, hormones, and everyday wellbeing.
              </p>
              <p>
                The result is a calm, high-touch care experience built on continuity, education, and trust.
              </p>
            </div>
          </div>
          <OfficeFrame
            title="Quiet luxury, medical credibility"
            subtitle="The visual language stays warm and refined rather than cold or overly clinical, helping Cura feel elevated without losing approachability."
          />
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <div className="panel overflow-hidden rounded-[36px] px-8 py-12 md:px-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="eyebrow">Book a Consultation</span>
                <h2 className="headline-section max-w-3xl">
                  Start with a conversation that feels calm, clear, and built around your goals.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/70">
                  Whether you are exploring GLP-1 weight loss, hormone support, direct primary care, or a broader wellness plan, Cura offers a personalized first step toward long-term health optimization.
                </p>
              </div>
              <Button href="/contact">Book an Appointment</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
