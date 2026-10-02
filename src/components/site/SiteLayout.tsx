import { AnnouncementBar } from "./Hero";
import { Footer } from "./Footer";
import { Header } from "./Header";

/**
 * Shared chrome for every page of the redesigned site: announcement bar,
 * sticky header with folder menus, and the footer. Individual pages supply
 * only their own content.
 */
export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-root theme-maya flex min-h-screen flex-col bg-[var(--c-bg)]">
      <AnnouncementBar />
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
