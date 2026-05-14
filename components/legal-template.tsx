import { ReactNode } from "react";

export function LegalTemplate({
  title,
  effectiveDate = "May 2026",
  intro,
  children
}: {
  title: string;
  effectiveDate?: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="section-space">
      <div className="shell">
        <div className="panel mx-auto max-w-4xl p-8 md:p-12">
          <span className="eyebrow">Legal Information</span>
          <h1 className="headline-section">{title}</h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-taupe">Effective Date: {effectiveDate}</p>
          {intro ? <p className="mt-5 max-w-3xl text-base leading-7 text-charcoal/70">{intro}</p> : null}
          <div className="mt-8 space-y-8 text-base leading-8 text-charcoal/75">{children}</div>
        </div>
      </div>
    </main>
  );
}
