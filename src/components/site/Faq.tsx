"use client";

import { useState } from "react";
import Image from "next/image";
import faqImage from "@assets/faq-1.jpg";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/content/maya";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="scroll-mt-28 bg-[var(--c-surface-2)] py-14 sm:py-16 lg:py-16"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4" data-reveal>
            <h2 className="display text-[clamp(2.25rem,5vw,4rem)]">
              FAQs.
            </h2>
            <h3 className="display mt-5 text-[clamp(1.25rem,2.4vw,1.75rem)]">
              {faqs.heading}
            </h3>
            <p className="body-copy mt-6 text-[0.95rem] text-muted">
              Anything else you’re wondering about, just ask — there’s no such
              thing as a silly question before your first session.
            </p>

            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[var(--c-surface)]">
              <Image
                src={faqImage}
                alt="The waiting area of the Santa Monica office"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <dl>
              {faqs.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.q}
                    className="border-b border-line first:border-t"
                  >
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                      >
                        <span className="display text-[1.125rem] transition-colors group-hover:text-[var(--c-secondary)] sm:text-[1.25rem]">
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className="relative mt-2.5 block h-3.5 w-3.5 shrink-0 text-[var(--c-secondary)]"
                        >
                          <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                          <span
                            className={`absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
                              isOpen ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </span>
                      </button>
                    </dt>
                    <dd
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      hidden={!isOpen}
                      className="pb-7"
                    >
                      <p className="body-copy max-w-2xl text-[0.95rem] text-muted">
                        {item.a}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
