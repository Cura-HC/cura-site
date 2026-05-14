import { EducationBrowser } from "@/components/education-browser";
import { SectionHeading } from "@/components/section-heading";
import { socialLinks } from "@/data/site";

export default function EducationPage() {
  return (
    <main className="section-space">
      <div className="shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <SectionHeading
            eyebrow="Education"
            title="A premium resource hub for thoughtful wellness and preventative care content."
            description="The Cura education center offers thoughtful, general wellness and preventative care content for patients who want clear, responsible information."
          />
          <div className="panel p-6 text-sm leading-7 text-charcoal/70">
            Educational content is for general information only and does not replace individualized medical advice, diagnosis, or treatment.
          </div>
        </section>

        <EducationBrowser />

        <section className="panel p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-taupe">Follow Cura for Health Updates</p>
              <h2 className="mt-4 font-serif text-3xl text-charcoal">Extend the education experience across social content and short-form updates.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-charcoal/70">
                This area can support direct links to social posts, educational reels, physician commentary, or curated wellness updates tailored to Cura’s audience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} className="rounded-full border border-black/10 bg-white px-4 py-3 text-sm text-charcoal/70 transition hover:bg-[#faf7f2] hover:text-charcoal">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
