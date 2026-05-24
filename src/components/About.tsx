"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Shield, Zap, Sparkles } from "lucide-react";

// Helper Component for Count Up Statistics
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2.0; // 2 seconds
      const incrementTime = Math.max(10, Math.floor((duration * 1000) / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-black text-3xl sm:text-4xl text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const imgCardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // 3D Mouse Tilt Mechanics
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = imgCardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation (-7 to 7 degrees max for smooth premium feel)
    const rotX = ((y - height / 2) / (height / 2)) * -7;
    const rotY = ((x - width / 2) / (width / 2)) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const stats = [
    { label: "AI & Full-Stack Projects", value: 6, suffix: "+" },
    { label: "Internship Weeks", value: 6, suffix: "" },
    { label: "Core Technologies Mastered", value: 15, suffix: "+" },
    { label: "Hours Coding AI Systems", value: 500, suffix: "+" },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20"
          >
            <User className="w-3.5 h-3.5 text-neon-blue" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neon-blue uppercase font-display">
              Who I Am
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 font-display font-black text-3xl sm:text-5xl tracking-tight text-white"
          >
            My Story & Journey
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded mt-4" />
        </div>

        {/* Bento-style Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Box 1: Cinematic 3D Mouse-Tilt Photo Card */}
          <motion.div
            ref={imgCardRef}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            className="lg:col-span-4 md:col-span-12 col-span-12 glass-card rounded-[2.5rem] p-1 relative overflow-hidden group min-h-[380px] flex items-center justify-center border border-white/5 hover:border-neon-blue/25 transition-all duration-300 cursor-pointer"
            data-cursor-text="3D TILT"
          >
            {/* Ambient breathing backglow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/15 to-neon-purple/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            {/* Futuristic cyber panel grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-10" />

            <div className="w-full h-full relative rounded-[2.4rem] overflow-hidden flex items-center justify-center" style={{ transform: "translateZ(25px)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile-normal.jpg"
                alt="Pravin Kakde suit profile"
                className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700"
              />
              {/* Scanline Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-transparent to-transparent" />
              
              {/* Glowing Bottom Nametag */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-[0.25em] font-black text-neon-blue font-display">
                  Core Engineer
                </span>
                <h3 className="text-base font-black text-white tracking-wider font-display uppercase leading-tight mt-0.5">
                  Pravin Kakde
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Short Introduction Story (Glassmorphic) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 md:col-span-12 col-span-12 glass-card p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-neon-blue animate-pulse" />
                Crafting Intelligent Web Systems
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Hi, I’m <strong className="text-white">Pravin Kakde</strong>, a Full Stack Developer and AI enthusiast based in Pune, India. 
                I specialize in engineering sleek, visually stunning frontend interfaces combined with highly structured, robust backend architectures. 
                I bridge the gap between design and hard engineering, building web platforms that deliver smooth experiences at scale.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-4">
                My passion also drives me into <strong className="text-white">Applied AI & Automation</strong>. I enjoy creating smarter web services, 
                healthcare assistants, secure check-in modules, and intelligent fashion generators. I thrive in collaborative problem-solving setups 
                where high-fidelity design meets clean code.
              </p>
            </div>
            
            {/* Core Philosophy Box */}
            <div className="mt-8 border-l-2 border-neon-purple pl-4 py-2 bg-gradient-to-r from-neon-purple/5 to-transparent">
              <span className="text-[10px] uppercase font-black tracking-widest text-neon-purple font-display">
                Philosophy
              </span>
              <p className="text-xs font-semibold italic text-gray-300 mt-1 leading-relaxed">
                “Build technology that is intelligent, scalable, visually premium, and genuinely useful.”
              </p>
            </div>
          </motion.div>

          {/* Box 3: Visual Core Traits (Interactive Icons) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 md:col-span-6 col-span-12 glass-card p-8 rounded-3xl flex flex-col justify-center gap-6"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-neon-blue/15 border border-neon-blue/20 rounded-2xl text-neon-blue">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                  Full Stack Agility
                </h4>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Proficient in React, Next.js, Node.js, and databases (PostgreSQL, MongoDB).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-t border-white/5 pt-6">
              <div className="p-3 bg-neon-purple/15 border border-neon-purple/20 rounded-2xl text-neon-purple">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                  Intelligent Apps
                </h4>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Fascinated by integrating AI workflows, Python models, and smart heuristics.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-t border-white/5 pt-6">
              <div className="p-3 bg-neon-cyan/15 border border-neon-cyan/20 rounded-2xl text-neon-cyan">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                  Recruiter Focused
                </h4>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Clean files, responsive designs, semantic SEO, and robust validation.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Numerical Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg border border-white/5"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-[10px] text-gray-400 tracking-wider font-bold mt-2 font-display uppercase leading-tight max-w-[120px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
