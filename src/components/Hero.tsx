import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border bg-card"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--accent-soft)_0%,_transparent_55%)] opacity-70"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
            Smart home consulting &amp; installation
          </p>
          <h1
            id="hero-heading"
            className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Book a consult
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-stone-100"
            >
              Explore services
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">{site.contact.serviceArea}</p>
        </div>

        <aside className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">
            Built around real life at home
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <li className="flex gap-3">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Practical automation for lighting, security, climate, and energy
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Advice that respects budget, rentals vs ownership, and existing devices
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Clear plans and handover so the whole household can use the system
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
