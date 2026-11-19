"use client";
import { motion } from "framer-motion";
import { services } from "../lib/data";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <p className="section-label">What We Do</p>
        <h2>Services that move brands forward.</h2>
        <div className="service-grid">
          {services.map((s, i) => (
            <motion.article key={s.title} className="service-card"
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.12, duration: 0.6 }}>
              <div><span className="num">{s.n} /</span><h3>{s.title}</h3><p>{s.desc}</p></div>
              <div className={`shape shape-${s.shape}`} />
              <a href="#" className="link">KNOW MORE →</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
