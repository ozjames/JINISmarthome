import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8 lg:py-24">
        <Reveal>
          <p className="mb-3 text-sm font-semibold text-accent">Contact</p>
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Let’s talk about your home
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Tell us about your property and what you’d like the home to do
            better. We’re phone-first — we’ll call you back on the number you
            provide.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-sm)]">
              <dt className="font-semibold text-foreground">Phone</dt>
              <dd className="mt-1 text-muted">
                <a
                  href={site.contact.phoneHref}
                  className="text-lg font-semibold text-accent underline-offset-2 hover:underline"
                >
                  {site.contact.phone}
                </a>
                <span className="mt-1 block text-xs text-muted">
                  Call or text — Sydney &amp; Central Coast
                </span>
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-sm)]">
              <dt className="font-semibold text-foreground">Service area</dt>
              <dd className="mt-1 text-muted">{site.contact.serviceArea}</dd>
            </div>
            <div className="rounded-2xl border border-border bg-accent-soft/60 p-5">
              <dt className="font-semibold text-foreground">How we follow up</dt>
              <dd className="mt-1 text-muted">{site.contact.note}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={2}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
