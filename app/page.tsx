import Link from "next/link";
import { Button } from "@/components/button";
import { OfficeFrame } from "@/components/office-frame";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails, heroStats, featuredReasons, services, testimonials, methodSteps, articles } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="eyebrow reveal">Concierge Medicine | Wellness | Aesthetics</span>
            <h1 className="headline-display reveal reveal-delay-1 text-balance">
              Personalized modern care for weight, wellness, prevention, and long-term vitality.
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
              Cura blends concierge medicine, medical wellness, aesthetics, and preventative care into a calmer, more attentive experience built around direct access and individualized support.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Book Appointment</Button>
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
            subtitle="A calm, elevated clinical experience in Jersey City for concierge care, medical wellness, and long-term vitality."
            imageSrc="/images/cura-office-sign.jpeg"
            imageAlt="Cura Health Collective exterior sign"
            className="min-h-[580px]"
          />
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Welcome to Cura"
            title="A premium care model designed to feel personal, proactive, and calm."
            description="Cura was built for patients who want more than transactional appointments. We bring together personalized medical weight loss, wellness strategy, concierge primary care, preventative planning, and aesthetic medicine in one sophisticated environment."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredReasons.map((reason) => (
              <div key={reason.title} className="panel p-6">
                <h3 className="font-serif text-2xl text-charcoal">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f5eee5]">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured Services"
            title="High-touch wellness and medical services, curated with clinical judgment."
            description="From concierge primary care and hormone support to GLP-1 programs and aesthetics, Cura offers a focused suite of services designed for modern health optimization."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <article key={service.slug} className="panel flex h-full flex-col p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-taupe">{service.category}</p>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">{service.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-charcoal/70">{service.summary}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-charcoal/55">Starting at {service.startingAt}</span>
                  <Link href="/what-we-offer" className="text-sm font-medium text-charcoal">Learn More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="panel p-8 md:p-10">
            <span className="eyebrow">Concierge Medicine</span>
            <h2 className="headline-section max-w-2xl">A more direct, attentive relationship between patient and provider.</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-charcoal/75">
              <p>
                Cura's concierge model creates space for longer visits, proactive follow-up, and same-day or next-day communication when clinically appropriate.
              </p>
              <p>
                Instead of fragmented care, patients receive thoughtful guidance around weight management, prevention, lifestyle habits, hormones, wellness planning, and everyday health decisions.
              </p>
              <p>
                The result is a higher-touch care experience built on continuity, education, and trust.
              </p>
            </div>
          </div>
          <OfficeFrame
            title="Quiet luxury, medical credibility"
            subtitle="The visual language stays warm and refined rather than cold or overly clinical, helping Cura feel elevated without losing approachability."
          />
        </div>
      </section>

      <section className="section-space bg-[#f7f1ea]">
        <div className="shell">
          <SectionHeading
            eyebrow="Why Cura"
            title="Built for patients who value access, expertise, and a more thoughtful standard of care."
            description="Every touchpoint is designed to feel clear, supportive, and medically credible for patients seeking prevention, performance, and elevated wellness care."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Longer visits with room for real conversation",
              "Proactive follow-up and individualized treatment planning",
              "Integrated care spanning wellness, aesthetics, and primary care",
              "A calm premium environment that reflects the in-office experience"
            ].map((item) => (
              <div key={item} className="panel p-6 text-sm leading-7 text-charcoal/75">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="The Cura Method"
            title="A five-step approach designed for clarity, personalization, and follow-through."
            description="Care at Cura moves through a deliberate process that helps patients understand where they are, what matters most, and how treatment evolves over time."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {methodSteps.map((step, index) => (
              <div key={step.title} className="panel p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-taupe">Step {index + 1}</p>
                <h3 className="mt-3 font-serif text-2xl text-charcoal">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">{step.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="shell mt-8">
          <Button href="/cura-method" variant="secondary">
            Explore the Cura Method
          </Button>
        </div>
      </section>

      <section className="section-space bg-[#efe7dc]">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Education"
              title="A resource hub for modern wellness, concierge care, and evidence-informed health conversations."
              description="Cura's editorial content is designed to be helpful, clear, and grounded in responsible wellness education."
            />
            <Button href="/education" variant="secondary">
              Visit Education Hub
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <article key={article.slug} className="panel p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-taupe">{article.category}</p>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">{article.title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal/70">{article.excerpt}</p>
                <Link href={`/education/${article.slug}`} className="mt-6 inline-flex text-sm font-medium text-charcoal">
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Patient Perspective"
            title="Patient perspectives rooted in trust, attention, and continuity."
            description="Cura’s care experience is designed to feel thoughtful, accessible, and grounded in real provider-patient relationships."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="panel p-7">
                <p className="text-base leading-8 text-charcoal/75">"{item.quote}"</p>
                <footer className="mt-6">
                  <p className="font-medium text-charcoal">{item.name}</p>
                  <p className="text-sm text-charcoal/55">{item.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-charcoal text-white">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow border-white/20 bg-white/10 text-white/75">Membership</span>
            <h2 className="headline-section text-white">Personalized monthly care for patients who want more access and better follow-through.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
              Cura's concierge membership is designed for patients who value consistency, direct communication, and a provider relationship that extends beyond isolated appointments.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/10 p-8">
            <ul className="space-y-4 text-sm leading-7 text-white/75">
              <li>Smaller patient panel and high-touch communication</li>
              <li>Longer visits with more time for education and care planning</li>
              <li>Proactive support around preventative care, wellness, and lifestyle strategy</li>
              <li>A streamlined experience for busy clients who want elevated service</li>
            </ul>
          </div>
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
                  Whether you are exploring GLP-1 weight loss, hormone support, concierge primary care, or a broader wellness plan, Cura offers an elevated first step.
                </p>
                <div className="mt-6 grid gap-3 text-sm leading-7 text-charcoal/70 sm:grid-cols-2">
                  <p>Phone: {contactDetails.phone}</p>
                  <p>Email: {contactDetails.email}</p>
                  <p>Location: {contactDetails.location}</p>
                  <p>Instagram: {contactDetails.instagram}</p>
                </div>
              </div>
              <Button href="/contact">Request Your Appointment</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
