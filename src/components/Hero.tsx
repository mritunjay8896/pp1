/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard } from 'swiper/modules';
import { ShieldCheck, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import ProductSvg from './ProductSvg';

import slide1Img from '../assets/images/mother_baby_gentle_1783102929882.jpg';
import slide2Img from '../assets/images/happy_friends_piercing_1783102984797.jpg';
import slide3Img from '../assets/images/community_care_collage_1783102999209.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Hero() {
  const slides = [
    {
      badge: "Patented Squeeze Innovation",
      title: "The Silent, Precise Ear Piercing System",
      description: "The World's No.1 Patented Pull & Click Technology. Completely eliminates noisy spring triggers, preventing pediatric panic and delivering unmatched alignment precision.",
      ctaPrimary: "Explore Instrument",
      ctaPrimaryUrl: "/products/qpp-classical-instrument",
      ctaSecondary: "Contact Us",
      ctaSecondaryUrl: "/contact",
      imageUrl: slide1Img,
      imageType: "instruments_main"
    },
    {
      badge: "Double-Blister Sterilization",
      title: "Zero-Touch Sealed Sterile Capsules",
      description: "Our certified studs and safe-lock butterfly clasps are sealed together in individual capsules. Load directly into the instrument without touching any sterile material.",
      ctaPrimary: "View Stud Collection",
      ctaPrimaryUrl: "/products",
      ctaSecondary: "Contact Us",
      ctaSecondaryUrl: "/contact",
      imageUrl: slide2Img,
      imageType: "studs_steel_main"
    },
    {
      badge: "Motherly Care Formulation",
      title: "Gentle Cleanse & Rapid Soothing Recovery",
      description: "Cleanse and soothe newly pierced skin with pH-balanced, dermatologically certified post-piercing lotion and Touch-Free fine mist spray solutions.",
      ctaPrimary: "Explore Aftercare",
      ctaPrimaryUrl: "/products/qpp-ear-care-lotion",
      ctaSecondary: "Contact Us",
      ctaSecondaryUrl: "/contact",
      imageUrl: slide3Img,
      imageType: "aftercare_lotion_main"
    },
    {
      badge: "Walt Disney F.A.M.A. Certified",
      title: "Certified Global Compliance & Safety",
      description: "QPP - Precise Piercing products are manufactured in facilities certified under the Walt Disney Facility and Merchandise Authorization (FAMA). We strictly uphold premium international labor, safety, and ethical standards.",
      ctaPrimary: "Become a Partner",
      ctaPrimaryUrl: "/contact",
      ctaSecondary: "Contact Us",
      ctaSecondaryUrl: "/contact",
      imageUrl: "https://qpp-ep.com/wp-content/uploads/2024/07/Copy-of-Website-Disney-Fama.png",
      imageType: "disney_certified"
    }
  ];

  return (
    <section 
      id="qpp-hero-slider" 
      className="bg-white border-b border-gray-50 min-h-[480px] lg:min-h-[520px] flex items-center relative overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        keyboard={{
          enabled: true
        }}
        className="w-full h-full min-h-[480px] lg:min-h-[520px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full flex items-center justify-center">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 py-3 sm:py-4 lg:py-6 h-full flex items-center w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
                
                {/* Left Column (45%) */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6">
                  
                  {/* Badge */}
                  <span className="text-[#FB8964] font-bold uppercase tracking-[0.3em] text-xs block">
                    {slide.badge}
                  </span>

                  {/* Heading */}
                  <h2 className="text-[#16213E] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-extrabold tracking-tight mb-2">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg leading-relaxed text-[#4B5563] mb-6 max-w-lg">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                    <Link
                      to={slide.ctaPrimaryUrl}
                      className="inline-flex items-center justify-center h-12 sm:h-[52px] px-5 sm:px-8 bg-[#FB8964] text-white rounded-full font-bold text-xs sm:text-[13px] uppercase tracking-widest hover:bg-[#F57950] transition-colors shadow-sm text-center w-full sm:w-auto"
                    >
                      <span className="truncate">{slide.ctaPrimary}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 flex-shrink-0" />
                    </Link>
                    <Link
                      to={slide.ctaSecondaryUrl}
                      className="inline-flex items-center justify-center h-12 sm:h-[52px] px-5 sm:px-8 border border-[#E5E7EB] text-[#16213E] rounded-full font-bold text-xs sm:text-[13px] uppercase tracking-widest hover:bg-[#F8FAFC] transition-colors text-center w-full sm:w-auto"
                    >
                      <span className="truncate">{slide.ctaSecondary}</span>
                    </Link>
                  </div>

                </div>

                {/* Right Column (55%) */}
                <div className="lg:col-span-7 flex justify-center items-center relative h-full">
                  <div className="w-full max-w-[580px] aspect-square flex items-center justify-center relative group" id="hero-slide-image-frame">
                    
                    {/* Blending Background and Image Container with Radial Mask */}
                    <div 
                      className={`absolute inset-0 bg-[radial-gradient(circle,_#F1F5F9_0%,_transparent_75%)] flex items-center justify-center p-8 sm:p-12 rounded-[40px] ${
                        slide.imageType === 'disney_certified' ? 'overflow-visible' : 'overflow-hidden'
                      }`}
                      style={{
                        maskImage: slide.imageType === 'disney_certified' ? 'none' : 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)',
                        WebkitMaskImage: slide.imageType === 'disney_certified' ? 'none' : 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)'
                      }}
                    >
                      <div className={`relative transform group-hover:scale-102 transition-transform duration-300 w-full h-full flex items-center justify-center ${
                        slide.imageType === 'disney_certified' ? 'overflow-visible' : ''
                      }`}>
                        {slide.imageUrl ? (
                          <img 
                            src={slide.imageUrl} 
                            alt={slide.title}
                            className={
                              slide.imageType === 'disney_certified'
                                ? "w-full h-full object-contain rounded-2xl scale-[1.65] relative -top-[12%]"
                                : "w-full h-full object-contain rounded-2xl"
                            }
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <ProductSvg 
                            type={slide.imageType} 
                            className={slide.imageType === 'disney_certified' ? "w-full max-w-[460px] aspect-[4/3] drop-shadow-md" : "w-64 h-80 object-contain"}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>



    </section>
  );
}
