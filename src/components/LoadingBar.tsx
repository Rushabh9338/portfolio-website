
import React from 'react';

interface LoadingBarProps {
  progress: number;
}

const LoadingBar = ({ progress }: LoadingBarProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-transparent to-white/20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingBar;
