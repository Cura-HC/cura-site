import Image from "next/image";
import { Button } from "@/components/button";
import { ProviderCard } from "@/components/provider-card";
import { StoryCarousel } from "@/components/story-carousel";
import { FeaturedServices } from "@/components/featured-services";
import { contactDetails, homeStory } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      {/* Hero: waiting room photo beside the headline */}
      <section className="hero-wash relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="shell grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="reveal relative hidden aspect-[3/4] overflow-hidden rounded-[24px] border border-black/10 bg-[#faf7f2] shadow-soft lg:block">
            <Image
              src="/images/cura-waiting-room.jpeg"
              alt="The sunlit Cura Health Collective waiting room with a wood slat wall and bench"
              fill
              sizes="35vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="kicker reveal !text-charcoal">
              Direct Personalized Medicine · Weight Loss · Peptides · Longevity
            </p>
            <h1 className="headline-hero reveal reveal-delay-1 mt-8 text-balance">
              Proactive, individualized care for a life lived at your best
            </h1>
            <p className="reveal reveal-delay-2 mx-auto mt-7 max-w-xl text-base leading-8 text-charcoal/75 md:text-lg lg:mx-0">
              At Cura Health Collective, medical care and aesthetic treatments
              live under one roof. The same team that manages your health
              understands how you want to look and feel, so every plan, from
              weight loss to injectables, is built around the whole you.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-black/10 bg-[#faf7f2] shadow-soft lg:hidden">
            <Image
              src="/images/cura-waiting-room.jpeg"
              alt="The sunlit Cura Health Collective waiting room with a wood slat wall and bench"
              fill
              sizes="100vw"
              className="object-cover object-[50%_65%]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="section-space bg-[#f5eee5]">
        <div className="shell">
          <div className="text-center">
            <p className="kicker">What We Offer</p>
            <h2 className="title-centered mt-5">What brings you in?</h2>
          </div>

          <FeaturedServices />
        </div>
      </section>

      {/* Full-bleed invitation band */}
      <section className="bg-charcoal text-white">
        <div className="shell py-14 text-center md:py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/55">
            New Patients
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl leading-snug md:text-4xl">
            Start with a conversation, not a checklist.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            Every patient begins with a consultation, so your goals, history, and
            priorities shape the plan before any treatment is recommended.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Button href="/request-consultation" variant="light" size="lg">
              Request Consultation
            </Button>
            <Button href="/services" variant="outline-light" size="lg">
              View Services
            </Button>
            <a
              href={`tel:${contactDetails.phoneHref}`}
              className="text-sm tracking-[0.12em] text-white/75 transition hover:text-white"
            >
              or call {contactDetails.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Editorial story carousel */}
      <StoryCarousel slides={homeStory} label="Why Cura" />

      {/* Provider */}
      <section className="section-space">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="kicker">Why Cura</p>
            <h2 className="headline-section mt-5 max-w-xl text-balance">
              More time. More access. More personalized care.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-charcoal/75">
              You&rsquo;re never just another appointment here. Longer visits,
              direct communication, and proactive follow-up let us give guidance
              built on continuity and trust.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-charcoal/75">
              Cura is supported by a team of experienced medical providers,
              aesthetic specialists, and patient care professionals.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                About the Practice
              </Button>
            </div>
          </div>
          <ProviderCard />
        </div>
      </section>
    </main>
  );
}
