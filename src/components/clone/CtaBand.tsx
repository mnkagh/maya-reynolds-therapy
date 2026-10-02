import { ctaBand } from "@/content/conejo";
import { Plate } from "./Plate";

/**
 * Source geometry: 170px strip flush left · 534px copy column · 497×606 image
 * flush right, with ~120px gutters between them. Pill-outline action.
 */
export function CtaBand() {
  return (
    <section id="contact" className="scroll-mt-28 bg-[var(--c-bg)] py-[7%]">
      <div className="lg:grid lg:grid-cols-[11.8fr_53.4fr_34.8fr] lg:items-center">
        <div className="px-[5vw] lg:px-0">
          <Plate
            ratio="170 / 489"
            label="A person picking up seashells on a sandy beach"
            className="max-w-[13rem] lg:max-w-none"
          />
        </div>

        <div className="px-[5vw] py-12 lg:px-0 lg:py-0 lg:px-[5%]">
          <p className="eyebrow text-muted">{ctaBand.label}</p>
          <h2 className="h2 mt-6 max-w-[33rem]">
            Find a therapist who is the right fit for{" "}
            <span className="script">you</span>.
          </h2>
          <p className="body-copy mt-7 max-w-[30rem] text-[0.9rem] text-muted">
            {ctaBand.body}
          </p>
          <a
            href="#contact"
            className="mt-9 inline-block rounded-full border border-ink px-8 py-3.5 text-[0.8rem] tracking-[0.12em] uppercase transition-colors duration-300 hover:bg-[var(--c-ink)] hover:text-[var(--c-on-dark)]"
          >
            {ctaBand.cta}
          </a>
        </div>

        <div className="px-[5vw] lg:px-0">
          <Plate
            ratio="497 / 606"
            label="A person in a striped dress pointing at shells on the beach"
          />
        </div>
      </div>
    </section>
  );
}
