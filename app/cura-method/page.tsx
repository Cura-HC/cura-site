import { MethodExplorer } from "@/components/method-explorer";
import { SectionHeading } from "@/components/section-heading";

export default function CuraMethodPage() {
  return (
    <main className="section-space">
      <div className="shell space-y-14">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="The Cura Method"
            title="A five-step care model built for clarity, personalization, and long-term optimization."
            description="Cura approaches care as a guided process, not a quick transaction. Each stage helps patients feel informed, supported, and confident in what comes next."
          />
          <div className="panel p-6 text-sm leading-7 text-charcoal/70">
            Interactive by design: this experience uses an editorial process layout so prospective patients can understand how consultations become tailored plans and ongoing support.
          </div>
        </section>

        <section>
          <MethodExplorer />
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {[
            "Discover your goals, history, and baseline",
            "Assess meaningful clinical context and lab data",
            "Personalize a plan aligned with your priorities",
            "Treat through evidence-informed services and support",
            "Optimize through follow-up, education, and refinement"
          ].map((item, index) => (
            <div key={item} className="panel p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-taupe">Phase {index + 1}</p>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">{item}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
