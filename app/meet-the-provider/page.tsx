import Image from "next/image";

export default function MeetTheProviderPage() {
  return (
    <main className="section-space">
      <div className="shell">
        <section className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="panel rounded-[32px] p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">Meet the Provider</p>
            <div className="mt-6 flex min-h-[420px] items-center justify-center rounded-[28px] border border-black/10 bg-[#faf7f2] p-8">
              <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/70 shadow-float">
                <Image
                  src="/images/jorge-cruz-headshot.jpg"
                  alt="Jorge Cruz, Nurse Practitioner"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover object-[center_20%] transition duration-700"
                />
              </div>
            </div>
            <h1 className="mt-6 font-serif text-4xl text-charcoal">Jorge Cruz</h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-taupe">
              Double Board-Certified Nurse Practitioner
            </p>
          </div>

          <article className="panel rounded-[32px] p-8 md:p-10">
            <span className="eyebrow">Meet the Provider</span>
            <h2 className="headline-section max-w-3xl">Proactive, whole-person care with a community-first mindset.</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-charcoal/75">
              <p>
                Jorge is a double board-certified Nurse Practitioner with a background spanning adult primary care, critical care, and weight management. He trained at Georgetown University, where his foundation in evidence-based, whole-person care was built.
              </p>
              <p>
                His approach is proactive, not reactive. Most chronic disease builds quietly over years through gaps in nutrition, movement, sleep, and preventive care. After working extensively in critical care and with the geriatric community, Jorge began reverse-engineering those patterns to understand what could have been prevented and when.
              </p>
              <p>
                That became the foundation of Cura Health Collective. He works side by side with his patients to bridge traditional medicine with the pillars that actually drive health, empowering them to lead their lives with intention and take ownership of their health before problems demand attention.
              </p>
              <p>
                A Jersey City native and local at heart, Jorge brings that same community-first mindset into the practice. When he is not seeing patients, you can find him traveling, exploring new restaurants, or building his next project. That curiosity follows him into the exam room. He loves getting to know his patients beyond their chart, understanding their habits, and using technology to get a more accurate picture of their health so that together, they can make changes that actually stick and lead to a healthier, more purposeful life.
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
