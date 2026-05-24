"use client";

import { motion as motionFramer } from "framer-motion";
import { useState, useRef } from "react";
import { ExternalLink, Code2, HeartPulse, QrCode, CalendarRange, Landmark } from "lucide-react";

// Custom Trademark-safe GitHub Icon (Lucide deprecated brand assets)
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


interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  live: string;
  icon: React.ReactNode;
  gridClass: string;
  previewBg: string; // CSS gradient class representing project theme
  visualMarkup: React.ReactNode; // Custom visual mockup component
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Disease Detection System",
      description: "An AI-powered healthcare assistant that analyzes symptoms through structured interactive questioning, predicting potential diseases and suggesting specialist recommendations via a beautiful medical dashboard.",
      features: ["AI Symptom Prediction", "Smart Follow-up Questions", "Specialist Recommendations"],
      tech: ["Python", "Flask", "AI APIs", "HTML/CSS", "JavaScript"],
      github: "https://github.com/pravinkakde45/Disease-Detection-System1-",
      live: "https://healify-ai.netlify.app/",
      icon: <HeartPulse className="w-5 h-5 text-rose-400" />,
      gridClass: "lg:col-span-8 md:col-span-12",
      previewBg: "from-rose-950/40 via-purple-950/20 to-[#030014]",
      visualMarkup: (
        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          {/* Mock Medical ECG Wave / Pulse Grid */}
          <div className="w-full max-w-sm h-32 border border-white/5 rounded-2xl relative overflow-hidden bg-black/40 flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px]" />
            <svg className="w-full h-12 text-rose-500 stroke-current opacity-70" viewBox="0 0 100 20" fill="none">
              <path d="M0,10 L30,10 L35,2 L40,18 L43,10 L50,10 L55,5 L58,15 L62,10 L100,10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute top-2 left-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
              <span className="text-[7px] text-gray-500 uppercase tracking-widest font-display">AI Live Diagnostics</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "QR Attendance Tracker",
      description: "A smart, contactless attendance management platform utilizing encrypted QR code generation and quick mobile scanning for bulletproof check-ins.",
      features: ["Real-time Scan Logging", "Secure Admin Logs", "Visual Attendance Logs"],
      tech: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "QR Engine"],
      github: "https://github.com/pravinkakde45/qr-attendance-system",
      live: "https://qrattendance.infinityfreeapp.com/qr_attendance_system",
      icon: <QrCode className="w-5 h-5 text-neon-blue" />,
      gridClass: "lg:col-span-4 md:col-span-12",
      previewBg: "from-blue-950/40 via-slate-900/10 to-[#030014]",
      visualMarkup: (
        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          {/* Mock QR Scanner Outline */}
          <div className="w-32 h-32 border-2 border-dashed border-neon-blue/20 rounded-2xl flex items-center justify-center relative bg-black/40">
            <QrCode className="w-16 h-16 text-neon-blue/40" />
            <div className="absolute w-full h-[1px] bg-neon-blue top-1/2 left-0 shadow-[0_0_10px_#00d2ff] animate-bounce" />
          </div>
        </div>
      ),
    },
    {
      title: "Appointment Scheduler",
      description: "Full-stack appointment reservation engine providing customizable booking calendars, advanced client portals, automated reminders, and schedule organizers.",
      features: ["Custom Cal-view", "Direct Mail Alerts", "Calendar Sync Logs"],
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/pravinkakde45/Appointment-Management-System1",
      live: "https://appointment-management-system1-1.onrender.com",
      icon: <CalendarRange className="w-5 h-5 text-neon-purple" />,
      gridClass: "lg:col-span-4 md:col-span-12",
      previewBg: "from-purple-950/40 via-slate-900/10 to-[#030014]",
      visualMarkup: (
        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          {/* Mock Calendar grids */}
          <div className="w-36 h-28 border border-white/5 rounded-xl bg-black/50 p-2.5 flex flex-col gap-2 relative overflow-hidden">
            <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
              <span className="text-[7px] text-gray-400 font-bold uppercase tracking-widest font-display">May 2026</span>
              <div className="flex gap-1">
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="w-1 h-1 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-[3px] border border-white/5 ${
                    i === 8 ? "bg-neon-purple/40 border-neon-purple/60" : "bg-white/[0.02]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Expense Tracker Dashboard",
      description: "A financial analytic visualizer tracking cash flow, transactions, and budgets with visual reports driven by interactive Chart.js widgets.",
      features: ["Transaction Ledger", "Chart.js Financial Visuals", "Dynamic Budgeting"],
      tech: ["Node.js", "Express.js", "MySQL", "Chart.js", "JavaScript"],
      github: "https://github.com/pravinkakde45/trading-spark-91",
      live: "https://trading-spark-91.vercel.app/login",
      icon: <Landmark className="w-5 h-5 text-amber-400" />,
      gridClass: "lg:col-span-8 md:col-span-12",
      previewBg: "from-amber-950/20 via-orange-950/10 to-[#030014]",
      visualMarkup: (
        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          {/* Mock Chart widgets */}
          <div className="w-full max-w-sm h-32 border border-white/5 rounded-2xl bg-black/40 p-4 flex gap-4 items-end relative overflow-hidden">
            <div className="absolute top-2 left-3 flex items-center gap-1.5">
              <span className="text-[7px] text-amber-400 uppercase tracking-widest font-display font-bold">Chart.js Live Report</span>
            </div>
            <div className="w-1/4 h-[40%] bg-gradient-to-t from-amber-600/30 to-amber-400/80 rounded-lg border border-amber-400/40" />
            <div className="w-1/4 h-[75%] bg-gradient-to-t from-orange-600/30 to-orange-400/80 rounded-lg border border-orange-400/40" />
            <div className="w-1/4 h-[55%] bg-gradient-to-t from-yellow-600/30 to-yellow-400/80 rounded-lg border border-yellow-400/40" />
            <div className="w-1/4 h-[90%] bg-gradient-to-t from-amber-500/40 via-neon-purple/50 to-neon-blue/80 rounded-lg border border-neon-blue/40" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motionFramer.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20"
          >
            <Code2 className="w-3.5 h-3.5 text-neon-blue" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neon-blue uppercase font-display">
              Portfolio
            </span>
          </motionFramer.div>
          
          <motionFramer.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 font-display font-black text-3xl sm:text-5xl tracking-tight text-white"
          >
            Featured Bento Showcase
          </motionFramer.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded mt-4" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <BentoCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// 3D Mouse Tilt Bento Card Component
function BentoCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation (-8 to 8 degrees max)
    const rotX = ((y - height / 2) / (height / 2)) * -6;
    const rotY = ((x - width / 2) / (width / 2)) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motionFramer.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className={`glass-card rounded-[2rem] overflow-hidden group flex flex-col justify-between border border-white/5 transition-all duration-300 relative ${project.gridClass}`}
    >
      {/* Top Half: Gradient Abstract Visual Mockup */}
      <div className={`relative h-44 sm:h-52 w-full bg-gradient-to-br ${project.previewBg} overflow-hidden border-b border-white/5 flex items-center justify-center`}>
        {project.visualMarkup}
        
        {/* Soft floating orb */}
        <div className="absolute top-[10%] right-[10%] w-24 h-24 rounded-full bg-white/5 filter blur-xl animate-float-slow" />
      </div>

      {/* Bottom Half: Copy Details */}
      <div className="p-6 relative z-10 flex-1 flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
        <div>
          {/* Header row */}
          <div className="flex justify-between items-center gap-3">
            <h3 className="font-display font-black text-lg sm:text-xl text-white group-hover:text-neon-blue transition-colors flex items-center gap-2">
              {project.icon}
              {project.title}
            </h3>
            
            {/* Magnetic External Links */}
            <div className="flex gap-2 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                data-cursor-text="CODE"
              >
                <GithubIcon />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-neon-blue hover:border-neon-blue/20 transition-all"
                data-cursor-text="DEMO"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
            {project.description}
          </p>

          {/* Key bullet features */}
          <ul className="mt-4 flex flex-col gap-1 text-[11px] font-bold text-gray-300 font-display">
            {project.features.map((feat) => (
              <li key={feat} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-neon-blue" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Badges Pinned */}
        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
          {project.tech.map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[9px] font-bold text-gray-400 tracking-wider uppercase font-display"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </motionFramer.div>
  );
}
