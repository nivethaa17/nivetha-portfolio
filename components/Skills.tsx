"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-24 px-6">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-3"> skills</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Tech Stack
          </h2>
          <p className="text-[var(--text-muted)] mt-3 max-w-lg mx-auto">
            Tools and technologies I've worked with across projects and internships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3
                  className="font-semibold text-[var(--text-primary)] text-lg"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.04 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
