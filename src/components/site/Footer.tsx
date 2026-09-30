import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { brand, footer, nav } from "@/content/maya";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[var(--c-bg)] pb-10 pt-16 sm:pt-20">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <Link
            href="#top"
            className="flex items-center gap-3.5 no-underline"
            aria-label="Dr. Maya Reynolds, PsyD — home"
          >
            <span
              aria-hidden
              className="relative grid size-12 shrink-0 place-items-center rounded-full border border-ink/20"
            >
              <span
                aria-hidden
                className="absolute inset-[5px] rounded-full border border-ink/12"
              />
              <span
                aria-hidden
                className="absolute bottom-[8px] h-[7px] w-[7px] rounded-full"
                style={{ background: "var(--c-secondary)" }}
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="display text-[1.5rem] leading-none">
                {brand.name}
              </span>
              <span
                className="eyebrow mt-2"
                style={{ color: "var(--c-secondary)" }}
              >
                {brand.role}
              </span>
            </span>
          </Link>

          <p className="body-copy max-w-md text-[0.95rem] text-muted lg:text-right">
            {footer.blurb}
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="eyebrow text-muted">Navigate</h3>
            <ul className="mt-5 space-y-2.5 text-[0.95rem]">
              {footer.navigate.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="line-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-muted">Contact</h3>
            <address className="mt-5 space-y-2.5 text-[0.95rem] not-italic">
              <div>{brand.address}</div>
              <div>{brand.cityStateZip}</div>
            </address>
          </div>

          <div>
            <h3 className="eyebrow text-muted">Areas of care</h3>
            <ul className="mt-5 space-y-2.5 text-[0.95rem]">
              {nav
                .filter((n) => n.folder)
                .flatMap((n) => n.folder ?? [])
                .map((child) => (
                  <li key={child.label}>
                    <a href={child.href} className="line-link text-muted">
                      {child.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-[0.9rem] text-muted italic">{brand.serving}</p>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-[0.85rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Dr. Maya Reynolds, PsyD · Santa Monica, California</span>
          <Link href="/clone" className="line-link">
            View the Part 1 clone
          </Link>
        </div>
      </Container>
    </footer>
  );
}
