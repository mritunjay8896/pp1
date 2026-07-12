/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Instagram, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="qpp-footer" className="bg-[#FFF6F2] text-brand-paragraph text-sm border-t border-brand-primary/10">
      
      {/* Upper Footer section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Company Brief Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              
              <div>
                <span className="font-extrabold text-lg text-brand-heading tracking-tight">Precise Piercing Product India LLP</span>
                <p className="text-[9px] uppercase font-bold tracking-widest text-brand-primary"> OPP Authorized Distributor</p>
              </div>
            </Link>
            
            <p className="leading-relaxed text-brand-paragraph max-w-sm text-xs">
              <strong>Precise Piercing Products India LLP</strong> is your trusted partner for high-quality, safe, and reliable ear-piercing solutions. We specialize in the distribution of premium ear piercing guns and sterile piercing studs designed for maximum precision and safety.
            </p>

            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/precise.piercing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-paragraph hover:text-[#E1306C] transition-colors text-xs font-bold"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-brand-heading font-bold uppercase tracking-wider text-xs">Sitemap Links</h4>
            <ul className="space-y-3.5">
              <li>
                <Link to="/" className="text-brand-paragraph hover:text-brand-primary transition-colors text-sm font-semibold">Home Dashboard</Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-paragraph hover:text-brand-primary transition-colors text-sm font-semibold">About Company</Link>
              </li>
              <li>
                <Link to="/products" className="text-brand-paragraph hover:text-brand-primary transition-colors text-sm font-semibold">Product Catalog</Link>
              </li>
            </ul>
          </div>

          {/* Support / Partner links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-brand-heading font-bold uppercase tracking-wider text-xs">Partner Network</h4>
            <ul className="space-y-3.5">
              <li>
                <Link to="/faq" className="text-brand-paragraph hover:text-brand-primary transition-colors text-sm font-semibold">Help & FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-paragraph hover:text-brand-primary transition-colors text-sm font-semibold">Contact support</Link>
              </li>
              <li>
                <a 
                  href="https://qpp-ep.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-brand-paragraph hover:text-brand-primary transition-colors text-sm font-semibold mb-2"
                >
                  <span>QPP Global Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="flex items-center gap-2 text-brand-paragraph text-xs font-bold pt-3 border-t border-brand-primary/10">
                <Phone className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                <span>098800 58800</span>
              </li>
              <li className="flex items-center gap-2 text-brand-paragraph text-xs">
                <Mail className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                <span>info@precisepiercing.com</span>
              </li>
            </ul>
          </div>

          {/* Corporate Office Address Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-brand-heading font-bold uppercase tracking-wider text-xs">Corporate Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed text-brand-paragraph text-xs">
                  <strong className="text-brand-heading font-bold block mb-1">Precise Piercing Product India LLP</strong>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-brand-muted block mb-2">Company Office in Bengaluru, Karnataka</span>
                  XGXJ+G6, 8/213 1st Main Road, 2nd Cross Rd, near shiva temple, Kaveri Nagar, Kamala Nagar, Bengaluru, Karnataka 560096
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Copyright section */}
      <div className="border-t border-brand-primary/10 py-8 bg-[#FFF1EB]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          
          <div className="text-center sm:text-left space-y-1">
            <p className="text-brand-paragraph">© {currentYear} Precise Piercing Products India LLP. All Rights Reserved.</p>
            <p className="text-brand-muted">
              QPP is a registered trademark of QPP Quick Piercing System. Used with authorization.
            </p>
          </div>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-brand-paragraph hover:text-brand-primary transition-colors font-bold">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-brand-paragraph hover:text-brand-primary transition-colors font-bold">Terms of Service</Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
