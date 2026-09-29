import type { Metadata } from "next";
import { CloneHome } from "@/components/clone/CloneHome";

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling (Part 1 clone)",
  description:
    "Part 1 of the assignment: a UI-accuracy clone of the Conejo Valley Family Counseling homepage, built as a layout, structure and typography study.",
  robots: { index: false, follow: false },
};

export default function ClonePage() {
  return <CloneHome />;
}
