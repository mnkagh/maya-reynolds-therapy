"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/content/maya";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--c-surface)] focus:px-4 focus:py-2"
      >
        Skip to Content
      </a>

      <header className="sticky top-0 z-40 border-b border-line/70 bg-[var(--c-bg)]/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16">
          <Link
            href="#top"
            className="flex items-center gap-3 no-underline"
            aria-label="Dr. Maya Reynolds, PsyD — home"
          >
            <span
              aria-hidden
              className="relative grid size-10 shrink-0 place-items-center rounded-full border border-ink/20"
            >
              <span
                aria-hidden
                className="absolute inset-[4px] rounded-full border border-ink/12"
              />
              <span
                aria-hidden
                className="absolute bottom-[6px] h-[7px] w-[7px] rounded-full"
                style={{ background: "var(--c-secondary)" }}
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="display text-[1.15rem] leading-none sm:text-[1.3rem]">
                Dr. Maya Reynolds
              </span>
              <span
                className="eyebrow mt-1.5"
                style={{ color: "var(--c-secondary)" }}
              >
                PsyD
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="nav-item text-[0.9rem]">
                {item.label}
              </Link>
            ))}

            <a
              href="/contact"
              className="rounded-full bg-[var(--c-primary)] px-6 py-3 text-[0.9rem] font-medium text-[var(--c-bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book a Consultation
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="maya-mobile-nav"
            className="flex items-center gap-2.5 text-[0.9rem] lg:hidden"
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden className="flex h-3 w-5 flex-col justify-between">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>

        {open ? (
          <div
            id="maya-mobile-nav"
            className="fixed inset-0 z-50 flex flex-col bg-[var(--c-bg)] lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-line px-[5vw] py-5">
              <span className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="relative grid size-10 shrink-0 place-items-center rounded-full border border-ink/20"
                >
                  <span
                    aria-hidden
                    className="absolute bottom-[6px] h-[7px] w-[7px] rounded-full"
                    style={{ background: "var(--c-secondary)" }}
                  />
                </span>
                <span className="display text-[1.15rem] leading-none">
                  Dr. Maya Reynolds
                </span>
              </span>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex items-center gap-2.5 text-[0.9rem]"
              >
                Close
                <span aria-hidden className="flex h-3 w-5 flex-col justify-between">
                  <span className="h-px w-full bg-current" />
                  <span className="h-px w-full bg-current" />
                  <span className="h-px w-full bg-current" />
                </span>
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-[5vw] py-4">
              <ul>
                {nav.map((item) => (
                  <li key={item.label} className="border-b border-line">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="display block py-4 text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 block rounded-full bg-[var(--c-primary)] px-6 py-4 text-center text-[0.95rem] font-medium text-[var(--c-bg)]"
              >
                Book a Consultation
              </a>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
