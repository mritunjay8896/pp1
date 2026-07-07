/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  X, 
  MessageSquare, 
  ShieldCheck
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

interface DesignItem {
  id: string;
  name: string;
  displayName: string;
  image: string;
  slug: string;
  description: string;
  sizes: string[];
  materials: string[];
  plating: string[];
  bestFor: string;
  whatsappMessage: string;
}

const TRADITIONAL_DESIGNS: DesignItem[] = [
  {
    id: 'bezel',
    name: 'Bezel Collection',
    displayName: 'Bezel',
    image: 'https://qpp-ep.com/wp-content/uploads/2022/08/RB01Y-S.png',
    slug: 'traditionalbezel',
    description: 'Pre-sterilized hypoallergenic design featuring a medical-grade 316L stainless steel bezel cup that securely locks the gemstone in place. Gives a sleek, flush, and contemporary circular silhouette.',
    sizes: ['2mm (Mini)', '3mm (Medium)', '4mm (Large)'],
    materials: ['316L Surgical Stainless Steel', 'Medical Grade Titanium'],
    plating: ['24K Gold Plated', 'Polished Natural Steel'],
    bestFor: 'Daily wear, clean modern style, and multi-piercing layering.',
    whatsappMessage: 'Hello QPP! I am interested in wholesale distribution details for the Traditional BEZEL Collection studs.'
  },
  {
    id: 'candy',
    name: 'Candy Collection',
    displayName: 'Candy',
    image: 'https://qpp-ep.com/wp-content/uploads/2022/11/RM07Y-S.jpg',
    slug: 'traditionalcandy',
    description: 'Playful and vibrant round studs with a colorful outer surround. Designed with highly saturated candy-like colors that are exceptionally popular for children and pediatric piercings.',
    sizes: ['3mm (Medium)', '4mm (Large)'],
    materials: ['316L Surgical Stainless Steel'],
    plating: ['24K Gold Plated', 'Polished Natural Steel'],
    bestFor: 'Pediatric piercings, young teens, and colorful accents.',
    whatsappMessage: 'Hello QPP! I am interested in wholesale distribution details for the Traditional CANDY Collection studs.'
  },
  {
    id: 'cz',
    name: 'Cubic Zirconia (CZ)',
    displayName: 'Cubic Zirconia',
    image: 'https://qpp-ep.com/wp-content/uploads/2022/11/MC04Y-S.jpg',
    slug: 'traditionalcz',
    description: 'Features high-refractive brilliant-cut diamond-grade Cubic Zirconia crystals. Set in a classic prong basket to let light enter from all angles, maximizing sparkle and fire.',
    sizes: ['2mm (Mini)', '3.5mm (Medium)', '4.5mm (Large)'],
    materials: ['316L Surgical Stainless Steel', 'Medical Grade Titanium'],
    plating: ['24K Gold Plated', 'Polished Natural Steel'],
    bestFor: 'Luxury styling, bridal wear, and maximum diamond-like sparkle.',
    whatsappMessage: 'Hello QPP! I am interested in wholesale distribution details for the Traditional CUBIC ZIRCONIA studs.'
  },
  {
    id: 'flower',
    name: 'Flower Collection',
    displayName: 'Flower',
    image: 'https://qpp-ep.com/wp-content/uploads/2023/02/RF01Y-N.png',
    slug: 'traditionalflower',
    description: 'An elegant multi-stone flower configuration. A central colored prong-set gemstone is bordered by six shimmering crystal petals, creating a beautiful feminine floral blossom design.',
    sizes: ['4mm (Standard)', '5mm (Statement)'],
    materials: ['316L Surgical Stainless Steel'],
    plating: ['24K Gold Plated', 'Polished Natural Steel'],
    bestFor: 'Statement earrings, delicate floral aesthetics, and gift collections.',
    whatsappMessage: 'Hello QPP! I am interested in wholesale distribution details for the Traditional FLOWER Collection studs.'
  },
  {
    id: 'pearl',
    name: 'Pearl studs',
    displayName: 'Pearl',
    image: 'https://qpp-ep.com/wp-content/uploads/2022/12/MP17Y-S.jpg',
    slug: 'traditionalpearl',
    description: 'Timeless and elegant simulated pearl studs with a rich, perfectly smooth, high-luster pearl dome. Represents clinical simplicity and sophistication.',
    sizes: ['3mm (Medium)', '4mm (Large)', '5mm (Statement)'],
    materials: ['316L Surgical Stainless Steel'],
    plating: ['24K Gold Plated', 'Polished Natural Steel'],
    bestFor: 'Formal occasions, professional environments, and classic styling.',
    whatsappMessage: 'Hello QPP! I am interested in wholesale distribution details for the Traditional PEARL studs.'
  },
  {
    id: 'shape',
    name: 'Shapes Collection',
    displayName: 'Shape',
    image: 'https://qpp-ep.com/wp-content/uploads/2022/11/R00Y-S.jpg',
    slug: 'traditionalshape',
    description: 'Pure metal geometric silhouettes without gemstones. Highly popular styles including Stars, Hearts, Triangles, and smooth Ball studs in highly polished surgical steel and rich 24K gold plating.',
    sizes: ['3mm (Medium)', '4mm (Large)'],
    materials: ['316L Surgical Stainless Steel', 'Medical Grade Titanium'],
    plating: ['24K Gold Plated', 'Polished Natural Steel'],
    bestFor: 'Minimalist wardrobes, children, and unisex piercing placements.',
    whatsappMessage: 'Hello QPP! I am interested in wholesale distribution details for the Traditional SHAPES Collection studs.'
  },
  {
    id: 'tiffany',
    name: 'Tiffany setting',
    displayName: 'Tiffany',
    image: 'https://qpp-ep.com/wp-content/uploads/2022/11/RT03Y-S.jpg',
    slug: 'traditionaltiffany',
    description: 'Premium solitaire crystal elevated inside an iconic six-prong crown basket setting. Mimics high jewelry styles to suspend the stone and accentuate its refraction and luxury sparkle.',
    sizes: ['2mm (Mini)', '3mm (Medium)', '4mm (Large)'],
    materials: ['316L Surgical Stainless Steel', 'Medical Grade Titanium'],
    plating: ['24K Gold Plated', 'Polished Natural Steel'],
    bestFor: 'Classic solitaire fans, luxury piercing centers, and elegant single-stud piercings.',
    whatsappMessage: 'Hello QPP! I am interested in wholesale distribution details for the Traditional TIFFANY Setting studs.'
  }
];

export default function Traditional() {
  const [activeDesign, setActiveDesign] = useState<DesignItem | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDesign(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="qpp-traditional-page" className="pb-32 bg-white selection:bg-brand-primary/10 select-none min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        title="Traditional Piercing System" 
        parent={{ name: 'Piercing Systems', path: '/products' }} 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 mt-6">
        
        {/* Back Link */}
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-muted hover:text-brand-primary transition-colors mb-8"
          id="back-to-systems-link"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider">Back to Piercing Systems</span>
        </Link>

        {/* Category Header */}
        <div className="text-center mt-6 mb-16 sm:mb-24">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D0D0D] tracking-tight leading-snug">
            Traditional<br />Category
          </h1>
        </div>

        {/* First Row of 4 Items */}
        <div className="flex flex-wrap justify-center gap-x-12 sm:gap-x-16 md:gap-x-20 gap-y-16 max-w-5xl mx-auto mb-16 sm:mb-24 px-4">
          {TRADITIONAL_DESIGNS.slice(0, 4).map((design) => (
            <button
              key={design.id}
              onClick={() => setActiveDesign(design)}
              className="flex flex-col items-center group cursor-pointer focus:outline-none transition-all duration-300 w-[140px] sm:w-[170px]"
            >
              <div className="w-full aspect-square flex items-center justify-center p-2">
                <img 
                  src={design.image} 
                  alt={design.name} 
                  className="w-auto h-auto max-h-[140px] sm:max-h-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold text-[#0D0D0D] mt-6 tracking-wide group-hover:text-brand-primary transition-colors text-center">
                {design.displayName}
              </span>
            </button>
          ))}
        </div>

        {/* Second Row of 3 Items */}
        <div className="flex flex-wrap justify-center gap-x-12 sm:gap-x-16 md:gap-x-20 gap-y-16 max-w-4xl mx-auto px-4">
          {TRADITIONAL_DESIGNS.slice(4).map((design) => (
            <button
              key={design.id}
              onClick={() => setActiveDesign(design)}
              className="flex flex-col items-center group cursor-pointer focus:outline-none transition-all duration-300 w-[140px] sm:w-[170px]"
            >
              <div className="w-full aspect-square flex items-center justify-center p-2">
                <img 
                  src={design.image} 
                  alt={design.name} 
                  className="w-auto h-auto max-h-[140px] sm:max-h-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold text-[#0D0D0D] mt-6 tracking-wide group-hover:text-brand-primary transition-colors text-center">
                {design.displayName}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Modern Specification Sheet Side Drawer/Modal Overlay */}
      <AnimatePresence>
        {activeDesign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDesign(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden z-10 border border-gray-100 flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              
              {/* Colored Accent Header Bar */}
              <div className="bg-[#B38E5D] h-1.5 w-full" />

              {/* Close Button */}
              <button
                onClick={() => setActiveDesign(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-brand-muted hover:text-brand-heading transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Core Info */}
              <div className="p-6 sm:p-8 space-y-6 flex-grow overflow-y-auto max-h-[80vh]">
                
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#B38E5D] bg-[#B38E5D]/10 px-3 py-1 rounded-sm inline-block mb-2">
                    Product Specification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-heading uppercase tracking-tight">
                    {activeDesign.name}
                  </h3>
                </div>

                <p className="text-xs leading-relaxed text-brand-paragraph">
                  {activeDesign.description}
                </p>

                {/* Characteristics Specification Table */}
                <div className="space-y-3.5 pt-4 border-t border-gray-100 text-xs sm:text-sm">
                  <div className="flex justify-between items-start py-1 border-b border-gray-50 pb-2">
                    <span className="font-extrabold text-brand-muted uppercase tracking-wider text-[10px]">Post Sizes</span>
                    <span className="font-bold text-brand-heading text-right max-w-[60%]">{activeDesign.sizes.join(', ')}</span>
                  </div>
                  <div className="flex justify-between items-start py-1 border-b border-gray-50 pb-2">
                    <span className="font-extrabold text-brand-muted uppercase tracking-wider text-[10px]">Base Metals</span>
                    <span className="font-bold text-brand-heading text-right max-w-[60%]">{activeDesign.materials.join(', ')}</span>
                  </div>
                  <div className="flex justify-between items-start py-1 border-b border-gray-50 pb-2">
                    <span className="font-extrabold text-brand-muted uppercase tracking-wider text-[10px]">Finishes</span>
                    <span className="font-bold text-brand-heading text-right max-w-[60%]">{activeDesign.plating.join(', ')}</span>
                  </div>
                  <div className="flex justify-between items-start py-1">
                    <span className="font-extrabold text-brand-muted uppercase tracking-wider text-[10px]">Best Suited For</span>
                    <span className="font-bold text-brand-primary text-right max-w-[60%]">{activeDesign.bestFor}</span>
                  </div>
                </div>

                {/* Hygiene & Security Credentials */}
                <div className="bg-slate-50/70 border border-gray-100/50 p-4 rounded-xl flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-0.5">
                    <h4 className="text-[11px] font-black text-brand-heading uppercase tracking-wider">Clinical Compliance Guaranteed</h4>
                    <p className="text-[10px] text-brand-paragraph leading-relaxed">
                      E.O. Gas pre-sterilized, nickel-safe medical grade 316L surgical steel backing with built-in swelling protection notch.
                    </p>
                  </div>
                </div>

                {/* WhatsApp Distribution Inquiry Action Button */}
                <a
                  href={`https://wa.me/919880058800?text=${encodeURIComponent(activeDesign.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] text-white text-xs font-black uppercase tracking-widest py-4 px-6 rounded-sm shadow-md hover:bg-[#20ba5a] active:scale-[0.98] transition-all"
                  id={`whatsapp-modal-inquire-${activeDesign.id}`}
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Request Wholesale Quote</span>
                </a>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
