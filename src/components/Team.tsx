"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { teamImgs } from "../lib/data";

const members = [
  { name: "Alex Morgan", role: "Creative Director", img: teamImgs[0] },
  { name: "Sara Lee", role: "Design Lead", img: teamImgs[1] },
  { name: "James Carter", role: "Strategy Director", img: teamImgs[2] },
  { name: "Emma Wilson", role: "Art Director", img: teamImgs[3] },
];

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  return (
    <section className="team" ref={ref}>
      <div className="container">
        <p className="section-label">Our People</p>
        <h2>MEET OUR TEAM.</h2>
        <p className="lead">Each member of our team brings a unique set of skills and perspectives, blending together to forge a collective that thrives on pushing the boundaries.</p>
        <div className="team-grid">
          {members.map((m, i) => (
            <motion.article key={m.name} className="team-card"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
              <div className="img-wrap"><motion.img src={m.img} alt={m.name} loading="lazy" style={{ y }} /></div>
              <div className="meta"><h3>{m.name}</h3><div className="role">{m.role}</div></div>
            </motion.article>
          ))}
        </div>
        <div className="team-stats">
          <div className="stat"><b>4.9/5</b><span>Client Reviews</span></div>
          <div className="stat"><b>2k+</b><span>Product Launch</span></div>
          <div className="stat"><b>35+</b><span>Ready Teammates</span></div>
        </div>
        <motion.div className="recognition" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div><p className="section-label">Global Recognition</p><h3>We thrive to create design that make impact not just impressions.</h3></div>
          <button className="arrow-pill">↗</button>
        </motion.div>
      </div>
    </section>
  );
}
