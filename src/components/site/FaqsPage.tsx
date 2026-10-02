import Image from "next/image";
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
    <section className="py-20 sm:py-28">
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
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[var(--c-surface-2)]">
                <Image
                  src="/images/maya/office-1.jpg"
                  alt="The counselling room in the Santa Monica office — a grey sofa, warm wood floors, brick and natural light"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-[0.85rem] text-muted italic">
                The office in Santa Monica — a quiet, private space.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
