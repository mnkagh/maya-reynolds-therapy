import Image from "next/image";
import portrait from "@assets/dr-maya-reynolds.png";
import { Container } from "@/components/ui/Container";
import { about } from "@/content/maya";

/** Bio section — Maya’s portrait plus copy drawn straight from her profile. */
export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-14 sm:py-16 lg:py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[var(--c-surface-2)]">
              <Image
                src={portrait}
                alt="Dr. Maya Reynolds, PsyD, smiling, photographed in her Santa Monica office"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <p
              className="eyebrow"
              style={{ color: "var(--c-secondary)" }}
            >
              {about.label}
            </p>
            <h2 className="display mt-5 text-[clamp(1.875rem,3.6vw,3rem)]">
              {about.heading}
            </h2>
            <p className="mt-5 text-[0.95rem] text-muted">
              {about.role} · {about.location}
            </p>

            <p className="lede mt-9 max-w-2xl">{about.body}</p>
            <p className="body-copy mt-6 max-w-2xl text-muted">{about.body2}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
