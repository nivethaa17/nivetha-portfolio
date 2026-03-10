"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Heart, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-text mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Nivetha A
            </div>
            <div className="text-[var(--text-muted)] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Full Stack Dev · Game Dev · AR/VR
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            {[
              { icon: <Github size={20} />, href: "https://github.com/nivethaa17", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/nivetha1775/", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:nivetha1772005@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, color: "#22c55e" }}
                className="text-[var(--text-muted)] hover:text-[#22c55e] transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#22c55e] hover:bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
