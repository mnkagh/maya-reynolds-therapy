import { Container } from "@/components/ui/Container";
import { whoWeHelp } from "@/content/conejo";
import { Plate } from "./Plate";

/**
 * Source geometry: heading at the 5vw gutter, then three 364px cards starting
 * 165px further in, 20px apart, ending flush with the right gutter.
 */
export function WhoWeHelp() {
  return (
    <section className="bg-[var(--c-surface)] py-[6%]">
      <Container>
        <h2 className="h2 max-w-[26rem]">
          Who we <span className="script">help</span>
        </h2>

        <div className="mt-16 flex flex-col gap-12 lg:mt-20 lg:flex-row lg:gap-5 lg:pl-[12.7%]">
          {whoWeHelp.items.map((item) => (
            <article key={item.title} className="flex-1">
              <Plate ratio="364 / 416" label={item.title} />
              <h3 className="h4 mt-11">
                {item.link ? (
                  <a href="#" className="line-link">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p className="body-copy mt-5 text-[0.85rem] text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
