/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MessageSquare, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Grid, 
  Sparkles,
  ArrowLeftRight
} from 'lucide-react';
import { CATALOG_PRODUCTS, CatalogProduct } from '../data/catalog_products';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL-driven filters for high compatibility and link sharing
  const activeCategory = searchParams.get('category') || 'blief'; // default to blief collection
  const activeSub = searchParams.get('sub') || ''; // 'Classic' or 'Trendy' or 'Gold Plated' or 'Stainless Steel' etc.
  
  // Collapsible section state
  const [designOpen, setDesignOpen] = useState(true);
  const [bliefOpen, setBliefOpen] = useState(true);
  const [materialOpen, setMaterialOpen] = useState(false);
  const [noseOpen, setNoseOpen] = useState(false);
  const [systemOpen, setSystemOpen] = useState(false);
  
  // Sort state
  const [sortType, setSortType] = useState('default');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Selected product detail modal
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);

  // Synchronize category expansion on mount/params change
  useEffect(() => {
    if (activeCategory === 'blief' || activeCategory === 'classic' || activeCategory === 'trendy') {
      setDesignOpen(true);
      setBliefOpen(true);
    } else if (activeCategory === 'click' || activeCategory === 'traditional') {
      setDesignOpen(true);
    } else if (activeCategory === 'gold' || activeCategory === 'steel') {
      setMaterialOpen(true);
    }
    // reset page on filter change
    setCurrentPage(1);
  }, [activeCategory, activeSub]);

  // Map category to products list
  const filteredProducts = useMemo(() => {
    let result = [...CATALOG_PRODUCTS];

    // Filter by main category selection
    if (activeCategory === 'blief' || activeCategory === 'classic' || activeCategory === 'trendy') {
      const bliefItems = result.filter(p => p.designCategory === 'Blief Collection');
      const half = Math.ceil(bliefItems.length / 2);
      if (activeCategory === 'classic' || activeSub === 'classic') {
        result = bliefItems.slice(0, half);
      } else if (activeCategory === 'trendy' || activeSub === 'trendy') {
        result = bliefItems.slice(half);
      } else {
        result = bliefItems;
      }
    } else if (activeCategory === 'click') {
      // Click Category products
      result = result.filter(p => p.designCategory && p.designCategory.includes('Click Category'));
    } else if (activeCategory === 'traditional') {
      // Traditional Category products
      result = result.filter(p => p.designCategory && p.designCategory.includes('Traditional category'));
    } else if (activeCategory === 'gold') {
      result = result.filter(p => p.subCategory === 'Gold Plated');
    } else if (activeCategory === 'steel') {
      result = result.filter(p => p.subCategory === 'Stainless Steel');
    } else if (activeCategory === 'nose') {
      result = result.filter(p => p.name.toLowerCase().includes('nose'));
    } else if (activeCategory === 'system') {
      if (activeSub === 'traditional') {
        result = result.filter(p => p.designCategory && p.designCategory.includes('Traditional category'));
      } else {
        result = result.filter(p => p.designCategory && p.designCategory.includes('Click Category'));
      }
    } else if (activeCategory === 'uncategorized') {
      result = result.filter(p => !p.designCategory);
    }

    // Apply sorting
    if (sortType === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [activeCategory, activeSub, sortType]);

  // Paginated chunk
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, startIndex]);

  // Helper to change filters
  const handleFilterClick = (cat: string, sub: string = '') => {
    setSearchParams({ category: cat, sub: sub });
  };

  return (
    <div id="qpp-catalog-page" className="pb-32 bg-white selection:bg-brand-primary/10 select-none min-h-screen font-sans">
      
      {/* 1. Header Navigation Bar (Home / Design / Blief Collection) */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          
          {/* Breadcrumb Path precisely styled */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-brand-primary transition-colors">Design</Link>
            <span>/</span>
            <span className="text-gray-800 font-bold uppercase tracking-wide">
              {activeCategory === 'blief' ? 'Blief Collection' : 
               activeCategory === 'click' ? 'Click Category' :
               activeCategory === 'traditional' ? 'Traditional Category' :
               activeCategory === 'gold' ? 'Gold Plated' :
               activeCategory === 'steel' ? 'Stainless Steel' : `${activeCategory} Category`}
              {activeSub ? ` - ${activeSub}` : ''}
            </span>
          </div>

          {/* Results statement & sorting select */}
          <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto text-xs text-[#0D0D0D]">
            <span className="font-semibold text-gray-500">
              Showing {totalItems > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} results
            </span>
            <div className="relative flex items-center gap-2 border border-gray-200 px-3 py-1.5 bg-white rounded-sm hover:border-gray-400 transition-colors">
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="bg-transparent focus:outline-none font-bold uppercase tracking-wider text-[10px] pr-4 cursor-pointer appearance-none"
              >
                <option value="default">Default sorting</option>
                <option value="name-asc">Sort by name: A to Z</option>
                <option value="name-desc">Sort by name: Z to A</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-[1250px] mx-auto px-4 sm:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDEBAR (Filter by) - Exactly like the image */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-sm font-black text-[#0D0D0D] uppercase tracking-wider pb-3 border-b border-gray-150">
              Filter by
            </h2>

            <div className="space-y-4">
              
              {/* SECTION: Design */}
              <div className="border-b border-gray-100 pb-3">
                <button 
                  onClick={() => setDesignOpen(!designOpen)}
                  className="w-full flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#0D0D0D] py-1 hover:text-brand-primary transition-colors focus:outline-none"
                >
                  <span>Design</span>
                  {designOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                
                {designOpen && (
                  <div className="mt-3 pl-2 space-y-2.5 text-xs text-gray-600">
                    
                    {/* Blief Collection (Collapsible inner) */}
                    <div>
                      <button 
                        onClick={() => setBliefOpen(!bliefOpen)}
                        className={`w-full flex justify-between items-center py-0.5 text-left font-bold ${activeCategory === 'blief' ? 'text-[#B38E5D]' : 'text-[#0D0D0D]'} hover:text-brand-primary`}
                      >
                        <span className="uppercase tracking-wide">Blief Collection</span>
                        {bliefOpen ? <ChevronUp className="w-3 h-3 text-gray-400" /> : <ChevronDown className="w-3 h-3 text-gray-400" />}
                      </button>

                      {bliefOpen && (
                        <div className="mt-2 pl-4 space-y-2 border-l border-gray-100">
                          <button 
                            onClick={() => handleFilterClick('blief', 'classic')}
                            className={`block text-left py-0.5 ${activeSub === 'classic' ? 'text-brand-primary font-bold underline' : 'hover:text-[#0D0D0D]'}`}
                          >
                            Classic
                          </button>
                          <button 
                            onClick={() => handleFilterClick('blief', 'trendy')}
                            className={`block text-left py-0.5 ${activeSub === 'trendy' ? 'text-brand-primary font-bold underline' : 'hover:text-[#0D0D0D]'}`}
                          >
                            Trendy
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Click Category */}
                    <div>
                      <button 
                        onClick={() => handleFilterClick('click')}
                        className={`w-full text-left py-1 font-bold uppercase tracking-wide flex justify-between items-center ${activeCategory === 'click' ? 'text-brand-primary' : 'text-[#0D0D0D]'} hover:text-brand-primary`}
                      >
                        <span>Click Category</span>
                        <ChevronDown className="w-3 h-3 text-gray-300" />
                      </button>
                    </div>

                    {/* Traditional Category */}
                    <div>
                      <button 
                        onClick={() => handleFilterClick('traditional')}
                        className={`w-full text-left py-1 font-bold uppercase tracking-wide flex justify-between items-center ${activeCategory === 'traditional' ? 'text-brand-primary' : 'text-[#0D0D0D]'} hover:text-brand-primary`}
                      >
                        <span>Traditional Category</span>
                        <ChevronDown className="w-3 h-3 text-gray-300" />
                      </button>
                    </div>

                  </div>
                )}
              </div>

              {/* SECTION: Material */}
              <div className="border-b border-gray-100 pb-3">
                <button 
                  onClick={() => setMaterialOpen(!materialOpen)}
                  className="w-full flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#0D0D0D] py-1 hover:text-brand-primary transition-colors focus:outline-none"
                >
                  <span>Material</span>
                  {materialOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {materialOpen && (
                  <div className="mt-2 pl-3 space-y-2 text-xs text-gray-600">
                    <button 
                      onClick={() => handleFilterClick('gold')}
                      className={`block text-left ${activeCategory === 'gold' ? 'text-brand-primary font-bold' : 'hover:text-[#0D0D0D]'}`}
                    >
                      Gold Plated
                    </button>
                    <button 
                      onClick={() => handleFilterClick('steel')}
                      className={`block text-left ${activeCategory === 'steel' ? 'text-brand-primary font-bold' : 'hover:text-[#0D0D0D]'}`}
                    >
                      Stainless Steel
                    </button>
                  </div>
                )}
              </div>

              {/* SECTION: Nose */}
              <div className="border-b border-gray-100 pb-3">
                <button 
                  onClick={() => {
                    setNoseOpen(!noseOpen);
                    handleFilterClick('nose');
                  }}
                  className={`w-full flex justify-between items-center text-xs font-bold uppercase tracking-wider ${activeCategory === 'nose' ? 'text-brand-primary' : 'text-[#0D0D0D]'} py-1 hover:text-brand-primary transition-colors focus:outline-none`}
                >
                  <span>Nose</span>
                  {noseOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {noseOpen && (
                  <div className="mt-2 pl-3 space-y-2 text-xs text-gray-600">
                    <span className="block italic text-[10px] text-gray-400">Nose studs collection filtered</span>
                  </div>
                )}
              </div>

              {/* SECTION: Piercing System */}
              <div className="border-b border-gray-100 pb-3">
                <button 
                  onClick={() => setSystemOpen(!systemOpen)}
                  className="w-full flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#0D0D0D] py-1 hover:text-brand-primary transition-colors focus:outline-none"
                >
                  <span>Piercing System</span>
                  {systemOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {systemOpen && (
                  <div className="mt-2 pl-3 space-y-2 text-xs text-gray-600">
                    <button 
                      onClick={() => handleFilterClick('system', 'traditional')}
                      className="block text-left hover:text-[#0D0D0D]"
                    >
                      Traditional System
                    </button>
                    <button 
                      onClick={() => handleFilterClick('system', 'click')}
                      className="block text-left hover:text-[#0D0D0D]"
                    >
                      Click System
                    </button>
                  </div>
                )}
              </div>



            </div>
          </div>

          {/* RIGHT COLUMN (Content & Product Grid) */}
          <div className="lg:col-span-9 space-y-10">
            
            {/* 2. Top Header Banner - Gray wave with diamonds logo */}
            <div className="relative w-full rounded-sm overflow-hidden bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border border-gray-100 p-8 sm:p-14 text-center select-none shadow-xs flex flex-col justify-center items-center">
              
              {/* Background elegant vector wave circles */}
              <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" />
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" />
              
              {/* Diamond illustrations precisely matched */}
              <div className="absolute left-[15%] top-1/2 -translate-y-1/2 opacity-35 hidden sm:block">
                <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L12 2l6 10-6 10L6 12z" />
                </svg>
              </div>
              <div className="absolute right-[15%] top-1/2 -translate-y-1/2 opacity-35 hidden sm:block">
                <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L12 2l6 10-6 10L6 12z" />
                </svg>
              </div>

              {/* Centered Typography exactly resembling "Blief" brand style */}
              <div className="relative space-y-1.5 z-10">
                <span className="text-3xl sm:text-5xl font-light italic font-serif tracking-widest text-brand-heading block">
                  Blief
                </span>
                <span className="text-xs font-black tracking-[0.45em] text-[#0D0D0D] block uppercase sm:text-sm">
                  Fashion Accessories
                </span>
                <span className="text-[8px] font-extrabold tracking-[0.25em] text-[#B38E5D] block uppercase sm:text-[9px]">
                  Keep your ear safe and sexy
                </span>
              </div>

            </div>

            {/* 3. Product Display Grid */}
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-gray-150 rounded-lg">
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                  No products match the selected filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-12 sm:gap-y-16">
                {paginatedProducts.map((product, index) => (
                  <div
                    key={`${product.name}-${index}`}
                    onClick={() => setSelectedProduct(product)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    {/* Hover swap image container */}
                    <div className="w-full aspect-square border border-gray-100 rounded-sm bg-white p-4 relative overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-brand-primary/20">
                      
                      {/* Image 1 (Front View) */}
                      <div 
                        role="img"
                        aria-label={product.name}
                        style={{
                          backgroundImage: `url(${product.image})`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'contain',
                        }}
                        className="w-full h-full max-h-[140px] sm:max-h-[180px] min-h-[140px] sm:min-h-[180px] transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-95"
                      />

                      {/* Image 2 (Back/Alternate View - Absolute Positioned underneath) */}
                      {product.image2 && (
                        <div 
                          role="img"
                          aria-label={`${product.name} alternate`}
                          style={{
                            backgroundImage: `url(${product.image2})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                          }}
                          className="w-full h-full max-h-[140px] sm:max-h-[180px] min-h-[140px] sm:min-h-[180px] transition-all duration-500 ease-in-out absolute inset-0 m-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                        />
                      )}


                    </div>

                    {/* Centered Item Label */}
                    <span className="text-xs sm:text-sm font-semibold text-[#0D0D0D] mt-4 tracking-wide text-center group-hover:text-brand-primary transition-colors">
                      {product.name}
                    </span>

                  </div>
                ))}
              </div>
            )}

            {/* 4. Dynamic Pagination controls */}
            {totalPages > 1 && (
              <div className="pt-10 flex justify-center items-center gap-2 border-t border-gray-100">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-sm border transition-all ${
                      currentPage === i + 1
                        ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                        : 'bg-white text-gray-400 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Corporate Product Specification Sheet Overlay / Contact Dialog */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Soft Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Specification Sheet Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden z-10 border border-gray-100 flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              
              {/* Gold Top Accent Trim */}
              <div className="bg-[#B38E5D] h-1.5 w-full" />

              {/* Exit Cross */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#0D0D0D] transition-colors"
                aria-label="Close specification sheet"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Data Frame */}
              <div className="p-6 sm:p-8 space-y-6 flex-grow overflow-y-auto max-h-[80vh]">
                
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#B38E5D] bg-[#B38E5D]/10 px-3 py-1 rounded-sm inline-block mb-2">
                    E.O. Gas Sterilized Catalog Item
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0D0D0D] tracking-tight uppercase">
                    {selectedProduct.name}
                  </h3>
                </div>

                {/* Primary/Alternate product viewing carousel */}
                <div className="grid grid-cols-2 gap-4 border border-gray-100 p-4 rounded-xl bg-slate-50/50">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[8px] font-black uppercase text-gray-400 tracking-wider">Front View</span>
                    <div 
                      role="img"
                      aria-label={selectedProduct.name}
                      style={{
                        backgroundImage: `url(${selectedProduct.image})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                      }}
                      className="w-full h-28"
                    />
                  </div>
                  {selectedProduct.image2 ? (
                    <div className="flex flex-col items-center gap-1 border-l border-gray-100/80">
                      <span className="text-[8px] font-black uppercase text-gray-400 tracking-wider">Rear View</span>
                      <div 
                        role="img"
                        aria-label={`${selectedProduct.name} alternate`}
                        style={{
                          backgroundImage: `url(${selectedProduct.image2})`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'contain',
                        }}
                        className="w-full h-28"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center text-[10px] text-gray-300">
                      No Alternate View
                    </div>
                  )}
                </div>

                {/* Technical Characteristics Specs Table */}
                <div className="space-y-3.5 pt-2 text-xs sm:text-sm">
                  <div className="flex justify-between items-start py-1 border-b border-gray-50 pb-2">
                    <span className="font-extrabold text-gray-400 uppercase tracking-wider text-[9px]">Material Category</span>
                    <span className="font-bold text-[#0D0D0D] text-right">{selectedProduct.category}</span>
                  </div>
                  <div className="flex justify-between items-start py-1 border-b border-gray-50 pb-2">
                    <span className="font-extrabold text-gray-400 uppercase tracking-wider text-[9px]">Plating finish</span>
                    <span className="font-bold text-[#0D0D0D] text-right">{selectedProduct.subCategory}</span>
                  </div>
                  <div className="flex justify-between items-start py-1 border-b border-gray-50 pb-2">
                    <span className="font-extrabold text-gray-400 uppercase tracking-wider text-[9px]">Standard gauge</span>
                    <span className="font-bold text-[#0D0D0D] text-right">0.8mm (20G) Swell protection post</span>
                  </div>
                  <div className="flex justify-between items-start py-1">
                    <span className="font-extrabold text-gray-400 uppercase tracking-wider text-[9px]">Hypoallergenic Certification</span>
                    <span className="font-bold text-emerald-600 text-right">ISO 10993 Bio-compliant</span>
                  </div>
                </div>

                {/* Hygiene safety assurance */}
                <div className="bg-slate-50 border border-gray-100 p-4 rounded-xl flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-0.5">
                    <h4 className="text-[11px] font-black text-[#0D0D0D] uppercase tracking-wider">Clinical Security Trim</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      Sealed in medical-grade plastic blister packages. Compatible with QPP Click and traditional mechanical pressure devices.
                    </p>
                  </div>
                </div>

                {/* Direct instant quote request WhatsApp trigger */}
                <a
                  href={`https://wa.me/919880058800?text=${encodeURIComponent(`Hello QPP! I am interested in wholesale/distribution specifications for the ${selectedProduct.name} (${selectedProduct.subCategory}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] text-white text-xs font-black uppercase tracking-widest py-4 px-6 rounded-sm shadow-md hover:bg-[#20ba5a] active:scale-[0.98] transition-all"
                  id={`whatsapp-catalog-inquire-${selectedProduct.name.toLowerCase().replace(/\s+/g, '-')}`}
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
