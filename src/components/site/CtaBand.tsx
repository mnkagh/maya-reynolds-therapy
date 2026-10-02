import Image from "next/image";
import contactIcon from "@assets/contact-icon.jpg";
import { Container } from "@/components/ui/Container";
import { ctaBand } from "@/content/maya";

export function CtaBand() {
  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--c-primary)] px-8 py-16 sm:px-14 sm:py-20 lg:px-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(201,151,91,0.28), transparent 68%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(168,95,69,0.3), transparent 68%)",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--c-accent)]">{ctaBand.label}</p>
              <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)] text-[var(--c-on-primary)]">
                {ctaBand.heading}
              </h2>
              <p className="lede mt-7 max-w-xl text-[var(--c-on-primary-muted)]">
                {ctaBand.body}
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 lg:col-span-5 lg:items-end lg:text-right">
              <div className="w-full max-w-xs overflow-hidden rounded-3xl bg-[var(--c-on-primary)] shadow-[0_30px_70px_-40px_rgba(34,32,29,0.7)]">
                <Image
                  src={contactIcon}
                  alt="Contact Dr. Maya Reynolds to book a consultation"
                  className="h-auto w-full"
                />
              </div>
              <a
                href="/contact"
                className="inline-block rounded-full bg-[var(--c-on-primary)] px-9 py-4 text-[0.95rem] font-medium text-[var(--c-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--c-accent)] hover:text-[var(--c-primary)]"
              >
                {ctaBand.cta}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
