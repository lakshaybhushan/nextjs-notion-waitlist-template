'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TimeDrift = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const month = currentTime.toLocaleString('default', { month: 'short' });
  const day = currentTime.toLocaleString('default', { weekday: 'short' });

  const generateTimeMarkers = () => {
    const markers = [];
    for (let i = 0; i < 60; i++) {
      const rotation = i * 6;
      const isHour = i % 5 === 0;
      markers.push(
        <div
          key={i}
          className={`absolute h-1 transform -translate-x-1/2 -translate-y-1/2 origin-[100%_50%] ${
            isHour ? 'w-4 bg-white/80' : 'w-2 bg-white/40'
          }`}
          style={{
            left: '50%',
            top: '50%',
            transform: `rotate(${rotation}deg) translateX(-50%)`,
          }}
        />
      );
    }
    return markers;
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(/mountains.jpg)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px]">
          {/* Time markers */}
          {generateTimeMarkers()}

          {/* Circular text for month and day */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/80 text-xl font-light">
              {month} | {day}
            </div>
          </div>

          {/* Hour hand */}
          <motion.div
            className="absolute w-1 h-[40%] bg-white/80 rounded-full origin-bottom"
            style={{
              left: '50%',
              bottom: '50%',
              transform: `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`,
            }}
          />

          {/* Minute hand */}
          <motion.div
            className="absolute w-0.5 h-[45%] bg-white/60 rounded-full origin-bottom"
            style={{
              left: '50%',
              bottom: '50%',
              transform: `rotate(${minutes * 6 + seconds * 0.1}deg)`,
            }}
          />

          {/* Second hand */}
          <motion.div
            className="absolute w-0.5 h-[48%] bg-white/40 rounded-full origin-bottom"
            style={{
              left: '50%',
              bottom: '50%',
              transform: `rotate(${seconds * 6}deg)`,
            }}
          />

          {/* Center dot */}
          <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default TimeDrift; 