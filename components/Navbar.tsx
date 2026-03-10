"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

interface NavbarProps {
  theme: string;
  setTheme: (t: string) => void;
}

const links = ["About", "Skills", "Projects", "Internships", "Education", "Contact"];

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[var(--bg-dark)] bg-opacity-80 backdrop-blur-xl border-b border-[var(--border)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={() => scrollTo("hero")}
          whileHover={{ scale: 1.05 }}
          className="font-display text-xl font-700 flex items-center gap-2"
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700 }}
        >
          
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="nav-link text-sm">
              {link}
            </button>
          ))}
        </div>

        {/* Theme + Mobile */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)] hover:text-[#22c55e] hover:border-[rgba(34,197,94,0.4)] transition-all"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          <motion.button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)]"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--bg-dark)] bg-opacity-95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left nav-link text-base py-2"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
