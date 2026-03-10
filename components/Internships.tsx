"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { internships } from "../lib/data";
import { MapPin, Calendar } from "lucide-react";

export default function Internships() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="internships" ref={ref} className="relative py-24 px-6">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(245,158,11,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-3"> experience</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Internships</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(34,197,94,0.5)] via-[rgba(245,158,11,0.3)] to-transparent hidden md:block" />

          <div className="space-y-8">
            {internships.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-6"
              >
                {/* Dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mt-1 flex-shrink-0"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass-card rounded-2xl p-6 flex-1"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3
                        className="text-xl font-bold text-[var(--text-primary)]"
                        style={{ fontFamily: "'Clash Display', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="font-medium" style={{ color: item.color }}>
                        {item.company}
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] justify-end" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        <Calendar size={12} />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] justify-end">
                        <MapPin size={12} />
                        {item.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
