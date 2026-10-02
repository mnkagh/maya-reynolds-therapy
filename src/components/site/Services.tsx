import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/maya";

/** Three service cards, as in the brief. */
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

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => (
            <article
              key={item.title}
              className="tilt-3d group flex flex-col overflow-hidden rounded-3xl border border-line bg-[var(--c-surface)] hover:shadow-[0_30px_70px_-46px_rgba(34,32,29,0.55)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--c-surface-2)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <h3 className="display text-[1.5rem]">{item.title}</h3>
                  <p className="body-copy mt-4 flex-1 text-[0.95rem] text-muted">
                    {item.body}
                  </p>
                <a
                  href="/contact"
                  className="line-link mt-7 self-start text-[0.9rem] font-medium text-[var(--c-secondary)]"
                >
                  Request an appointment
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
