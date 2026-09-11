import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold text-accent">How it works</p>
          <h2
            id="process-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            From first call to a home that just works
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            A clear four-step path — so you always know what’s next, what’s in
            scope, and who to call.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.map((item, index) => (
            <Reveal
              key={item.step}
              as="li"
              delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              className="relative rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-sm)]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                {item.step}
              </span>
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
