"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <motion.footer className="footer" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8 }}>
      <div className="container">
        <div className="footer-cta">
          <h2>Let&apos;s Start<br />your project</h2>
          <a href="#" className="pill-btn">Get In Touch →</a>
        </div>
        <div className="footer-grid">
          <div>
            <div className="footer-logo">mivon</div>
            <p>WE HOPE TO EMPOWER THE USER AND SIMPLIFY. © COPYRIGHT 2026 BY BSLTHEMES. ALL RIGHTS RESERVED.</p>
            <div className="socials">
              <a href="#" aria-label="X">𝕏</a><a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
          <div>
            <h4>Menu</h4>
            <ul>
              <li><a href="#">Services</a></li><li><a href="#">Portfolio</a></li>
              <li><a href="#">About Us</a></li><li><a href="#">Blog</a></li><li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Explore the Socials of Mivon</h4>
            <p>Subscribe to our newsletter for the latest thinking.</p>
            <form className="newsletter" onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}>
              <input type="email" required placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit">{done ? "✓ Done" : "Subscribe"}</button>
            </form>
            <p style={{ fontSize: 13, marginTop: 12 }}>By subscribing, you&apos;re accept our Privacy Policy</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mivon — Creative Agency Clone (recreation for study)</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </motion.footer>
  );
}
