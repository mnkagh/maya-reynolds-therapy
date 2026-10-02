import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { brand, footer } from "@/content/maya";

export function Footer() {
  return (
    <footer className="mt-8 bg-[var(--c-primary)] py-16 text-[var(--c-on-primary)] sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div data-reveal className="lg:col-span-5">
            <span className="flex items-center gap-3.5">
              <span
                aria-hidden
                className="relative grid size-12 shrink-0 place-items-center rounded-full border border-[var(--c-on-primary)]/30"
              >
                <span
                  aria-hidden
                  className="absolute inset-[5px] rounded-full border border-[var(--c-on-primary)]/20"
                />
                <span
                  aria-hidden
                  className="absolute bottom-[8px] h-[7px] w-[7px] rounded-full bg-[var(--c-accent)]"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="display text-[1.5rem] leading-none text-[var(--c-on-primary)]">
                  {brand.name}
                </span>
                <span
                  className="eyebrow mt-2"
                  style={{ color: "var(--c-accent)" }}
                >
                  {brand.role}
                </span>
              </span>
            </span>

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

            <a
              href="/contact"
              data-magnetic="10"
              className="mt-8 inline-block rounded-full bg-[var(--c-on-primary)] px-6 py-3 text-[0.9rem] font-medium text-[var(--c-primary)] transition-colors hover:bg-[var(--c-accent)]"
            >
              Book a Consultation
            </a>
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
