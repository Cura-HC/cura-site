"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  const params = useSearchParams();
  const preselected = useMemo(() => params.get("services")?.split(",").filter(Boolean).join(", "), [params]);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="panel rounded-[32px] p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-taupe">Request Received</p>
        <h3 className="mt-4 font-serif text-3xl text-charcoal">Thank you for reaching out.</h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-charcoal/70">
          Your consultation request has been captured in this demo flow. This is the place to connect a future booking or CRM integration for Cura.
        </p>
      </div>
    );
  }

  return (
    <form
      className="panel rounded-[32px] p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Name</span>
          <input required className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Email</span>
          <input type="email" required className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Phone</span>
          <input type="tel" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Service of Interest</span>
          <input
            defaultValue={preselected || ""}
            placeholder="GLP-1 / Medical Weight Loss"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Preferred Appointment Date</span>
          <input type="date" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Preferred Time</span>
          <input type="time" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal" />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-charcoal/75">Message</span>
        <textarea
          rows={5}
          placeholder="Tell us a bit about your goals, symptoms, or what you hope to explore."
          className="w-full rounded-[24px] border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
        />
      </label>

      <div className="mt-6 rounded-[24px] border border-dashed border-black/10 bg-[#faf7f2] p-4 text-sm leading-6 text-charcoal/60">
        Future integration placeholder: connect this form to Square booking, a secure contact workflow, or a CRM once the backend stack is selected.
      </div>

      <button type="submit" className="mt-6 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:bg-black">
        Submit Request
      </button>
    </form>
  );
}
