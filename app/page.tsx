"use client";

import { useEffect, useState, useCallback, useRef } from 'react';
import Particles from "@/components/ui/particles";

interface TimeUnit {
  value: number;
  label: string;
  total: number;
  color: string;
  speed: number;
}

interface Point {
  x: number;
  y: number;
  dx: number;
  dy: number;
  age: number;
}

function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const addPoint = (x: number, y: number) => {
      pointsRef.current.push({
        x, y,
        dx: (Math.random() - 0.5) * 3,
        dy: (Math.random() - 0.5) * 3,
        age: 0
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      pointsRef.current = pointsRef.current.filter(point => {
        point.age += 1;
        point.x += point.dx;
        point.y += point.dy;
        
        const alpha = Math.max(0, 1 - point.age / 70);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        return point.age < 70;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      addPoint(e.clientX, e.clientY);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}

function ArtisticClock({ time, scale = 1, mousePosition = { x: 0, y: 0 } }: { 
  time: Date; 
  scale?: number;
  mousePosition?: { x: number; y: number };
}) {
  const [rotation, setRotation] = useState<number[]>([0, 0, 0]);
  const [isHovering, setIsHovering] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const CENTER = { x: 200, y: 200 };
  
  const timeUnits: TimeUnit[] = [
    { 
      value: time.getHours(), 
      label: 'H', 
      total: 24, 
      color: '#ffffff20',
      speed: 360 / (24 * 60 * 60)
    },
    { 
      value: time.getMinutes(), 
      label: 'M', 
      total: 60, 
      color: '#ffffff18',
      speed: 360 / (60 * 60)
    },
    { 
      value: time.getSeconds(), 
      label: 'S', 
      total: 60, 
      color: '#ffffff15',
      speed: 360 / 60
    }
  ];

  const RADII = timeUnits.map((_, index) => (180 - (index * 40)) * scale);

  useEffect(() => {
    const startTime = Date.now();
    const initialAngles = timeUnits.map(unit => -(unit.value * 360) / unit.total);
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const newRotations = timeUnits.map((unit, index) => {
        return (initialAngles[index] - (elapsed * unit.speed)) % 360;
      });
      setRotation(newRotations);
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, [time, timeUnits]);

  const createTicks = (radius: number, total: number) => {
    const ticks = [];
    for (let i = 0; i < total; i++) {
      const angle = (i * 360) / total;
      const isMainTick = i % 5 === 0;
      const tickLength = isMainTick ? 6 : 3;
      const startRadius = radius - tickLength;
      const endRadius = radius;
      
      const startX = CENTER.x + startRadius * Math.cos((angle - 90) * Math.PI / 180);
      const startY = CENTER.y + startRadius * Math.sin((angle - 90) * Math.PI / 180);
      const endX = CENTER.x + endRadius * Math.cos((angle - 90) * Math.PI / 180);
      const endY = CENTER.y + endRadius * Math.sin((angle - 90) * Math.PI / 180);
      
      ticks.push(
        <line
          key={`tick-${i}`}
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke={`rgba(255, 255, 255, ${isMainTick ? 0.4 : 0.2})`}
          strokeWidth="1"
        />
      );
    }
    return ticks;
  };

  const createRing = (unit: TimeUnit, radius: number, index: number) => {
    const angle = Math.atan2(mousePosition.y - CENTER.y, mousePosition.x - CENTER.x);
    const distortion = isHovering ? Math.sin(angle * 3) * 5 : 0;
    
    return (
      <g key={unit.label}
         style={{ transform: `rotate(${rotation[index]}deg)`, transformOrigin: 'center' }}
         className="transition-all duration-300 ease-out will-change-transform">
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={radius + distortion}
          fill="none"
          stroke={unit.color}
          strokeWidth="1"
          className="mix-blend-screen"
          filter={glowIntensity > 0 ? `url(#glow-${index})` : undefined}
        />
        {createTicks(radius + distortion, unit.total)}
      </g>
    );
  };

  return (
    <div className="relative"
         onMouseEnter={() => setIsHovering(true)}
         onMouseLeave={() => setIsHovering(false)}
         onMouseMove={() => setGlowIntensity(prev => Math.min(prev + 0.1, 1))}
         onMouseOut={() => setGlowIntensity(0)}>
      <svg className={`w-[${800 * scale}px] h-[${800 * scale}px]`} viewBox="0 0 400 400">
        <defs>
          {timeUnits.map((_, index) => (
            <filter key={index} id={`glow-${index}`}>
              <feGaussianBlur stdDeviation={3 * glowIntensity} />
              <feComposite in="SourceGraphic" />
            </filter>
          ))}
        </defs>
        {timeUnits.map((unit, index) => createRing(unit, RADII[index], index))}
      </svg>
    </div>
  );
}

function InteractiveText({ children }: { children: string }) {
  const [chars, setChars] = useState(children.split(''));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setChars(prev => prev.map((char, i) => {
      const charEl = containerRef.current?.children[i] as HTMLSpanElement;
      if (!charEl) return char;
      
      const charRect = charEl.getBoundingClientRect();
      const charX = charRect.left - rect.left + charRect.width / 2;
      const charY = charRect.top - rect.top + charRect.height / 2;
      
      const distance = Math.sqrt(Math.pow(x - charX, 2) + Math.pow(y - charY, 2));
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        return char;
      }
      return char;
    }));
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative inline-block"
      onMouseMove={handleMouseMove}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-200 hover:text-yellow-300 hover:scale-125"
          style={{ cursor: 'default' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

export default function LandingPage() {
  const [time, setTime] = useState(new Date());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!mainRef.current) return;
    const rect = mainRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 400;
    const y = ((e.clientY - rect.top) / rect.height) * 400;
    setMousePosition({ x, y });
  }, []);

  return (
    <main 
      ref={mainRef}
      className="relative min-h-screen w-screen bg-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <MouseTrail />
      
      <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
      <Particles
        className="fixed inset-0"
        quantityDesktop={100}
        quantityMobile={50}
        ease={120}
        color={"rgba(255,255,255,0.2)"}
        refresh={false}
      />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <ArtisticClock time={time} scale={1.5} mousePosition={mousePosition} />
        </div>

        <div className="relative z-10 text-center space-y-3 -mt-4">
          <h1 className="tracking-wider font-offbit-dot text-3xl md:text-5xl">
            <InteractiveText>Coming Soon</InteractiveText>
          </h1>
          <p className="font-offbit-dot text-lg md:text-xl text-gray-400 tracking-wide">
            {time.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: '2-digit',
              year: 'numeric'
            })}
          </p>
        </div>
      </section>

      <footer className="fixed bottom-0 w-full py-4 px-6 flex justify-between items-center text-gray-500 text-sm backdrop-blur-sm bg-black/30 z-50">
        <div className="font-offbit-dot">
          {time.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          }).replace(/\s/g, '')}
        </div>
        <div className="flex items-center space-x-6">
          {['Twitter', 'Instagram', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-white transition-all duration-300 hover:scale-110"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
