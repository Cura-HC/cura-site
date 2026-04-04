import Link from "next/link";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <main className="section-space">
      <div className="shell">
        <div className="panel mx-auto max-w-4xl rounded-[36px] p-10 text-center md:p-14">
          <p className="text-xs uppercase tracking-[0.25em] text-taupe">404</p>
          <h1 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">This page is not part of the current Cura site map.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-charcoal/70">
            The link may be outdated, or this route may be reserved for future content such as legal copy, CMS-driven articles, or booking integrations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/">Return Home</Button>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm font-medium text-charcoal transition hover:bg-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
