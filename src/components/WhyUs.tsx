import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="border-b border-border bg-surface-muted"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold text-accent">Why {site.shortBrand}</p>
          <h2
            id="why-us-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Practical advice. Clear plans. Local service.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Smart home work should feel calm and understandable. We focus on
            fit-for-purpose design and honest recommendations — not hype or
            unnecessary gear.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {site.whyUs.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-sm)]"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {index + 1}
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
