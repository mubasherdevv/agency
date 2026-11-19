"use client";
import { motion } from "framer-motion";
import { approach } from "../lib/data";

const ICONS = ["✦", "◐", "◎", "◆", "▲"];

export default function Approach() {
  return (
    <section className="approach">
      <div className="container">
        <div className="approach-sticky"><h2>APPROACH</h2></div>
        <div className="approach-cards">
          {approach.map((a, i) => (
            <motion.div key={a.title} className={`approach-card${a.white ? " white" : ""}`}
              initial={{ opacity: 0, y: 60, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="approach-icon">{ICONS[i]}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
