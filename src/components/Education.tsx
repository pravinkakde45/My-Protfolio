"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle } from "lucide-react";

interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  scoreLabel: string;
  details: string[];
  color: string; // Neon accent border color
  glowColor: string; // Shadow glow color
}

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.E. — Bachelor of Engineering",
    field: "Information Technology",
    institution: "Anuradha College Of Engineering And Technology",
    location: "Chikhli, Maharashtra",
    duration: "2022 - 2026",
    score: "7.92",
    scoreLabel: "Current CGPA",
    details: [
      "Core Coursework: Data Structures & Algorithms, Object Oriented Programming, Database Management Systems, Software Engineering, AI & Machine Learning.",
      "Engaged in hands-on projects specializing in full-stack web applications, AI classifiers, and automated management dashboards.",
      "Active participant in technical coding rounds, campus tech hackathons, and systems design workshops."
    ],
    color: "border-neon-blue text-neon-blue",
    glowColor: "rgba(0, 210, 255, 0.15)",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    field: "Science Stream",
    institution: "Sanskar Science College",
    location: "Shendurjan, Maharashtra",
    duration: "2020 – 2022",
    score: "85.00%",
    scoreLabel: "Consolidated Score",
    details: [
      "Academics: Focused on Mathematics, Physics, Chemistry, and Computer Science.",
      "Acquired strong analytical problem-solving foundations and statistical fundamentals.",
      "Graduated with distinction, securing high marks in logical quantitative subjects."
    ],
    color: "border-neon-purple text-neon-purple",
    glowColor: "rgba(157, 78, 221, 0.15)",
  },
  {
    degree: "Secondary School Certificate (10th)",
    field: "General Academics",
    institution: "Jijamata Vidyalaya",
    location: "Sakharkherda, Maharashtra",
    duration: "2019 – 2020",
    score: "91.80%",
    scoreLabel: "Final Board Score",
    details: [
      "Academics: Specialized in Science, Mathematics, Algebra, and Geometry.",
      "Awarded top honors for placing in the elite division of candidates in the district.",
      "Laid core computational logical foundations and mathematical analytics principles."
    ],
    color: "border-neon-cyan text-neon-cyan",
    glowColor: "rgba(56, 189, 248, 0.15)",
  }
];

export default function Education() {
  return (
    <section id="education" className="relative w-full py-24 bg-transparent overflow-hidden">
      {/* Visual cyber mesh lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.01] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20"
          >
            <GraduationCap className="w-3.5 h-3.5 text-neon-blue" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neon-blue uppercase font-display">
              ACADEMIC BACKGROUND
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan">Journey</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded mt-4" />
        </div>

        {/* Timeline Flow Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline center glow line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan/20 -translate-x-1/2 hidden sm:block opacity-35" />
          <div className="absolute left-6 top-2 bottom-2 w-[1px] bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan/20 sm:hidden opacity-30" />

          {/* Timeline Cards */}
          <div className="flex flex-col gap-12 relative">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.degree}
                  className={`flex flex-col sm:flex-row items-stretch justify-between relative w-full sm:gap-12 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Timeline circular pulse node */}
                  <div className="absolute left-6 sm:left-1/2 top-8 w-4 h-4 rounded-full bg-[#030014] border-2 border-white/20 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className={`w-1.5 h-1.5 rounded-full ${
                        index === 0
                          ? "bg-neon-blue"
                          : index === 1
                          ? "bg-neon-purple"
                          : "bg-neon-cyan"
                      }`}
                    />
                  </div>

                  {/* Left/Right Card Spacer Column for Grid alignment */}
                  <div className="w-full sm:w-[46%] hidden sm:block" />

                  {/* Glassmorphic Academic Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                    whileHover={{ y: -4 }}
                    className="w-full sm:w-[46%] pl-12 sm:pl-0"
                    data-cursor-text="STUDIED"
                  >
                    <div 
                      className="glass-card rounded-[2rem] border border-white/5 p-6 hover:border-white/10 transition-all duration-300 relative overflow-hidden group h-full flex flex-col justify-between"
                      style={{
                        boxShadow: `0 0 30px rgba(0, 0, 0, 0.4), 0 0 15px ${item.glowColor}`,
                      }}
                    >
                      {/* Interactive glowing overlay corners */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/[0.01] rounded-bl-[4rem] border-l border-b border-white/5 pointer-events-none group-hover:border-neon-blue/10 transition-colors" />

                      {/* Header block */}
                      <div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
                          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neon-cyan">
                            <Calendar className="w-3.5 h-3.5 text-gray-500" />
                            {item.duration}
                          </span>
                          
                          {/* Score visual badge */}
                          <div className={`px-3.5 py-1 rounded bg-white/5 border border-white/5 flex items-center gap-2 ${item.color} font-display font-black text-sm`}>
                            <Award className="w-3.5 h-3.5" />
                            <span>{item.score}</span>
                          </div>
                        </div>

                        <h3 className="font-display font-black text-lg text-white leading-snug tracking-wide group-hover:text-neon-cyan transition-colors">
                          {item.degree}
                        </h3>
                        {item.field && (
                          <p className="text-xs font-bold text-neon-purple uppercase mt-1 tracking-widest font-display">
                            {item.field}
                          </p>
                        )}

                        <p className="text-xs font-black text-gray-400 mt-3 flex items-start gap-1 font-display">
                          <BookOpen className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" />
                          <span>{item.institution} <br /><span className="text-[10px] text-gray-500 font-bold uppercase">{item.location}</span></span>
                        </p>
                      </div>

                      {/* Score description Label & Bullet points details */}
                      <div className="mt-6 pt-4 border-t border-white/5">
                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 block mb-2 font-display">
                          {item.scoreLabel} Verified
                        </span>
                        
                        <ul className="flex flex-col gap-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[11px] text-gray-400 font-light leading-relaxed">
                              <CheckCircle className="w-3 h-3 text-neon-blue shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
