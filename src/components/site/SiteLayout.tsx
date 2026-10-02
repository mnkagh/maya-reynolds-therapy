import { AnnouncementBar } from "./Hero";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Interaction } from "./Interaction";
import { ThemeProvider } from "./ThemeProvider";

/**
 * Shared chrome for every page of the redesigned site: announcement bar,
 * sticky header with folder menus, and the footer. Individual pages supply
 * only their own content.
 */
export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div
        id="top"
        className="theme-root theme-maya flex min-h-screen flex-col bg-[var(--c-bg)]"
      >
        <AnnouncementBar />
        <Header />
        <div aria-hidden className="progress-track pointer-events-none">
          <div className="progress-bar" />
        </div>
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Interaction />
      </div>
    </ThemeProvider>
  );
}
