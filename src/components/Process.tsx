import { site } from "@/lib/site";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="process-heading"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            How we work
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            A simple four-step path from first chat to a home you can actually
            live with — and support when you need a change later.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-border bg-card p-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
