"use client";

import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Header() {
  const sectionIds = useMemo(
    () => ["top", "services", "why-us", "process", "faq", "contact"],
    [],
  );
  const activeId = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-border bg-[var(--header-bg)] shadow-[var(--shadow-sm)] backdrop-blur-xl"
          : "border-transparent bg-[var(--header-bg)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-md text-foreground no-underline"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="logo/logo.png"
            alt={site.brand}
            className="h-9 w-auto rounded-md"
            width={160}
            height={36}
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {site.nav.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeId === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:bg-surface-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.contact.phoneHref}
            className="hidden items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent md:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none" aria-hidden>
              <path
                d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3c0 .8-.7 1.5-1.5 1.5C10.5 20 4 13.5 4 6c0-.8.7-1.5 1.5-1.5Z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinejoin="round"
              />
            </svg>
            {site.contact.phone}
          </a>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden items-center justify-center rounded-md bg-accent px-3.5 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            Get a free consult
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-card px-4 py-3 lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1">
            {site.nav.map((item) => {
              const id = item.href.replace("#", "");
              const active = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                    active
                      ? "bg-accent-soft text-accent"
                      : "text-foreground hover:bg-surface-muted"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={site.contact.phoneHref}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
            >
              Call {site.contact.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              Get a free consult
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
