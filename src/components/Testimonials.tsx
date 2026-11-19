"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../lib/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((idx + 1) % testimonials.length);
  return (
    <section className="testimonials">
      <div className="container">
        <p className="section-label">Client Love</p>
        <div className="testi-box">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <blockquote>“{t.quote}”</blockquote>
              <div className="testi-who">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt={t.name} />
                <div><b>{t.name}</b><div className="role">{t.role}</div></div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="testi-nav">
            <button className="arrow-pill" onClick={prev} aria-label="Previous testimonial">←</button>
            <button className="arrow-pill" onClick={next} aria-label="Next testimonial">→</button>
            <span className="counter">{idx + 1}/{testimonials.length}</span>
          </div>
        </div>
      </div>
      <div className="logos container">
        <small>Trusted by 125+ clients worldwide</small>
        <div className="row"><span>GitHub</span><span>Zumar Cons</span><span>Mathew Co.</span><span>Archin</span></div>
      </div>
    </section>
  );
}
