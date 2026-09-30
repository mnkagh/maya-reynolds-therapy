"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/content/conejo";

type Folder = { label: string; href: string; folder: unknown } | {
  label: string;
  href: string;
  folder: { label: string; href: string }[];
};

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

      <header className="relative z-40 border-b border-line bg-[var(--c-surface)]">
        <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-6 px-6 py-6 sm:px-10 lg:px-16">
          <Link
            href="/clone"
            className="flex flex-col leading-none"
            aria-label="Conejo Valley Family Counseling — home"
          >
            <span className="display text-[1.375rem] leading-tight sm:text-[1.625rem]">
              Conejo Valley
              <br />
              Family Counseling
            </span>
            <span className="eyebrow mt-2 text-muted">Newbury Park, CA</span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <nav aria-label="Main" className="flex items-center gap-7">
              {nav.map((item) => (
                <div key={item.label} className="group/nav relative">
                  <Link href={item.href} className="nav-item text-[0.9rem]">
                    {item.label}
                    {"folder" in item && item.folder ? (
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

                  {"folder" in item && item.folder ? (
                    <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-6 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-x-[-50%] group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                      <ul className="border border-line bg-[var(--c-surface)] py-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
                        {item.folder.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-5 py-3 text-[0.9rem] transition-colors hover:bg-[var(--c-bg)]"
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
            </nav>

            <span aria-hidden className="h-5 w-px bg-line" />
            <Link href="#" aria-label="Cart" className="opacity-70">
              <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]">
                <path
                  d="M2 2h2.2l2 10.2h9.4L18 5H5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle cx="8" cy="17" r="1.2" fill="currentColor" />
                <circle cx="15" cy="17" r="1.2" fill="currentColor" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="clone-mobile-nav"
            className="flex items-center gap-2.5 text-[0.9rem] lg:hidden"
          >
            {open ? "Close Menu" : "Open Menu"}
            <span aria-hidden className="flex h-3 w-5 flex-col justify-between">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>

        {open ? (
          <div
            id="clone-mobile-nav"
            className="fixed inset-0 z-50 flex flex-col bg-[var(--c-surface)] lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-line px-[5vw] py-5">
              <span className="display text-[1.15rem] leading-none">
                Conejo Valley
                <br />
                Family Counseling
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
                  const hasFolder = "folder" in item && !!item.folder;
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
                        {hasFolder ? (
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

                      {hasFolder && isOpen ? (
                        <ul className="pb-3 pl-4">
                          {item.folder!.map((child) => (
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
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}

export type { Folder };
