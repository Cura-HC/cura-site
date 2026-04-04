import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
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
            title="A polished booking request experience that feels clear, warm, and reassuring."
            description="This demo page is structured for future Square scheduling or secure inquiry integrations while already presenting a premium front-end experience for consultations and appointment requests."
          />
          <div className="panel p-6 text-sm leading-7 text-charcoal/70">
            Square integration placeholder: embed booking flow or scheduling widget here once operational details are finalized.
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <Suspense fallback={<div className="panel rounded-[32px] p-8">Loading form...</div>}>
            <ContactForm />
          </Suspense>
          <div className="space-y-6">
            <div className="panel rounded-[32px] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-taupe">Contact Information</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-charcoal/70">
                <p>{contactDetails.address}</p>
                <p>{contactDetails.phone}</p>
                <a href={`mailto:${contactDetails.email}`} className="font-medium text-charcoal">
                  {contactDetails.email}
                </a>
              </div>
            </div>
            <div className="panel rounded-[32px] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-taupe">What to Expect</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-charcoal/70">
                <li>A thoughtful first conversation centered on your goals and symptoms</li>
                <li>Guidance on the most appropriate next steps, services, or membership path</li>
                <li>Clear expectations around follow-up, communication, and care planning</li>
              </ul>
            </div>
            <OfficeFrame
              title="Office and location imagery"
              subtitle="This is a strong placement for Cura’s uploaded office photos or map-adjacent imagery that reinforces warmth, calm, and approachability."
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
            <p className="text-xs uppercase tracking-[0.25em] text-taupe">Map / Booking Embed Placeholder</p>
            <div className="mt-6 flex min-h-[360px] items-center justify-center rounded-[28px] border border-dashed border-black/10 bg-[#faf7f2] p-8 text-center text-sm leading-7 text-charcoal/60">
              Replace this panel with a live map, Square scheduler, or location component once production integrations are ready.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
