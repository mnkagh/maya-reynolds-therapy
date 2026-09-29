import { Container } from "@/components/ui/Container";
import { announcement } from "@/content/conejo";

export function AnnouncementBar() {
  return (
    <div className="bg-[var(--c-surface-2)]">
      <Container className="py-3">
        <p className="eyebrow text-center text-muted">
          {announcement.text}
        </p>
      </Container>
    </div>
  );
}
