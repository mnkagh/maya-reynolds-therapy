type Props = {
  ratio?: string;
  className?: string;
  label?: string;
  tone?: "light" | "deep";
};

/**
 * Neutral stand-in for the source template's photography. Deliberately
 * abstract: the brief grades layout, spacing and structure, and shipping
 * another practice's images would be both a licensing problem and a
 * distraction from what Part 1 is testing.
 */
export function Plate({
  ratio = "4 / 3",
  className = "",
  label = "",
  tone = "light",
}: Props) {
  return (
    <div
      role="img"
      aria-label={label || "Image placeholder"}
      className={`relative w-full overflow-hidden ${
        tone === "deep" ? "bg-[var(--c-secondary)]" : "bg-[var(--c-sand)]"
      } ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            tone === "deep"
              ? "linear-gradient(150deg, rgba(255,255,255,0.35), transparent 60%)"
              : "linear-gradient(150deg, rgba(255,255,255,0.75), rgba(255,255,255,0) 55%)",
        }}
      />
      <span
        aria-hidden
        className="absolute right-0 bottom-0 h-2/3 w-2/3"
        style={{
          backgroundImage:
            tone === "deep"
              ? "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.45), transparent 70%)"
              : "radial-gradient(circle at 100% 100%, rgba(168,95,69,0.22), transparent 70%)",
        }}
      />
    </div>
  );
}
