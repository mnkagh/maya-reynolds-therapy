import { AnnouncementBar } from "./AnnouncementBar";
import { CtaBand } from "./CtaBand";
import { Expertise } from "./Expertise";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { HowWeWork } from "./HowWeWork";
import { Intro } from "./Intro";
import { PullQuote } from "./PullQuote";
import { Specialties } from "./Specialties";
import { WhoWeHelp } from "./WhoWeHelp";

/**
 * Part 1 — a faithful clone of the Conejo Valley Family Counseling homepage.
 * Layout, section order, grid systems, type scale and interaction details
 * (wiping rules, growing nav underlines, folder menus) are reproduced.
 */
export function CloneHome() {
  return (
    <div className="theme-root theme-conejo flex min-h-screen flex-col bg-[var(--c-bg)]">
      <AnnouncementBar />
      <Header />

      <main id="main" className="flex-1">
        <Hero />
        <Intro />
        <WhoWeHelp />
        <PullQuote />
        <Expertise />
        <HowWeWork />
        <Specialties />
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
