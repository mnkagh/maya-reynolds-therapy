"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { howWeWork, methods } from "@/content/maya";

/**
 * The approach section. The four methods sit on a rotating 3D deck: moving
 * the pointer across the row turns the deck, and the card in the middle
 * faces the viewer with its note. Keyboard users get the same thing from
 * the arrow buttons, so the interaction is never mouse-only.
 */
export function HowWeWork() {
  const [index, setIndex] = useState(0);
  const count = methods.length;

  const step = (delta: number) =>
    setIndex((i) => (i + delta + count) % count);

  return (
    <section
      id="approach"
      className="scroll-mt-28 overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow text-[var(--c-secondary)]">{howWeWork.label}</p>
          <h2 className="display mt-5 text-[clamp(1.875rem,3.8vw,3.25rem)]">
            {howWeWork.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <p className="lede italic">{howWeWork.lead}</p>
            <p className="body-copy mt-7 text-muted">{howWeWork.body}</p>
            <p className="body-copy mt-5 text-muted">{howWeWork.second}</p>

            <a
              href="/contact"
              data-magnetic="12"
              className="btn-line mt-9 self-start font-medium text-[var(--c-secondary)]"
            >
              {howWeWork.cta}
            </a>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            className="lg:col-span-7"
          >
            <div className="flex items-end justify-between gap-6">
              <p className="eyebrow text-muted">
                Move through the deck — {methods[index].abbr}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous method"
                  className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-[var(--c-secondary)] hover:text-[var(--c-secondary)]"
                >
                  <span aria-hidden>←</span>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next method"
                  className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-[var(--c-secondary)] hover:text-[var(--c-secondary)]"
                >
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>

            <div className="scene mt-8 h-[23rem] select-none sm:h-[25rem]">
              {methods.map((method, i) => {
                const raw = (i - index + count) % count;
                const signed = raw > count / 2 ? raw - count : raw;
                const away = Math.abs(signed);
                const x = signed * 62;
                const rotate = -signed * 20;
                const z = away === 0 ? 130 : -90 + away * 25;
                const scale = away === 0 ? 1 : 0.88;

                return (
                  <div
                    key={method.id}
                    className="absolute left-1/2 top-1/2 w-[min(19rem,80%)] -translate-x-1/2 -translate-y-1/2"
                    style={
                      {
                        transform: `translateX(${x}%) translateZ(${z}px) rotateY(${rotate}deg) scale(${scale})`,
                        opacity: away === 0 ? 1 : away === 1 ? 0.55 : 0,
                        pointerEvents: away >= 2 ? "none" : "auto",
                        zIndex: 10 - away,
                        transition:
                          "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease",
                      } as React.CSSProperties
                    }
                  >
                    <article
                      data-tilt
                      className="depth flex h-64 flex-col rounded-3xl border border-line bg-[var(--c-surface)] p-7 shadow-[0_30px_70px_-50px_rgba(34,32,29,0.7)]"
                    >
                      <p className="eyebrow text-[var(--c-secondary)]">
                        {method.abbr}
                      </p>
                      <h3 className="display mt-3 text-[1.3rem]">
                        {method.name}
                      </h3>
                      {away === 0 ? (
                        <p className="body-copy mt-4 text-[0.9rem] text-muted">
                          {method.note}
                        </p>
                      ) : null}
                      <span className="glare" aria-hidden />
                    </article>
                  </div>
                );
              })}
            </div>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {methods.map((method, i) => (
                <li key={method.id}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={i === index}
                    className={`chip rounded-full border px-4 py-2 text-[0.85rem] ${
                      i === index
                        ? "border-[var(--c-secondary)] text-[var(--c-secondary)]"
                        : "border-line text-muted hover:border-[var(--c-secondary)] hover:text-[var(--c-secondary)]"
                    }`}
                  >
                    {method.abbr}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
