"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "../lib/data";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-3"> education</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Academic Journey</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ x: 6 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between gap-2 items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                      {item.degree}
                    </h3>
                    <p className="text-[#22c55e] font-medium text-sm">{item.institution}</p>
                    <p className="text-[var(--text-muted)] text-xs mt-0.5">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[var(--text-muted)] mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {item.duration}
                    </div>
                    <div
                      className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(34,197,94,0.1)",
                        color: "#22c55e",
                        border: "1px solid rgba(34,197,94,0.25)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {item.score}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
