'use client'
import React from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const handleCelebrate = (x, y) => {
    const shapes = ['circle', 'square', 'star'];
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { x, y },
      colors: ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff'],
      shapes: shapes,
      scalar: 1.5, // Larger particles
      startVelocity: 40,
      ticks: 300, // Confetti stays visible longer
      gravity: 0.6, // Slows down particle drop
    });
  };

  const handleScreenClick = (e) => {
    const { clientX, clientY, view } = e;
    const x = clientX / (view.innerWidth || 1); // Normalize x position
    const y = clientY / (view.innerHeight || 1); // Normalize y position
    handleCelebrate(x, y);
  };

  const handleButtonCelebrate = (e) => {
    e.stopPropagation(); // Prevent triggering the parent `onClick` handler
    const button = e.target.getBoundingClientRect();
    const x = (button.left + button.width / 2) / window.innerWidth;
    const y = (button.top + button.height / 2) / window.innerHeight;
    handleCelebrate(x, y);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col cursor-default items-center justify-center bg-gradient-to-br from-blue-600 to-purple-800 text-white text-center overflow-hidden"
      onClick={handleScreenClick}
    >
      {/* Dynamic Background Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <p className="text-[10rem] sm:text-[15rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 opacity-10">
          Happy New Year
        </p>
      </div>
      
      {/* Main Content */}
      <div className="z-10 px-4">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500 drop-shadow-lg">
          Happy New Year 2025! 🎉
        </h1>
        
        {/* Motivational Quote */}
        <p className="mt-4 max-w-2xl mx-auto text-xl font-medium text-gray-200">
          A new year is a blank book. The pen is in your hands. Write a beautiful story for yourself. Make it count!
        </p>
        
        {/* Celebrate Button */}
        <button
          onClick={handleButtonCelebrate}
          className="mt-8 px-12 py-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold text-lg sm:text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 hover:animate-pulse transition duration-300"
        >
          Click Anywhere to Celebrate 🎊
        </button>
      </div>
    </div>
  );
}
