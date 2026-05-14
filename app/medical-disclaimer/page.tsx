import { LegalTemplate } from "@/components/legal-template";

export default function MedicalDisclaimerPage() {
  return (
    <LegalTemplate
      title="Medical Disclaimers"
      intro="The information on this website is provided for general educational and informational purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment."
    >
      <section>
        <h2 className="font-serif text-2xl text-charcoal">No Emergency Care</h2>
        <p className="mt-3">
          Cura Health Collective, PC does not provide emergency medical services through this website. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">No Guarantee of Results</h2>
        <p className="mt-3">
          Health outcomes vary by individual. Cura Health Collective, PC does not guarantee specific results from any service, treatment plan, or wellness program.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Clinical Appropriateness</h2>
        <p className="mt-3">
          All services are subject to clinical evaluation, medical appropriateness, provider discretion, and applicable laws and regulations.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Individualized Care</h2>
        <p className="mt-3">
          Recommendations, treatment options, and care plans are determined based on individual history, risk factors, goals, and clinical evaluation.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Not a Substitute for Ongoing Care</h2>
        <p className="mt-3">
          Information on this website should not be used as a substitute for medical care from a qualified healthcare provider.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-charcoal">Contact</h2>
        <p className="mt-3">For questions, contact health@cura-hc.com or 551-310-4708.</p>
      </section>
    </LegalTemplate>
  );
}
