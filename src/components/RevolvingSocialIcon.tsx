
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RevolvingSocialIconProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

const RevolvingSocialIcon = ({ icon: Icon, href, label }: RevolvingSocialIconProps) => {
  return (
    <a 
      href={href} 
      className="relative group w-12 h-12 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Main Icon */}
      <Icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300 z-10 relative" />
      
      {/* Revolving Circle with Text */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 border border-cyan-400/50 rounded-full animate-spin">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-cyan-400 font-medium whitespace-nowrap animate-[spin_3s_linear_reverse_infinite] select-none">
              {label}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RevolvingSocialIcon;
