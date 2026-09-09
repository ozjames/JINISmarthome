"use client";

import { FormEvent, useEffect, useState } from "react";
import { site } from "@/lib/site";

type FieldErrors = {
  name?: string;
  contact?: string;
  email?: string;
  phone?: string;
  preferredTime?: string;
  suburb?: string;
  message?: string;
};

type FormState = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+0-9][\d\s().-]{6,}$/;

function validate(form: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const preferredTime = String(form.get("preferredTime") ?? "").trim();
  const suburb = String(form.get("suburb") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name) errors.name = "Please enter your name.";
  if (!email && !phone) {
    errors.contact = "Provide an email or phone number so we can reach you.";
  }
  if (email && !EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (phone && !PHONE_RE.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!preferredTime) {
    errors.preferredTime = "Select a preferred contact time.";
  }
  if (!suburb) {
    errors.suburb = "Enter your suburb or city in Australia.";
  }
  if (!message) {
    errors.message = "Please include a short message.";
  } else if (message.length < 10) {
    errors.message = "Add a little more detail (at least 10 characters).";
  }

  return errors;
}

function clearSentQuery() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (!url.searchParams.has("sent") && !url.searchParams.has("error")) return;
  url.searchParams.delete("sent");
  url.searchParams.delete("error");
  const next = url.pathname + (url.search ? url.search : "") + url.hash;
  window.history.replaceState({}, "", next || "/");
}

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<FormState>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const sent = params.get("sent");
    if (sent === "1") {
      setState("success");
      setServerMessage(
        "Thanks — we’ve received your enquiry and will be in touch.",
      );
      clearSentQuery();
      return;
    }
    if (sent === "0") {
      setState("error");
      setServerMessage(
        params.get("error") ??
          "Something went wrong sending your message. Please try again or email us directly.",
      );
      clearSentQuery();
    }
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setServerMessage("");

    if (Object.keys(nextErrors).length > 0) {
      setState("idle");
      return;
    }

    setState("submitting");
    // Traditional POST to PHP on shared hosting; server redirects to /?sent=1
    formEl.submit();
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal-200 bg-accent-soft/60 p-6 sm:p-8"
      >
        <h3 className="text-lg font-semibold text-foreground">Enquiry sent</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{serverMessage}</p>
        <p className="mt-4 text-sm text-muted">
          Prefer to reach out directly?{" "}
          <a className="font-medium text-accent underline-offset-2 hover:underline" href={site.contact.emailHref}>
            {site.contact.email}
          </a>{" "}
          ·{" "}
          <a className="font-medium text-accent underline-offset-2 hover:underline" href={site.contact.phoneHref}>
            {site.contact.phone}
          </a>
        </p>
        <button
          type="button"
          className="mt-6 inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-stone-100"
          onClick={() => {
            setState("idle");
            setServerMessage("");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      action="contact.php"
      method="post"
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      aria-describedby={errors.contact ? "contact-method-error" : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-stone-400"
            placeholder="Alex Nguyen"
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-sm text-red-700" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-stone-400"
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-red-700" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-stone-400"
            placeholder="+61 4xx xxx xxx"
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-sm text-red-700" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        {errors.contact ? (
          <p
            id="contact-method-error"
            className="sm:col-span-2 text-sm text-red-700"
            role="alert"
          >
            {errors.contact}
          </p>
        ) : (
          <p className="sm:col-span-2 -mt-2 text-xs text-muted">
            Provide at least one of email or phone.
          </p>
        )}

        <div>
          <label
            htmlFor="preferredTime"
            className="block text-sm font-medium text-foreground"
          >
            Preferred contact time <span className="text-accent">*</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.preferredTime)}
            aria-describedby={
              errors.preferredTime ? "preferredTime-error" : undefined
            }
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground"
          >
            <option value="" disabled>
              Select a time…
            </option>
            <option value="weekday-morning">Weekday morning</option>
            <option value="weekday-afternoon">Weekday afternoon</option>
            <option value="weekday-evening">Weekday evening</option>
            <option value="weekend">Weekend</option>
            <option value="anytime">Anytime</option>
          </select>
          {errors.preferredTime ? (
            <p
              id="preferredTime-error"
              className="mt-1.5 text-sm text-red-700"
              role="alert"
            >
              {errors.preferredTime}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="suburb" className="block text-sm font-medium text-foreground">
            Suburb / city (Australia) <span className="text-accent">*</span>
          </label>
          <input
            id="suburb"
            name="suburb"
            type="text"
            autoComplete="address-level2"
            required
            aria-invalid={Boolean(errors.suburb)}
            aria-describedby={errors.suburb ? "suburb-error" : undefined}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-stone-400"
            placeholder="e.g. Parramatta NSW"
          />
          {errors.suburb ? (
            <p id="suburb-error" className="mt-1.5 text-sm text-red-700" role="alert">
              {errors.suburb}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-stone-400"
            placeholder="Tell us about your home, goals, and timeline…"
          />
          {errors.message ? (
            <p id="message-error" className="mt-1.5 text-sm text-red-700" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {state === "error" && serverMessage ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {serverMessage}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Submits via PHP on shared hosting. Set the recipient email in{" "}
          <code className="rounded bg-stone-100 px-1">contact.php</code>.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
