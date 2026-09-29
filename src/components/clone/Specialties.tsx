import { Container } from "@/components/ui/Container";
import { specialties } from "@/content/conejo";
import { Plate } from "./Plate";

/**
 * Source geometry: 769×533 image flush left with the 534px heading opposite,
 * then a three-column grid (370px cells, 66px gaps) where the first cell
 * holds the "specialties" sub-heading.
 */
export function Specialties() {
  return (
    <section className="bg-[var(--c-surface)] pt-[6%]">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 lg:-ml-[5vw]">
            <Plate
              ratio="769 / 533"
              label="Family of four standing on a beach facing the ocean at sunset"
            />
          </div>
          <div className="mt-12 lg:col-span-5 lg:mt-0 lg:pl-10">
            <h2 className="h2">
              Honoring where you’ve been{" "}
              <span className="script">&amp;</span> helping shape where you’re
              headed.
            </h2>
          </div>
        </div>
      </Container>

      <Container className="pb-[8%] pt-16">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-[5.3%]">
          <h3 className="h3 lg:col-span-1">
            Our <span className="script">specialties</span> include…
          </h3>

          <div className="grid gap-12 sm:col-span-1 sm:grid-cols-2 sm:gap-8 lg:col-span-2 lg:grid-cols-2 lg:gap-[11%]">
            {specialties.items.map((item) => (
              <article key={item.title}>
                <h4 className="h4">{item.title}</h4>
                <p className="body-copy mt-5 text-[0.85rem] text-muted">
                  {item.body}
                </p>
                <a href="#" className="line-link mt-6 text-[0.85rem] font-medium">
                  {specialties.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
