"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock scroll immediately on mount
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      // Organic progress counter scaling up with staggered speed variations
      let increment = 1;
      if (current < 30) increment = Math.floor(Math.random() * 8) + 4;
      else if (current < 75) increment = Math.floor(Math.random() * 4) + 2;
      else if (current < 92) increment = Math.floor(Math.random() * 2) + 1;
      else increment = 1;

      current = Math.min(100, current + increment);
      setProgress(current);

      if (current === 100) {
        clearInterval(interval);
        setIsComplete(true);

        // Pause for absolute visual appreciation before sliding out
        setTimeout(() => {
          // Release scroll locking
          document.body.style.overflow = "";
          
          // Trigger Lenis scrolling start securely
          const lenis = (window as unknown as { lenis?: { start: () => void } }).lenis;
          if (lenis) {
            lenis.start();
          }

          // Fire global completion event
          window.dispatchEvent(new Event("preloaderComplete"));

          // Graceful fade/slide unmount timing
          setTimeout(() => {
            setShouldRender(false);
          }, 1100); // matches Framer exit transitions
        }, 900);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { 
              duration: 1.0, 
              ease: [0.85, 0, 0.15, 1], // premium custom cubic-bezier
              delay: 0.1
            } 
          }}
          className="fixed inset-0 w-full h-full bg-[#020011] z-[99999] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Cyber scanner grid layout overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40 z-0" />
          
          {/* Neon radial backdrop glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 filter blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

          {/* Centered loadboard info card */}
          <div className="relative flex flex-col items-center justify-center z-10">
            
            {/* Glowing Hexagon/Emblem Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-28 h-28 flex items-center justify-center rounded-2.5xl bg-white/[0.01] border border-white/5 shadow-[0_0_60px_rgba(0,210,255,0.03)] mb-10 overflow-hidden"
            >
              {/* Inner ambient dynamic backglow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 via-transparent to-neon-purple/10 opacity-70" />
              
              {/* Vertical neon scanner beam */}
              <motion.div 
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent shadow-[0_0_12px_#00d2ff]"
              />
              
              {/* Initials typographic vector */}
              <span className="font-display font-black text-4xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple uppercase select-none drop-shadow-[0_0_20px_rgba(0,210,255,0.25)]">
                PK
              </span>
            </motion.div>

            {/* Cinematic Brand Reveal */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display font-black text-sm tracking-[0.45em] text-white uppercase text-center mb-1"
            >
              Pravin Kakde
            </motion.h1>

            {/* Sub-system operational status */}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-[9px] font-bold text-gray-500 tracking-[0.25em] font-sans uppercase text-center block mb-8"
            >
              {isComplete ? "Core Ready" : "Initializing System Core"}
            </motion.span>

            {/* Micro-Progress Loading Track */}
            <div className="w-52 h-[1px] bg-white/5 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-full shadow-[0_0_8px_rgba(0,210,255,0.6)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Active Hex status string */}
            <div className="font-mono text-[9px] tracking-[0.2em] text-gray-400 font-bold uppercase">
              {isComplete ? (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-neon-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] font-black"
                >
                  SECURE_CONNECTION_ESTABLISHED
                </motion.span>
              ) : (
                <span className="opacity-70">
                  SYS_BOOT_SECTOR_{progress.toString().padStart(3, "0")}%
                </span>
              )}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
