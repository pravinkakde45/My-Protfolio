"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background opacity change on scroll
      setScrolled(window.scrollY > 40);

      // Scroll progress tracking
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active section tracking
      const scrollPos = window.scrollY + 250;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Instantly close any active fixed modals (like full-screen gallery or certificates)
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("closeActiveOverlays"));
    }
    
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-dark-bg/60 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        {/* Top Progress Line */}
        <div className="absolute top-0 left-0 w-full h-[2.5px] bg-white/5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-2 group cursor-pointer"
            data-cursor-text="Home"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple p-[1px] flex items-center justify-center font-display font-black text-sm tracking-tighter text-white overflow-hidden shadow-[0_0_15px_rgba(0,210,255,0.2)]">
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                PK
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-display font-bold tracking-wider text-sm text-gray-200 group-hover:text-white transition-colors duration-300">
              PRAVIN <span className="text-neon-blue group-hover:text-neon-purple transition-colors duration-300">KAKDE</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <MagneticLink
                key={item.id}
                href={`#${item.id}`}
                active={activeSection === item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                label={item.label}
              />
            ))}
          </nav>

          {/* Hire Me CTA (Magnetic Button) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="relative px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 text-xs font-semibold tracking-wider text-neon-blue uppercase hover:text-white transition-all duration-300 overflow-hidden group flex items-center gap-1.5"
              data-cursor-text="HIRE ME"
            >
              <span className="relative z-10">Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 -translate-y-full bg-gradient-to-r from-neon-blue to-neon-purple group-hover:translate-y-0 transition-transform duration-300 -z-10" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-white/5 flex flex-col justify-center px-8 pt-24 pb-8"
          >
            <nav className="flex flex-col gap-6 items-center">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className={`text-2xl font-display font-semibold tracking-wider ${
                    activeSection === item.id ? "text-neon-blue" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05, duration: 0.3 }}
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-sm font-semibold tracking-wider text-white uppercase shadow-[0_0_15px_rgba(0,210,255,0.2)]"
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Subcomponent: Spring-loaded Magnetic Nav Link for premium feel
function MagneticLink({
  href,
  active,
  onClick,
  label,
}: {
  href: string;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  label: string;
}) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setCoords({ x: x * 0.32, y: y * 0.32 });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: coords.x, y: coords.y }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
      className={`relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-300 font-display ${
        active ? "text-neon-blue" : "text-gray-400 hover:text-white"
      }`}
      data-cursor-text={label}
    >
      <span className="relative z-10">{label}</span>
      {active && (
        <motion.span
          layoutId="activeNavBg"
          className="absolute inset-0 rounded-full bg-white/5 border border-white/5 -z-10"
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        />
      )}
    </motion.a>
  );
}
