import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footer } from "@/content/conejo";

/** Source geometry: logo, three right-weighted columns, teal closing bar. */
export function Footer() {
  return (
    <footer className="bg-[var(--c-surface)] pt-[4%]">
      <Container>
        <Link
          href="/clone"
          className="block w-fit no-underline"
          aria-label="Conejo Valley Family Counseling — home"
        >
          <span className="h2 block leading-[1.12]">
            Conejo Valley
            <br />
            <span className="block pl-[0.35em] text-[0.62em] tracking-[0.06em]">
              Family Counseling
            </span>
          </span>
        </Link>

        <p className="body-copy mt-9 max-w-[26rem] text-[0.85rem] text-muted">
          {footer.blurb}
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-start-1">
            <h3 className="eyebrow text-muted">Navigate</h3>
            <ul className="mt-5 space-y-2.5 text-[0.85rem]">
              <li>
                <a href="#" className="line-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="line-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="line-link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="line-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-muted">Our Team</h3>
            <ul className="mt-5 space-y-2.5 text-[0.85rem]">
              {footer.team.map((name) => (
                <li key={name}>
                  <a href="#" className="line-link">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-muted">Contact</h3>
            <address className="mt-5 space-y-2.5 text-[0.85rem] not-italic lg:text-right">
              {footer.address.map((line) => (
                <div key={line}>{line}</div>
              ))}
              <div className="pt-1">
                <a href={`mailto:${footer.email}`} className="line-link">
                  {footer.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${footer.phone.replace(/\D/g, "")}`}
                  className="line-link"
                >
                  {footer.phone}
                </a>
              </div>
            </address>
          </div>
        </div>

        <p className="mt-16 text-[0.85rem] text-muted italic">
          {footer.serving}
        </p>
      </Container>

      <div className="mt-12 bg-[var(--c-secondary)] py-4">
        <Container>
          <div className="flex flex-col gap-2 text-[0.7rem] text-[var(--c-ink)] sm:flex-row sm:items-center sm:justify-between">
            <span>
              Conejo Valley Family Counseling — In&nbsp;Newbury&nbsp;Park, CA
            </span>
            <span className="flex gap-5">
              <a href="#" className="line-link">
                Terms
              </a>
              <a href="#" className="line-link">
                Privacy Policy
              </a>
              <a href="#" className="line-link">
                Disclaimer
              </a>
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
