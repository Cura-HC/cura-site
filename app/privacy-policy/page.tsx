import { LegalTemplate } from "@/components/legal-template";

export default function PrivacyPolicyPage() {
  return (
    <LegalTemplate
      title="Privacy Policy"
      intro="Cura Health Collective, PC respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we may collect, use, and protect information submitted through our website, contact forms, scheduling requests, or other communication channels."
    >
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Information We May Collect</h2>
        <p className="mt-3">
          We may collect basic contact information such as your name, phone number, email address, and information you voluntarily provide when contacting us or requesting information about our services.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">How We Use Information</h2>
        <p className="mt-3">
          We may use information to respond to inquiries, provide appointment-related communication, share general information about our services, improve our website, and support administrative operations.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Health Information</h2>
        <p className="mt-3">
          Information shared with Cura Health Collective, PC may be subject to privacy protections under applicable healthcare privacy laws, including HIPAA when applicable. Please avoid sending sensitive medical information through general website contact forms unless instructed to do so through a secure channel.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Information Sharing</h2>
        <p className="mt-3">
          We do not sell personal information. We may share information only as needed to operate our practice, comply with applicable laws, communicate with patients, or work with service providers who support our operations and are required to protect information appropriately.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Security</h2>
        <p className="mt-3">
          We use reasonable administrative, technical, and physical safeguards to protect information. However, no website or electronic communication method can be guaranteed to be completely secure.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Contact</h2>
        <p className="mt-3">For privacy-related questions, please contact us at health@cura-hc.com or 551-310-4708.</p>
      </section>
    </LegalTemplate>
  );
}
