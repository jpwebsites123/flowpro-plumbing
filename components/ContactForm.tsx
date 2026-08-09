"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

const serviceOptions = [
  "Emergency Plumbing",
  "Drain Cleaning",
  "Leak Repair",
  "Water Heater",
  "Toilet Repair",
  "Faucet/Fixture",
  "Pipe Repair",
  "Sump Pump",
  "Other",
];

const timeOptions = ["Morning", "Afternoon", "Evening", "No Preference"];

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Demo form only — no backend is connected. In production this would
    // POST to an API route, CRM, or email service.
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="card-surface p-8 sm:p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-flow-50 text-flow-600 mx-auto">
          <CheckCircle2 size={32} />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-navy-900">
          Request Received
        </h3>
        <p className="mt-3 text-navy-700/75 leading-relaxed max-w-md mx-auto">
          Thanks for reaching out to FlowPro Plumbing &amp; Drain. This is a
          portfolio demo, so no request was actually sent — on a live site,
          our team would follow up shortly to confirm the details.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8" noValidate>
      <p className="text-xs text-navy-500 bg-mist-100 rounded-lg px-3.5 py-2.5 mb-6">
        This is a demo form for a fictional business. Submitting it will not
        send a real request or contact anyone.
      </p>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" htmlFor="fullName" required>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className="form-input"
            placeholder="Jordan Smith"
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="form-input"
            placeholder="(555) 123-4567"
          />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder="you@example.com"
          />
        </Field>
        <Field label="City" htmlFor="city" required>
          <input
            id="city"
            name="city"
            type="text"
            required
            autoComplete="address-level2"
            className="form-input"
            placeholder="Maple Ridge"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Street Address" htmlFor="address" required>
            <input
              id="address"
              name="address"
              type="text"
              required
              autoComplete="street-address"
              className="form-input"
              placeholder="123 Main Street"
            />
          </Field>
        </div>
        <Field label="Type of Service" htmlFor="serviceType" required>
          <select id="serviceType" name="serviceType" required className="form-input">
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Is this an emergency?" htmlFor="emergency" required>
          <select id="emergency" name="emergency" required className="form-input" defaultValue="No">
            <option value="No">No</option>
            <option value="Yes">Yes — this is an emergency</option>
          </select>
        </Field>
        <Field label="Preferred Date" htmlFor="preferredDate">
          <input id="preferredDate" name="preferredDate" type="date" className="form-input" />
        </Field>
        <Field label="Preferred Time" htmlFor="preferredTime">
          <select id="preferredTime" name="preferredTime" className="form-input" defaultValue="">
            <option value="">Select a time</option>
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Description of Problem" htmlFor="description" required>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              className="form-input resize-none"
              placeholder="Tell us what's going on — the more detail, the better we can prepare."
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto mt-7 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send size={18} />
            Request Service
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-navy-800 mb-1.5">
        {label} {required && <span className="text-flow-600">*</span>}
      </label>
      {children}
    </div>
  );
}
