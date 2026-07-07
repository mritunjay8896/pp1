/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductCard from '../components/ProductCard';
import ContactCTA from '../components/ContactCTA';
import VideoSection from '../components/VideoSection';
import { getProducts, isFirebaseConfigured } from '../db/firebase';
import { Product } from '../types';
import { CATALOG_PRODUCTS } from '../data/catalog_products';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const bliefStuds = CATALOG_PRODUCTS.filter(p =>
    p.designCategory?.toLowerCase().includes('blief')
  ).slice(0, 4);

  useEffect(() => {
    async function loadFeatured() {
      try {
        const allProducts = await getProducts();
        const featured = allProducts.filter(p => p.featured);
        setFeaturedProducts(featured);
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setLoading(false);
      }
    }
    loadFeatured();
  }, []);

  return (
    <div id="qpp-home-page" className="space-y-24 pb-24">
      
      {/* 1. Hero Carousel Section */}
      <Hero />

      {/* 2. Brand Positioning Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16" id="brand-positioning-banner">
        <div className="bg-[#FAF4F2] border border-[#F5EBE6] p-10 sm:p-14 md:p-16 rounded-[40px] grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex items-center justify-center text-[#FB8964] flex-shrink-0">
              <svg className="w-32 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Large star */}
                <path d="M 38 10 Q 38 38 10 38 Q 38 38 38 66 Q 38 38 66 38 Q 38 38 38 10 Z" fill="currentColor" />
                {/* Small star */}
                <path d="M 70 44 Q 70 62 52 62 Q 70 62 70 80 Q 70 62 88 62 Q 70 62 70 44 Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h4 className="font-extrabold text-brand-heading text-lg sm:text-xl mb-3 tracking-tight">Safe & Hygienic</h4>
              <p className="text-xs sm:text-sm text-brand-paragraph leading-relaxed max-w-sm">
                Safety is our paramount. All products are carefully sterilized and individually packed to prevent contamination by potential impurities before piercing
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex items-center justify-center text-[#FB8964] flex-shrink-0">
              <svg className="w-32 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <mask id="ni-slash-mask">
                    <rect x="0" y="0" width="100" height="100" fill="white" />
                    <line x1="10" y1="78" x2="90" y2="38" stroke="black" strokeWidth="9" strokeLinecap="round" />
                  </mask>
                </defs>
                <g mask="url(#ni-slash-mask)">
                  <path d="M 22 28 V 74 H 33 V 47 L 53 74 H 64 V 28 H 53 V 55 L 33 28 H 22 Z" fill="currentColor" />
                  <rect x="71" y="44" width="11" height="30" rx="1.5" fill="currentColor" />
                  <circle cx="76.5" cy="30" r="5.5" fill="currentColor" />
                </g>
                <line x1="10" y1="78" x2="90" y2="38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h4 className="font-extrabold text-brand-heading text-lg sm:text-xl mb-3 tracking-tight">Nickel-Free</h4>
              <p className="text-xs sm:text-sm text-brand-paragraph leading-relaxed max-w-sm">
                Our medical-grade earrings and piercing kits are hypoallergenic and 100% nickel-free, providing maximum peace of mind for people with known nickel allergies. Say goodbye to piercing pain!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex items-center justify-center text-[#FB8964] flex-shrink-0">
              <svg className="w-32 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left Earring */}
                <g transform="translate(42, 52)">
                  <path d="M 0 -22 C 0 -22, -13 -10, -13 2 C -13 10, -7 16, 0 16 C 7 16, 13 10, 13 2 C 13 -10, 0 -22, 0 -22 Z M 0 -11 C 0 -11, -8 -5, -8 2 C -8 7, -4 11, 0 11 C 4 11, 8 7, 8 2 C 8 -5, 0 -11, 0 -11 Z" fill="currentColor" fillRule="evenodd" />
                  <line x1="0" y1="-38" x2="0" y2="-18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="0" cy="-38" r="4.5" fill="currentColor" />
                </g>
                {/* Right Earring */}
                <g transform="translate(68, 58) rotate(16) scale(0.78)">
                  <path d="M 0 -22 C 0 -22, -13 -10, -13 2 C -13 10, -7 16, 0 16 C 7 16, 13 10, 13 2 C 13 -10, 0 -22, 0 -22 Z M 0 -11 C 0 -11, -8 -5, -8 2 C -8 7, -4 11, 0 11 C 4 11, 8 7, 8 2 C 8 -5, 0 -11, 0 -11 Z" fill="currentColor" fillRule="evenodd" />
                  <line x1="0" y1="-32" x2="0" y2="-18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </g>
              </svg>
            </div>
            <div>
              <h4 className="font-extrabold text-brand-heading text-lg sm:text-xl mb-3 tracking-tight">316 Stainless Steel</h4>
              <p className="text-xs sm:text-sm text-brand-paragraph leading-relaxed max-w-sm">
                We offer a wide range of hypoallergenic stud earrings made from surgical 316 stainless steel and sterilized by EO gas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2.3. Video Showcase Section */}
      <section className="py-8 sm:py-12 bg-white">
        <VideoSection />
      </section>

      {/* 2.5. Disney F.A.M.A. Certification Showcase Section */}
      <section id="disney-fama-compliance" className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-sm overflow-hidden relative">
          {/* Subtle background decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left side: Content description */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-4 py-2 rounded-full mb-4 inline-block">
                  International Authorization
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-heading tracking-tight leading-tight">
                  Walt Disney F.A.M.A. <br className="hidden sm:inline" />
                  Compliance & Global Safety Standards
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-brand-paragraph leading-relaxed">
                Our manufacturing facilities hold the prestigious <strong className="text-brand-heading">Facility and Merchandise Authorization (FAMA)</strong> from The Walt Disney Company. This certification guarantees that every QPP product is produced under the most stringent international standards of labor safety, environmental management, and ethical sourcing.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-full bg-brand-heading hover:bg-brand-heading/90 text-white font-bold text-xs transition-all duration-300 shadow-md inline-flex items-center gap-2"
                >
                  <span>Learn About Our Integrity</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-brand-heading font-bold text-xs transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>View Certifications</span>
                </Link>
              </div>
            </div>

            {/* Right side: Certificate / Image showcase */}
            <div className="lg:col-span-6 flex items-center justify-center w-full">
              <img 
                src="https://qpp-ep.com/wp-content/uploads/2024/07/Copy-of-Website-Disney-Fama.png" 
                alt="Walt Disney F.A.M.A. Certification Logo"
                className="w-full h-auto max-w-[560px] md:max-w-full lg:max-h-[550px] object-contain contrast-[1.01] saturate-[1.01]"
                style={{ imageRendering: 'auto' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dynamic Featured Products list */}
      <section id="featured-products-section" className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full mb-4 inline-block">
              Premium Hypoallergenic Studs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-heading tracking-tight">
              Blief Sterile Studs Collection
            </h2>
          </div>
          <Link
            to="/products/catalog?category=blief"
            className="inline-flex items-center gap-2 font-bold text-sm text-brand-primary hover:text-brand-hover"
          >
            <span>View Full Blief Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {bliefStuds.map((stud) => (
            <Link
              key={stud.name}
              to="/products/catalog?category=blief"
              className="group flex flex-col h-full bg-white border border-slate-100/80 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.06)] hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-square bg-slate-50/50 p-6 sm:p-8 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-50 transition-colors duration-300">
                <img
                  src={stud.image}
                  alt={stud.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info Container */}
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-brand-heading text-sm sm:text-base mb-1 tracking-tight group-hover:text-brand-primary transition-colors duration-200 line-clamp-2">
                    {stud.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-brand-paragraph">
                    {stud.subCategory} • Hypoallergenic
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <ContactCTA />

    </div>
  );
}
