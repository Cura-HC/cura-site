"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { useInterests } from "@/components/interest-provider";
import { contactDetails, services } from "@/data/site";
import { cn } from "@/lib/utils";

const contactMethods = ["Call", "Email", "Text"];
const appointmentTimes = ["Morning", "Afternoon", "Evening", "No preference"];
const patientStatuses = ["New patient", "Existing patient"];

const fieldClasses =
  "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal";

type RadioGroupProps = {
  legend: string;
  name: string;
  options: string[];
};

function RadioGroup({ legend, name, options }: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="text-sm text-charcoal/75">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-3">
        {options.map((option) => (
          <label
            key={option}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-charcoal/75 transition hover:bg-white"
          >
            <input
              type="radio"
              name={name}
              value={option}
              className="accent-charcoal"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { selected, clearInterests } = useInterests();

  const selectedServices = services.filter((service) =>
    selected.includes(service.slug)
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const value = (field: string) => String(formData.get(field) ?? "").trim();

    const data = {
      type: "consultation",
      firstName: value("firstName"),
      lastName: value("lastName"),
      email: value("email"),
      phone: value("phone"),
      services: selectedServices.map((service) => service.name),
      preferredContact: value("preferredContact"),
      preferredTime: value("preferredTime"),
      patientStatus: value("patientStatus"),
      message: value("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        clearInterests();
      } else {
        setStatus("error");
      }
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
        <h2 className="mt-4 font-serif text-3xl text-charcoal">
          Thank you for reaching out.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-charcoal/70">
          Your consultation request is with our team. Someone from Cura Health
          Collective will follow up within 1–2 business days to review your
          goals and find a time that works for you.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-6 text-charcoal/55">
          If your concern is urgent, please call us at {contactDetails.phone}. In
          an emergency, call 911.
        </p>
      </div>
    );
  }

  return (
    <form className="panel rounded-[32px] p-8" onSubmit={handleSubmit}>
      <section>
        <h2 className="text-xs uppercase tracking-[0.22em] text-taupe">
          Selected Services
        </h2>
        {selectedServices.length > 0 ? (
          <>
            <ul className="mt-4 space-y-2">
              {selectedServices.map((service) => (
                <li
                  key={service.slug}
                  className="flex items-center gap-3 rounded-2xl bg-[#faf7f2] px-4 py-3 text-sm text-charcoal/75"
                >
                  <CheckIcon className="h-4 w-4 shrink-0 text-sage" />
                  {service.name}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-4 inline-flex rounded-full border border-black/10 bg-white/80 px-5 py-2 text-sm font-medium text-charcoal transition hover:bg-white"
            >
              Edit Selection
            </Link>
          </>
        ) : (
          <div className="mt-4 rounded-2xl border border-dashed border-black/10 bg-[#faf7f2] p-4 text-sm leading-6 text-charcoal/60">
            No services selected yet. You can still send this request, or{" "}
            <Link href="/services" className="font-medium text-charcoal underline underline-offset-4">
              browse our services
            </Link>{" "}
            first.
          </div>
        )}
      </section>

      <section className="mt-8 border-t border-black/10 pt-8">
        <h2 className="text-xs uppercase tracking-[0.22em] text-taupe">
          Personal Information
        </h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-charcoal/75">First Name</span>
            <input name="firstName" required className={fieldClasses} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-charcoal/75">Last Name</span>
            <input name="lastName" required className={fieldClasses} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-charcoal/75">Email</span>
            <input name="email" type="email" required className={fieldClasses} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-charcoal/75">Phone</span>
            <input name="phone" type="tel" required className={fieldClasses} />
          </label>
        </div>
      </section>

      <section className="mt-8 border-t border-black/10 pt-8">
        <h2 className="text-xs uppercase tracking-[0.22em] text-taupe">Optional</h2>
        <div className="mt-5 space-y-6">
          <RadioGroup
            legend="Preferred contact method"
            name="preferredContact"
            options={contactMethods}
          />
          <RadioGroup
            legend="Preferred appointment"
            name="preferredTime"
            options={appointmentTimes}
          />
          <RadioGroup
            legend="Existing patient?"
            name="patientStatus"
            options={patientStatuses}
          />
          <label className="block">
            <span className="mb-2 block text-sm text-charcoal/75">
              Anything you would like us to know?
            </span>
            <textarea
              name="message"
              rows={4}
              placeholder="Share your goals or anything helpful for your first visit."
              className="w-full rounded-[24px] border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-charcoal"
            />
          </label>
        </div>
      </section>

      <div className="mt-8 rounded-[24px] border border-dashed border-black/10 bg-[#faf7f2] p-4 text-sm leading-6 text-charcoal/60">
        Please avoid sending sensitive medical details, payment information, or
        urgent concerns through this form.
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "mt-6 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:bg-black",
          status === "loading" && "opacity-50"
        )}
      >
        {status === "loading" ? "Sending…" : "Request Consultation"}
      </button>
    </form>
  );
}
