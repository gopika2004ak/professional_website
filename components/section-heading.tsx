export function SectionHeading({ index, label, title }: { index: string; label: string; title?: string }) {
  return (
    <div className="section-heading">
      <span>{index}</span><p>{label}</p>{title ? <h2>{title}</h2> : null}
    </div>
  );
}
