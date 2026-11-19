"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const TEXT = "We build bold identities that speak your story visually and verbally, from websites to packaging, we design experiences that are beautiful and functional, we don't just make things look good";
const words = TEXT.split(" ");

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span className="w" style={{ opacity }}>{word}</motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <p className="section-label about-label">OUR CAPABILITIES.</p>
        <p className="about-text">
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </p>
      </div>
    </section>
  );
}
