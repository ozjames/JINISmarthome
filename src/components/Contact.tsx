import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-border bg-card"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <h2
            id="contact-heading"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Contact
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Tell us about your property and what you’d like the home to do
            better. We’ll follow up to book a consult.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-medium text-foreground">Email</dt>
              <dd className="mt-1 text-muted">
                <a
                  href={site.contact.emailHref}
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {site.contact.email}
                </a>
                <span className="mt-1 block text-xs text-stone-500">
                  Placeholder — replace in <code className="rounded bg-stone-100 px-1">src/lib/site.ts</code>
                </span>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Phone</dt>
              <dd className="mt-1 text-muted">
                <a
                  href={site.contact.phoneHref}
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {site.contact.phone}
                </a>
                <span className="mt-1 block text-xs text-stone-500">
                  Placeholder — replace with your +61 number
                </span>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Service area</dt>
              <dd className="mt-1 text-muted">{site.contact.serviceArea}</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
