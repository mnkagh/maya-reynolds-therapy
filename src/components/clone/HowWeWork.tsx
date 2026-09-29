import { Container } from "@/components/ui/Container";
import { howWeWork } from "@/content/conejo";
import { Plate } from "./Plate";

/** Source geometry: sand band, 326×688 image flush right, two text columns. */
export function HowWeWork() {
  return (
    <section className="bg-[var(--c-sand)] py-[8%]">
      <Container>
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-8 lg:pr-16">
            <p className="eyebrow text-muted">{howWeWork.label}</p>
            <h2 className="h2 mt-6 max-w-[57rem] text-black">
              {howWeWork.heading}
            </h2>

            <div className="mt-16 grid gap-9 sm:grid-cols-2 sm:gap-10">
              <div>
                <p className="body-copy text-[0.9rem] text-black uppercase">
                  {howWeWork.lead}
                </p>
                <a href="#" className="btn-line mt-10 font-medium">
                  {howWeWork.cta}
                </a>
              </div>
              <div>
                <p className="body-copy text-[0.9rem] text-muted">
                  {howWeWork.body}
                </p>
                <p className="body-copy mt-6 text-[0.9rem] text-muted">
                  {howWeWork.second}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 lg:col-span-4 lg:mt-0 lg:-mr-[5vw]">
            <Plate
              ratio="326 / 688"
              label="A woman and a child in white dresses dancing on a sandy beach at sunset"
              className="max-w-[20rem] lg:max-w-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
