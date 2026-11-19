"use client";
import { motion } from "framer-motion";
import { blog } from "../lib/data";

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <p className="section-label">• Our Blog</p>
        <h2>Latest creative thinking journals.</h2>
        <div className="blog-grid">
          {blog.map((b, i) => (
            <motion.article key={b.title} className="blog-card"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
              <div className="img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.title} loading="lazy" />
              </div>
              <div className="meta">
                <span className="blog-meta">{b.cat} | {b.date}</span>
                <h3>{b.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
