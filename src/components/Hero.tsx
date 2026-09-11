import { site } from "@/lib/site";

const highlights = [
  {
    title: "Lighting that feels natural",
    detail: "Scenes for mornings, evenings, and outdoors — without juggling five apps.",
  },
  {
    title: "Security you can trust",
    detail: "Cameras, locks, and sensors set up for reliability when you’re away.",
  },
  {
    title: "Comfort & energy, dialled in",
    detail: "Climate and usage awareness that suit Australian seasons and bills.",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border bg-hero-tint"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_15%,var(--accent-glow),transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-accent shadow-[var(--shadow-sm)]">
            Sydney &amp; Central Coast smart home specialists
          </p>

          <h1
            id="hero-heading"
            className="max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            {site.tagline}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_8px_24px_var(--accent-glow)] transition-colors hover:bg-accent-hover"
            >
              Get a free consult
            </a>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-border-strong hover:bg-surface-muted"
            >
              Call {site.contact.phone}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <li className="inline-flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              Written scope before install
            </li>
            <li className="inline-flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              Vendor-agnostic advice
            </li>
            <li className="inline-flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              Phone-first support
            </li>
          </ul>
        </div>

        <aside
          className="relative hidden overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-md)] lg:block"
          aria-label="What we help with"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            What we help with
          </p>
          <ul className="mt-5 space-y-5">
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path
                      d="m5 12 5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl bg-surface-muted px-4 py-3 text-sm text-muted">
            Serving <span className="font-medium text-foreground">Sydney &amp; the Central Coast</span>
            {" — "}call{" "}
            <a href={site.contact.phoneHref} className="font-semibold text-accent hover:underline">
              {site.contact.phone}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
