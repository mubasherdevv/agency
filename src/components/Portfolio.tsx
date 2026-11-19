"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolio } from "../lib/data";

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <section className="portfolio" ref={ref}>
      <div className="container">
        <div className="portfolio-head">
          <div><p className="section-label">Selected Work</p><h2>Featured Projects</h2></div>
          <button className="arrow-pill" aria-label="Scroll portfolio" onClick={() => ref.current?.querySelector(".portfolio-row")?.scrollBy({ left: 600, behavior: "smooth" })}>→</button>
        </div>
      </div>
      <motion.div className="portfolio-row" style={{ x, paddingLeft: "4vw" }}>
        {portfolio.map((p, i) => (
          <motion.article key={p.title} className="port-card"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.06, duration: 0.6 }}>
            <div className="img-wrap" style={{ background: p.bg }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <div className="meta">
              <div><h3>{p.title}</h3><div className="cat">{p.cat}</div></div>
              <button className="arrow-pill" aria-label={p.title}>↗</button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
