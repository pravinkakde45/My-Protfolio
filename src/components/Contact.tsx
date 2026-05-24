"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Loader2, Link2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Launch beautiful cinematic confetti explosion
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00d2ff", "#9d4edd", "#ffffff", "#06b6d4"],
    });

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSuccess(false);
    }, 4500);
  };

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-neon-blue" />,
      label: "Email",
      value: "pravinkakde1010@gmail.com",
      link: "mailto:pravinkakde1010@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-neon-purple" />,
      label: "Phone",
      value: "+91 9766678227",
      link: "tel:+919766678227",
    },
    {
      icon: <MapPin className="w-5 h-5 text-neon-cyan" />,
      label: "Location",
      value: "Pune, Maharashtra, India",
      link: "https://maps.google.com/?q=Pune,Maharashtra,India",
    },
  ];

  return (
    <section id="contact" className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20"
          >
            <MessageSquare className="w-3.5 h-3.5 text-neon-blue" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neon-blue uppercase font-display">
              Connect
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 font-display font-black text-3xl sm:text-5xl tracking-tight text-white"
          >
            Start a Conversation
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Context Card & Info Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-emerald-400 font-display flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Active Availability Status
              </span>
              
              <h3 className="font-display font-black text-2xl text-white mt-3 leading-snug">
                Let’s create something great together.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                I am actively seeking <strong className="text-white">Full-Stack Engineering & AI</strong> opportunities. Whether you want to discuss appointment scheduler applications, disease predictors, internship outcomes, or just talk tech, feel free to drop a message!
              </p>
            </div>

            {/* Quick Contact Details */}
            <div className="flex flex-col gap-4">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 rounded-2xl border border-white/5 hover:border-neon-blue/20 flex items-center justify-between group transition-all"
                  data-cursor-text={detail.label}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 transition-colors">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-display block leading-none mb-1">
                        {detail.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {detail.value}
                      </span>
                    </div>
                  </div>

                  <Link2 className="w-4 h-4 text-gray-500 group-hover:text-neon-blue transition-colors mr-2" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Sleek Messaging Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-[2.5rem] border border-white/5 h-full relative">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-between">
                <div className="flex flex-col gap-6">
                  {/* Title Row */}
                  <div>
                    <h3 className="font-display font-black text-lg text-white">Send a Message</h3>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider font-display">
                      Direct secure channel
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-display">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      disabled={isSubmitting || isSuccess}
                      value={formData.name}
                      onChange={handleChange}
                      className="px-5 py-4 rounded-xl bg-black/40 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,210,255,0.05)] transition-all duration-300 w-full"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-display">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      disabled={isSubmitting || isSuccess}
                      value={formData.email}
                      onChange={handleChange}
                      className="px-5 py-4 rounded-xl bg-black/40 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,210,255,0.05)] transition-all duration-300 w-full"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-display">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Hi Pravin, I checked your bento grid portfolio..."
                      disabled={isSubmitting || isSuccess}
                      value={formData.message}
                      onChange={handleChange}
                      className="px-5 py-4 rounded-xl bg-black/40 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,210,255,0.05)] transition-all duration-300 w-full resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess || !formData.name || !formData.email || !formData.message}
                  className={`mt-6 w-full py-4 px-6 rounded-xl font-display font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    isSuccess
                      ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-400"
                      : "bg-gradient-to-r from-neon-blue to-neon-purple border-neon-blue/30 text-white shadow-[0_0_15px_rgba(157,78,221,0.2)] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] hover:scale-[1.02]"
                  } disabled:opacity-50 disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed`}
                  data-cursor-text={isSuccess ? "SENT!" : "SEND"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting data...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Transmission</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
