import { site } from "@/lib/site";

const modules = [
  { code: "01", label: "Lighting", detail: "Scenes · circuits · outdoor" },
  { code: "02", label: "Security", detail: "Access · cameras · sensors" },
  { code: "03", label: "Climate", detail: "HVAC · zoning · schedules" },
  { code: "04", label: "Energy", detail: "Solar · loads · monitoring" },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Technical grid + soft mesh glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 tech-grid opacity-[0.45] dark:opacity-[0.35]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mesh-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_68%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_70%)] blur-xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,var(--background),transparent)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_var(--accent-glow)]"
            />
            AU · Systems consulting
            <span aria-hidden className="text-border-strong">
              /
            </span>
            <span className="text-muted">Install by arrangement</span>
          </p>

          <h1
            id="hero-heading"
            className="font-display max-w-xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.07]"
          >
            {site.tagline}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_10px_28px_var(--accent-glow)] transition-colors hover:bg-accent-hover"
            >
              Book a consult
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-border-strong hover:bg-surface-muted"
            >
              Explore services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/80 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
            <span>Australia-wide</span>
            <span aria-hidden className="text-border-strong">
              ·
            </span>
            <span>Vendor-agnostic</span>
            <span aria-hidden className="text-border-strong">
              ·
            </span>
            <span>Written scope</span>
          </div>
        </div>

        {/* Systems inventory — engineering brochure panel, not a mock dashboard */}
        <aside
          className="relative hidden overflow-hidden rounded-xl border border-border bg-card/70 p-5 shadow-[var(--shadow-sm)] backdrop-blur-sm lg:block"
          aria-label="Service modules overview"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          />
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-accent">
              Scope modules
            </p>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
              04 domains
            </p>
          </div>
          <ul className="mt-4 divide-y divide-border">
            {modules.map((mod) => (
              <li
                key={mod.code}
                className="flex items-start gap-3 py-3 first:pt-1 last:pb-1"
              >
                <span className="mt-0.5 font-mono text-[0.7rem] text-accent/90">
                  {mod.code}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold tracking-tight text-foreground">
                    {mod.label}
                  </p>
                  <p className="mt-0.5 font-mono text-[0.68rem] tracking-wide text-muted">
                    {mod.detail}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                />
              </li>
            ))}
          </ul>
          <p className="mt-3 border-t border-border pt-3 font-mono text-[0.65rem] leading-relaxed tracking-wide text-muted">
            Designed around your home — not a one-size package.
          </p>
        </aside>
      </div>
    </section>
  );
}
