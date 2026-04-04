import { notFound } from "next/navigation";
import { articles } from "@/data/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function EducationArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolved = await params;
  const article = articles.find((entry) => entry.slug === resolved.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="section-space">
      <div className="shell">
        <article className="panel mx-auto max-w-4xl p-8 md:p-12">
          <span className="eyebrow">{article.category}</span>
          <h1 className="headline-section max-w-3xl">{article.title}</h1>
          <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-charcoal/45">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          <div className="mt-10 space-y-6 text-base leading-8 text-charcoal/75">
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-[28px] bg-[#faf7f2] p-6 text-sm leading-7 text-charcoal/60">
            Educational content disclaimer placeholder: this content is for informational purposes only and is not a substitute for personalized medical advice, diagnosis, or treatment.
          </div>
        </article>
      </div>
    </main>
  );
}
