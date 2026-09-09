import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-accent">
            Delivery pipeline · 03
          </p>
          <h2
            id="process-heading"
            className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          >
            How we work
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            A clear four-stage path from first chat to a home you can actually
            live with — and support when you need a change later.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.map((item, index) => (
            <Reveal
              key={item.step}
              as="li"
              delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-sm)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-full w-0.5 bg-accent/70"
              />
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-border bg-surface-muted px-2 font-mono text-xs font-semibold text-accent">
                  {String(item.step).padStart(2, "0")}
                </span>
                {index < site.process.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted lg:inline"
                  >
                    next →
                  </span>
                ) : (
                  <span
                    aria-hidden
                    className="hidden font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted lg:inline"
                  >
                    live
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
