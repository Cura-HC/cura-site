import { LegalTemplate } from "@/components/legal-template";

export default function HipaaNoticePage() {
  return (
    <LegalTemplate
      title="HIPAA / Contact Notice"
      intro="Cura Health Collective, PC is committed to protecting patient privacy and handling health information in accordance with applicable privacy laws, including HIPAA when applicable."
    >
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Website Contact Forms</h2>
        <p className="mt-3">
          Please do not submit sensitive medical information, detailed health history, insurance information, payment information, or urgent medical concerns through general website contact forms.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Communication</h2>
        <p className="mt-3">
          General website messages, emails, calls, or social media messages may not be fully secure and should be used only for general inquiries unless otherwise directed.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Protected Health Information</h2>
        <p className="mt-3">
          Once you become a patient, Cura Health Collective, PC may provide secure methods for sharing health information, completing forms, and communicating about care.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Emergency Notice</h2>
        <p className="mt-3">
          Do not use website forms, email, voicemail, or social media for emergencies. If you have a medical emergency, call 911 or go to the nearest emergency department.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Business Associate / Vendor Notice</h2>
        <p className="mt-3">
          Cura Health Collective, PC may work with third-party service providers to support practice operations. Where required, appropriate privacy and security agreements are maintained.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Contact</h2>
        <p className="mt-3">For privacy, HIPAA, or communication-related questions, contact health@cura-hc.com or 551-310-4708.</p>
      </section>
    </LegalTemplate>
  );
}
