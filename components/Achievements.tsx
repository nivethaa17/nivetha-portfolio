"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "../lib/data";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" ref={ref} className="relative py-24 px-6">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(168,85,247,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-3"> achievements</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Beyond the Code
          </h2>
          <p className="text-[var(--text-muted)] mt-3">Sports, community, and campus involvement.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="glass-card rounded-2xl p-5 flex items-start gap-4"
            >
              <div
                className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: `${item.color}15` }}
              >
                {item.icon}
              </div>
              <div>
                <h4
                  className="font-semibold text-[var(--text-primary)] mb-1 text-sm"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
