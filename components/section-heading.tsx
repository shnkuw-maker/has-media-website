export function SectionHeading({ title }: { title: string }) {
  return (
    <h2 style={{
      textAlign: "center",
      color: "#c87056",
      fontSize: 32,
      margin: "20px 0"
    }}>
      {title}
    </h2>
  );
}
