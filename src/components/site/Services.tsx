"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/maya";

/**
 * Three service cards, as in the brief. Clicking a card highlights it.
 * The highlight classes are written directly to the DOM instead of through
 * React state: a re-render would rewrite `className` and wipe `.is-in`,
 * the class the reveal observer adds imperatively — hiding the card.
 */
export function Services() {
  useEffect(() => {
    const clear = () =>
      document
        .querySelectorAll("#services article.is-selected")
        .forEach((el) => el.classList.remove("is-selected"));
    window.addEventListener("maya:clear-selection", clear);
    return () => window.removeEventListener("maya:clear-selection", clear);
  }, []);

  const pick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    document
      .querySelectorAll("#services article.is-target")
      .forEach((n) => n.classList.remove("is-target"));
    const wasSelected = el.classList.contains("is-selected");
    document
      .querySelectorAll("#services article.is-selected")
      .forEach((n) => n.classList.remove("is-selected"));
    if (!wasSelected) el.classList.add("is-selected");
  };

  return (
    <section
      id="services"
      className="scroll-mt-28 bg-[var(--c-primary)] py-14 text-[var(--c-on-primary)] sm:py-16 lg:py-16"
    >
      <Container>
        <div data-reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2.25rem,5vw,4rem)]">Services.</h2>
          <h3 className="display mt-5 text-[clamp(1.25rem,2.4vw,1.75rem)]">
            {services.heading}
          </h3>
        </div>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <article
              key={item.id}
              id={item.id}
              data-reveal
              onClick={() => pick(item.id)}
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="group relative flex cursor-pointer scroll-mt-32 flex-col overflow-hidden rounded-3xl border border-line bg-[var(--c-surface)] text-[var(--c-ink)] transition-[border-color,box-shadow] duration-500"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--c-surface-2)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <h3 className="display text-[1.5rem]">{item.title}</h3>
                <p className="body-copy mt-4 flex-1 text-[0.95rem] text-muted">
                  {item.body}
                </p>
                <a
                  href="/contact"
                  className="line-link mt-7 self-start text-[0.9rem] font-medium text-[var(--c-secondary)]"
                >
                  Request an appointment
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
