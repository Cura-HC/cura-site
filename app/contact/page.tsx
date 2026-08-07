import { Suspense } from "react";
import ContactForm from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { InstagramIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails, faqs } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="section-space">
      <div className="shell space-y-14">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="Contact"
            title="Questions? We're here to help."
            description="Whether you're curious about membership, services, pricing, or becoming a patient, we'd love to hear from you."
          />
        </section>

        <section className="grid gap-8 items-start xl:grid-cols-[1.05fr_0.95fr]">
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
              <dl className="mt-6 space-y-5 text-sm leading-7 text-charcoal/70">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-charcoal/45">Address</dt>
                  <dd className="mt-1">
                    <p>{contactDetails.street}</p>
                    <p>{contactDetails.cityStateZip}</p>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-charcoal/45">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${contactDetails.phoneHref}`} className="font-medium text-charcoal">
                      {contactDetails.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-charcoal/45">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${contactDetails.email}`} className="font-medium text-charcoal">
                      {contactDetails.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-charcoal/45">Instagram</dt>
                  <dd className="mt-1">
                    <a
                      href={contactDetails.instagramHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-charcoal transition hover:text-black"
                    >
                      <InstagramIcon className="h-4 w-4" />
                      {contactDetails.instagram}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-6 border-t border-black/10 pt-5 text-sm leading-6 text-charcoal/55">
                {contactDetails.hoursNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </div>
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
        </section>
      </div>
    </main>
  );
}
