import { Container } from "@/components/ui/Container";
import { hero } from "@/content/conejo";
import { Plate } from "./Plate";

/**
 * Source geometry at 1440px: image 497×572 flush left · copy 643 wide from
 * x=617 · 115×378 strip flush right, bottom-aligned with the main image.
 */
export function Hero() {
  return (
    <section className="pt-[7%]">
      <div className="lg:grid lg:grid-cols-[34.5fr_53.5fr_8fr] lg:items-center">
        <div className="px-[5vw] lg:px-0">
          <Plate ratio="497 / 572" label="Family therapy" />
        </div>

        <div className="px-[5vw] py-12 lg:px-0 lg:py-0 lg:pl-[8.3%]">
          <p className="eyebrow text-muted">{hero.eyebrow}</p>
          <h1 className="h1 mt-6">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="script">thrive</span>.
          </h1>
          <p className="lede mt-7 max-w-[38rem] text-muted">{hero.sub}</p>
          <a href="#contact" className="btn-line mt-9 font-medium">
            {hero.cta}
          </a>
        </div>

        <div className="px-[5vw] lg:px-0">
          <Plate
            ratio="115 / 378"
            label="Child therapy"
            className="ml-auto max-w-[11rem] lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
