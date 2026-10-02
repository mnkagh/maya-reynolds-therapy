import type { Metadata } from "next";
import { FaqsPage } from "@/components/site/FaqsPage";
import { SiteLayout } from "@/components/site/SiteLayout";

export const metadata: Metadata = {
  title: "FAQs | Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica",
  description:
    "Answers to common questions about therapy with Dr. Maya Reynolds in Santa Monica — online therapy, who she works with, EMDR, and what to expect from a first session.",
};

export default function Faqs() {
  return (
    <SiteLayout>
      <FaqsPage />
    </SiteLayout>
  );
}
