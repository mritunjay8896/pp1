/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ContactCTA from '../components/ContactCTA';
import { ShieldCheck, GraduationCap, Award, CheckCircle, HelpCircle } from 'lucide-react';

export default function About() {
  const safetyGuidelines = [
    "Patented smooth manual pressure mechanism avoids sudden skin tears.",
    "Medical-grade pure biocompatible titanium ensures zero nickel exposure.",
    "Each individual pair of studs is sterilized using Ethylene Oxide (E.O.) gas.",
    "The physical instrument maintains a complete hygiene gap, preventing cross-contamination.",
    "Manufactured, sealed, and packaged entirely with care."
  ];

  return (
    <div id="qpp-about-page" className="pb-24 space-y-24">
      {/* 1. Breadcrumb */}
      <Breadcrumb title="About Our Company" />

      {/* 2. Detailed Introduction */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full inline-block">
              Authorized Distribution Office
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-heading tracking-tight leading-tight">
              Re-Introducing Safest Ear Piercing Brand to India
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-brand-paragraph">
              Precise Piercing Products India LLP is the officially licensed sole importer and distributor of patented QPP (Quick Piercing System) products across the Republic of India. Our core mandate is to replace traditional, obsolete spring-loaded 'piercing guns' with clinical, pressure-based sterile cartridge instruments that prioritize human safety.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-brand-paragraph">
              Developed by leading ear-piercing experts, QPP is renowned worldwide for its high safety standards, whisper-quiet performance, and premium jewelry craftsmanship. Through our extensive pan-India supply chain network, we provide direct wholesale fulfillment, comprehensive hands-on clinical certification workshops, and ongoing marketing assistance to premium salons, dermatological clinics, pediatric units, and leading jewelry retail brands.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-[32px] overflow-hidden border border-brand-primary/10 bg-[#FFF6F2] p-4 sm:p-6 shadow-sm max-w-sm w-full">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cM8lpuYFIAmuan021TrTtEdYY2oz7AWh689dfwNXEelDPCm7cuogzwUl&s=10" 
                alt="Precise Piercing Professional Kit" 
                className="w-full h-auto rounded-2xl object-cover bg-white shadow-sm"
                referrerPolicy="no-referrer"
              />
              
            </div>
          </div>

        </div>
      </section>

      {/* 3. Safety Standards Grid */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full inline-block">
                Standards Compliance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-heading tracking-tight">
                Perfect Safety Records by Design
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-brand-paragraph">
                Standard ear piercing methods often rely on powerful spring triggers that slam the blunt stud shaft through the ear lobe. This creates severe skin trauma, cellular wall tears, and swelling. QPP completely avoids this by using manual hand-squeeze pressure and a medically sharp tapered stud point (1.2mm diameter).
              </p>

              <div className="space-y-4">
                {safetyGuidelines.map((guide, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-paragraph">{guide}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <ShieldCheck className="w-10 h-10 text-brand-primary mb-4" />
                <h4 className="text-lg font-bold text-brand-heading mb-2">0% Infection Rate</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Vacuum-sealed blister cards keep the cartridges sterile until the exact second of application. The operator never touches the jewelry.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <GraduationCap className="w-10 h-10 text-brand-primary mb-4" />
                <h4 className="text-lg font-bold text-brand-heading mb-2">Hands-On Workshops</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  We conduct clinical training for beauty technicians and doctors, certifying them in sterile positioning, ear map planning, and aftercare routines.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Contact / Partnership CTA */}
      <ContactCTA />
    </div>
  );
}
