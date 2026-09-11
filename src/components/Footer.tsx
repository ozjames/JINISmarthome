import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white text-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <a href="#top" className="inline-flex items-center gap-2.5 no-underline">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="logo/logo.png"
              alt={site.brand}
              className="h-10 w-auto rounded-md"
              width={180}
              height={40}
            />
          </a>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {site.tagline}. Consulting and installation for Sydney &amp; Central
            Coast homes — practical, clear, and built around how you live.
          </p>
          <p className="mt-3 text-xs text-muted">{site.company}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-foreground">Explore</p>
            <ul className="mt-3 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="font-medium text-foreground transition-colors hover:text-accent"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li>{site.contact.serviceArea}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-surface-muted">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {site.company}. All rights reserved.
          </p>
          <p>Sydney &amp; Central Coast · Australia</p>
        </div>
      </div>
    </footer>
  );
}
