import { Container } from "@/components/ui/Container";
import { pullQuote } from "@/content/conejo";

/** Source geometry: solid #2b2b2b band, 1440×594, copy 860px, vertically centred. */
export function PullQuote() {
  return (
    <section className="flex items-center bg-[var(--c-ink)] py-[clamp(4.5rem,14vw,11rem)]">
      <Container>
        <h2 className="h2 max-w-[54rem] text-[var(--c-on-dark)]">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <em>Nothing will be too heavy for us to carry together.</em>
        </h2>
      </Container>
    </section>
  );
}
