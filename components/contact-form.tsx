"use client";

import { useState } from "react";

const SERVICES = [
  "GLP-1 medical weight loss",
  "Peptide therapy",
  "Longevity/performance medicine",
  "Direct primary care membership",
  "IV and vitamin therapy",
  "Trigger point injections",
];

const ContactForm = () => {
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function toggleService(service: string, checked: boolean) {
    setServices((prev) =>
      checked ? [...prev, service] : prev.filter((s) => s !== service)
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      services,
      preferredDate: (form.elements.namedItem("preferredDate") as HTMLInputElement).value,
      preferredTime: (form.elements.namedItem("preferredTime") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="panel rounded-[32px] p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-taupe">
          Request Received
        </p>
        <h3 className="mt-4 font-serif text-3xl text-charcoal">
          Thank you for reaching out.
        </h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-charcoal/70">
          Your request has been received. Cura Health Collective will follow up
          with appointment confirmation and instructions for next steps.
        </p>
      </div>
    );
  }

  return (
    <form className="panel rounded-[32px] p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Name</span>
          <input
            name="name"
            required
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Email</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Phone</span>
          <input
            name="phone"
            type="tel"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
        <div>
          <span className="mb-2 block text-sm text-charcoal/75">
            Service/s of Interest
          </span>
          <div className="grid gap-3">
            {SERVICES.map((service) => (
              <div key={service}>
                <input
                  id={service}
                  type="checkbox"
                  value={service}
                  checked={services.includes(service)}
                  onChange={(e) => toggleService(service, e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor={service} className="text-sm text-charcoal/75">
                  {service}
                </label>
              </div>
            ))}
          </div>
        </div>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">
            Preferred Appointment Date
          </span>
          <input
            name="preferredDate"
            type="date"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">
            Preferred Time
          </span>
          <input
            name="preferredTime"
            type="time"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-charcoal/75">Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us a bit about your goals, symptoms, or what you hope to explore."
          className="w-full rounded-[24px] border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
        />
      </label>

      <div className="mt-6 rounded-[24px] border border-dashed border-black/10 bg-[#faf7f2] p-4 text-sm leading-6 text-charcoal/60">
        Please avoid sending sensitive medical details, payment information, or
        urgent concerns through this general contact form...
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:bg-black disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Submit Request"}
      </button>
    </form>
  );
};

export default ContactForm;
