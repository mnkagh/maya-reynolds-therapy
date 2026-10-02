"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ArtPanel } from "@/components/ui/ArtPanel";
import { expertise, pullQuote } from "@/content/maya";

export function PullQuote() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p
          data-reveal
          className="display max-w-5xl text-[clamp(1.625rem,3.4vw,2.75rem)] leading-snug"
        >
          {pullQuote.text.split("Something quieter")[0]}
          <em>Something quieter</em>
          {pullQuote.text.split("Something quieter")[1]}
        </p>
      </Container>
    </section>
  );
}

/**
 * The list of areas she works with, rebuilt as a field: the terms sit on a
 * shallow 3D plane around a core, and hovering or focusing one lifts it
 * toward the viewer and pushes the core brighter. Nothing is hidden behind
 * a click, so it still reads as a plain list without a pointer.
 */
export function Expertise() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="areas" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div data-reveal className="lg:col-span-4">
            <h2 className="h3">
              What I <span className="script">work with</span>
            </h2>
            <p className="body-copy mt-6 text-[0.95rem] text-muted">
              {expertise.lead}
            </p>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="scene-soft lg:col-span-8"
          >
            <div className="field relative overflow-hidden rounded-3xl border border-line bg-[var(--c-surface)] px-6 py-10 sm:px-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 size-64 overflow-hidden rounded-full opacity-20"
              >
                <ArtPanel tone="tide" variant="rings" />
              </div>

              <div className="relative flex flex-wrap justify-center gap-2.5 sm:gap-3">
                {expertise.items.map((item) => (
                  <button
                    key={item}
                    type="button"
                    data-cursor
                    onPointerEnter={() => setActive(item)}
                    onPointerLeave={() => setActive(null)}
                    onFocus={() => setActive(item)}
                    onBlur={() => setActive(null)}
                    onClick={() => setActive((v) => (v === item ? null : item))}
                    aria-pressed={active === item}
                    className="chip rounded-full border border-line bg-[var(--c-surface)]/90 px-4 py-2 text-[0.9rem] text-muted backdrop-blur-sm hover:border-[var(--c-secondary)] hover:text-[var(--c-secondary)] focus-visible:border-[var(--c-secondary)] focus-visible:text-[var(--c-secondary)] focus-visible:outline-none"
                  >
                    {item}
                  </button>
                ))}
                <span
                  className="chip rounded-full border border-dashed border-[var(--c-secondary)]/50 bg-[var(--c-surface)]/90 px-4 py-2 text-[0.95rem] text-[var(--c-secondary)] italic backdrop-blur-sm"
                >
                  {expertise.more}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
