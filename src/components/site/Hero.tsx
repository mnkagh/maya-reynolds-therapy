import { Container } from "@/components/ui/Container";
import { announcement, hero } from "@/content/maya";

export function AnnouncementBar() {
  return (
    <div className="bg-[var(--c-primary)]">
      <Container className="py-3">
        <p className="eyebrow text-center text-[var(--c-bg)]/80">
          {announcement.text}
        </p>
      </Container>
    </div>
  );
}

const facts = [
  { k: "In-person", v: "A private office in Santa Monica" },
  { k: "Telehealth", v: "Securely, anywhere in California" },
  { k: "Focus", v: "Anxiety, trauma and burnout" },
];

export function Hero() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container className="max-w-4xl text-center">
        <p
          data-reveal
          className="eyebrow text-[var(--c-secondary)]"
        >
          {hero.eyebrow}
        </p>

        <h1
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          className="display mx-auto mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]"
        >
          Anxiety &amp; <span className="script">trauma</span> therapy in
          Santa Monica
        </h1>

        <p
          data-reveal
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          className="lede mx-auto mt-7 max-w-2xl text-muted"
        >
          {hero.sub}
        </p>

        <div
          data-reveal
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          <a
            href="/contact"
            data-magnetic="14"
            className="rounded-full bg-[var(--c-primary)] px-8 py-4 text-[0.95rem] font-medium text-[var(--c-bg)] transition-colors duration-300 hover:bg-[var(--c-primary-soft)]"
          >
            {hero.cta}
          </a>
          <a
            href="#approach"
            className="line-link text-[0.95rem] font-medium text-[var(--c-secondary)]"
          >
            See how I work
          </a>
        </div>
      </Container>

      <Container className="mt-14 sm:mt-16">
        <div
          data-reveal
          className="grid gap-px overflow-hidden rounded-3xl border border-line bg-[var(--c-line)] sm:grid-cols-3"
        >
          {facts.map((item) => (
            <div key={item.k} className="bg-[var(--c-surface)] px-7 py-6 text-center">
              <p className="eyebrow text-muted">{item.k}</p>
              <p className="mt-2.5 text-[0.95rem]">{item.v}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
