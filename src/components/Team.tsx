"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { teamImgs, teamPortrait } from "../lib/data";

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  return (
    <section className="team" ref={ref}>
      <div className="container">
        <div className="team-top">
          <div className="team-top-left">
            <p className="section-label">• Our Team</p>
            <div className="avatar-stack">
              {teamImgs.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt="Team member" loading="lazy" />
              ))}
              <span className="avatar-more">12+</span>
            </div>
          </div>
          <div className="team-top-right">
            <h2>MEET OUR TEAM.</h2>
            <p className="lead">Each member of our team brings a unique set of skills and perspectives, blending together to forge a collective that thrives on pushing the boundaries.</p>
          </div>
        </div>
        <div className="team-main">
          <motion.div className="recognition" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="sparkle">✦</span>
            <p className="section-label">Global Recognition</p>
            <h3>We thrive to create design that make impact not just impressions.</h3>
          </motion.div>
          <motion.div className="team-portrait" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img src={teamPortrait} alt="Team portrait" loading="lazy" style={{ y }} />
            </div>
          </motion.div>
        </div>
        <div className="team-stats">
          <div className="stat"><span>Client Reviews</span><b>4.9/5</b></div>
          <div className="stat"><span>Product Launch</span><b>2k+</b></div>
          <div className="stat"><span>Ready Teammates</span><b>35+</b></div>
        </div>
      </div>
    </section>
  );
}
