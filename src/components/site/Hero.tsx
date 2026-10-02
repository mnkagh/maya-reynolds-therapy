import Image from "next/image";
import Link from "next/link";
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
    <section className="overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pt-24">
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
              <Link
                href="#services"
                className="line-link text-[0.95rem] font-medium text-[var(--c-secondary)]"
              >
                See how I work
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 hidden h-2/3 w-2/3 lg:block"
            >
              <ArtPanel tone="sand" variant="light" />
            </div>

            <div className="relative ml-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[14rem] bg-[var(--c-surface-2)]">
                <Image
                  src="/images/maya/dr-maya-reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, California"
                  fill
                  preload
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-[var(--c-surface)] px-7 py-5 shadow-[0_24px_60px_-34px_rgba(34,32,29,0.55)] sm:block">
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
