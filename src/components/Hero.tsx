"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

// Modern SVG Brand Icons (Lucide deprecated brand assets)
const GithubIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);



const TYPED_ROLES = ["Full Stack Developer", "AI Enthusiast", "UI/UX Builder", "Problem Solver"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = TYPED_ROLES[roleIdx];
    const typingSpeed = isDeleting ? 40 : 100;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % TYPED_ROLES.length);
          return;
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIdx]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
        
        {/* Left Column: Heading Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-emerald-400 font-display">
              Available for Full-time Roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.05]"
          >
            Hi, I’m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan drop-shadow-[0_0_30px_rgba(0,210,255,0.2)]">
              Pravin Kakde
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="h-10 mt-4 flex items-center"
          >
            <p className="font-display font-bold text-lg sm:text-2xl text-gray-400">
              I’m a{" "}
              <span className="text-white border-r-2 border-neon-blue pr-1 animate-pulse">
                {currentText}
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed"
          >
            A passionate Full Stack Developer and AI enthusiast specializing in creating 
            scalable, intelligent, and visually premium web systems with exceptional user journeys.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-xs font-bold tracking-widest uppercase text-white shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] hover:scale-105 transition-all flex items-center gap-2 group cursor-pointer"
              data-cursor-text="VIEW BENTO"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="https://drive.google.com/file/d/1GWnpopOS6vzn8rQeJjHfuZ2Y5nL801LD/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              data-cursor-text="GET RESUME"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Quick Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex items-center gap-4 border-t border-white/5 pt-8 w-fit"
          >
            <span className="text-xs uppercase tracking-wider font-bold text-gray-500 font-display">
              Connect
            </span>
            <div className="flex gap-3">
              {[
                { icon: <GithubIcon />, url: "https://github.com/pravinkakde45", name: "GitHub" },
                { icon: <LinkedinIcon />, url: "https://www.linkedin.com/in/pravin-kakde-a3171b2aa/", name: "LinkedIn" },
                { icon: <TwitterIcon />, url: "https://x.com/Pravin_kakde_45", name: "Twitter/X" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-neon-blue hover:border-neon-blue/30 transition-colors"
                  data-cursor-text={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Image Container */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-80 h-80 sm:w-[28rem] sm:h-[28rem] xl:w-[32rem] xl:h-[32rem] aspect-square"
          >
            {/* Ambient Back Glow rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full filter blur-3xl opacity-30 animate-pulse-slow -z-10" />
            <div className="absolute -inset-4 bg-gradient-to-bl from-neon-cyan to-neon-purple rounded-full filter blur-2xl opacity-15 animate-float -z-10" />

            {/* Glowing Border Wrapper */}
            <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-neon-blue via-transparent to-neon-purple p-[1.5px] overflow-hidden group shadow-[0_0_40px_rgba(0,210,255,0.15)] hover:shadow-[0_0_50px_rgba(157,78,221,0.35)] transition-all duration-700">
              
              {/* Dual-image Inner Screen */}
              <div
                className="w-full h-full bg-[#030012] rounded-[2.4rem] relative overflow-hidden"
                data-cursor-text="MORPHEUS"
              >
                {/* Default: Sunglasses Black & White Profile */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-dark.jpg"
                  alt="Pravin Kakde Sunglasses"
                  className="absolute inset-0 w-full h-full object-cover rounded-[2.4rem] object-[center_15%] z-10 transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                />

                {/* Hover state: Suite Color Profile */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-normal.jpg"
                  alt="Pravin Kakde Suit"
                  className="absolute inset-0 w-full h-full object-cover rounded-[2.4rem] object-[center_15%] scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                />

                {/* Scanline Cyber Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#030012]/30 to-[#030012]/80 z-20 pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] bg-[size:100%_4px,_6px_100%] opacity-20 pointer-events-none z-20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pulsing Mouse Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 z-10 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-gray-500 font-display">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center p-[3px] bg-white/5 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-neon-blue"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
