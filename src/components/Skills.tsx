"use client";

import { motion } from "framer-motion";
import { Layout, Database, Sparkles, Layers } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // Percentage
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  color: string; // Tailwind glow border color class
  skills: SkillItem[];
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: "Frontend Core",
      icon: <Layout className="w-4 h-4 text-neon-blue" />,
      color: "border-neon-blue/30 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,210,255,0.1)]",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5 & CSS3", level: 95 },
      ],
    },
    {
      category: "Backend & Java Full Stack",
      icon: <Layers className="w-4 h-4 text-neon-purple" />,
      color: "border-neon-purple/30 hover:border-neon-purple hover:shadow-[0_0_20px_rgba(157,78,221,0.1)]",
      skills: [
        { name: "Core Java", level: 90 },
        { name: "Spring Boot", level: 88 },
        { name: "Node.js", level: 89 },
        { name: "Python", level: 80 },
      ],
    },
    {
      category: "Databases & Tools",
      icon: <Database className="w-4 h-4 text-neon-cyan" />,
      color: "border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 84 },
        { name: "Git & GitHub", level: 90 },
      ],
    },
  ];

  const TECH_ICONS = [
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      glow: "rgba(235, 120, 39, 0.15)",
    },
    {
      name: "Spring",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      glow: "rgba(79, 161, 79, 0.15)",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      glow: "rgba(97, 218, 251, 0.15)",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      glow: "rgba(255, 255, 255, 0.12)",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      glow: "rgba(79, 161, 79, 0.15)",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      glow: "rgba(79, 161, 79, 0.15)",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      glow: "rgba(0, 134, 212, 0.15)",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      glow: "rgba(0, 117, 143, 0.15)",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      glow: "rgba(255, 222, 87, 0.15)",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      glow: "rgba(227, 79, 38, 0.15)",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      glow: "rgba(21, 114, 182, 0.15)",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      glow: "rgba(247, 223, 30, 0.15)",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      glow: "rgba(0, 122, 204, 0.15)",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      glow: "rgba(240, 80, 50, 0.15)",
    },
  ];

  return (
    <section id="skills" className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neon-purple uppercase font-display">
              Capabilities
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase"
          >
            My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan">Arsenal</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.08, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-default"
            >
              {/* Floating inner container */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4 + (groupIdx % 3) * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: groupIdx * 0.2,
                }}
                className={`glass-card p-6 rounded-3xl border transition-all duration-500 flex flex-col gap-5 ${group.color}`}
              >
                {/* Group Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-white/5 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>

                {/* Group Skills List */}
                <div className="flex flex-col gap-4">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 font-bold font-display">{skill.level}%</span>
                      </div>
                      {/* Glowing progress track */}
                      <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + skillIdx * 0.05, duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-[0_0_8px_rgba(0,210,255,0.4)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Scattered Interactive Technology Grid Board */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-[#030014]/60 backdrop-blur-md border border-white/5 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle top cyan outline glow */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />
          
          {/* Micro tech pattern grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Centered logo board grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 md:gap-14 justify-items-center items-center relative z-10">
            {TECH_ICONS.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center gap-3.5 group relative cursor-pointer"
                data-cursor-text={tech.name}
              >
                {/* Individual brand-colored radial backdrop glow */}
                <div 
                  className="absolute w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 filter blur-xl pointer-events-none -z-10"
                  style={{ backgroundColor: tech.glow }}
                />

                {/* Staggered Vertical Floating Image wrapper */}
                <motion.div 
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + (idx % 3) * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.15,
                  }}
                  className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.04] flex items-center justify-center p-2.5 transition-all duration-300 shadow-md"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 select-none pointer-events-none"
                    loading="lazy"
                  />
                </motion.div>

                {/* Technology text name */}
                <span className="text-[10px] font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300 uppercase font-display text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
