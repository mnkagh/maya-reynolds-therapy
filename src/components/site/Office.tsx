import Image from "next/image";
import officeOne from "@assets/office-1.jpg";
import officeTwo from "@assets/office-2.jpg";
import { Container } from "@/components/ui/Container";
import { office } from "@/content/maya";

/**
 * Part 3 — a section that does not exist in the source template.
 * Both images come from the therapist's own supplied office assets.
 */
export function Office() {
  return (
    <section
      id="office"
      className="scroll-mt-28 overflow-hidden py-14 sm:py-16 lg:py-16"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="display text-[clamp(2.25rem,5vw,4rem)]">
              {office.label}.
            </h2>
            <h3 className="display mt-5 text-[clamp(1.25rem,2.4vw,1.75rem)]">
              {office.heading}
            </h3>
            <p className="lede mt-8 max-w-xl">{office.body}</p>
            <p className="body-copy mt-5 max-w-xl text-muted">{office.second}</p>

            <address className="display mt-8 text-[1.125rem] not-italic" style={{ color: "var(--c-secondary)" }}>
              123th Street 45 W, Santa Monica, CA 90401
            </address>
          </div>

          <div className="lg:col-span-7" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[var(--c-surface-2)]">
                <Image
                  src={officeOne}
                  alt="The counselling room in the Santa Monica office — exposed brick, a grey sofa, a soft rug and sheer curtains filtering afternoon light"
                  fill
                  sizes="(min-width: 1024px) 32vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[var(--c-surface-2)]">
                <Image
                  src={officeTwo}
                  alt="A second view of the office — a leather chair, a glass coffee table, warm wood flooring and a low bookshelf"
                  fill
                  sizes="(min-width: 1024px) 32vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
