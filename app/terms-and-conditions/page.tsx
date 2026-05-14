import { LegalTemplate } from "@/components/legal-template";

export default function TermsPage() {
  return (
    <LegalTemplate
      title="Terms and Conditions"
      intro="By using this website, you agree to the following terms and conditions. This website is intended to provide general information about Cura Health Collective, PC and the services we may offer."
    >
      <section>
        <h2 className="font-serif text-2xl text-charcoal">No Medical Advice Through Website</h2>
        <p className="mt-3">
          The content on this website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. Viewing this website or contacting us through the website does not create a provider-patient relationship.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Provider-Patient Relationship</h2>
        <p className="mt-3">
          A provider-patient relationship is only established after appropriate intake, consent, clinical evaluation, and acceptance by Cura Health Collective, PC.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Accuracy of Information</h2>
        <p className="mt-3">
          We make reasonable efforts to keep website information accurate and current, but we do not guarantee that all content is complete, current, or error-free.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Use of Website</h2>
        <p className="mt-3">
          You agree not to misuse this website, submit false information, attempt unauthorized access, or interfere with website operations.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">External Links</h2>
        <p className="mt-3">
          This website may contain links to third-party websites or platforms. Cura Health Collective, PC is not responsible for the content, privacy practices, or policies of third-party websites.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Limitation of Liability</h2>
        <p className="mt-3">
          Cura Health Collective, PC is not liable for damages related to use of this website or reliance on general information presented here.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Contact</h2>
        <p className="mt-3">For questions about these terms, contact health@cura-hc.com or 551-310-4708.</p>
      </section>
    </LegalTemplate>
  );
}
