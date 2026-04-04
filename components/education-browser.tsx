"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { articles } from "@/data/site";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];

export function EducationBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const text = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="panel mb-8 p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <label className="block">
            <span className="sr-only">Search educational content</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search topics, treatments, or FAQs"
              className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none transition focus:border-charcoal"
            />
          </label>
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  category === item
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-black/10 bg-white text-charcoal/70 hover:bg-[#faf7f2]"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((article) => (
          <article key={article.slug} className="panel flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-float">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#f6f1ea] px-3 py-1 text-xs uppercase tracking-[0.18em] text-taupe">
                {article.category}
              </span>
              <span className="text-xs text-charcoal/45">{article.readTime}</span>
            </div>
            <h3 className="mt-5 font-serif text-2xl text-charcoal">{article.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-charcoal/70">{article.excerpt}</p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-[0.18em] text-charcoal/45">{article.date}</span>
              <Link href={`/education/${article.slug}`} className="text-sm font-medium text-charcoal transition hover:text-black">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
