"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Internships from "../components/Internships";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("light", saved === "light");
  }, []);

  const toggleTheme = (t: string) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.classList.toggle("light", t === "light");
  };

  return (
    <>
      <Head>
        <title>Nivetha A — Developer Portfolio</title>
        <meta name="description" content="Nivetha A — Full Stack Developer, Game Developer, AR/VR" />
      </Head>

      <div className="mesh-bg min-h-screen">
        <Navbar theme={theme} setTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Internships />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
