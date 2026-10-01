"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { contactDetails } from "@/data/site";
import { cn } from "@/lib/utils";

/** Mobile-only booking bar; slides in once the hero scrolls away. */
export function BookingBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/request-consultation") {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-mist/95 px-4 pt-3 backdrop-blur-xl transition-transform duration-300 lg:hidden",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center gap-3">
        <Link
          href="/request-consultation"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3.5 text-sm font-semibold text-white shadow-float transition hover:bg-black"
        >
          Request Consultation
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <a
          href={`tel:${contactDetails.phoneHref}`}
          aria-label={`Call Cura at ${contactDetails.phone}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-charcoal/20 bg-white text-charcoal transition hover:border-charcoal/40"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
