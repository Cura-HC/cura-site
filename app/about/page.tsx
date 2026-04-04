import { OfficeFrame } from "@/components/office-frame";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <main className="section-space">
      <div className="shell space-y-20">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <span className="eyebrow">About Cura</span>
            <h1 className="headline-display max-w-3xl">Warm, modern care that values time, trust, and the full picture.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
              Cura exists to offer a more thoughtful alternative to rushed traditional care. The brand is grounded in personalization, education, access, and long-term wellness support delivered in an elevated but approachable setting.
            </p>
          </div>
          <OfficeFrame
            title="A calm environment designed around attention"
            subtitle="Use Cura office images here to connect the site directly to the real physical experience and reinforce the studio’s warm architectural language."
          />
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Mission", "Help patients feel better supported through personalized, proactive, medically credible care."],
            ["Philosophy", "Pair modern wellness and preventative medicine with meaningful provider relationships and real follow-through."],
            ["Difference", "Replace rushed visits and fragmented communication with clarity, access, and individualized planning."],
            ["Commitment", "Keep the experience warm, sophisticated, and grounded in education rather than hype."]
          ].map(([title, text]) => (
            <div key={title} className="panel p-6">
              <h2 className="font-serif text-2xl text-charcoal">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/70">{text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="panel rounded-[32px] p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">Founder / Provider</p>
            <div className="mt-6 rounded-[28px] border border-dashed border-black/10 bg-[#faf7f2] p-8 text-sm leading-7 text-charcoal/60">
              Provider headshot placeholder. Replace with physician or founder imagery and finalized biography.
            </div>
            <h2 className="mt-6 font-serif text-3xl text-charcoal">Provider Name, Credentials</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/70">
              Cura’s provider bio should emphasize medical training, clinical expertise, modern wellness fluency, and a care philosophy rooted in relationship-centered medicine.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why This Model Matters"
              title="Better care starts with enough time, stronger continuity, and individualized planning."
              description="Cura is designed around longer visits, proactive follow-up, guided education, and a provider-patient relationship that can actually support change over time."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Patients are seen as whole people rather than isolated symptoms or rushed appointment slots.",
                "Longer visits create room to understand goals, stressors, routines, and the context behind symptoms.",
                "Care plans are adapted over time through follow-up, response tracking, and practical education.",
                "The office environment, communication style, and treatment model all reinforce trust and calm."
              ].map((item) => (
                <div key={item} className="panel p-5 text-sm leading-7 text-charcoal/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="panel p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">Credentials Placeholder</p>
            <h2 className="mt-4 font-serif text-3xl text-charcoal">Clinical expertise and trust-building details can live here.</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/70">
              Add medical credentials, specialized training, certifications, speaking experience, media mentions, or institutional affiliations once finalized.
            </p>
          </div>
          <OfficeFrame
            title="The office as part of the brand experience"
            subtitle="This section is intentionally photo-ready for the uploaded Cura space. Add imagery showing reception, consultation rooms, and architectural details."
          />
        </section>
      </div>
    </main>
  );
}
