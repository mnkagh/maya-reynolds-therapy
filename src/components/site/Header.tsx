"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/content/maya";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

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
            href="/"
            className="flex flex-col no-underline"
            aria-label="Dr. Maya Reynolds, PsyD — home"
          >
            <span className="display text-[1.15rem] leading-none sm:text-[1.3rem]">
              Dr. Maya Reynolds
            </span>
            <span
              className="eyebrow mt-1.5"
              style={{ color: "var(--c-secondary)" }}
            >
              PsyD
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group/nav relative">
                <Link href={item.href} className="nav-item text-[0.9rem]">
                  {item.label}
                  {item.folder ? (
                    <svg
                      aria-hidden
                      viewBox="0 0 10 6"
                      className="ml-1.5 inline-block h-[5px] w-[9px] opacity-60"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                  ) : null}
                </Link>
                {item.folder ? (
                  <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-6 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-x-[-50%] group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                    <ul className="border border-line bg-[var(--c-surface)] py-2 shadow-[0_20px_44px_-28px_rgba(34,32,29,0.5)]">
                      {item.folder.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block px-5 py-3 text-[0.9rem] text-muted transition-colors hover:bg-[var(--c-bg)]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}

            <ThemeToggle />

            <a
              href="/contact"
              className="rounded-full bg-[var(--c-primary)] px-6 py-3 text-[0.9rem] font-medium text-[var(--c-on-primary)] transition-transform duration-300 hover:-translate-y-0.5"
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
              <span className="display text-[1.15rem] leading-none">
                Dr. Maya Reynolds
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
                {nav.map((item) => {
                  const isOpen = expanded === item.label;
                  return (
                    <li key={item.label} className="border-b border-line">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="display py-4 text-lg"
                        >
                          {item.label}
                        </Link>
                        {item.folder ? (
                          <button
                            type="button"
                            onClick={() =>
                              setExpanded(isOpen ? null : item.label)
                            }
                            aria-expanded={isOpen}
                            aria-label={`Toggle ${item.label}`}
                            className="p-3"
                          >
                            <span aria-hidden className="block">
                              <span
                                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                                  isOpen ? "rotate-45" : ""
                                }`}
                              />
                              <span
                                className={`mt-[-1px] block h-px w-5 bg-current transition-transform duration-300 ${
                                  isOpen ? "-rotate-45" : ""
                                }`}
                              />
                            </span>
                          </button>
                        ) : null}
                      </div>

                      {item.folder && isOpen ? (
                        <ul className="pb-3 pl-4">
                          {item.folder.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block py-2.5 text-[0.95rem] text-muted"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>

              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 block rounded-full bg-[var(--c-primary)] px-6 py-4 text-center text-[0.95rem] font-medium text-[var(--c-on-primary)]"
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
