
import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 40;
    const gridSpacing = 60;
    let mouse = { x: width / 2, y: height / 2 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(0, 242, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawGrid = (t: number) => {
      if (!ctx) return;
      ctx.strokeStyle = 'rgba(0, 242, 255, 0.04)';
      ctx.lineWidth = 1;

      // Vertical lines with subtle parallax
      const offsetX = (mouse.x - width / 2) * 0.05;
      const offsetY = (mouse.y - height / 2) * 0.05;

      for (let x = (offsetX % gridSpacing); x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = (offsetY % gridSpacing); y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawDataStreams = (t: number) => {
      if (!ctx) return;
      // Occasionally draw a "bright" line to simulate a data stream
      const streamCount = 3;
      for (let i = 0; i < streamCount; i++) {
        const x = (Math.sin(t * 0.001 + i) * 0.5 + 0.5) * width;
        const opacity = (Math.sin(t * 0.002 + i) * 0.5 + 0.5) * 0.08;
        ctx.strokeStyle = `rgba(0, 242, 255, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    };

    const animate = (t: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Gradient background to keep the center darker or themed
      const gradient = ctx.createRadialGradient(
        width / 2 + (mouse.x - width / 2) * 0.1,
        height / 2 + (mouse.y - height / 2) * 0.1,
        0,
        width / 2,
        height / 2,
        width * 0.8
      );
      gradient.addColorStop(0, 'rgba(10, 10, 15, 0)');
      gradient.addColorStop(1, 'rgba(3, 3, 5, 0.4)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      drawGrid(t);
      drawDataStreams(t);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(0, 242, 255, ${0.1 * (1 - dist / 150)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    animate(0);

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default Background;
