"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials, testiLeft, testiRight } from "../lib/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((idx + 1) % testimonials.length);
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testi-logos">
          <span>GitHub</span><span>Zumar Cons</span><span>Mathew Co.</span>
          <span className="clients-note">125+ clients worldwide</span><span>Archin</span>
        </div>
        <div className="testi-grid">
          <div className="testi-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={testiLeft} alt="Client portrait" loading="lazy" />
          </div>
          <div className="testi-center">
            <AnimatePresence mode="wait">
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <blockquote>“{t.quote}”</blockquote>
                <div className="testi-who">
                  <div><b>{t.name}</b><div className="role">{t.role}</div></div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="testi-nav">
              <span className="counter">{idx + 1} / {testimonials.length}</span>
              <button className="arrow-pill" onClick={prev} aria-label="Previous testimonial">←</button>
              <button className="arrow-pill" onClick={next} aria-label="Next testimonial">→</button>
            </div>
          </div>
          <div className="testi-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={testiRight} alt="Client portrait" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
