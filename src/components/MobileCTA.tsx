"use client";

import { useEffect, useState } from "react";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const nearTop = window.scrollY < 420;
      let inContact = false;
      if (contact) {
        const rect = contact.getBoundingClientRect();
        inContact = rect.top < window.innerHeight * 0.7 && rect.bottom > 80;
      }
      setVisible(!nearTop && !inContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 transition-all duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-lg items-center gap-3 rounded-2xl border border-border bg-[var(--header-bg)] p-2 shadow-[var(--shadow-md)] backdrop-blur-xl">
        <p className="min-w-0 flex-1 pl-2 text-xs leading-snug text-muted">
          Ready for a calmer smart home?
        </p>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
        >
          Book consult
        </a>
      </div>
    </div>
  );
}
