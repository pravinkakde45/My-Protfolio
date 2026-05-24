"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 350, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide standard cursor
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Dynamic Hover Binding to handle newly injected elements
    const addHoverListeners = () => {
      const elements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, .project-card, .interactive-item"
      );

      elements.forEach((el) => {
        // Prevent duplicate listeners
        if (el.getAttribute("data-has-cursor-listener")) return;
        el.setAttribute("data-has-cursor-listener", "true");

        el.addEventListener("mouseenter", () => {
          setIsHovered(true);
          const txt = el.getAttribute("data-cursor-text");
          if (txt) setCursorText(txt);
        });

        el.addEventListener("mouseleave", () => {
          setIsHovered(false);
          setCursorText("");
        });
      });
    };

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  // Disable on screens smaller than 768px (tablets & mobiles)
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const timer = setTimeout(handleResize, 0);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Halo */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 bg-transparent border border-neon-blue mix-blend-screen flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: isHovered
            ? "0 0 20px #00d2ff, inset 0 0 10px #00d2ff"
            : "0 0 8px rgba(0, 210, 255, 0.3)",
          backgroundColor: isHovered ? "rgba(0, 210, 255, 0.05)" : "transparent",
          borderColor: isHovered ? "#9d4edd" : "#00d2ff",
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovered ? 2.2 : 1.0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      >
        {cursorText && (
          <span className="text-[7px] tracking-[0.2em] font-display font-black text-white text-center leading-none select-none uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-purple rounded-full pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 10px #9d4edd",
        }}
        animate={{
          scale: isClicking ? 1.4 : isHovered ? 0.15 : 1.0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      />
    </>
  );
}
