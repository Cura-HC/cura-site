import { StoryCarousel } from "@/components/story-carousel";
import { TeamGrid } from "@/components/team-grid";
import { aboutStory, team } from "@/data/site";

const values = [
  {
    title: "Personalized",
    text: "Every care plan is built around your goals, history, and lifestyle—not a one-size-fits-all protocol.",
  },
  {
    title: "Proactive",
    text: "We identify risks early and address them before they become larger health concerns.",
  },
  {
    title: "Exceptional",
    text: "Consistent follow-up and direct communication help you stay on track between visits.",
  },
];

function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="section-space">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Meet the Team</span>
        </div>
        <TeamGrid members={team} className="mt-12" />
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="hero-wash overflow-hidden pb-16 pt-14 md:pb-20 md:pt-20">
          <div className="shell">
            <div className="max-w-4xl">
              <span className="eyebrow">About Cura</span>
              <h1 className="headline-display text-balance">
                Personalized. Proactive. Exceptional.
              </h1>
              <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-charcoal/80">
                A modern care experience built around time, trust, and the full
                picture of your health.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
                At CURA Health Collective, we believe healthcare should be more than treating illness—it should be about helping people look, feel, and perform at their best.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
                We believe exceptional care starts with listening. It means understanding your lifestyle, your ambitions, your health history, and what makes you feel your best. We take the time to build lasting relationships and create personalized plans that evolve alongside you.
              </p>
            </div>

            <dl className="mt-16 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-3 md:gap-12">
              {values.map((value) => (
                <div key={value.title}>
                  <dt className="font-serif text-2xl text-charcoal">
                    {value.title}
                  </dt>
                  <dd className="mt-3 text-sm leading-7 text-charcoal/70">
                    {value.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <StoryCarousel slides={aboutStory} />

        <MeetTheTeam />
      </main>
    </>
  );
}
