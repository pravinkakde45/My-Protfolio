"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isTextDone, setIsTextDone] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock scroll immediately on mount
    document.body.style.overflow = "hidden";

    // Step 1: Text animation fades out after 1.3 seconds
    const textTimer = setTimeout(() => {
      setIsTextDone(true);
    }, 1300);

    // Step 2: Shutter panels start sliding up at 1.45 seconds
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      
      // Release scrolling locks
      document.body.style.overflow = "";

      // Trigger Lenis scrolling start securely
      const lenis = (window as unknown as { lenis?: { start: () => void } }).lenis;
      if (lenis) {
        lenis.start();
      }

      // Fire global completion event to trigger home section stagger reveals
      window.dispatchEvent(new Event("preloaderComplete"));

      // Unmount after exit slide transition completes
      setTimeout(() => {
        setShouldRender(false);
      }, 1100);
    }, 1450);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  // Staggered columns animations
  const columnVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: "-100%",
      transition: {
        duration: 0.85,
        ease: [0.85, 0, 0.15, 1] as [number, number, number, number],
        delay: i * 0.1,
      },
    }),
  };

  return (
    <AnimatePresence>
      {shouldRender && (
        <div className="fixed inset-0 w-full h-full z-[99999] pointer-events-none select-none overflow-hidden flex">
          
          {/* Shutter Panel 1 */}
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="initial"
            animate={isComplete ? "animate" : "initial"}
            className="w-[33.33%] h-full bg-[#020011] relative z-10 border-r border-white/[0.005]"
          >
            {/* Subtle grid line backdrop inside panels */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:100%_32px] opacity-35" />
          </motion.div>

          {/* Shutter Panel 2 */}
          <motion.div
            custom={1}
            variants={columnVariants}
            initial="initial"
            animate={isComplete ? "animate" : "initial"}
            className="w-[33.33%] h-full bg-[#020011] relative z-10 border-r border-white/[0.005]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:100%_32px] opacity-35" />
          </motion.div>

          {/* Shutter Panel 3 */}
          <motion.div
            custom={2}
            variants={columnVariants}
            initial="initial"
            animate={isComplete ? "animate" : "initial"}
            className="w-[33.34%] h-full bg-[#020011] relative z-10"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:100%_32px] opacity-35" />
          </motion.div>

          {/* Central Typographic Overlay */}
          <AnimatePresence>
            {!isTextDone && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
              >
                {/* Micro tech sub-string */}
                <motion.span
                  initial={{ letterSpacing: "0.2em", opacity: 0 }}
                  animate={{ letterSpacing: "0.35em", opacity: 0.4 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="text-[9px] font-black font-sans text-neon-blue uppercase mb-2 select-none"
                >
                  SYSTEM CORE INITIALIZED
                </motion.span>

                {/* Main Typographic Text Reveal */}
                <motion.h1
                  initial={{ letterSpacing: "0.08em", opacity: 0 }}
                  animate={{ letterSpacing: "0.25em", opacity: 1 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="font-display font-black text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan uppercase leading-none select-none drop-shadow-[0_0_12px_rgba(0,210,255,0.2)]"
                >
                  Pravin Kakde
                </motion.h1>

                {/* Thin loading divider */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="h-[1px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4 rounded-full shadow-[0_0_8px_rgba(0,210,255,0.5)]"
                />
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      )}
    </AnimatePresence>
  );
}
