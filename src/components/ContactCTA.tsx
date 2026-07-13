/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="qpp-contact-cta" className="bg-[#FFF6F2] py-20 text-brand-heading relative overflow-hidden">
      
      {/* Decorative Grid Background Elements */}
      <div className="absolute inset-0 opacity-10 select-none pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FB8964" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full mb-6 inline-block">
            Immediate Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-brand-heading">
            Elevate Your Salon or Clinic with QPP Systems
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-brand-paragraph mb-10 max-w-2xl">
            Get in touch with Precise Piercing Products India LLP today to order starter kits, register as an authorized partner, or book hands-on clinical certification workshops in India.
          </p>

          {/* Quick Contacts List */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-xl">
            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-brand-primary/10 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-brand-muted font-bold uppercase tracking-wider">Call Indian Support</p>
                <p className="text-base font-extrabold text-brand-heading mt-0.5">+91 98800 58800</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-brand-primary/10 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-brand-muted font-bold uppercase tracking-wider">Email Inquiry</p>
                <p className="text-base font-extrabold text-brand-heading mt-0.5">info@precisepiercing.in</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
