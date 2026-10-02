import { Container } from "@/components/ui/Container";
import { faqs } from "@/content/maya";

/**
 * Dedicated FAQ page, matching the structure of the source template's
 * /faqs route: a page heading, a short intro, then every question and
 * answer as a readable list.
 */
export function FaqsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <h1 className="h1">Questions?</h1>
        <p className="lede mt-7 max-w-2xl text-muted">
          Here are some of the most common questions people ask before starting.
          If you don’t see yours — or you’re ready to schedule a free consult —{" "}
          <a
            href="/contact"
            className="line-link text-[var(--c-secondary)]"
          >
            get in touch
          </a>
          .
        </p>

        <div className="mt-16 space-y-12">
          {faqs.items.map((item) => (
            <div key={item.q} className="max-w-3xl">
              <h2 className="h3">{item.q}</h2>
              <p className="body-copy mt-4 text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
