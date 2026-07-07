/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Award, Globe } from 'lucide-react';

export default function AboutSection() {
  const credentials = [
    {
      icon: <Award className="w-6 h-6 text-brand-primary" />,
      title: "Authorized Sole Distributor",
      description: "Representing the official QPP Ear Piercing Systems brand across all Indian states and regions."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-primary" />,
      title: "CE & ISO 13485 Certified",
      description: "Imported products certified by European medical authorities to guarantee superior biocompatibility."
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-primary" />,
      title: "100% Made in Europe",
      description: "Manufactured, sterilized, and vacuum-sealed in advanced European facilities for medical safety."
    }
  ];

  return (
    <section id="qpp-about-section" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Graphic/Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-slate-50 border border-gray-100 rounded-[40px] p-12 flex flex-col justify-between overflow-hidden shadow-sm">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-3xl bg-brand-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-muted bg-gray-100 px-3 py-1.5 rounded-full">
                  Genuine European Quality
                </span>
              </div>
              
              <div>
                <h4 className="text-3xl font-extrabold text-brand-heading tracking-tight mb-4 leading-tight">
                  Precise Piercing <br />Products India LLP
                </h4>
                <p className="text-sm leading-relaxed text-brand-paragraph">
                  Providing Indian beauty salons, dermatologists, and jewelry boutiques with the safest, quietest ear-piercing technology from Europe.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-6 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-brand-primary">
                <span>SOLE DISTRIBUTOR</span>
                <span>SINCE 2020</span>
              </div>
            </div>
            
            {/* Absolute Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-heading text-white p-6 rounded-3xl shadow-lg max-w-[200px] hidden sm:block">
              <p className="text-2xl font-extrabold text-brand-primary mb-1">0%</p>
              <p className="text-xs font-bold text-gray-300 leading-normal">
                Nickel allergy risks with Medical Grade Titanium
              </p>
            </div>
          </div>

          {/* Right Column - Factual text */}
          <div className="lg:col-span-7">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full mb-6 inline-block">
              Corporate Overview
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-heading tracking-tight mb-6 leading-tight">
              Re-Defining Ear Piercing Standards Across India
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-brand-paragraph mb-8">
              At **Precise Piercing Products India LLP**, we believe that ear piercing should be a clean, safe, and positive milestone. We are proud to be the officially authorized national distributor of **QPP (Quick Piercing System)**—Europe\'s premier pressure-based sterile ear piercing solution. 
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-brand-paragraph mb-10">
              Unlike traditional noisy spring guns that can tear tissue and scare children, the QPP system is designed with a patented smooth manual squeeze action. Together with sterile single-use capsule blisters, QPP ensures 100% contact-free loading, clinical hygiene, and an anxiety-free ear piercing experience.
            </p>

            {/* List credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              {credentials.map((cred, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                    {cred.icon}
                  </div>
                  <h4 className="text-base font-bold text-brand-heading mb-2">
                    {cred.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center h-[56px] px-8 rounded-full bg-brand-primary hover:bg-brand-hover text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                Learn More About Us
              </Link>
              <Link
                to="/dealer"
                className="inline-flex items-center justify-center h-[56px] px-8 rounded-full border border-gray-200 hover:border-brand-primary hover:text-brand-primary text-brand-heading text-sm font-bold bg-white transition-all"
              >
                Become a Partner
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
