"use client";

import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [servicesOfInterest, setServicesOfInterest] = useState<string[]>([]);

  const services = [
    "GLP-1 medical weight loss",
    "Peptide therapy",
    "Longevity/performance medicine",
    "Direct primary care membership",
    "IV and vitamin therapy",
    "Trigger point injections",
  ];

  const serviceItems = services.map((service) => (
    <div key={service}>
      <input
        id={service}
        type="checkbox"
        value={service}
        checked={servicesOfInterest.includes(service)}
        onChange={(e) => {
          if (e.target.checked) {
            setServicesOfInterest([...servicesOfInterest, service]);
          } else {
            setServicesOfInterest(
              servicesOfInterest.filter(
                (selectedService) => selectedService !== service,
              ),
            );
          }
        }}
        className="mr-2"
      />
      <label htmlFor={service}>{service}</label>
    </div>
  ));

  if (submitted) {
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
          <input
            required
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Email</span>
          <input
            type="email"
            required
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">Phone</span>
          <input
            type="tel"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">
            Service/s of Interest
          </span>
          <div className="grid gap-3">{serviceItems}</div>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">
            Preferred Appointment Date
          </span>
          <input
            type="date"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-charcoal/75">
            Preferred Time
          </span>
          <input
            type="time"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
          />
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
        Please avoid sending sensitive medical details, payment information, or
        urgent concerns through this general contact form...
      </div>

      <button
        type="submit"
        className="mt-6 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
      >
        Submit Request
      </button>
    </form>
  );
};

export default ContactForm;
