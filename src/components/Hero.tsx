"use client";
import { motion } from "framer-motion";
import { heroPills, heroText } from "../lib/data";

const words = ["Blending", "creativity", "&", "strategy", "to", "build", "brands", "&", "design", "websites."];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge-wrap">
          <svg className="spin-text" viewBox="0 0 150 150">
            <defs><path id="circ" d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" /></defs>
            <text fill="#9a9a9a" fontSize="13" letterSpacing="3.5" fontWeight="700">
              <textPath href="#circ">BRANDING • MARKETING • DESIGN • </textPath>
            </text>
          </svg>
          <div className="blob" />
        </div>
        <h1>
          {words.map((w, i) => (
            <span key={i} className="hero-word">
              <motion.span
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={w === "websites." ? "u" : undefined}
              >{w}&nbsp;</motion.span>
            </span>
          ))}
        </h1>
        <motion.div className="hero-grid" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}>
          <div className="hero-pills">
            {heroPills.map((p) => <span key={p}>{p}</span>)}
          </div>
          <div className="hero-right">
            <p>{heroText}</p>
            <a href="#about" className="pill-btn">Know More →</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
