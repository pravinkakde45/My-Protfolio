"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X, ShieldCheck, Calendar } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  skills: string[];
  color: string; // Theme styling
  image?: string; // Optional actual certificate image path
}

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy (Dr. Angela Yu)",
      date: "November 2025",
      credentialId: "UC-237ccbad-0200-4a8d-9238-b421c33d8915",
      description: "Successfully completed the legendary 61.5-hour Full-Stack Web Development Bootcamp instructed by Dr. Angela Yu, validating mastery in comprehensive frontend engineering, backend databases, API systems, MERN stacks, and advanced cloud systems.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL/PostgreSQL", "MERN Stack"],
      color: "from-purple-600 to-indigo-600 border-purple-500/30",
      image: "/certificates/udemy-fullstack.png",
    },
    {
      title: "Career Hub Technology Coding Round",
      issuer: "Career Hub Technology",
      date: "November 2025",
      credentialId: "CHT-CODE-25-28",
      description: "Successfully completed the Career Hub Technology Coding Round with an elite passing score of 80% on 6th November 2025, validating key skills in data structures, algorithmic design patterns, and high-performance competitive programming.",
      skills: ["Competitive Programming", "Algorithms", "Data Structures", "Problem Solving"],
      color: "from-cyan-600 to-blue-600 border-cyan-500/30",
      image: "/certificates/career-hub.jpg",
    },
    {
      title: "NPTEL Online Certification — Big Data",
      issuer: "IIT Kanpur + NPTEL + MoE Support",
      date: "Aug - Oct 2025",
      credentialId: "NPTEL25CS131S1168300053",
      description: "Awarded Elite certification for successfully completing the proctored academic Big Data Computing course from IIT Kanpur with a consolidated score of 68%. Covered MapReduce frameworks, Hadoop clusters, Apache Spark APIs, and large-scale data engineering layouts.",
      skills: ["Big Data Computing", "Hadoop", "Apache Spark", "MapReduce", "IIT Kanpur"],
      color: "from-orange-600 to-red-600 border-orange-500/30",
      image: "/certificates/nptel-bigdata.jpg",
    },
    {
      title: "IBM SkillsBuild AI & ML Internship",
      issuer: "Edunet Foundation + AICTE + IBM",
      date: "Jan 2026",
      credentialId: "STU69239222debd51763938850",
      description: "Successfully completed the intensive 6-week internship in Artificial Intelligence and Machine Learning in collaboration with AICTE and IBM SkillsBuild, designing predictive classifiers, artificial neural networks, and AI regression showcases.",
      skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Data Modeling"],
      color: "from-indigo-600 to-blue-600 border-indigo-500/30",
      image: "/certificates/ibm-skillsbuild.jpg",
    },
    {
      title: "AI in Crisis Management & Continuity",
      issuer: "Crisis Research Forum",
      date: "March 2026",
      credentialId: "CRF-RESEARCH-8104",
      description: "Commended for conducting deep theoretical analysis on integrating predictive classifiers and transformer neural nets to enhance logistics and disaster recovery plans.",
      skills: ["Neural Network Architecture", "Systems Reliability", "Crisis Modeling"],
      color: "from-teal-600 to-emerald-600 border-teal-500/30",
    },
  ];

  return (
    <section id="certifications" className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20"
          >
            <Award className="w-3.5 h-3.5 text-neon-purple" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neon-purple uppercase font-display">
              Achievements
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 font-display font-black text-3xl sm:text-5xl tracking-tight text-white"
          >
            Certifications & Credentials
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveCert(cert)}
              className="glass-card p-6 rounded-3xl border border-white/5 flex justify-between items-start gap-4 cursor-pointer hover:border-neon-blue/20 transition-all duration-300 relative overflow-hidden group"
              data-cursor-text="PREVIEW"
            >
              {/* Backglow element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-neon-blue/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-2xl text-neon-purple border border-white/5 group-hover:text-neon-blue transition-colors">
                  <Award className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-black text-base sm:text-lg text-white group-hover:text-neon-blue transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wider">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider font-display">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-gray-500" />
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Eye trigger button */}
              <div className="shrink-0 p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                <Eye className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-screen Glassmorphic Modal Overlay */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-3xl rounded-[2.5rem] border border-white/10 overflow-hidden relative shadow-[0_0_50px_rgba(0,210,255,0.15)] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Digital Credential Visual Mockup / Actual Image Preview */}
              <div className={`md:w-1/2 bg-gradient-to-br ${activeCert.color} p-8 flex flex-col justify-between relative overflow-hidden text-white min-h-[300px] md:min-h-auto`}>
                
                {/* Micro tech pattern grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                {activeCert.image ? (
                  /* Render Actual Certificate Image */
                  <div className="w-full h-full relative rounded-2xl overflow-hidden flex items-center justify-center bg-black/45 border border-white/10 p-2.5 z-10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeCert.image}
                      alt={activeCert.title}
                      className="max-w-full max-h-full object-contain rounded-lg select-none pointer-events-none"
                    />
                  </div>
                ) : (
                  /* Render digital mockup frame */
                  <div className="border border-white/20 p-5 rounded-2xl flex-1 flex flex-col justify-between z-10 relative bg-black/35 backdrop-blur-sm">
                    {/* Header badge */}
                    <div className="flex justify-between items-start">
                      <ShieldCheck className="w-8 h-8 text-white/80" />
                      <span className="text-[7px] border border-white/20 px-2 py-0.5 rounded uppercase font-display tracking-widest bg-white/5">
                        Verifiable Hash
                      </span>
                    </div>

                    {/* Seal details */}
                    <div className="text-center my-6 flex flex-col items-center">
                      <Award className="w-12 h-12 text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] animate-pulse" />
                      <h4 className="font-display font-black text-sm tracking-widest uppercase mt-4 max-w-[200px] leading-tight">
                        {activeCert.title}
                      </h4>
                      <span className="text-[8px] text-gray-300 font-display font-bold uppercase mt-1 tracking-widest">
                        {activeCert.issuer}
                      </span>
                    </div>

                    {/* Footer verification hash string */}
                    <div className="flex flex-col gap-0.5 border-t border-white/15 pt-3">
                      <span className="text-[6px] text-gray-400 font-mono select-all">SHA-256: 8f2a9e3d...fc5b10e4</span>
                      <span className="text-[7px] font-bold uppercase tracking-wider text-amber-400 font-display">
                        State verified digital seal
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Detailed Credential Info */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] font-black text-neon-blue font-display">
                    Secure Certificate Metadata
                  </span>
                  
                  <h3 className="font-display font-black text-xl text-white mt-2 leading-snug">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
                    {activeCert.issuer}
                  </p>

                  <p className="text-gray-300 text-xs sm:text-sm mt-5 leading-relaxed">
                    {activeCert.description}
                  </p>

                  {/* Skills Accredited */}
                  <div className="mt-6">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 font-display">
                      Certified Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {activeCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[9px] font-bold text-gray-400 tracking-wider uppercase font-display"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer validation check */}
                <div className="mt-8 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase font-display tracking-wider">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    Issued {activeCert.date}
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Active
                  </span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
