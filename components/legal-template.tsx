import { ReactNode } from "react";

export function LegalTemplate({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="section-space">
      <div className="shell">
        <div className="panel mx-auto max-w-4xl p-8 md:p-12">
          <span className="eyebrow">Compliance Placeholder</span>
          <h1 className="headline-section">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-charcoal/70">{description}</p>
          <div className="mt-8 space-y-5 text-base leading-8 text-charcoal/75">{children}</div>
        </div>
      </div>
    </main>
  );
}
