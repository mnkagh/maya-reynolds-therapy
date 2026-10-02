import { About } from "./About";
import { CtaBand } from "./CtaBand";
import { Faq } from "./Faq";
import { Hero } from "./Hero";
import { HowWeWork } from "./HowWeWork";
import { Intro } from "./Intro";
import { Office } from "./Office";
import { Expertise, PullQuote } from "./PullQuote";
import { Services } from "./Services";
import { SiteLayout } from "./SiteLayout";

export function SiteHome() {
  return (
    <SiteLayout>
      <Hero />
      <Intro />
      <PullQuote />
      <Expertise />
      <About />
      <HowWeWork />
      <Services />
      <Office />
      <Faq />
      <CtaBand />
    </SiteLayout>
  );
}
