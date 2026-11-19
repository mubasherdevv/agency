"use client";
import { motion } from "framer-motion";
import { awards } from "../lib/data";

export default function Awards() {
  return (
    <section className="awards">
      <div className="container">
        <p className="section-label">Recognition</p>
        <h2>Awards<br />Recognition</h2>
        {awards.map((a, i) => (
          <motion.div key={a.year + a.title} className="award-row"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}>
            <span className="year">{a.year}</span>
            <h3>{a.title}</h3>
            <span className="tag">{a.tag}</span>
            <span className="arr">↗</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
