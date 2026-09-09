import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#171411] text-stone-300 dark:bg-[#0c0b0a]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground"
            >
              J
            </span>
            <p className="text-sm font-semibold text-white">{site.brand}</p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-400">
            {site.tagline}. Independent consulting and installation for
            Australian homes — practical, calm, and built around how you live.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-medium text-white">Explore</p>
            <ul className="mt-3 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-stone-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-stone-400">
              <li>
                <a
                  href={site.contact.emailHref}
                  className="transition-colors hover:text-white"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {site.brand}. All rights reserved.
          </p>
          <p>English · Australia-focused · Static marketing site</p>
        </div>
      </div>
    </footer>
  );
}
