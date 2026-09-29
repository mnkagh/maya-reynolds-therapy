import { Container } from "@/components/ui/Container";
import { intro } from "@/content/conejo";
import { Plate } from "./Plate";

/** Source geometry: 693px heading, two text columns, 436×626 image flush right. */
export function Intro() {
  return (
    <section className="mt-[6%] bg-[var(--c-bg)] py-[9%]">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 lg:pr-16">
            <h2 className="h2 max-w-[43rem]">
              You’re holding onto hope that life can be better than it is right
              now.
            </h2>

            <div className="mt-14 grid gap-9 sm:grid-cols-2 sm:gap-10">
              <p className="body-copy text-[0.9rem] font-bold">
                {intro.lead}
                <span className="mt-4 block font-normal text-muted">
                  {intro.body}
                </span>
              </p>
              <p className="body-copy text-[0.9rem] text-muted">{intro.second}</p>
            </div>
          </div>

          <div className="mt-14 lg:col-span-5 lg:mt-0 lg:-mr-[5vw]">
            <Plate
              ratio="436 / 626"
              label="Sandy beach with gentle ocean waves and a cloudy sky"
              className="max-w-[26rem] lg:ml-auto lg:max-w-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
