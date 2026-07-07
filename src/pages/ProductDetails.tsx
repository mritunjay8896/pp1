/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductSvg from '../components/ProductSvg';
import { getProductBySlug } from '../db/firebase';
import { Product } from '../types';
import { ArrowLeft, CheckCircle2, FileText, Download, Briefcase, ShieldAlert, BadgeInfo } from 'lucide-react';

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProduct() {
      if (!slug) return;
      setLoading(true);
      try {
        const prod = await getProductBySlug(slug);
        setProduct(prod);
      } catch (err) {
        console.error('Error fetching product details:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 py-24 space-y-8 animate-pulse" id="product-loading">
        <div className="h-10 bg-gray-100 rounded-full w-1/4" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6 h-[400px] bg-gray-100 rounded-[32px]" />
          <div className="lg:col-span-6 space-y-6">
            <div className="h-6 bg-gray-100 rounded-full w-1/5" />
            <div className="h-12 bg-gray-100 rounded-full w-3/4" />
            <div className="h-24 bg-gray-100 rounded-2xl w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-md mx-auto py-24 text-center space-y-6" id="product-not-found">
        <ShieldAlert className="w-16 h-16 text-brand-primary mx-auto" />
        <h2 className="text-2xl font-extrabold text-brand-heading">Product Not Found</h2>
        <p className="text-sm text-brand-paragraph">
          The requested product does not exist in our corporate catalog database.
        </p>
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-full shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </Link>
      </div>
    );
  }

  return (
    <div id={`product-details-container-${product.slug}`} className="pb-24 space-y-16">
      
      {/* 1. Breadcrumb navigation */}
      <Breadcrumb 
        title={product.name} 
        parent={{ name: 'Corporate Catalog', path: '/products' }} 
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
        
        {/* Back Link */}
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-muted hover:text-brand-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </Link>

        {/* 2. Top Section - Image and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column (55%) - Large Image */}
          <div className="lg:col-span-6 bg-slate-50 border border-gray-100 rounded-[40px] p-8 sm:p-12 flex items-center justify-center aspect-video sm:aspect-square md:aspect-video lg:aspect-square">
            <ProductSvg 
              type={product.images[0]} 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* Right Column (45%) - Core Metadata */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary bg-[#FB8964]/10 px-4 py-2 rounded-sm mb-4 inline-block">
                {product.category.replace('-', ' ')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-heading tracking-tight leading-tight mb-4 uppercase">
                {product.name}
              </h2>
              <p className="text-sm leading-relaxed text-brand-paragraph">
                {product.description}
              </p>
            </div>

            {/* Core Features list */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-brand-heading">Key Features & Design Highlights</h4>
              <ul className="space-y-3.5">
                {product.features.map((feat, idx) => {
                  const parts = feat.split(':');
                  const boldTitle = parts[0];
                  const desc = parts.slice(1).join(':');
                  return (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-brand-paragraph">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-brand-heading">{boldTitle}</strong>
                        {desc && <span>: {desc}</span>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>

        {/* 3. Bottom Section - Specs, Applications and Downloads */}
        <div className="border-t border-gray-100 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Specifications Table Left (60%) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <BadgeInfo className="w-6 h-6 text-brand-primary" />
              <h3 className="text-2xl font-extrabold text-brand-heading tracking-tight">
                Technical Specifications
              </h3>
            </div>
            
            <div className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm bg-white">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <tr 
                      key={key} 
                      className={`${idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} border-b border-gray-100 last:border-b-0`}
                    >
                      <td className="p-4 sm:p-5 font-bold text-brand-heading w-1/3 border-r border-gray-100">
                        {key}
                      </td>
                      <td className="p-4 sm:p-5 text-brand-paragraph font-medium">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications & Downloads Right (40%) */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Applications */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-brand-primary" />
                <h4 className="text-xl font-bold text-brand-heading">Target Applications</h4>
              </div>
              <ul className="space-y-3 pl-2">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm font-semibold text-brand-paragraph">
                    <span className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Downloads */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-brand-primary" />
                <h4 className="text-xl font-bold text-brand-heading">Official Documentation</h4>
              </div>
              <div className="space-y-3">
                {product.downloads.map((dl, idx) => (
                  <Link
                    key={idx}
                    to="/downloads"
                    className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:border-brand-primary hover:bg-brand-primary/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5 text-brand-muted group-hover:text-brand-primary transition-colors" />
                      <span className="text-sm font-bold text-brand-heading group-hover:text-brand-primary transition-colors">
                        {dl.label}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-extrabold bg-brand-heading text-white px-2.5 py-1 rounded-md">
                      {dl.type}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
