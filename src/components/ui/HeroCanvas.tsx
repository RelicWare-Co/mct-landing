import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use alpha: false for slight optimization if background is solid, but here we want it transparent so it overlays cleanly
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    // Brand and structural colors
    const colors = {
      primary: '#8b1c31',         // Vino tinto
      primaryGlow: 'rgba(139, 28, 49, 0.4)',
      dark: '#111827',
      darkMid: 'rgba(17, 24, 39, 0.3)',
      darkFaint: 'rgba(17, 24, 39, 0.08)',
      blueprint: 'rgba(17, 24, 39, 0.03)',
    };

    // --- Data Structures for the Precision Core ---
    interface Arc {
      start: number;
      length: number;
      thickness: number;
      color: string;
    }

    interface Ring {
      radius: number;
      speed: number;
      direction: number;
      arcs: Arc[];
      hasTicks?: boolean;
      tickCount?: number;
    }

    let rings: Ring[] = [];
    let radialLinks: { angle: number, speed: number, rStart: number, rEnd: number }[] = [];

    const init = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }

      rings = [];
      radialLinks = [];
      
      const maxRadius = Math.max(width, height) * 0.45;
      const numRings = 18; 
      
      // Generate rings for the "Cryptographic/Data Core"
      for (let i = 0; i < numRings; i++) {
        // Tighter grouping towards the center, spacing out at the edges
        const radius = 40 + Math.pow(i / numRings, 1.2) * (maxRadius - 40);
        
        const type = Math.random();
        const arcs: Arc[] = [];
        
        if (type > 0.2) {
          // Fragmented precise geometric arcs
          const numArcs = Math.floor(Math.random() * 6) + 1;
          let currentAngle = Math.random() * Math.PI * 2;
          
          for (let j = 0; j < numArcs; j++) {
            const gap = Math.random() * 0.8 + 0.1;
            const length = Math.random() * 2.0 + 0.1;
            const isHighlight = Math.random() > 0.85;
            
            arcs.push({
              start: currentAngle + gap,
              length: length,
              thickness: isHighlight ? 2 : (Math.random() > 0.5 ? 1 : 0.5),
              color: isHighlight ? colors.primary : (Math.random() > 0.5 ? colors.darkMid : colors.darkFaint)
            });
            
            currentAngle += gap + length;
          }
        }

        rings.push({
          radius,
          speed: (Math.random() * 0.001 + 0.0002) * (maxRadius / radius) * 0.7,
          direction: Math.random() > 0.5 ? 1 : -1,
          arcs,
          // Add structural "ticks" (like a compass or measuring tape) on some rings
          hasTicks: Math.random() > 0.75,
          tickCount: Math.floor(Math.random() * 90) + 30
        });
      }

      // Generate structural radial tracking lines
      for (let i = 0; i < 6; i++) {
         const idxStart = Math.floor(Math.random() * 5);
         const idxEnd = rings.length - Math.floor(Math.random() * 5) - 1;
         radialLinks.push({
            angle: Math.random() * Math.PI * 2,
            speed: (Math.random() * 0.002 + 0.0005) * (Math.random() > 0.5 ? 1 : -1),
            rStart: rings[idxStart]?.radius || 40,
            rEnd: rings[idxEnd]?.radius || maxRadius,
         });
      }
    };

    const render = () => {
      time += 1;
      
      // Transparent clear to merge with background smoothly
      ctx.clearRect(0, 0, width, height);
      
      const cx = Math.floor(width / 2);
      const cy = Math.floor(height / 2);

      // 1. Draw static architectural blueprint grid in the background
      ctx.save();
      ctx.beginPath();
      const gridSize = 40;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y); ctx.lineTo(width, y);
      }
      ctx.strokeStyle = colors.blueprint;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // 2. Draw sweeping radial network lines
      ctx.save();
      radialLinks.forEach(link => {
        const angle = link.angle + time * link.speed;
        const sx = cx + Math.cos(angle) * link.rStart;
        const sy = cy + Math.sin(angle) * link.rStart;
        const ex = cx + Math.cos(angle) * link.rEnd;
        const ey = cy + Math.sin(angle) * link.rEnd;

        // Trace line
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = colors.primaryGlow;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Terminal geometric node
        ctx.beginPath();
        ctx.rect(ex - 2, ey - 2, 4, 4);
        ctx.fillStyle = colors.primary;
        ctx.fill();
      });
      ctx.restore();

      // 3. Draw evolving concentric rings
      ctx.lineCap = 'butt'; // Keeps edges perfectly sharp and brutalist
      rings.forEach(ring => {
        const rotation = time * ring.speed * ring.direction;

        // Draw precision tick marks
        if (ring.hasTicks && ring.tickCount) {
          const tickAngle = (Math.PI * 2) / ring.tickCount;
          ctx.beginPath();
          for (let i = 0; i < ring.tickCount; i++) {
            const angle = i * tickAngle + rotation;
            const innerX = cx + Math.cos(angle) * (ring.radius - 4);
            const innerY = cy + Math.sin(angle) * (ring.radius - 4);
            const outerX = cx + Math.cos(angle) * (ring.radius + 4);
            const outerY = cy + Math.sin(angle) * (ring.radius + 4);
            ctx.moveTo(innerX, innerY);
            ctx.lineTo(outerX, outerY);
          }
          ctx.strokeStyle = colors.darkFaint;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw geometric arcs
        ring.arcs.forEach(arc => {
          ctx.beginPath();
          ctx.arc(
            cx, cy, 
            ring.radius, 
            arc.start + rotation, 
            arc.start + arc.length + rotation
          );
          ctx.strokeStyle = arc.color;
          ctx.lineWidth = arc.thickness;
          ctx.stroke();
        });
      });

      // 4. Center Monolithic Crosshair
      ctx.save();
      ctx.translate(cx, cy);
      
      // Precision core target
      ctx.beginPath();
      ctx.moveTo(-15, 0); ctx.lineTo(15, 0);
      ctx.moveTo(0, -15); ctx.lineTo(0, 15);
      ctx.strokeStyle = colors.dark;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Subtly counter-rotating central squares
      ctx.rotate(-time * 0.005);
      ctx.beginPath();
      ctx.rect(-20, -20, 40, 40);
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.rotate(time * 0.015);
      ctx.beginPath();
      // An internal 45-degree diamond
      ctx.moveTo(0, -10); ctx.lineTo(10, 0); ctx.lineTo(0, 10); ctx.lineTo(-10, 0); ctx.closePath();
      ctx.strokeStyle = colors.darkMid;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    init();
    render();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}
