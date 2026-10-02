import Image from "next/image";
import officeOne from "@assets/office-1.jpg";
import { Container } from "@/components/ui/Container";
import { ArtPanel } from "@/components/ui/ArtPanel";
import { announcement } from "@/content/maya";
import { hero } from "@/content/maya";

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

export function Hero() {
  return (
    <section className="overflow-hidden pb-28 pt-14 sm:pb-40 sm:pt-20 lg:pb-44 lg:pt-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-[var(--c-secondary)]">{hero.eyebrow}</p>

            <h1 className="display mt-6 text-[clamp(2.5rem,6vw,4.5rem)]">
              Anxiety &amp; <span className="script">trauma</span> therapy in
              Santa Monica
            </h1>

            <p className="lede mt-7 max-w-xl text-muted">{hero.sub}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="/contact"
                className="rounded-full bg-[var(--c-primary)] px-8 py-4 text-[0.95rem] font-medium text-[var(--c-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--c-primary-soft)]"
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
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative ml-auto max-w-md lg:max-w-none">
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-t-[14rem] border border-line bg-[var(--c-surface-2)] shadow-[0_50px_100px_-62px_rgba(34,32,29,0.8)]">
                <ArtPanel
                  tone="tide"
                  variant="rings"
                  className="art-hover"
                  label="Abstract artwork of concentric rings in deep green"
                />

                <span
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 block aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="spin-slow block h-full w-full rounded-full border border-dashed border-[var(--c-bg)]/25" />
                </span>
              </div>

              <div className="tilt-3d absolute -bottom-14 -left-6 hidden w-52 overflow-hidden rounded-2xl border-8 border-[var(--c-bg)] shadow-[0_30px_70px_-45px_rgba(34,32,29,0.85)] sm:block lg:-left-14 lg:w-60">
                <div className="relative aspect-[4/3] w-full bg-[var(--c-surface-2)]">
                  <Image
                    src={officeOne}
                    alt="Inside the counselling room — exposed brick, a grey sofa, a glass coffee table and sheer curtains"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 right-0 hidden rounded-2xl border border-line bg-[var(--c-surface)] px-7 py-5 shadow-[0_24px_60px_-34px_rgba(34,32,29,0.55)] lg:-right-6 lg:block">
                <p className="eyebrow text-muted">Practice</p>
                <p className="display mt-2 text-[1.25rem]">Santa Monica, CA</p>
                <p className="mt-1.5 text-[0.85rem] text-muted">
                  In-person &amp; telehealth across California
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
