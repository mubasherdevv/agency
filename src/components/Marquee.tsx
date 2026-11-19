export default function Marquee() {
  const items = ["Digital Agency", "Digital Agency", "Digital Agency"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <span key={half} style={{ display: "inline-flex" }}>
            {items.map((t, i) => <span key={i} className={i === 1 ? "solid" : undefined}>{t}</span>)}
          </span>
        ))}
      </div>
    </div>
  );
}
