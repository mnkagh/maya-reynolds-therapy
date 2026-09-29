type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
  id?: string;
  label?: string;
};

/** Matches the source template's 5vw page gutter (72px at 1440). */
export function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
  label,
}: Props) {
  return (
    <Tag
      id={id}
      aria-label={label}
      className={`mx-auto w-full max-w-[110rem] px-[5vw] ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Pulls a child out to the true viewport edge, cancelling the 5vw gutter. */
export function Bleed({ className = "" }: { className?: string }) {
  return <div className={`lg:-mx-[5vw] ${className}`} />;
}
