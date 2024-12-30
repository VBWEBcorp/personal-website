'use client';

import { useEffect, useRef } from 'react';

const FuturisticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid parameters
    const gridSize = 30;
    const perspectiveOffset = canvas.height * 0.3;
    let time = 0;

    // Create particles
    class Particle {
      x: number;
      y: number;
      z: number;
      speed: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.speed = Math.random() * 2 + 1;
        this.color = `rgba(78, 186, 236, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.z -= this.speed;
        if (this.z < 1) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const scale = 1000 / this.z;
        const x = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const r = 1.5 * scale;

        ctx!.beginPath();
        ctx!.fillStyle = this.color;
        ctx!.arc(x, y, r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Create particles array
    const particles: Particle[] = Array.from({ length: 200 }, () => new Particle());

    // Animation function
    const animate = () => {
      ctx.fillStyle = 'rgba(38, 64, 96, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw perspective grid
      ctx.strokeStyle = 'rgba(78, 186, 236, 0.1)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let i = 0; i <= canvas.width; i += gridSize) {
        const offset = (time + i) % gridSize;
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(
          i + (canvas.width / 2 - i) * 0.1,
          canvas.height - perspectiveOffset
        );
        ctx.stroke();
      }

      // Horizontal lines
      for (let i = 0; i <= canvas.height; i += gridSize) {
        const offset = (time + i) % gridSize;
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(
          canvas.width,
          i + (canvas.height - perspectiveOffset - i) * 0.1
        );
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw glow effects
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.5
      );
      gradient.addColorStop(0, 'rgba(78, 186, 236, 0.1)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.5;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(to bottom, rgba(38, 64, 96, 0.8), rgba(38, 64, 96, 0.95))',
        filter: 'blur(1px)'
      }}
    />
  );
};

export default FuturisticBackground;
