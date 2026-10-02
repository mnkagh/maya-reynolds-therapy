import type { Metadata } from "next";
import { Caveat, DM_Sans, Fraunces, Karla, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
  description:
    "Warm, evidence-based therapy for adults navigating anxiety, panic, trauma, and burnout in Santa Monica, CA. In-person and telehealth across California.",
  keywords: [
    "anxiety therapy Santa Monica",
    "trauma therapist Santa Monica CA",
    "EMDR therapy Los Angeles",
    "burnout therapy Santa Monica",
    "licensed psychologist Santa Monica",
    "telehealth therapy California",
    "CBT Santa Monica",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica",
    description:
      "Warm, evidence-based therapy for adults navigating anxiety, panic, trauma, and burnout. In-person in Santa Monica and telehealth across California.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${dmSans.variable} ${caveat.variable} ${fraunces.variable} ${karla.variable} antialiased`}
    >
      <body className="min-h-full">
        <Script id="maya-js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>
        <Script id="maya-theme-init" strategy="beforeInteractive">
          {`try{if(localStorage.getItem('maya-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
