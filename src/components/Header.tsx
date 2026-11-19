"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MENUS: { label: string; items?: string[] }[] = [
  { label: "HOME", items: ["Main Home", "Creative Agency", "Digital Agency", "Design Studio", "Modern Agency", "Creative Portfolio", "Freelancer", "Personal", "Showcase"] },
  { label: "PAGES", items: ["Our Studio", "Services", "Team", "Pricing", "FAQ"] },
  { label: "WORKS" },
  { label: "BLOG" },
  { label: "CONTACT" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 300 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}${hidden ? " hidden" : ""}`}>
        <div className="container header-inner">
          <a href="#" className="logo">mivon</a>
          <nav className="nav-pill">
            {MENUS.map((m) => (
              <div className="nav-item" key={m.label}>
                <button className="nav-link">{m.label}{m.items ? " ▾" : ""}</button>
                {m.items && (
                  <div className="dropdown">
                    {m.items.map((it) => <a key={it} href="#">{it}</a>)}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-icons">
            <button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? "☾" : "☀"}</button>
            <button className="icon-btn hamburger" aria-label="Menu" onClick={() => setMenu(true)}>☰</button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menu && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="icon-btn close" onClick={() => setMenu(false)}>✕</button>
            {MENUS.map((m) => <a key={m.label} href="#" onClick={() => setMenu(false)}>{m.label}</a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
