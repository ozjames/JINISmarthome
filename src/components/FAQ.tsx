"use client";

import { useId, useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl">
          <h2
            id="faq-heading"
            className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Straight answers about how we work — no inflated claims or fake
            social proof.
          </p>
        </Reveal>

        <div className="mt-10 mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-background shadow-[var(--shadow-sm)]">
          {site.faq.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <Reveal key={item.question} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground transition-colors hover:bg-surface-muted/60 sm:px-6"
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-accent transition-transform duration-300 ${
                        open ? "rotate-45 bg-accent-soft" : "bg-card"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6"
                >
                  {item.answer}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
