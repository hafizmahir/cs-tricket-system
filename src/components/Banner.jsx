import React from 'react';
import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      
      {/* Card 1: In-Progress */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#9333ea] via-[#8b5cf6] to-[#7c3aed] p-6 sm:p-8 text-white shadow-md min-h-[170px] flex flex-col justify-between items-center text-center group">
        
        {/* Crisp vector wave grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* User uploaded vector pattern styled with white line inversion */}
          <img
            src={vector1}
            alt=""
            className="absolute -top-10 -right-10 w-[120%] h-[120%] object-cover filter invert contrast-200 opacity-25 mix-blend-screen pointer-events-none"
          />
          
          {/* Exact geometric wave grid mesh matching reference design */}
          <svg
            className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none"
            viewBox="0 0 500 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="white" strokeWidth="0.8" opacity="0.8">
              <path d="M 250,-50 Q 380,80 550,120" />
              <path d="M 220,-50 Q 360,90 550,150" />
              <path d="M 190,-50 Q 340,100 550,180" />
              <path d="M 160,-50 Q 320,110 550,210" />
              <path d="M 130,-50 Q 300,120 550,240" />
              <path d="M 100,-50 Q 280,130 550,270" />
              <path d="M 70,-50 Q 260,140 550,300" />
              
              {/* Perspective grid lines */}
              <path d="M 300,-50 L 550,200" strokeDasharray="3 3" />
              <path d="M 200,-50 L 550,300" strokeDasharray="3 3" />
            </g>
          </svg>
        </div>

        {/* Card Title */}
        <h2 className="relative z-10 text-lg sm:text-xl font-medium text-white/90 tracking-wide pt-1">
          In-Progress
        </h2>

        {/* Big Counter */}
        <div className="relative z-10 text-4xl sm:text-5xl font-extrabold tracking-tight pb-1">
          {inProgressCount}
        </div>
      </div>

      {/* Card 2: Resolved */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857] p-6 sm:p-8 text-white shadow-md min-h-[170px] flex flex-col justify-between items-center text-center group">
        
        {/* Crisp vector wave grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* User uploaded vector pattern styled with white line inversion */}
          <img
            src={vector2}
            alt=""
            className="absolute -top-10 -right-10 w-[120%] h-[120%] object-cover filter invert contrast-200 opacity-25 mix-blend-screen pointer-events-none"
          />
          
          {/* Exact geometric wave grid mesh matching reference design */}
          <svg
            className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none"
            viewBox="0 0 500 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="white" strokeWidth="0.8" opacity="0.8">
              <path d="M 200,-30 C 350,50 420,180 520,320" />
              <path d="M 170,-30 C 320,60 400,190 520,340" />
              <path d="M 140,-30 C 290,70 380,200 520,360" />
              <path d="M 110,-30 C 260,80 360,210 520,380" />
              <path d="M 80,-30 C 230,90 340,220 520,400" />
              
              {/* Concentric grid lines */}
              <circle cx="450" cy="50" r="120" strokeDasharray="3 3" />
              <circle cx="450" cy="50" r="180" strokeDasharray="3 3" />
            </g>
          </svg>
        </div>

        {/* Card Title */}
        <h2 className="relative z-10 text-lg sm:text-xl font-medium text-white/90 tracking-wide pt-1">
          Resolved
        </h2>

        {/* Big Counter */}
        <div className="relative z-10 text-4xl sm:text-5xl font-extrabold tracking-tight pb-1">
          {resolvedCount}
        </div>
      </div>

    </div>
  );
}
