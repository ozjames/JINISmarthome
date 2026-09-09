import { site } from "@/lib/site";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="border-b border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="why-us-heading"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Why work with {site.shortBrand}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Smart home work should feel calm and understandable. We focus on
            fit-for-purpose design and honest recommendations — not hype or
            unnecessary gear.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {site.whyUs.map((item) => (
            <li key={item.title} className="rounded-xl border border-border bg-background p-5">
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
