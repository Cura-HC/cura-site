import Link from "next/link";
import { contactDetails, navLinks, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f2ece3]">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.3fr_0.8fr_0.9fr_0.9fr]">
        <div>
          <Link href="/" className="font-serif text-3xl tracking-[0.08em] text-charcoal">
            Cura Health Collective, PC
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-charcoal/70">
            Concierge medicine and modern wellness care designed around access, prevention, aesthetics, and long-term health optimization.
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-charcoal/70">
            Cura Health Collective, PC currently serves patients located in New Jersey.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-taupe">Navigate</h3>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-charcoal/70 transition hover:text-charcoal">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-taupe">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-charcoal/70">
            <p>{contactDetails.location}</p>
            <p>{contactDetails.phone}</p>
            <a className="transition hover:text-charcoal" href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
            <a className="block transition hover:text-charcoal" href={contactDetails.instagramHref}>
              Instagram: {contactDetails.instagram}
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-taupe">Legal + Social</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-charcoal/70">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-charcoal">
                {item.label}
              </a>
            ))}
            <Link href="/privacy-policy" className="transition hover:text-charcoal">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="transition hover:text-charcoal">Terms and Conditions</Link>
            <Link href="/medical-disclaimer" className="transition hover:text-charcoal">Medical Disclaimers</Link>
            <Link href="/hipaa-contact-notice" className="transition hover:text-charcoal">HIPAA / Contact Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
