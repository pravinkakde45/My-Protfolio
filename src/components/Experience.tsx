"use client";

import { motion } from "framer-motion";
import { Briefcase, Milestone, Award, FileCode } from "lucide-react";

interface TimelineItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
  highlights: string[];
  type: "internship" | "research" | "engineering";
  icon: React.ReactNode;
}

export default function Experience() {
  const experiences: TimelineItem[] = [
    {
      role: "AI & ML Intern",
      organization: "Edunet Foundation + IBM SkillsBuild",
      duration: "6 Weeks (2025)",
      description: "An intensive AI focus program centered on architecting model integrations and exploring advanced generative pipelines.",
      highlights: [
        "Architected and deployed an AI Fashion Design Generator utilizing deep learning model pipelines.",
        "Engineered full-stack routing flows using Flask, delivering fast model response latencies.",
        "Designed conversational API wrappers and studied complex prompt heuristics.",
        "Acquired deep mastery of AI project life cycles, data cleaning, and hosting pipelines.",
      ],
      type: "internship",
      icon: <Award className="w-4 h-4 text-rose-400" />,
    },
    {
      role: "Lead Research Researcher — AI in Crisis Management",
      organization: "Independent Academic Study",
      duration: "Ongoing",
      description: "Investigating how transformer-based models and predictive classifiers optimize response times during disaster recovery.",
      highlights: [
        "Authored research exploring AI implementations in Crisis Management & Business Continuity Planning.",
        "Built predictive models analyzing event probability, mapping mitigation workflows.",
        "Presented structural architectures utilizing neural networks for resource allocation.",
      ],
      type: "research",
      icon: <Briefcase className="w-4 h-4 text-neon-blue" />,
    },
    {
      role: "Full-Stack Software Engineer",
      organization: "Self-Driven SaaS Engines",
      duration: "2024 - Present",
      description: "Building production-grade web systems, managing database transactions, and designing user experiences.",
      highlights: [
        "Shipped QR Attendance scanners, health diagnostics dashboards, and booking planners.",
        "Optimized relational database transactions using PostgreSQL/MySQL indexes and schemas.",
        "Established secure user authorization models utilizing JWT encryption and cookies.",
      ],
      type: "engineering",
      icon: <FileCode className="w-4 h-4 text-neon-purple" />,
    },
  ];

  return (
    <section id="experience" className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20"
          >
            <Milestone className="w-3.5 h-3.5 text-neon-blue" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neon-blue uppercase font-display">
              Timeline
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 font-display font-black text-3xl sm:text-5xl tracking-tight text-white"
          >
            Experience & Research
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded mt-4" />
        </div>

        {/* Timeline track container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 flex flex-col gap-12">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${idx}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Pulsing connection node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-dark-bg border border-white/15 flex items-center justify-center group-hover:border-neon-blue transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-blue/10 transition-all duration-300">
                  {exp.icon}
                </div>
              </div>

              {/* Glass Details Card */}
              <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-400">
                {/* Meta details header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                  <div>
                    <h3 className="font-display font-black text-lg sm:text-xl text-white group-hover:text-neon-blue transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="shrink-0 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-neon-purple uppercase font-display tracking-widest text-center">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements bullets */}
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
