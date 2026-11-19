"use client";
import { motion } from "framer-motion";
import { services } from "../lib/data";

function Shape({ kind }: { kind: string }) {
  if (kind === "chrome-x") {
    return (
      <div className="shape-area"><div className="shape shape-chrome-x"><i /><i /></div></div>
    );
  }
  if (kind === "spring") {
    return (
      <div className="shape-area"><div className="shape shape-spring"><i /><i /><i /><i /><i /></div></div>
    );
  }
  return (
    <div className="shape-area"><div className="shape shape-cubes"><i /><i /><i /></div></div>
  );
}

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services-head">
          <p className="section-label">• Services</p>
          <a href="#" className="see-more">SEE MORE →</a>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <motion.article key={s.title} className={`service-card${i === 1 ? " light" : ""}`}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.12, duration: 0.6 }}>
              <div><h3>{s.title}</h3><p>{s.desc}</p></div>
              <Shape kind={s.shape} />
              <div className="service-foot">
                <a href="#" className="link">KNOW MORE</a>
                <button className="arrow-pill sm" aria-label={s.title}>↗</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
