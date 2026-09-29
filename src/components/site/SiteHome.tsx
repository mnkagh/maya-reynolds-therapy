import { About } from "./About";
import { AnnouncementBar, Hero } from "./Hero";
import { CtaBand } from "./CtaBand";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HowWeWork } from "./HowWeWork";
import { Intro } from "./Intro";
import { Office } from "./Office";
import { Expertise, PullQuote } from "./PullQuote";
import { Services } from "./Services";
import { WhoWeHelp } from "./WhoWeHelp";

/**
 * Parts 2 & 3 — Dr. Maya Reynolds, PsyD.
 * The section rhythm of the cloned template is preserved; the theme,
 * palette, type pairing, copy and imagery are entirely new.
 */
export function SiteHome() {
  return (
    <div className="theme-root theme-maya flex min-h-screen flex-col bg-[var(--c-bg)]">
      <div id="top" />
      <AnnouncementBar />
      <Header />

      <main id="main" className="flex-1">
        <Hero />
        <Intro />
        <WhoWeHelp />
        <PullQuote />
        <Expertise />
        <About />
        <HowWeWork />
        <Services />
        <Office />
        <Faq />
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
