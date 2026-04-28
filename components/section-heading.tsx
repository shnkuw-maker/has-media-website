export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <div>{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}
