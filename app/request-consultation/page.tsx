import { ConsultationForm } from "@/components/consultation-form";

export default function RequestConsultationPage() {
  return (
    <main className="section-space">
      <div className="shell max-w-3xl space-y-10">
        <header>
          <span className="eyebrow">Request Consultation</span>
          <h1 className="headline-section text-balance">
            Request a Consultation
          </h1>
          <p className="mt-5 text-base leading-7 text-charcoal/70 md:text-lg">
            Tell us a little about yourself and your goals. Your selected
            services have been included below.
          </p>
        </header>

        <ConsultationForm />
      </div>
    </main>
  );
}
