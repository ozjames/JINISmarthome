"use client";

import { FormEvent, useEffect, useState } from "react";
import { site } from "@/lib/site";

type FieldErrors = {
  name?: string;
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
  if (!phone) {
    errors.phone = "Phone is required so we can call you back.";
  } else if (!PHONE_RE.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (email && !EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!preferredTime) {
    errors.preferredTime = "Select a preferred contact time.";
  }
  if (!suburb) {
    errors.suburb = "Enter your suburb or city.";
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

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-danger" role="alert">
      {message}
    </p>
  );
}

function SuccessConfetti() {
  const dots = [
    { left: "12%", delay: "0ms", color: "var(--accent)" },
    { left: "28%", delay: "80ms", color: "#f59e0b" },
    { left: "45%", delay: "40ms", color: "var(--accent-hover)" },
    { left: "62%", delay: "120ms", color: "#a8a29e" },
    { left: "78%", delay: "60ms", color: "var(--accent)" },
    { left: "88%", delay: "100ms", color: "#fbbf24" },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-8 h-16 overflow-hidden">
      {dots.map((dot, i) => (
        <span
          key={i}
          className="confetti-dot"
          style={{
            left: dot.left,
            background: dot.color,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
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
        "Thanks — we’ve received your enquiry. Our team will call you on the number you provided.",
      );
      clearSentQuery();
      return;
    }
    if (sent === "0") {
      setState("error");
      setServerMessage(
        params.get("error") ??
          "Something went wrong sending your message. Please try again or call us directly.",
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
      const firstKey = Object.keys(nextErrors)[0];
      const el = formEl.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus();
      return;
    }

    setState("submitting");
    formEl.submit();
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="relative overflow-hidden rounded-2xl border border-border bg-accent-soft/50 p-6 shadow-[var(--shadow-sm)] sm:p-8"
      >
        <SuccessConfetti />
        <div className="relative">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
              <path
                d="m5 12 5 5L20 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            We’ll call you soon
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{serverMessage}</p>
          <p className="mt-4 text-sm text-muted">
            Prefer to reach us now?{" "}
            <a
              className="font-semibold text-accent underline-offset-2 hover:underline"
              href={site.contact.phoneHref}
            >
              {site.contact.phone}
            </a>
          </p>
          <button
            type="button"
            className="mt-6 inline-flex rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-muted"
            onClick={() => {
              setState("idle");
              setServerMessage("");
            }}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      action="contact.php"
      method="post"
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-md)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <div className="float-field">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder=" "
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <label htmlFor="name">
              Name <span className="text-accent">*</span>
            </label>
          </div>
          <FieldError id="name-error" message={errors.name} />
        </div>

        <div>
          <div className="float-field">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
              placeholder=" "
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            <label htmlFor="phone">
              Phone <span className="text-accent">*</span>
            </label>
          </div>
          <FieldError id="phone-error" message={errors.phone} />
        </div>

        <div>
          <div className="float-field">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder=" "
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <label htmlFor="email">Email (optional)</label>
          </div>
          <FieldError id="email-error" message={errors.email} />
        </div>

        <p className="sm:col-span-2 -mt-1 text-xs text-muted">
          Phone is required — we’ll call you back. Email is optional.
        </p>

        <div>
          <div className="float-field">
            <select
              id="preferredTime"
              name="preferredTime"
              required
              defaultValue=""
              aria-invalid={Boolean(errors.preferredTime)}
              aria-describedby={
                errors.preferredTime ? "preferredTime-error" : undefined
              }
            >
              <option value="" disabled>
                {" "}
              </option>
              <option value="weekday-morning">Weekday morning</option>
              <option value="weekday-afternoon">Weekday afternoon</option>
              <option value="weekday-evening">Weekday evening</option>
              <option value="weekend">Weekend</option>
              <option value="anytime">Anytime</option>
            </select>
            <label htmlFor="preferredTime">
              Preferred contact time <span className="text-accent">*</span>
            </label>
          </div>
          <FieldError id="preferredTime-error" message={errors.preferredTime} />
        </div>

        <div>
          <div className="float-field">
            <input
              id="suburb"
              name="suburb"
              type="text"
              autoComplete="address-level2"
              required
              placeholder=" "
              aria-invalid={Boolean(errors.suburb)}
              aria-describedby={errors.suburb ? "suburb-error" : undefined}
            />
            <label htmlFor="suburb">
              Suburb (Sydney / Central Coast) <span className="text-accent">*</span>
            </label>
          </div>
          <FieldError id="suburb-error" message={errors.suburb} />
        </div>

        <div className="sm:col-span-2">
          <div className="float-field float-textarea">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder=" "
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            <label htmlFor="message">
              Message <span className="text-accent">*</span>
            </label>
          </div>
          <FieldError id="message-error" message={errors.message} />
        </div>
      </div>

      {state === "error" && serverMessage ? (
        <p className="mt-4 text-sm text-danger" role="alert">
          {serverMessage}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Or call{" "}
          <a href={site.contact.phoneHref} className="font-semibold text-accent hover:underline">
            {site.contact.phone}
          </a>
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "submitting" ? "Sending…" : "Request a call back"}
        </button>
      </div>
    </form>
  );
}
