"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { Button } from "@/components/button";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-mist/90 backdrop-blur-xl">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.08em] text-charcoal"
        >
          Cura
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-charcoal",
                pathname === link.href ? "text-charcoal" : "text-charcoal/70",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/request-consultation">Request Consultation</Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      {open ? (
        <div className="border-t border-black/10 bg-white/95 lg:hidden">
          <div className="shell flex flex-col gap-3 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm text-charcoal/80 hover:bg-black/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/request-consultation" className="justify-center">
              Request Consultation
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
