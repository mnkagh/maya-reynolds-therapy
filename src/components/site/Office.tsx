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
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[var(--c-surface-2)]">
              <Image
                src={officeOne}
                alt="The counselling room in the Santa Monica office — exposed brick, a grey sofa, a soft rug and sheer curtains filtering afternoon light"
                fill
                sizes="(min-width: 1024px) 56vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:-ml-16 lg:self-end">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-8 border-[var(--c-bg)] bg-[var(--c-surface-2)] shadow-[0_30px_70px_-50px_rgba(34,32,29,0.6)]">
              <Image
                src={officeTwo}
                alt="A second view of the office — a leather chair, a glass coffee table, warm wood flooring and a low bookshelf"
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="display text-[clamp(2.25rem,5vw,4rem)]">
              {office.label}.
            </h2>
            <h3 className="display mt-5 text-[clamp(1.25rem,2.4vw,1.75rem)]">
              {office.heading}
            </h3>
            <p className="lede mt-8 max-w-xl">{office.body}</p>
            <p className="body-copy mt-5 max-w-xl text-muted">{office.second}</p>
          </div>

          <div className="lg:col-span-6">
            <ul className="rounded-3xl border border-line bg-[var(--c-surface)] p-7 sm:p-9">
              {office.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-4 border-b border-line py-4 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <span
                    aria-hidden
                    className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full"
                    style={{ background: "var(--c-secondary)" }}
                  />
                  <span className="text-[0.95rem] leading-relaxed text-muted">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="display mt-6 text-[1.125rem]"
              style={{ color: "var(--c-secondary)" }}
            >
              123th Street 45 W, Santa Monica, CA 90401
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
