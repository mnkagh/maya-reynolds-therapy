import { Container } from "@/components/ui/Container";
import { ArtPanel } from "@/components/ui/ArtPanel";
import { announcement, hero } from "@/content/maya";

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

/**
 * The hero is the first 3D surface on the page: an orbit field of rings
 * around a breathing core, with method chips floating in front of it. The
 * whole stack leans toward the pointer because each layer carries a
 * different depth inside `.scene`.
 */
export function Hero() {
  return (
    <section className="overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pt-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p
              data-reveal
              className="eyebrow text-[var(--c-secondary)]"
            >
              {hero.eyebrow}
            </p>

            <h1
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              className="display mt-6 text-[clamp(2.5rem,6vw,4.5rem)]"
            >
              Anxiety &amp; <span className="script">trauma</span> therapy in
              Santa Monica
            </h1>

            <p
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
              className="lede mt-7 max-w-xl text-muted"
            >
              {hero.sub}
            </p>

            <div
              data-reveal
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <a
                href="/contact"
                data-magnetic="14"
                className="rounded-full bg-[var(--c-primary)] px-8 py-4 text-[0.95rem] font-medium text-[var(--c-bg)] transition-colors duration-300 hover:bg-[var(--c-primary-soft)]"
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

          <div className="lg:col-span-6">
            <div
              data-tilt
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
              className="scene relative mx-auto aspect-square w-full max-w-[30rem]"
            >
              <div
                aria-hidden
                className="pulse-core absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--c-secondary)]/10 blur-3xl"
              />

              <div
                className="depth absolute inset-0"
                data-parallax="22"
              >
                <ArtPanel
                  tone="tide"
                  variant="rings"
                  className="art-hover absolute inset-[16%] rounded-full"
                  label="Concentric rings, an abstract motif for grounding"
                />

                <span
                  aria-hidden
                  className="orbit"
                  style={
                    {
                      width: "78%",
                      height: "78%",
                      "--orbit-duration": "24s",
                      "--orbit-tilt": "74deg",
                    } as React.CSSProperties
                  }
                />
                <span
                  aria-hidden
                  className="orbit orbit-dashed"
                  style={
                    {
                      width: "94%",
                      height: "94%",
                      "--orbit-duration": "36s",
                      "--orbit-direction": "reverse",
                      "--orbit-tilt": "76deg",
                    } as React.CSSProperties
                  }
                />
                <span
                  aria-hidden
                  className="orbit"
                  style={
                    {
                      width: "110%",
                      height: "110%",
                      "--orbit-duration": "50s",
                      "--orbit-tilt": "78deg",
                    } as React.CSSProperties
                  }
                />
              </div>

              <div
                className="depth absolute inset-0"
                style={{ transform: "translateZ(44px)" }}
              >
                <span
                  className="chip-float absolute left-1/2 top-[3%] -translate-x-1/2 rounded-full border border-line bg-[var(--c-surface)] px-5 py-2 text-[0.8rem] shadow-[0_14px_30px_-22px_rgba(34,32,29,0.7)]"
                  style={{ "--chip-delay": "0ms" } as React.CSSProperties}
                >
                  EMDR
                </span>
                <span
                  className="chip-float absolute bottom-[9%] left-1/2 -translate-x-1/2 rounded-full border border-line bg-[var(--c-surface)] px-5 py-2 text-[0.8rem] shadow-[0_14px_30px_-22px_rgba(34,32,29,0.7)]"
                  style={{ "--chip-delay": "1100ms" } as React.CSSProperties}
                >
                  CBT
                </span>
                <span
                  className="chip-float absolute bottom-[24%] right-[3%] rounded-full border border-line bg-[var(--c-surface)] px-5 py-2 text-[0.8rem] shadow-[0_14px_30px_-22px_rgba(34,32,29,0.7)]"
                  style={{ "--chip-delay": "2200ms" } as React.CSSProperties}
                >
                  Mindfulness
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-14 sm:mt-16">
        <div
          data-reveal
          className="grid gap-px overflow-hidden rounded-3xl border border-line bg-[var(--c-line)] sm:grid-cols-3"
        >
          {[
            { k: "In-person", v: "A private office in Santa Monica" },
            { k: "Telehealth", v: "Securely, anywhere in California" },
            { k: "Focus", v: "Anxiety, trauma and burnout" },
          ].map((item) => (
            <div
              key={item.k}
              className="bg-[var(--c-surface)] px-7 py-6"
            >
              <p className="eyebrow text-muted">{item.k}</p>
              <p className="mt-2.5 text-[0.95rem]">{item.v}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
