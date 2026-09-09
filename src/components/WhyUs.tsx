import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="border-b border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-accent">
            Principles · 02
          </p>
          <h2
            id="why-us-heading"
            className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          >
            Why work with {site.shortBrand}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Smart home work should feel calm and understandable. We focus on
            fit-for-purpose design and honest recommendations — not hype or
            unnecessary gear.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.whyUs.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              className="rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-sm)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent"
                />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
