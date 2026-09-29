import { Container } from "@/components/ui/Container";
import { services } from "@/content/maya";

const variants = {
  glow: "rings",
  ember: "arcs",
  tide: "light",
  sand: "strata",
} as const;

/** Four-up grid, as in the template — three services plus an approach card. */
export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-[var(--c-surface-2)] py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(1.875rem,3.6vw,3rem)]">
              {services.heading}
            </h2>
          </div>
          <div className="flex items-end lg:col-span-5">
            <p className="eyebrow text-[var(--c-secondary)]">
              {services.subheading}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2">
          {services.items.map((item) => {
            const tone = item.art as keyof typeof variants;
            return (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-[var(--c-surface)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-46px_rgba(34,32,29,0.55)]"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <div
                    className={`art art-${tone} h-full w-full transition-transform duration-700 group-hover:scale-105`}
                    role="img"
                    aria-label=""
                  >
                    <span className={`art-${variants[tone]}`} aria-hidden />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  {"kicker" in item && item.kicker ? (
                    <p className="eyebrow mb-4 text-[var(--c-secondary)]">
                      {item.kicker}
                    </p>
                  ) : null}

                  <h3 className="display text-[1.5rem]">{item.title}</h3>
                  <p className="body-copy mt-4 flex-1 text-[0.95rem] text-muted">
                    {item.body}
                  </p>
                  <a
                    href="#contact"
                    className="line-link mt-7 self-start text-[0.9rem] font-medium text-[var(--c-secondary)]"
                  >
                    Request an appointment
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
