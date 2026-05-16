import { Suspense } from "react";
import ContactForm from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { OfficeFrame } from "@/components/office-frame";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails, faqs } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="section-space">
      <div className="shell space-y-14">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="Contact | Book Appointment"
            title="A clear, warm first step toward personalized care."
            description="Contact Cura Health Collective, PC for more information or to request an appointment. After requesting an appointment, you will receive appointment confirmation and next-step instructions."
          />
          <div className="panel p-6 text-sm leading-7 text-charcoal/70">
            During your visit, a licensed provider will review your health
            history, goals, and clinical needs to determine whether our services
            are appropriate for you.
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <Suspense
            fallback={
              <div className="panel rounded-[32px] p-8">Loading form...</div>
            }
          >
            <ContactForm />
          </Suspense>
          <div className="space-y-6">
            <div className="panel rounded-[32px] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-taupe">
                Contact Information
              </p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-charcoal/70">
                <p>{contactDetails.location}</p>
                <p>{contactDetails.phone}</p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="font-medium text-charcoal"
                >
                  {contactDetails.email}
                </a>
                <a
                  href={contactDetails.instagramHref}
                  className="block font-medium text-charcoal"
                >
                  Instagram: {contactDetails.instagram}
                </a>
              </div>
            </div>
            <div className="panel rounded-[32px] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-taupe">
                What to Expect
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-charcoal/70">
                <li>
                  A thoughtful first conversation centered on your goals and
                  symptoms
                </li>
                <li>
                  Guidance on the most appropriate next steps, services, or
                  membership path
                </li>
                <li>
                  Clear expectations around follow-up, communication, and care
                  planning
                </li>
                <li>
                  Patient location may be confirmed as part of scheduling,
                  intake, and visit workflows
                </li>
              </ul>
            </div>
            <OfficeFrame
              title="Cura Health Collective"
              subtitle="A calm, medical-modern care experience serving patients located in New Jersey."
            />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="FAQs"
              title="Answers that help the first step feel easier."
              description="The contact experience should reduce uncertainty, especially for patients who are new to concierge medicine or wellness consultations."
            />
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
          <div className="panel rounded-[32px] p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">
              Map / Booking Embed Placeholder
            </p>
            <div className="mt-6 flex min-h-[360px] items-center justify-center rounded-[28px] border border-dashed border-black/10 bg-[#faf7f2] p-8 text-center text-sm leading-7 text-charcoal/60">
              Cura Health Collective, PC currently serves patients located in
              New Jersey. General location: Jersey City, NJ
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
