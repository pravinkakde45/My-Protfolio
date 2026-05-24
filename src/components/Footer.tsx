"use client";

import { motion } from "framer-motion";
import { ArrowUp, Trophy } from "lucide-react";

// Custom Trademark-safe GitHub Icon
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


// Custom Inline brand SVG icons
const LinkedinIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      icon: <GithubIcon />,
      url: "https://github.com/pravinkakde45",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon />,
      url: "https://www.linkedin.com/in/pravin-kakde-a3171b2aa/",
      label: "LinkedIn",
    },
    {
      icon: <TwitterIcon />,
      url: "https://x.com/Pravin_kakde_45",
      label: "Twitter/X",
    },
    {
      icon: <Trophy className="w-4 h-4" />,
      url: "https://leetcode.com/u/Pravin_Kakde/",
      label: "LeetCode",
    },
    {
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/praviiiinnn45/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative w-full border-t border-white/5 py-12 bg-[#02000c]/80 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Branding */}
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-sm tracking-wider text-gray-200">
            PRAVIN KAKDE
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} — All Rights Reserved
          </p>
        </div>

        {/* Center Socials */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-neon-blue hover:border-neon-blue/40 transition-colors shadow-lg hover:shadow-[0_0_10px_rgba(0,210,255,0.15)]"
              data-cursor-text={social.label}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Right Scroll to Top */}
        <div>
          <motion.button
            onClick={scrolltoTop}
            className="flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 text-neon-blue hover:text-white transition-all cursor-pointer group shadow-lg hover:shadow-[0_0_15px_rgba(0,210,255,0.25)]"
            data-cursor-text="BACK TO TOP"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
