import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { brand, footer } from "@/content/maya";

export function Footer() {
  return (
    <footer className="mt-8 bg-[var(--c-primary)] py-16 text-[var(--c-on-primary)] sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div data-reveal className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex flex-col leading-none no-underline"
              aria-label="Dr. Maya Reynolds, PsyD — home"
            >
              <span className="display text-[1.5rem] leading-none text-[var(--c-on-primary)]">
                {brand.name}
              </span>
              <span
                className="eyebrow mt-2"
                style={{ color: "var(--c-accent)" }}
              >
                {brand.role}
              </span>
            </Link>

            <p className="body-copy mt-8 max-w-sm text-[0.95rem] text-[var(--c-on-primary-muted)]">
              {footer.blurb}
            </p>

            <address className="mt-8 space-y-1 text-[0.95rem] text-[var(--c-on-primary-muted)] not-italic">
              <div>{brand.address}</div>
              <div>{brand.cityStateZip}</div>
            </address>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="eyebrow text-[var(--c-accent)]">Navigate</h3>
            <ul className="mt-6 space-y-3 text-[0.95rem]">
              {footer.navigate.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[var(--c-on-primary-muted)] transition-colors hover:text-[var(--c-on-primary)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-[var(--c-accent)]">Areas I work with</h3>
            <ul className="mt-6 space-y-3 text-[0.95rem]">
              {footer.areas.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[var(--c-on-primary-muted)] transition-colors hover:text-[var(--c-on-primary)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--c-on-primary)]/15 pt-8 text-[0.85rem] text-[var(--c-on-primary-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="italic">{brand.serving}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© 2026 {brand.name}</span>
            <Link
              href="/clone"
              className="transition-colors hover:text-[var(--c-on-primary)]"
            >
              View the Part 1 clone
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
