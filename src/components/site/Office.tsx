"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import officeOne from "@assets/office-1.jpg";
import officeTwo from "@assets/office-2.jpg";
import { Container } from "@/components/ui/Container";
import { office } from "@/content/maya";

const photos = [
  {
    src: officeOne,
    alt: "The counselling room in the Santa Monica office — exposed brick, a grey sofa, a soft rug and sheer curtains filtering afternoon light",
    caption: "The counselling room",
  },
  {
    src: officeTwo,
    alt: "A second view of the office — a leather chair, a glass coffee table, warm wood flooring and a low bookshelf",
    caption: "A second view of the room",
  },
];

/**
 * Part 3 — a section that does not exist in the source template.
 * Both images come from the therapist's own supplied office assets and
 * open in a full-screen viewer when clicked.
 */
export function Office() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, step]);

  return (
    <section
      id="office"
      className="scroll-mt-28 overflow-hidden py-14 sm:py-16 lg:py-16"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="display text-[clamp(2.25rem,5vw,4rem)]">
              {office.label}.
            </h2>
            <h3 className="display mt-5 text-[clamp(1.25rem,2.4vw,1.75rem)]">
              {office.heading}
            </h3>
            <p className="lede mt-8 max-w-xl">{office.body}</p>
            <p className="body-copy mt-5 max-w-xl text-muted">{office.second}</p>

            <address className="display mt-8 text-[1.125rem] not-italic" style={{ color: "var(--c-secondary)" }}>
              123th Street 45 W, Santa Monica, CA 90401
            </address>
          </div>

          <div className="lg:col-span-7" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <div className="grid gap-5">
              {photos.map((photo, i) => (
                <button
                  key={photo.caption}
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`View larger: ${photo.caption}`}
                  className="group relative block w-full cursor-zoom-in overflow-hidden rounded-3xl bg-[var(--c-surface-2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--c-secondary)]"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 56vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                  <span
                    aria-hidden
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--c-bg)]/85 text-[var(--c-ink)] opacity-0 shadow-[0_10px_30px_-12px_rgba(34,32,29,0.6)] backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m-3-3h6"
                      />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Office photo viewer"
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:text-white sm:top-6 sm:right-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:text-white sm:left-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:text-white sm:right-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full w-full max-w-[70rem] flex-col items-center"
          >
            <div className="relative h-[72vh] w-full">
              <Image
                src={photos[open].src}
                alt={photos[open].alt}
                fill
                sizes="90vw"
                priority
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-[0.85rem] text-white/70">
              {photos[open].caption} · {open + 1} / {photos.length}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
