import { site } from "@/lib/site";
import { SmartHomePreview } from "@/components/SmartHomePreview";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--accent-soft)_0%,_transparent_55%)] opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--background),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:px-8 lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent shadow-[var(--shadow-sm)] backdrop-blur">
            Australia · Consulting &amp; installation
          </p>
          <h1
            id="hero-heading"
            className="font-display max-w-2xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
          >
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_10px_28px_var(--accent-glow)] transition-colors hover:bg-accent-hover"
            >
              Book a consult
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface-muted"
            >
              Explore services
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">{site.contact.serviceArea}</p>
        </div>

        <SmartHomePreview />
      </div>
    </section>
  );
}
