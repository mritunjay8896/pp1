/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductBgImageProps {
  src: string;
  alt: string;
  className?: string;
}

function ProductBgImage({ src, alt, className = '' }: ProductBgImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
      className={`aspect-square w-full h-full max-w-[70%] max-h-[85%] transform transition-all duration-500 ${className}`}
    />
  );
}

export default function Products() {
  const navigate = useNavigate();

  return (
    <div id="qpp-products-page" className="pb-24 bg-white selection:bg-brand-primary/10 select-none">
      
      {/* 1. Brand 3-Panel Split Grid Banner (Matches user uploaded design precisely) */}
      <section className="w-full bg-white border-b border-gray-200 py-12 md:py-16 select-none">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3">
          
          {/* Panel 1: Traditional Piercing Gun */}
          <div 
            onClick={() => {
              navigate('/products/traditional');
            }}
            className="flex flex-col items-center justify-between p-8 md:p-12 h-[380px] sm:h-[420px] md:h-[480px] group cursor-pointer hover:bg-slate-50/40 transition-all duration-300 md:border-r border-gray-150 last:border-r-0"
          >
            {/* Image container */}
            <div className="flex-grow flex items-center justify-center w-full max-h-[75%]">
              <ProductBgImage 
                src="https://qpp-ep.com/wp-content/uploads/2023/05/D22-1536x1536.png" 
                alt="Traditional Piercing Instrument" 
                className="group-hover:scale-105"
              />
            </div>
            {/* Label at bottom */}
            <div className="mt-auto pt-6 text-center">
              <span className="text-sm sm:text-base md:text-lg font-black tracking-[0.25em] text-[#CCCCCC] group-hover:text-brand-heading transition-all duration-300 uppercase select-none">
                Traditional
              </span>
            </div>
          </div>

          {/* Panel 2: Click Manual Pressure */}
          <div 
            onClick={() => {
              navigate('/products/catalog?category=click');
            }}
            className="flex flex-col items-center justify-between p-8 md:p-12 h-[380px] sm:h-[420px] md:h-[480px] group cursor-pointer hover:bg-slate-50/40 transition-all duration-300 md:border-r border-gray-150 last:border-r-0"
          >
            {/* Image container */}
            <div className="flex-grow flex items-center justify-center w-full max-h-[75%]">
              <ProductBgImage 
                src="https://qpp-ep.com/wp-content/uploads/2023/05/Piercing-Gun-Click-1536x1536.png" 
                alt="Click Disposable Piercing System" 
                className="group-hover:scale-105"
              />
            </div>
            {/* Label at bottom */}
            <div className="mt-auto pt-6 text-center">
              <span className="text-sm sm:text-base md:text-lg font-black tracking-[0.25em] text-[#CCCCCC] group-hover:text-brand-heading transition-all duration-300 uppercase select-none">
                Click
              </span>
            </div>
          </div>

          {/* Panel 3: Blief Sterile Stud Earrings */}
          <div 
            onClick={() => {
              navigate('/products/catalog?category=blief');
            }}
            className="flex flex-col items-center justify-between p-8 md:p-12 h-[380px] sm:h-[420px] md:h-[480px] group cursor-pointer hover:bg-slate-50/40 transition-all duration-300"
          >
            {/* Image container */}
            <div className="flex-grow flex items-center justify-center w-full max-h-[75%]">
              <ProductBgImage 
                src="https://qpp-ep.com/wp-content/uploads/2023/11/Untitled-122-1-768x768.jpg" 
                alt="Blief Sterilized Studs" 
                className="group-hover:scale-105"
              />
            </div>
            {/* Label at bottom */}
            <div className="mt-auto pt-6 text-center">
              <span className="text-sm sm:text-base md:text-lg font-black tracking-[0.25em] text-[#CCCCCC] group-hover:text-brand-heading transition-all duration-300 uppercase select-none">
                Blief
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
