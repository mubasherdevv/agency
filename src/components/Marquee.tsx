export default function Marquee() {
  const row = (key: string, cls: string) => (
    <div key={key} className={`marquee-track ${cls}`} aria-hidden="true">
      {[0, 1].map((half) => (
        <span key={half} style={{ display: "inline-flex" }}>
          {["Digital Agency", "Digital Agency", "Digital Agency"].map((t, i) => <span key={i}>{t}</span>)}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee">
      {row("a", "row1")}
      {row("b", "row2")}
    </div>
  );
}
