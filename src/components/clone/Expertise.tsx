import { Container } from "@/components/ui/Container";
import { expertise } from "@/content/conejo";

/** Source geometry: 316px heading column, then a three-column tracked item list. */
export function Expertise() {
  return (
    <section className="bg-[var(--c-surface)] py-[8%]">
      <Container>
        <div className="lg:grid lg:grid-cols-12">
          <h3 className="h3 lg:col-span-3">
            Our areas of <span className="script">expertise</span>
          </h3>

          <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-9 lg:mt-2 lg:grid-cols-3">
            {expertise.items.map((item) => (
              <li key={item.label}>
                {item.link ? (
                  <a href="#" className="eyebrow text-ink">
                    {item.label}
                  </a>
                ) : (
                  <span className="eyebrow text-muted">{item.label}</span>
                )}
              </li>
            ))}
            <li>
              <em className="eyebrow text-[var(--c-secondary)]">
                {expertise.more}
              </em>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
