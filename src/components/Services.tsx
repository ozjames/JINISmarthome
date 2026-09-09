import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, ReactNode> = {
  lighting: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.7.55 1.1 1.2 1.2 2.1h4.6c.1-.9.5-1.55 1.2-2.1A6 6 0 0 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M12 3 5 6v5c0 4.5 3 7.9 7 9 4-1.1 7-4.5 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12 1.8 1.8 3.7-3.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  climate: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M12 3v18M7 7.5c2 1 3 2.5 5 2.5s3-1.5 5-2.5M7 16.5c2-1 3-2.5 5-2.5s3 1.5 5 2.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M13 2 5 13h6l-1 9 9-12h-6l0-8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative border-b border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 tech-grid opacity-30 dark:opacity-20"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-accent">
            Platforms · 01
          </p>
          <h2
            id="services-heading"
            className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          >
            Services
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Four focus areas that cover most Australian households — chosen and
            combined based on your home, not a one-size-fits-all package.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.services.map((service, index) => (
            <Reveal
              key={service.id}
              as="li"
              delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-sm)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-md)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-accent-soft text-accent">
                  {icons[service.id]}
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                  {String(index + 1).padStart(2, "0")} / {service.id}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
