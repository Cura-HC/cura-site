import { OfficeFrame } from "@/components/office-frame";
import { MethodExplorer } from "@/components/method-explorer";
import { SectionHeading } from "@/components/section-heading";
import { provider } from "@/data/site";
import Image from "next/image";

function CuraMethod() {
  return (
    <main className="section-space">
      <div className="shell space-y-14">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="The Cura Method"
            title="A five-step care model built for clarity, personalization, and long-term optimization."
            description="Cura approaches care as a guided process, not a quick transaction. Each stage helps patients feel informed, supported, and confident in what comes next."
          />
        </section>

        <section>
          <MethodExplorer />
        </section>
      </div>
    </main>
  );
}

function MeetTheProvider() {
  return (
    <main id="meet-the-provider" className="section-space">
      <div className="shell">
        <section className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="panel rounded-[32px] p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">
              Meet the Provider
            </p>
            <div className="relative mt-6 aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-black/10 bg-[#faf7f2]">
              <Image
                src={provider.headshot}
                alt={provider.headshotAlt}
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-6 font-serif text-4xl text-charcoal">
              Jorge Cruz
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-taupe">
              Double Board-Certified Nurse
               Practitioner
            </p>
          </div>

          <article className="panel rounded-[32px] p-8 md:p-10">
            <span className="eyebrow">Meet the Provider</span>
            <h2 className="headline-section max-w-3xl">
              Proactive, whole-person care with a community-first mindset.
            </h2>
            <div className="mt-8 space-y-8">
              {provider.bio.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-xs uppercase tracking-[0.22em] text-taupe">
                    {section.heading}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-charcoal/75">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default function AboutPage() {
  return (
    <>
      <main className="section-space">
        <div className="shell space-y-14">
          <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">About Cura</span>
              <h1 className="headline-display max-w-3xl">
                A modern care experience built around time, trust, and the full
                picture of your health.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
                Cura offers a more thoughtful alternative to traditional primary
                care. The brand is grounded in personalization, education,
                access, and long-term wellness support delivered in an elevated
                but approachable setting.
              </p>
            </div>
            <OfficeFrame
              title="Built for deeper relationships"
              subtitle="Smaller patient panels, longer appointments, and direct communication create the time and continuity needed for personalized care."
            />
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {[
              [
                "Personalized",
                "Every care plan is built around your goals, history, and lifestyle—not a one-size-fits-all protocol.",
              ],
              [
                "Proactive",
                "We identify risks early and address them before they become larger health concerns.",
              ],
              [
                "Connected",
                "Consistent follow-up and direct communication help you stay on track between visits.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="panel p-6">
                <h2 className="font-serif text-2xl text-charcoal">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-charcoal/70">
                  {text}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <CuraMethod />
      <MeetTheProvider />
    </>
  );
}
