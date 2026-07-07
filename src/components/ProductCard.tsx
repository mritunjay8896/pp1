/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import ProductSvg from './ProductSvg';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div 
      id={`product-card-${product.slug}`}
      className="bg-white border border-gray-150 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
    >
      {/* Product Image / Vector Container */}
      <div className="relative aspect-video sm:aspect-square md:aspect-video w-full bg-slate-50 overflow-hidden border-b border-gray-100 flex items-center justify-center p-4">
        <ProductSvg 
          type={product.thumbnail || product.images[0]} 
          className="w-full h-full object-contain transform group-hover:scale-102 transition-transform duration-300" 
        />
        {product.featured && (
          <span className="absolute top-4 left-4 bg-brand-primary text-white text-[9px] uppercase font-extrabold tracking-widest px-3.5 py-1.5 rounded-sm shadow-sm">
            Best Seller
          </span>
        )}
        <span className="absolute top-4 right-4 bg-brand-heading text-white text-[9px] uppercase font-extrabold tracking-widest px-3.5 py-1.5 rounded-sm shadow-sm opacity-90">
          {product.category.replace('-', ' ')}
        </span>
      </div>

// Content Container
      <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-lg font-extrabold text-brand-heading tracking-tight mb-3 group-hover:text-brand-primary transition-colors line-clamp-1 uppercase">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs leading-relaxed text-brand-paragraph mb-6 line-clamp-3">
            {product.description}
          </p>

          {/* Bullet points */}
          <ul className="space-y-2.5 mb-6" id={`product-bullets-${product.slug}`}>
            {product.features.slice(0, 3).map((feat, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-brand-muted">
                <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{feat.split(':')[0]}</span>
              </li>
            ))}
          </ul>

          {/* Inline Product Showcase */}
          <div className="mt-6 pt-5 border-t border-gray-100 mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary">
                Popular Catalog Models
              </span>
              <Link 
                to={
                  product.slug === "click-piercing-system" 
                    ? "/products/catalog?category=click"
                    : product.slug === "traditional-instrument"
                      ? "/products/catalog?category=traditional"
                      : "/products/catalog?category=blief"
                }
                className="text-[10px] font-bold text-brand-muted hover:text-brand-primary transition-colors hover:underline"
              >
                View Full Category
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {(product.slug === "click-piercing-system" ? [
                {
                  name: "Bloom Aurora",
                  image: "https://qpp-ep.com/wp-content/uploads/2023/05/Diamond-daisy-15Y_S-2048x2048.jpg",
                  subCategory: "Gold Plated",
                  url: "/products/catalog?category=click"
                },
                {
                  name: "Bloom Crystal",
                  image: "https://qpp-ep.com/wp-content/uploads/2023/05/Diamond-daisy-04Y_S-2048x2048.jpg",
                  subCategory: "Gold Plated",
                  url: "/products/catalog?category=click"
                },
                {
                  name: "Bloom Pink",
                  image: "https://qpp-ep.com/wp-content/uploads/2023/05/Diamond-daisy-10Y_S-2048x2048.jpg",
                  subCategory: "Gold Plated",
                  url: "/products/catalog?category=click"
                }
              ] : product.slug === "traditional-instrument" ? [
                {
                  name: "Large Candy SS",
                  image: "https://qpp-ep.com/wp-content/uploads/2022/11/LM04W-S.jpg",
                  subCategory: "Surgical Steel",
                  url: "/products/catalog?category=traditional"
                },
                {
                  name: "Large CZ SS",
                  image: "https://qpp-ep.com/wp-content/uploads/2022/11/LC04W-S.jpg",
                  subCategory: "Surgical Steel",
                  url: "/products/catalog?category=traditional"
                },
                {
                  name: "Large Candy Gold",
                  image: "https://qpp-ep.com/wp-content/uploads/2022/11/LM04Y-S.jpg",
                  subCategory: "Gold Plated",
                  url: "/products/catalog?category=traditional"
                }
              ] : [
                {
                  name: "Blooming Delight",
                  image: "https://qpp-ep.com/wp-content/uploads/2023/10/E667CRY.jpg",
                  subCategory: "Gold Plated",
                  url: "/products/catalog?category=blief"
                },
                {
                  name: "Blooming Petals",
                  image: "https://qpp-ep.com/wp-content/uploads/2023/10/E518CRY.jpg",
                  subCategory: "Gold Plated",
                  url: "/products/catalog?category=blief"
                },
                {
                  name: "Brilliant Heart",
                  image: "https://qpp-ep.com/wp-content/uploads/2023/10/DCZRO8Y.jpg",
                  subCategory: "Gold Plated",
                  url: "/products/catalog?category=blief"
                }
              ]).map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className="flex flex-col items-center p-2 rounded bg-slate-50 border border-transparent hover:border-brand-primary/20 hover:bg-white hover:shadow-sm transition-all duration-200 group/item"
                >
                  <div className="w-12 h-12 bg-white rounded overflow-hidden flex items-center justify-center mb-1.5 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-contain transform group-hover/item:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-brand-heading text-center line-clamp-1 w-full group-hover/item:text-brand-primary transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[7.5px] text-brand-paragraph text-center truncate w-full">
                    {item.subCategory}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center justify-center gap-2 w-full h-[50px] text-xs font-bold uppercase tracking-wider rounded-sm border border-gray-200 bg-gray-50 text-brand-heading hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 group-hover:border-brand-primary/20"
          id={`product-cta-link-${product.slug}`}
        >
          <span>View Specifications</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
