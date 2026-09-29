import { Container } from "@/components/ui/Container";
import { expertise, pullQuote } from "@/content/maya";

export function PullQuote() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="display max-w-5xl text-[clamp(1.625rem,3.4vw,2.75rem)] leading-snug">
          {pullQuote.text.split("Something quieter")[0]}
          <em>Something quieter</em>
          {pullQuote.text.split("Something quieter")[1]}
        </p>
      </Container>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="pb-16 pt-8 sm:pb-24 sm:pt-12">
      <Container>
        <h2 className="display text-[clamp(1.5rem,2.6vw,2.25rem)]">
          {expertise.heading}
        </h2>

        <ul className="mt-9 flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-3 sm:mt-12">
          {expertise.items.map((item, i) => (
            <li key={item} className="flex items-center gap-4">
              <span
                className="rounded-full border border-line bg-[var(--c-surface)] px-4 py-2 text-[0.9rem] text-muted"
                style={{ color: "var(--c-ink)" }}
              >
                {item}
              </span>
              {i === expertise.items.length - 1 ? (
                <em className="display text-[1.05rem] text-[var(--c-secondary)]">
                  {expertise.more}
                </em>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
