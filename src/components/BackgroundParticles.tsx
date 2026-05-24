"use client";

import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 160 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseSize: number;
      size: number;
      color: string;
      alpha: number;
      density: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.baseSize = Math.random() * 1.8 + 0.4;
        this.size = this.baseSize;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.density = Math.random() * 20 + 2;

        const colors = ["#00d2ff", "#9d4edd", "#06b6d4"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }

      update(width: number, height: number) {
        // Linear movement drift
        this.x += this.vx;
        this.y += this.vy;

        // Bouncing logic
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interactive mouse-push vector mechanics
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * this.density * 0.5;
          const directionY = forceDirectionY * force * this.density * 0.5;

          this.x -= directionX;
          this.y -= directionY;
          this.size = this.baseSize * 1.6;
          this.alpha = Math.min(0.95, this.alpha + 0.06);
        } else {
          if (this.size > this.baseSize) this.size -= 0.04;
          if (this.alpha > 0.15) this.alpha = Math.max(0.15, this.alpha - 0.008);
        }
      }
    }

    const init = () => {
      particles = [];
      const particleDensity = 11000; // lower number means denser
      const count = Math.min(
        140,
        Math.floor((canvas.width * canvas.height) / particleDensity)
      );
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw();

        // Dynamically connecting floating vertices
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = ((105 - dist) / 105) * 0.07;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden pointer-events-none bg-dark-bg">
      {/* Ambient Pulsing Nebulae Orbs */}
      <div className="absolute top-[-20%] left-[-15%] w-[65vw] h-[65vw] rounded-full bg-glow-blue blur-[140px] opacity-40 animate-pulse-slow" />
      <div
        className="absolute bottom-[-20%] right-[-15%] w-[65vw] h-[65vw] rounded-full bg-glow-purple blur-[140px] opacity-40 animate-pulse-slow"
        style={{ animationDelay: "2.5s" }}
      />
      <div className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-glow-blue blur-[120px] opacity-25 animate-float-slow" />

      {/* Vertex Constellation Grid */}
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
