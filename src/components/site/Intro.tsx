import { Container } from "@/components/ui/Container";
import { intro } from "@/content/maya";

/** Dark statement band — the redesign’s answer to the template’s beige block. */
export function Intro() {
  return (
    <section className="bg-[var(--c-primary)] py-14 text-[var(--c-on-primary)] sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-[var(--c-accent)]">Where we begin</p>
            <h2 className="display mt-5 text-[clamp(1.875rem,3.6vw,3rem)] text-[var(--c-on-primary)]">
              {intro.heading}
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="lede font-medium text-[var(--c-on-primary)]">{intro.lead}</p>
            <p className="body-copy mt-7 text-[var(--c-on-primary-muted)]">{intro.body}</p>
            <p className="body-copy mt-5 text-[var(--c-on-primary-muted)]">
              {intro.second}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
