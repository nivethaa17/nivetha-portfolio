"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Eye } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg hero-grid-bg"
    >
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[rgba(34,197,94,0.06)] blur-3xl float-anim" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[rgba(245,158,11,0.05)] blur-3xl" style={{ animation: "float 8s ease-in-out infinite", animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-[rgba(59,130,246,0.05)] blur-3xl" style={{ animation: "float 7s ease-in-out infinite", animationDelay: "1s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-tag mb-4"
            >
              &gt; Hello! — Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              <span className="gradient-text">Nivetha A</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-[var(--text-muted)] mb-3 font-medium"
            >
              Computer Science Student &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; Game Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base text-[var(--text-muted)] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about building immersive games, full-stack web apps, mobile solutions, 
              and AR/VR experiences that solve real-world problems.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
            >
              {["Full Stack Dev", "Game Dev", "Mobile Apps", "AR/VR", "IoT"].map((tag) => (
                <span key={tag} className="skill-badge">{tag}</span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("projects")}
                className="btn-jade"
              >
                <Eye size={17} />
                View Projects
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="/Nivetha_A_Resume.pdf"
                download
                className="btn-outline"
              >
                <Download size={17} />
                Download Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="btn-outline"
              >
                <Mail size={17} />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              <span className="text-[var(--text-muted)] text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>find me on</span>
              <div className="h-px w-8 bg-[var(--border)]" />
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
                  whileHover={{ scale: 1.2, y: -2, color: "#22c55e" }}
                  className="text-[var(--text-muted)] hover:text-[#22c55e] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[rgba(34,197,94,0.2)]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-[rgba(245,158,11,0.15)]"
              />

              {/* Center avatar */}
              <div
                className="absolute inset-8 rounded-full flex items-center justify-center glow-anim"
                style={{
                  background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(245,158,11,0.1))",
                  border: "2px solid rgba(34,197,94,0.3)",
                }}
              >
                <div className="text-center">
                  <div className="text-7xl mb-2">👩‍💻</div>
                  <div className="section-tag text-xs">@nivethaa17</div>
                </div>
              </div>

              {/* Floating skill badges around */}
              {[
                { label: "Unity", x: "-60px", y: "20px", delay: 0 },
                { label: "React", x: "50px", y: "-50px", delay: 0.5 },
                { label: "Flutter", x: "-40px", y: "220px", delay: 1 },
                { label: "Firebase", x: "250px", y: "180px", delay: 1.5 },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: badge.delay + 1 }}
                  style={{ position: "absolute", left: badge.x, top: badge.y }}
                  className="skill-badge text-xs whitespace-nowrap"
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center mt-16 gap-2 text-[var(--text-muted)]"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={18} className="text-[#22c55e]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
