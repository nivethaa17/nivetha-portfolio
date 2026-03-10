"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

// ⚠️ IMPORTANT: Replace these with your actual EmailJS credentials
// 1. Sign up at https://www.emailjs.com/
// 2. Create a service (Gmail works great)
// 3. Create an email template
// 4. Copy your Service ID, Template ID, and Public Key here
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(34,197,94,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-3"> contact</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Get In Touch</h2>
          <p className="text-[var(--text-muted)] mt-3 max-w-md mx-auto">
            Have a project in mind or just want to chat? Send me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: <Mail size={20} />, label: "Email", value: "nivetha1772005@gmail.com", href: "mailto:nivetha1772005@gmail.com" },
              { icon: <MapPin size={20} />, label: "Location", value: "Kovilpatti, Tamil Nadu, India", href: null },
              { icon: <Github size={20} />, label: "GitHub", value: "github.com/nivethaa17", href: "https://github.com/nivethaa17" },
              { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/nivetha1775", href: "https://www.linkedin.com/in/nivetha1775/" },
            ].map((item) => (
              <motion.div key={item.label} whileHover={{ x: 4 }} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#22c55e]"
                  style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-[var(--text-primary)] text-sm hover:text-[#22c55e] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[var(--text-primary)] text-sm">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="section-tag block mb-2 text-xs"> name</label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="section-tag block mb-2 text-xs"> email</label>
                  <input
                    type="email"
                    name="reply_to"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="section-tag block mb-2 text-xs"> message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  className="input-field resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className="btn-jade w-full justify-center"
                style={{ opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-[#22c55e] p-4 rounded-xl"
                  style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
                >
                  <CheckCircle size={20} />
                  <div>
                    <div className="font-semibold text-sm">Message sent successfully!</div>
                    <div className="text-xs opacity-80">I'll get back to you soon 🎉</div>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-red-400 p-4 rounded-xl"
                  style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
                >
                  <AlertCircle size={20} />
                  <div>
                    <div className="font-semibold text-sm">Failed to send. Please try again.</div>
                    <div className="text-xs opacity-80">Or email me directly at nivetha1772005@gmail.com</div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
