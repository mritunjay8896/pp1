import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div 
      className="bg-brand-primary text-white py-2 px-4 shadow-sm z-50 relative overflow-hidden"
      id="top-announcement-bar"
    >
      {/* Background Subtle Sparkle Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-hover via-brand-primary to-brand-hover opacity-90" />
      
      {/* Glowing animation line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
      
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 relative z-10 text-center">
        <Sparkles className="w-4 h-4 text-amber-200 animate-pulse shrink-0" />
        <p className="text-xs sm:text-sm font-semibold tracking-wide font-sans flex items-center gap-1.5 flex-wrap justify-center">
          <span className="font-extrabold font-cinzel text-amber-200">QPP</span>
          <span className="text-white/60">•</span>
          <span>The World's No.1 Patented Pull &amp; Click Technology</span>
        </p>
      </div>
    </div>
  );
}
