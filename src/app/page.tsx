'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [seconds, setSeconds] = useState(0);
  const [running, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setSeconds(0);
    setIsRunning(false);
  }

  // 🕒 Konversi detik ke jam, menit, detik
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Format biar ada 0 di depan (misal 01:09:05)
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-blue-600 font-semibold text-3xl">Timer App</h1>
      <h2 className="text-amber-600 font-bold text-5xl">{formattedTime}</h2>

      <div className="flex gap-4">
        <button onClick={handleStart} className="px-4 py-2 bg-green-500 text-white rounded">
          Start
        </button>
        <button onClick={handleStop} className="px-4 py-2 bg-red-500 text-white rounded">
          Stop
        </button>
        <button onClick={handleReset} className="px-4 py-2 bg-gray-300 text-black rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
