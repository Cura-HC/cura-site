import { Button } from "@/components/button";
import { OfficeFrame } from "@/components/office-frame";

export default function AboutPage() {
  return (
    <main className="section-space">
      <div className="shell space-y-14">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <span className="eyebrow">About Cura</span>
            <h1 className="headline-display max-w-3xl">A modern care experience built around time, trust, and the full picture of your health.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
              Cura exists to offer a more thoughtful alternative to rushed traditional care. The brand is grounded in personalization, education, access, and long-term wellness support delivered in an elevated but approachable setting.
            </p>
            <div className="mt-8">
              <Button href="/meet-the-provider" variant="secondary">
                Meet the Provider
              </Button>
            </div>
          </div>
          <OfficeFrame
            title="A calm environment designed around attention"
            subtitle="Cura connects modern medical care with a warm, thoughtful experience in Jersey City, NJ."
          />
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            ["Personalized", "Care begins with context: your goals, history, routines, risks, and priorities."],
            ["Proactive", "The focus is prevention, optimization, and addressing concerns before they become harder to change."],
            ["Connected", "Direct access and continuity help care feel more human, practical, and accountable."]
          ].map(([title, text]) => (
            <div key={title} className="panel p-6">
              <h2 className="font-serif text-2xl text-charcoal">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/70">{text}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
