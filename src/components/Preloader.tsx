"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = [
  "Hello",        // English
  "नमस्ते",       // Hindi (Pravin's native context)
  "Bonjour",      // French
  "Konnichiwa",   // Japanese
  "Ciao",         // Italian
  "Pravin Kakde"  // Final personal brand name
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  // SVG Curve Morph Path States
  // As the preloader exits, the bottom tail morphs from a dramatic downward liquid curve to a flat line.
  const [curvePath, setCurvePath] = useState("M0 0 L100 0 L100 100 Q50 100 0 100 Z");

  useEffect(() => {
    // Lock scroll immediately on mount
    document.body.style.overflow = "hidden";

    // Typographic word sequencing rhythm
    if (index === GREETINGS.length - 1) {
      // Hold "Pravin Kakde" for a moment, then slide up curtain
      const holdTimer = setTimeout(() => {
        setIsComplete(true);
        
        // Release scrolling locks
        document.body.style.overflow = "";

        // Trigger Lenis scrolling start securely
        const lenis = (window as unknown as { lenis?: { start: () => void } }).lenis;
        if (lenis) {
          lenis.start();
        }

        // Fire global completion event to trigger child stagger reveals
        window.dispatchEvent(new Event("preloaderComplete"));

        // Wait for exit slide transition to complete before unmounting component
        setTimeout(() => {
          setShouldRender(false);
        }, 1200);
      }, 1000);

      return () => clearTimeout(holdTimer);
    }

    const sequenceTimer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 380 : 250); // initial greeting stays slightly longer, rest sequence quickly

    return () => clearTimeout(sequenceTimer);
  }, [index]);

  // Morph the liquid SVG tail path as exit slide runs
  useEffect(() => {
    if (isComplete) {
      // Start morphing the bottom path Q control coordinate to flat as panel slides
      const morphTimer = setTimeout(() => {
        setCurvePath("M0 0 L100 0 L100 0 Q50 0 0 0 Z");
      }, 100);
      return () => clearTimeout(morphTimer);
    }
  }, [isComplete]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isComplete ? "-100vh" : 0 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.76, 0, 0.24, 1], // cinematic bezier
          }}
          className="fixed inset-0 w-full h-full bg-[#020011] z-[99999] flex flex-col items-center justify-center select-none overflow-visible"
        >
          {/* Subtle cyber grid backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none opacity-40 z-0" />

          {/* Dynamic Typographic Display Wrapper */}
          <div className="relative flex items-center justify-center z-10 overflow-hidden h-24 sm:h-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ 
                  duration: 0.35, 
                  ease: [0.215, 0.61, 0.355, 1] // cubic bezier for clean snap-in
                }}
                className="flex items-center gap-3.5"
              >
                {/* Visual pulse dot for Pravin Kakde name */}
                {index === GREETINGS.length - 1 && (
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gradient-to-r from-neon-blue to-neon-purple shadow-[0_0_12px_#00d2ff]"></span>
                  </span>
                )}
                
                {/* Glowing Morph Text */}
                <h1 className={`font-display font-black tracking-tight text-white uppercase text-center leading-none select-none select-none ${
                  index === GREETINGS.length - 1 
                    ? "text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan drop-shadow-[0_0_20px_rgba(0,210,255,0.25)]" 
                    : "text-2xl sm:text-4xl"
                }`}>
                  {GREETINGS[index]}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SVG Liquid Curve Tail Panel */}
          {/* Positioned at the bottom edge, it scales dynamically, morphing to flat to simulate real liquid tension as it pulls away */}
          <div className="absolute top-full left-0 w-full pointer-events-none" style={{ height: "30vh" }}>
            <svg 
              className="w-full h-full fill-[#020011] stroke-none" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <motion.path
                animate={{ d: curvePath }}
                transition={{ 
                  duration: 0.95, 
                  ease: [0.76, 0, 0.24, 1] 
                }}
                d="M0 0 L100 0 L100 0 Q50 100 0 0 Z"
              />
            </svg>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
