"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Github, ExternalLink, Play } from "lucide-react";
import { projects } from "../lib/data";

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-3"> projects</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            What I've Built
          </h2>
          <p className="text-[var(--text-muted)] mt-3 max-w-lg mx-auto">
            Click any project card to explore full details, tech stack, and links.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="glass-card project-card rounded-2xl p-6 cursor-pointer group"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${project.color}18` }}
                >
                  {project.icon}
                </div>
                {project.status && (
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                      border: `1px solid ${project.color}40`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {project.status}
                  </span>
                )}
              </div>

              <h3
                className="text-xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[#22c55e] transition-colors"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                {project.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {project.subtitle}
              </p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: `${project.color}12`,
                      color: project.color,
                      border: `1px solid ${project.color}25`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="skill-badge text-xs">+{project.tech.length - 3}</span>
                )}
              </div>

              <div className="text-xs text-[var(--text-muted)] flex items-center gap-1 group-hover:text-[#22c55e] transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <ExternalLink size={12} />
                Click to explore
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
              style={{ background: "rgba(13,17,23,0.97)" }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: `${selected.color}18` }}
                >
                  {selected.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    {selected.title}
                  </h3>
                  <p className="text-sm" style={{ color: selected.color, fontFamily: "'JetBrains Mono', monospace" }}>
                    {selected.subtitle}
                  </p>
                </div>
              </div>

              <div className="mb-2 section-tag"> category</div>
              <div className="mb-5">
                <span
                  className="text-sm px-3 py-1 rounded-full"
                  style={{ background: `${selected.color}15`, color: selected.color, border: `1px solid ${selected.color}30` }}
                >
                  {selected.category}
                </span>
              </div>

              <div className="mb-2 section-tag"> about</div>
              <p className="text-[var(--text-muted)] leading-relaxed mb-6 text-sm">{selected.fullDescription}</p>

              <div className="mb-2 section-tag"> tech stack</div>
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: `${selected.color}12`,
                      color: selected.color,
                      border: `1px solid ${selected.color}25`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-jade text-sm py-2.5 px-5"
                  style={{ textDecoration: "none" }}
                >
                  <Github size={16} />
                  View on GitHub
                </a>
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2.5 px-5"
                    style={{ textDecoration: "none" }}
                  >
                    <Play size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
