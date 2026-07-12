/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, PhoneCall } from 'lucide-react';
import logoImage from '../assets/images/regenerated_image_1783357511597.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Piercing System', 
      path: '/products',
      subLinks: [
        { name: 'Traditional', path: '/products/traditional' },
        { name: 'Click', path: '/products?category=click' }
      ]
    },
    { name: 'Product', path: '/products' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path: string) => {
    const [pathname, search] = path.split('?');
    if (pathname === '/') {
      return location.pathname === '/';
    }
    const pathActive = location.pathname.startsWith(pathname);
    if (!pathActive) return false;
    
    if (search) {
      const searchParams = new URLSearchParams(location.search);
      const menuParams = new URLSearchParams(search);
      for (const [key, value] of menuParams.entries()) {
        if (searchParams.get(key) !== value) {
          return false;
        }
      }
      return true;
    }
    
    if (!search && location.search) {
      return false;
    }
    
    return true;
  };

  return (
    <header id="qpp-header" className="sticky top-0 bg-white border-b border-[#E5E7EB] z-40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
        <div className="flex justify-between items-center h-[68px]">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 md:gap-4 group" id="header-logo-link">
            <img 
              src={logoImage} 
              alt="Precise Piercing Monogram" 
              className="h-[40px] sm:h-[48px] w-auto object-contain transition-transform group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))'
              }}
            />

            {/* Custom Styled Brand Typography */}
            <div className="flex flex-col items-center">
              <div className="text-[13px] sm:text-[17px] md:text-[19px] font-extrabold font-cinzel tracking-[1.5px] sm:tracking-[2px] leading-none whitespace-nowrap">
                <span 
                  style={{
                    background: 'linear-gradient(to bottom, #fff9d8 0%, #ffe37d 18%, #ffca38 36%, #a66500 58%, #ffd76f 82%, #fff6cf 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 1px 0 #8b5d00, 0 1.5px 3px rgba(0,0,0,0.1)'
                  }}
                >
                  PRECISE
                </span>
                <span className="ml-1 sm:ml-1.5"
                  style={{
                    background: 'linear-gradient(to bottom, #64748b 0%, #94a3b8 20%, #475569 40%, #1e293b 60%, #64748b 82%, #334155 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 1px 0 #334155, 0 1.5px 3px rgba(0,0,0,0.1)'
                  }}
                >
                  PIERCING
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5 w-full justify-center">
                <div className="flex-grow h-[1px] min-w-[6px] sm:min-w-[10px]" style={{ background: 'linear-gradient(to right, transparent, #c89018, #ffd76b, #c89018, transparent)' }} />
                <span 
                  className="text-[6px] sm:text-[7px] md:text-[8px] font-bold font-cinzel tracking-[0.08em] sm:tracking-[0.1em] whitespace-nowrap leading-none text-black"
                >
                  PRODUCT INDIA LLP
                </span>
                <span className="text-[5px] sm:text-[6.5px] md:text-[7.5px] font-bold font-cinzel text-teal-600 leading-none mx-0.5">•</span>
                <span 
                  className="text-[5px] sm:text-[6px] md:text-[7px] font-bold font-cinzel tracking-[0.15em] sm:tracking-[0.18em] whitespace-nowrap leading-none text-black"
                >
                  SAFE &amp; HYGIENIC
                </span>
                <div className="flex-grow h-[1px] min-w-[6px] sm:min-w-[10px]" style={{ background: 'linear-gradient(to right, transparent, #c89018, #ffd76b, #c89018, transparent)' }} />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8" id="desktop-navbar">
            {navLinks.map((link) => {
               if (link.subLinks) {
                 const isAnySubActive = link.subLinks.some(sub => isActive(sub.path)) || isActive(link.path);
                 return (
                   <div key={link.name} className="relative group py-4">
                    <Link
                      to={link.path}
                      className={`text-[13px] font-bold uppercase tracking-wider transition-colors pb-1 flex items-center gap-1.5 ${
                        isAnySubActive
                          ? 'text-[#16213E] border-b-2 border-[#FB8964]'
                          : 'text-[#16213E] hover:text-[#FB8964]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg className="w-3 h-3 text-current transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {/* Dropdown menu */}
                    <div className="absolute left-0 mt-1 w-48 bg-white border border-[#E5E7EB] rounded-sm shadow-lg py-2 hidden group-hover:block z-50">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`block px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                            isActive(sub.path)
                              ? 'text-[#FB8964] bg-[#F8FAFC]'
                              : 'text-[#16213E] hover:text-[#FB8964] hover:bg-[#F8FAFC]'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] font-bold uppercase tracking-wider transition-colors pb-1 ${
                    isActive(link.path)
                      ? 'text-[#16213E] border-b-2 border-[#FB8964]'
                      : 'text-[#16213E] hover:text-[#FB8964]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Action Button */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href="https://wa.me/919880058800?text=Hi!%20I%20am%20interested%20in%20QPP%20Ear%20Piercing%20products%20and%20would%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#20ba5a] transition-colors flex items-center gap-2"
              id="header-cta-button"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3.15 5.348 1.401 5.277 0 9.554-4.277 9.557-9.554.002-2.553-.988-4.955-2.788-6.758C16.804 2.44 14.4 1.45 12.01 1.45c-5.277 0-9.553 4.277-9.557 9.553-.001 1.914.501 3.78 1.457 5.422l-.959 3.502 3.596-.944zm11.03-5.633c-.268-.134-1.585-.782-1.831-.872-.247-.09-.427-.134-.607.134-.18.269-.696.872-.853 1.052-.157.18-.314.202-.582.068-.268-.134-1.134-.418-2.16-1.334-.799-.713-1.338-1.593-1.495-1.861-.157-.269-.017-.414.118-.548.121-.121.268-.314.403-.47.135-.157.18-.269.269-.449.09-.18.045-.337-.022-.47-.068-.134-.607-1.462-.831-2.002-.219-.527-.459-.456-.607-.456-.157-.002-.337-.002-.517-.002-.18 0-.471.067-.718.337-.247.269-.942.921-.942 2.247 0 1.326.965 2.606 1.099 2.786.135.18 1.9 2.901 4.594 4.061.64.276 1.14.44 1.53.564.643.205 1.228.176 1.69.108.514-.077 1.585-.648 1.81-1.27.225-.623.225-1.157.157-1.27-.067-.113-.247-.18-.515-.314z" />
              </svg>
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-brand-heading hover:text-brand-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="xl:hidden bg-white border-t border-gray-100 absolute left-0 w-full shadow-xl z-50 animate-fade-in duration-200"
        >
          <div className="px-6 py-6 space-y-3">
            {navLinks.map((link) => {
              if (link.subLinks) {
                const isAnySubActive = link.subLinks.some(sub => isActive(sub.path)) || isActive(link.path);
                return (
                  <div key={link.name} className="space-y-1">
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-4 rounded-sm text-base font-bold transition-colors ${
                        isAnySubActive
                          ? 'bg-[#FB8964]/10 text-[#FB8964]'
                          : 'text-[#16213E] hover:bg-gray-50'
                      }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                    <div className="pl-6 space-y-1 border-l-2 border-[#E5E7EB] ml-4">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2 px-4 rounded-sm text-sm font-bold transition-colors ${
                            isActive(sub.path)
                              ? 'text-[#FB8964] bg-[#FB8964]/5'
                              : 'text-[#4B5563] hover:text-[#FB8964] hover:bg-gray-50'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 px-4 rounded-sm text-base font-bold transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#FB8964]/10 text-[#FB8964]'
                      : 'text-[#16213E] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/919880058800?text=Hi!%20I%20am%20interested%20in%20QPP%20Ear%20Piercing%20products%20and%20would%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-full text-[11px] uppercase tracking-widest hover:bg-[#20ba5a] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3.15 5.348 1.401 5.277 0 9.554-4.277 9.557-9.554.002-2.553-.988-4.955-2.788-6.758C16.804 2.44 14.4 1.45 12.01 1.45c-5.277 0-9.553 4.277-9.557 9.553-.001 1.914.501 3.78 1.457 5.422l-.959 3.502 3.596-.944zm11.03-5.633c-.268-.134-1.585-.782-1.831-.872-.247-.09-.427-.134-.607.134-.18.269-.696.872-.853 1.052-.157.18-.314.202-.582.068-.268-.134-1.134-.418-2.16-1.334-.799-.713-1.338-1.593-1.495-1.861-.157-.269-.017-.414.118-.548.121-.121.268-.314.403-.47.135-.157.18-.269.269-.449.09-.18.045-.337-.022-.47-.068-.134-.607-1.462-.831-2.002-.219-.527-.459-.456-.607-.456-.157-.002-.337-.002-.517-.002-.18 0-.471.067-.718.337-.247.269-.942.921-.942 2.247 0 1.326.965 2.606 1.099 2.786.135.18 1.9 2.901 4.594 4.061.64.276 1.14.44 1.53.564.643.205 1.228.176 1.69.108.514-.077 1.585-.648 1.81-1.27.225-.623.225-1.157.157-1.27-.067-.113-.247-.18-.515-.314z" />
                </svg>
                <span>Get Quote</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
