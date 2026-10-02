import Image from "next/image";
import faqPhoto from "@assets/faq-1.jpg";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/content/maya";

/**
 * Dedicated FAQ page, matching the structure of the source template's
 * /faqs route: a page heading, a short intro, then every question and
 * answer as a readable list. The office photograph sits alongside so the
 * page does not read as a single narrow column.
 */
export function FaqsPage() {
  return (
    <section className="py-14 sm:py-16 lg:py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="h1">Questions?</h1>
            <p className="lede mt-7 max-w-2xl text-muted">
              Here are some of the most common questions people ask before
              starting. If you don’t see yours — or you’re ready to schedule a
              free consult —{" "}
              <a href="/contact" className="line-link text-[var(--c-secondary)]">
                get in touch
              </a>
              .
            </p>

            <div className="mt-14 space-y-10">
              {faqs.items.map((item) => (
                <div key={item.q}>
                  <h2 className="h4">{item.q}</h2>
                  <p className="body-copy mt-3 text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-[var(--c-surface-2)]">
                <Image
                  src={faqPhoto}
                  alt="A magnifying glass over the words “Frequently asked Questions”"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-3xl border border-line bg-[var(--c-surface)] p-7">
                <h2 className="eyebrow text-muted">Still unsure?</h2>
                <p className="body-copy mt-3 text-[0.95rem] text-muted">
                  The quickest way to find out whether therapy here is right for
                  you is a free, no-obligation consultation.
                </p>
                <a
                  href="/contact"
                  className="line-link mt-5 inline-block text-[0.9rem] font-medium text-[var(--c-secondary)]"
                >
                  Book a consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
