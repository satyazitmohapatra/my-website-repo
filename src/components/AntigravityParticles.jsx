import React, { useEffect, useRef } from 'react';

const PARTICLE_COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#1d4ed8', '#2563eb'];

const AntigravityParticles = ({ count = 800 }) => {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution
      const t = i / (count - 1);
      const phi = Math.acos(1 - 2 * t);
      const theta = 2 * Math.PI * i / goldenRatio;
      
      const radius = 350 + (Math.random() - 0.5) * 150; 

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles.push({
        ix: x, iy: y, iz: z,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        size: Math.random() * 2 + 1,
        dashLength: Math.random() * 8 + 4,
      });
    }

    let time = 0;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      time += 0.0015;
      ctx.clearRect(0, 0, width, height);
      
      // Moving center to the right a bit, to match the Google Antigravity site layout
      const cx = width * 0.7;
      const cy = height * 0.5;

      // Rotation angles
      const rotX = time * 0.5;
      const rotY = time * 0.8;
      const rotZ = time * 0.3;

      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

      // Project 3D to 2D
      const projected = particles.map(p => {
        // Rotate X
        let y1 = p.iy * cosX - p.iz * sinX;
        let z1 = p.iy * sinX + p.iz * cosX;
        
        // Rotate Y
        let x2 = p.ix * cosY + z1 * sinY;
        let z2 = -p.ix * sinY + z1 * cosY;

        // Rotate Z
        let x3 = x2 * cosZ - y1 * sinZ;
        let y3 = x2 * sinZ + y1 * cosZ;

        const focalLength = 800;
        const zDepth = focalLength + z2;
        
        if (zDepth <= 0) return null;

        const scale = focalLength / zDepth;
        const x2d = cx + x3 * scale;
        const y2d = cy + y3 * scale;

        // Opacity based on depth
        const opacity = Math.max(0.05, Math.min(1, (600 - z2) / 800));

        // Dash orientation creates the sphere curving effect
        const angle = Math.atan2(y3, x3) + Math.PI / 2;

        return { ...p, x2d, y2d, scale, opacity, angle, z2 };
      }).filter(Boolean);

      // Draw furthest first
      projected.sort((a, b) => b.z2 - a.z2);

      projected.forEach(p => {
        ctx.save();
        ctx.translate(p.x2d, p.y2d);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        const len = p.dashLength * p.scale;
        const thick = p.size * p.scale;
        
        ctx.beginPath();
        // Fallback for roundRect
        if (ctx.roundRect) {
          ctx.roundRect(-len/2, -thick/2, len, thick, thick/2);
        } else {
          ctx.rect(-len/2, -thick/2, len, thick);
        }
        ctx.fill();

        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, backgroundColor: '#030305' }}
    />
  );
};

export default AntigravityParticles;
