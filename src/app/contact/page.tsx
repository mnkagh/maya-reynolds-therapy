import type { Metadata } from "next";
import { ContactPage } from "@/components/site/ContactPage";
import { SiteLayout } from "@/components/site/SiteLayout";

export const metadata: Metadata = {
  title: "Contact | Dr. Maya Reynolds, PsyD | Santa Monica Therapy",
  description:
    "Get in touch with Dr. Maya Reynolds, PsyD — anxiety and trauma therapy in Santa Monica, California, and secure telehealth across California.",
};

export default function Contact() {
  return (
    <SiteLayout>
      <ContactPage />
    </SiteLayout>
  );
}
