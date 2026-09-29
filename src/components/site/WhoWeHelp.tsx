import { Container } from "@/components/ui/Container";
import { whoWeHelp } from "@/content/maya";

const accents = [
  { art: "glow", variant: "rings" as const },
  { art: "ember", variant: "arcs" as const },
  { art: "tide", variant: "light" as const },
];

export function WhoWeHelp() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <h2 className="display max-w-3xl text-[clamp(1.875rem,3.6vw,3rem)]">
          {whoWeHelp.heading}
        </h2>

        <div className="mt-14 grid gap-8 sm:mt-16 md:grid-cols-3">
          {whoWeHelp.items.map((item, i) => {
            const a = accents[i];
            return (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-[var(--c-surface)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-46px_rgba(34,32,29,0.6)]"
              >
                <div className="aspect-[5/4] w-full overflow-hidden">
                  <div
                    className={`art art-${a.art} h-full w-full transition-transform duration-700 group-hover:scale-105`}
                    role="img"
                    aria-label=""
                  >
                    <span className={`art-${a.variant}`} aria-hidden />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="display text-[1.5rem]">{item.title}</h3>
                  <p className="body-copy mt-4 flex-1 text-[0.95rem] text-muted">
                    {item.body}
                  </p>
                  <span
                    aria-hidden
                    className="mt-7 h-px w-10"
                    style={{ background: "var(--c-secondary)" }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
