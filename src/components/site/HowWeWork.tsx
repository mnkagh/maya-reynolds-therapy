import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { howWeWork } from "@/content/maya";

export function HowWeWork() {
  return (
    <section
      id="approach"
      className="scroll-mt-28 overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <p className="eyebrow text-[var(--c-secondary)]">{howWeWork.label}</p>
        <h2 className="display mt-5 max-w-3xl text-[clamp(1.875rem,3.8vw,3.25rem)]">
          {howWeWork.heading}
        </h2>
      </Container>

      <Container className="mt-12 sm:mt-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[var(--c-surface-2)]">
              <Image
                src="/images/maya/office-2.jpg"
                alt="The counselling room in the Santa Monica office — a grey sofa, warm wood floors, plants and a bookshelf in natural light"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-8">
            <p className="lede italic">{howWeWork.lead}</p>
            <p className="body-copy mt-7 text-muted">{howWeWork.body}</p>
            <p className="body-copy mt-5 text-muted">{howWeWork.second}</p>
            <a
              href="/contact"
              className="btn-line mt-9 self-start font-medium text-[var(--c-secondary)]"
            >
              {howWeWork.cta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
