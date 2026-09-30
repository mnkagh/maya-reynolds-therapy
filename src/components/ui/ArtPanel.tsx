type Variant = "rings" | "arcs" | "strata" | "light";
type Tone = "glow" | "ember" | "sand" | "tide";

type Props = {
  tone?: Tone;
  variant?: Variant;
  className?: string;
  label?: string;
};

/**
 * Abstract brand artwork. Used instead of stock photography so imagery stays
 * intentional and on-palette: each panel maps to a service rather than being
 * an arbitrary picture.
 */
export function ArtPanel({
  tone = "glow",
  variant = "rings",
  className = "",
  label = "",
}: Props) {
  return (
    <div
      role="img"
      aria-label={label || undefined}
      className={`art art-${tone} ${className}`}
    >
      {variant === "rings" && <span className="art-rings" aria-hidden />}
      {variant === "arcs" && <span className="art-arcs" aria-hidden />}
      {variant === "strata" && <span className="art-strata" aria-hidden />}
      {variant === "light" && <span className="art-light" aria-hidden />}
    </div>
  );
}
