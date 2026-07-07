/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface ProductSvgProps {
  type: string;
  className?: string;
}

export default function ProductSvg({ type, className = "w-full h-full" }: ProductSvgProps) {
  const [imageError, setImageError] = useState(false);

  // If the type is an external URL, render the real image.
  // Set up an onError handler to dynamically fallback to clean vector designs if offline or blockages occur!
  if (type && (type.startsWith('http://') || type.startsWith('https://')) && !imageError) {
    return (
      <img 
        src={type} 
        className={`${className} object-contain`} 
        alt="QPP Premium Export Packaging Product" 
        referrerPolicy="no-referrer"
        onError={() => {
          console.warn('Real image URL failed to load. Falling back to high-fidelity vector illustration:', type);
          setImageError(true);
        }}
      />
    );
  }

  // Deduce the vector type if we are falling back from an image error
  let vectorType = type;
  if (imageError || (type && type.startsWith('http'))) {
    const t = type.toLowerCase();
    if (t.includes('rigid')) vectorType = 'rigid_box';
    else if (t.includes('cardboard')) vectorType = 'cardboard_box';
    else if (t.includes('bag')) vectorType = 'paper_bag';
    else if (t.includes('hanger')) vectorType = 'paper_hanger';
    else if (t.includes('hangtag') || t.includes('label')) vectorType = 'hangtag';
    else vectorType = 'generic_packaging';
  }

  switch (vectorType) {
    case 'rigid_box':
    case 'rigid_box_main':
    case 'rigid_box_thumb':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Stage */}
          <rect width="400" height="300" rx="20" fill="#FAF4F2" />
          <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400" stroke="#F1E3DF" strokeWidth="0.5" />
          
          {/* Rigid Box Lid 3D Perspective */}
          <g transform="translate(10, 10)">
            {/* Box base shadow */}
            <ellipse cx="200" cy="210" rx="90" ry="22" fill="#E5D3CD" opacity="0.6" />
            
            {/* Base Box (Slightly warm dark tone) */}
            <path d="M120 160 L200 190 L280 160 L280 200 L200 230 L120 200 Z" fill="#1C2331" />
            <path d="M120 160 L200 190 L200 230 L120 200 Z" fill="#151A25" /> {/* Left base face */}
            <path d="M200 190 L280 160 L280 200 L200 230 Z" fill="#252F41" /> {/* Right base face */}
            
            {/* Inside lining of base */}
            <path d="M120 160 L200 190 L280 160 L200 140 Z" fill="#3D4D68" />
            
            {/* Golden Silk Lining Cushion inside */}
            <path d="M130 162 L200 185 L270 162 L200 145 Z" fill="#FBBF24" opacity="0.9" />
            
            {/* Lid (Floating slightly above base - open pose) */}
            <g transform="translate(0, -45)">
              <path d="M115 140 L200 172 L285 140 L285 110 L200 80 L115 110 Z" fill="#FB8964" />
              <path d="M115 110 L200 142 L200 172 L115 140 Z" fill="#E76A42" /> {/* Left face */}
              <path d="M200 142 L285 110 L285 140 L200 172 Z" fill="#FFA585" /> {/* Right face */}
              
              {/* Premium Foil Logo Stamp on Lid Top */}
              <path d="M200 95 L215 102 L200 109 L185 102 Z" fill="#FFF" opacity="0.8" />
              <circle cx="200" cy="102" r="5" fill="#FBBF24" />
              <text x="200" y="120" fill="#FFFFFF" fontSize="9" fontWeight="extrabold" textAnchor="middle" letterSpacing="2">QPP LUXURY</text>
            </g>
            
            {/* Delicate ribbon falling over the edge */}
            <path d="M200 127 Q220 145 200 175 Q185 200 190 220" stroke="#FBBF24" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case 'cardboard_box':
    case 'cardboard_box_main':
    case 'cardboard_box_thumb':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="20" fill="#FAF4F2" />
          <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400" stroke="#F1E3DF" strokeWidth="0.5" />
          
          <g transform="translate(10, 15)">
            {/* Shadow */}
            <ellipse cx="200" cy="210" rx="95" ry="18" fill="#E5D3CD" opacity="0.5" />
            
            {/* Cardboard Corrugated Mailer Box (Eco Kraft styling) */}
            {/* Left face */}
            <path d="M110 130 L190 165 L190 205 L110 170 Z" fill="#B38A65" />
            {/* Right face */}
            <path d="M190 165 L290 125 L290 165 L190 205 Z" fill="#936F4C" />
            {/* Top face */}
            <path d="M110 130 L190 165 L290 125 L210 95 Z" fill="#D3AA83" />
            
            {/* Flaps slightly popped up at back */}
            <path d="M210 95 L290 125 L320 100 L240 70 Z" fill="#C49B74" />
            <path d="M110 130 L210 95 L180 70 L80 105 Z" fill="#C49B74" />
            
            {/* Double print pattern line on box */}
            <path d="M130 145 L170 162" stroke="#4F3622" strokeWidth="3" opacity="0.6" />
            <path d="M130 152 L170 169" stroke="#4F3622" strokeWidth="3" opacity="0.6" />
            
            {/* QPP Brand Logo stamp */}
            <circle cx="230" cy="155" r="14" fill="#FB8964" />
            <text x="230" y="160" fill="#FFFFFF" fontSize="13" fontWeight="900" textAnchor="middle">Q</text>
            <text x="230" y="180" fill="#4F3622" fontSize="7" fontWeight="bold" textAnchor="middle">ECO BOX</text>
          </g>
        </svg>
      );

    case 'paper_bag':
    case 'paper_bag_main':
    case 'paper_bag_thumb':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="20" fill="#FAF4F2" />
          <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400" stroke="#F1E3DF" strokeWidth="0.5" />
          
          <g transform="translate(10, -5)">
            {/* Shadow */}
            <ellipse cx="200" cy="245" rx="75" ry="12" fill="#E5D3CD" opacity="0.5" />
            
            {/* Luxury Paper Bag Body */}
            {/* Front Face (Warm coral-peach) */}
            <path d="M140 100 H260 L245 235 H155 Z" fill="#FB8964" />
            {/* Right Side Gusset (Slightly darker shade) */}
            <path d="M260 100 L275 110 L260 240 L245 235 Z" fill="#E76A42" />
            
            {/* Turn-top Rim fold highlights */}
            <path d="M140 100 L260 100 L275 110 L155 110 Z" fill="#FFA585" opacity="0.3" />
            
            {/* Handles - Soft ropes looping upward */}
            <path d="M175 115 C175 60, 225 60, 225 115" stroke="#1C2331" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <path d="M185 115 C185 70, 215 70, 215 115" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            
            {/* Metallic handle grommet rings */}
            <circle cx="180" cy="120" r="4.5" fill="#1C2331" />
            <circle cx="180" cy="120" r="2.5" fill="#FBBF24" />
            <circle cx="220" cy="120" r="4.5" fill="#1C2331" />
            <circle cx="220" cy="120" r="2.5" fill="#FBBF24" />
            
            {/* Elegant "Q" Brand Stamp and details */}
            <circle cx="200" cy="165" r="18" fill="#1C2331" />
            <text x="200" y="172" fill="#FFFFFF" fontSize="20" fontWeight="900" textAnchor="middle">Q</text>
            <text x="200" y="200" fill="#1C2331" fontSize="8" fontWeight="extrabold" textAnchor="middle" letterSpacing="3">BOUTIQUE</text>
          </g>
        </svg>
      );

    case 'paper_hanger':
    case 'paper_hanger_main':
    case 'paper_hanger_thumb':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="20" fill="#FAF4F2" />
          <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400" stroke="#F1E3DF" strokeWidth="0.5" />
          
          <g transform="translate(10, 25)">
            {/* Soft Hanger shadow */}
            <path d="M90 170 Q200 120 310 170" stroke="#E5D3CD" strokeWidth="15" strokeLinecap="round" opacity="0.4" fill="none" />
            
            {/* Sustainable Pressed Cardboard Hanger Body */}
            {/* Curved support bar */}
            <path d="M90 160 Q200 110 310 160 Q200 130 90 160 Z" fill="#B38A65" stroke="#936F4C" strokeWidth="1.5" />
            
            {/* Hanging Hook (Cardboard solid hook) */}
            <path d="M200 115 C200 115, 180 85, 180 65 C180 45, 215 45, 215 65 C215 78, 204 88, 200 95 L200 115 Z" fill="#936F4C" stroke="#755535" strokeWidth="1" />
            
            {/* Shoulder notches to secure garment strap */}
            <path d="M115 146 Q122 153 125 142" stroke="#755535" strokeWidth="2" fill="none" />
            <path d="M285 146 Q278 153 275 142" stroke="#755535" strokeWidth="2" fill="none" />
            
            {/* Green recycling leaf watermark printed on hook */}
            <path d="M200 140 C208 140, 212 148, 200 156 C188 148, 192 140, 200 140 Z" fill="#10B981" opacity="0.7" />
            <line x1="200" y1="142" x2="200" y2="155" stroke="#FFFFFF" strokeWidth="1" />
            
            {/* Typography stamp */}
            <text x="200" y="175" fill="#4F3622" fontSize="9" fontWeight="extrabold" textAnchor="middle" letterSpacing="1">100% SUSTAINABLE GARMENT HANGER</text>
            <text x="200" y="188" fill="#10B981" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">BIODEGRADABLE • RECYCLABLE</text>
          </g>
        </svg>
      );

    case 'hangtag':
    case 'hangtag_main':
    case 'hangtag_thumb':
    case 'hangtags-labels':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="20" fill="#FAF4F2" />
          <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400" stroke="#F1E3DF" strokeWidth="0.5" />
          
          <g transform="translate(10, 5)">
            {/* Layered tags shadow */}
            <rect x="180" y="90" width="85" height="150" rx="8" transform="rotate(15, 222, 165)" fill="#E5D3CD" opacity="0.4" />
            <rect x="140" y="80" width="85" height="150" rx="8" transform="rotate(-5, 182, 155)" fill="#E5D3CD" opacity="0.4" />
            
            {/* Layer 1: Back Tag (Eco Kraft cardboard, tilted 15 degrees right) */}
            <g transform="rotate(12, 195, 140)">
              <rect x="160" y="60" width="80" height="145" rx="6" fill="#B38A65" stroke="#936F4C" strokeWidth="1" />
              <line x1="170" y1="180" x2="230" y2="180" stroke="#936F4C" strokeWidth="1" strokeDasharray="3 3" />
              <text x="200" y="192" fill="#4F3622" fontSize="7" fontWeight="bold" textAnchor="middle">RAW SEWN EDGE</text>
            </g>
            
            {/* Layer 2: Front Tag (Pure white linen paper, tilted -5 degrees left) */}
            <g transform="rotate(-6, 195, 140)">
              <rect x="155" y="55" width="80" height="145" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
              {/* Gold foil border */}
              <rect x="160" y="60" width="70" height="135" rx="3" stroke="#FBBF24" strokeWidth="1" opacity="0.8" />
              
              {/* Punched brass eyelet hole */}
              <circle cx="195" cy="72" r="6" fill="#E5E7EB" />
              <circle cx="195" cy="72" r="3.5" fill="#FAF4F2" />
              <circle cx="195" cy="72" r="5" stroke="#FBBF24" strokeWidth="1.5" />
              
              {/* Printed brand details */}
              <rect x="180" y="90" width="30" height="30" rx="6" fill="#1C2331" />
              <text x="195" y="112" fill="#FFFFFF" fontSize="18" fontWeight="900" textAnchor="middle">Q</text>
              <text x="195" y="135" fill="#1C2331" fontSize="8" fontWeight="black" textAnchor="middle" letterSpacing="2">PREMIUM</text>
              
              {/* Faux barcodes / details */}
              <path d="M175 155 H215 M175 160 H215 M175 165 H200" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="square" />
              <text x="195" y="182" fill="#94A3B8" fontSize="6" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">STYLE: CL-1092</text>
            </g>
            
            {/* Fine Waxed Twine String feeding through both tags */}
            <path d="M190 -10 Q215 25 195 65" stroke="#755535" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Little safety pin clasp */}
            <ellipse cx="190" cy="-10" rx="3" ry="5" stroke="#FBBF24" strokeWidth="1" fill="none" />
          </g>
        </svg>
      );

    case 'disney_certified':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400" stroke="#F1F5F9" strokeWidth="1" />
          <path d="M50 0 V300 M100 0 V300 M150 0 V300 M200 0 V300 M250 0 V300 M300 0 V300 M350 0 V300" stroke="#F1F5F9" strokeWidth="1" />
          
          <rect x="15" y="15" width="370" height="30" rx="6" fill="#F59E0B" fillOpacity="0.08" />
          <text x="200" y="34" fill="#D97706" fontSize="10" fontWeight="bold" letterSpacing="2" textAnchor="middle">INTERNATIONAL LABOR & SAFETY STANDARDS</text>

          <g id="mickey_mouse_character" transform="translate(15, 0)">
            <ellipse cx="100" cy="224" rx="28" ry="6" fill="#E2E8F0" />
            <ellipse cx="86" cy="220" rx="15" ry="9" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
            <ellipse cx="114" cy="220" rx="15" ry="9" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
            <rect x="83" y="190" width="6" height="26" rx="2" fill="#1E293B" />
            <rect x="111" y="190" width="6" height="26" rx="2" fill="#1E293B" />
            <path d="M78 165 C78 154 122 154 122 165 L124 192 C124 196 76 196 76 192 Z" fill="#EF4444" stroke="#1E293B" strokeWidth="2" />
            <ellipse cx="90" cy="180" rx="3" ry="5" fill="#FFFFFF" />
            <ellipse cx="110" cy="180" rx="3" ry="5" fill="#FFFFFF" />
            <path d="M84 135 L116 135 L118 160 L82 160 Z" fill="#1E293B" />
            <path d="M84 140 Q62 135 52 148" stroke="#1E293B" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <path d="M116 140 Q138 135 148 148" stroke="#1E293B" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <ellipse cx="48" cy="150" rx="9" ry="9" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
            <path d="M48 141 V159 M44 144 L40 154 M52 144 L56 154" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
            <ellipse cx="152" cy="150" rx="9" ry="9" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
            <path d="M152 141 V159 M148 144 L144 154 M156 144 L160 154" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="82" cy="100" r="15" fill="#1E293B" />
            <circle cx="118" cy="100" r="15" fill="#1E293B" />
            <circle cx="100" cy="120" r="22" fill="#1E293B" />
            <path d="M84 122 C84 112 116 112 116 122 C116 134 84 134 84 122 Z" fill="#FED7AA" />
            <circle cx="91" cy="124" r="9" fill="#FED7AA" />
            <circle cx="109" cy="124" r="9" fill="#FED7AA" />
            <ellipse cx="100" cy="129" rx="12" ry="9" fill="#FED7AA" />
            <ellipse cx="95" cy="117" rx="4" ry="8" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1" />
            <ellipse cx="105" cy="117" rx="4" ry="8" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1" />
            <ellipse cx="95" cy="118" rx="2" ry="5" fill="#1E293B" />
            <ellipse cx="105" cy="118" rx="2" ry="5" fill="#1E293B" />
            <ellipse cx="100" cy="126" rx="4" ry="2.5" fill="#1E293B" />
            <path d="M91 129 Q100 137 109 129" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>

          <g id="certification_text_group">
            <text x="270" y="125" fill="#1E293B" fontSize="28" fontWeight="bold" fontFamily="'Georgia', 'Times New Roman', serif" fontStyle="italic" letterSpacing="0.5" textAnchor="middle">Walt Disney</text>
            <text x="270" y="168" fill="#1E293B" fontSize="26" fontWeight="900" fontFamily="'Inter', system-ui, sans-serif" letterSpacing="6" textAnchor="middle">F.A.M.A.</text>
            <text x="270" y="200" fill="#4B5563" fontSize="13" fontWeight="bold" fontFamily="'Inter', system-ui, sans-serif" letterSpacing="8" textAnchor="middle">CERTIFIED</text>
            <rect x="200" y="222" width="140" height="18" rx="4" fill="#F3F4F6" />
            <text x="270" y="234" fill="#6B7280" fontSize="8" fontWeight="extrabold" fontFamily="monospace" letterSpacing="0.5" textAnchor="middle">REGISTRY NO: FAC-083921</text>
          </g>

          <g transform="translate(330, 230)">
            <circle cx="20" cy="20" r="16" fill="#F59E0B" />
            <polygon points="20,10 23,17 30,17 25,22 27,29 20,25 13,29 15,22 10,17 17,17" fill="#FFFFFF" />
          </g>
        </svg>
      );
      
    default:
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="20" fill="#FAF4F2" />
          <circle cx="200" cy="150" r="40" fill="#FB8964" fillOpacity="0.2" />
          <text x="200" y="155" fill="#16213E" fontSize="14" fontWeight="bold" textAnchor="middle">QPP Packaging</text>
        </svg>
      );
  }
}
