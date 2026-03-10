"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Gamepad2, Smartphone, Layers } from "lucide-react";

const cards = [
  { icon: <Code2 size={24} />, title: "Full Stack Dev", desc: "React, Next.js, Node.js, Firebase — end to end.", color: "#22c55e" },
  { icon: <Gamepad2 size={24} />, title: "Game Developer", desc: "Unity 2D/3D games with rich mechanics & AR.", color: "#f59e0b" },
  { icon: <Smartphone size={24} />, title: "Mobile Apps", desc: "Flutter + Firebase cross-platform solutions.", color: "#3b82f6" },
  { icon: <Layers size={24} />, title: "AR / VR", desc: "Immersive augmented reality experiences.", color: "#a855f7" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-3">// about me</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Who I Am
          </h2>
        </motion.div>

        {/* Text block — full width on top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-white text-lg leading-relaxed mb-4">
            I'm <span className="text-[#22c55e] font-semibold">Nivetha A</span>, a Computer Science
            undergraduate at{" "}
            <span className="text-white font-semibold">
              National Engineering College, Kovilpatti
            </span>{" "}
            (graduating 2026), with a CGPA of 7.72.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            My passion lies at the intersection of creativity and technology — whether I'm crafting
            immersive Unity games, architecting full-stack web applications, or building mobile safety
            solutions that protect real people. I thrive on turning complex ideas into clean,
            functional products.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Beyond the code, I'm an active NSS volunteer, sports achiever (gold & silver in
            throwball), and tech fest organizer — because great developers build communities, not
            just software.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {["Problem Solver", "Team Player", "Quick Learner", "Creative Thinker"].map((trait) => (
              <span key={trait} className="skill-badge">{trait}</span>
            ))}
          </div>

          <div className="flex gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold text-[#22c55e]" style={{ fontFamily: "'Clash Display', sans-serif" }}>5+</div>
              <div className="text-gray-400 text-sm mt-1">Projects Built</div>
            </div>
            <div className="w-px bg-[var(--border)]" />
            <div>
              <div className="text-3xl font-bold text-[#22c55e]" style={{ fontFamily: "'Clash Display', sans-serif" }}>2</div>
              <div className="text-gray-400 text-sm mt-1">Internships</div>
            </div>
            <div className="w-px bg-[var(--border)]" />
            <div>
              <div className="text-3xl font-bold text-[#22c55e]" style={{ fontFamily: "'Clash Display', sans-serif" }}>7.72</div>
              <div className="text-gray-400 text-sm mt-1">CGPA</div>
            </div>
          </div>
        </motion.div>

        {/* Cards — 2x2 grid, full width */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="rounded-2xl p-5 cursor-default"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${card.color}25`, color: card.color }}
              >
                {card.icon}
              </div>
              <h3
                className="font-semibold text-white mb-2 text-sm"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                {card.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}