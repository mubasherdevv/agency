"use client";
import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolio } from "../lib/data";

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const row = rowRef.current;
    if (!row) return;
    const startX = e.clientX;
    const startScroll = row.scrollLeft;
    row.setPointerCapture(e.pointerId);
    row.classList.add("dragging");
    const move = (ev: PointerEvent) => { row.scrollLeft = startScroll - (ev.clientX - startX); };
    const up = () => {
      row.classList.remove("dragging");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <section className="portfolio" ref={ref}>
      <div className="container">
        <div className="portfolio-head">
          <div><p className="section-label">• Portfolio</p><h2>Featured Projects</h2></div>
          <a href="#" className="see-more">SEE MORE →</a>
        </div>
      </div>
      <motion.div className="portfolio-row" ref={rowRef} style={{ x, paddingLeft: "4vw" }} onPointerDown={onPointerDown}>
        {portfolio.map((p, i) => (
          <motion.article key={p.title} className="port-card"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.06, duration: 0.6 }}>
            <div className="img-wrap" style={{ background: p.bg }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.title} loading="lazy" draggable={false} />
              <div className="port-label"><span>{p.title}</span><span className="port-arrow">→</span></div>
            </div>
          </motion.article>
        ))}
        <motion.article className="port-card port-more"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.36, duration: 0.6 }}>
          <span>{"{ MORE PROJECTS"}</span>
        </motion.article>
      </motion.div>
    </section>
  );
}
