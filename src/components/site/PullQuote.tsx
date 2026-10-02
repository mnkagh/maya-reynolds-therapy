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
    <section className="py-16 sm:py-24">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <h2 className="h3 lg:col-span-3">
            What I <span className="script">work with</span>
          </h2>

          <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:col-span-9 lg:mt-0 lg:grid-cols-3">
            {expertise.items.map((item) => (
              <li
                key={item}
                className="border-b border-line/70 pb-3 text-[0.95rem] leading-snug"
              >
                {item}
              </li>
            ))}
            <li className="border-b border-line/70 pb-3">
              <em className="display text-[1.05rem] text-[var(--c-secondary)]">
                {expertise.more}
              </em>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
