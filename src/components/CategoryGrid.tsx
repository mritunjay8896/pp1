/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CATEGORIES } from '../data/products';
import { ShieldAlert, Layers, Package, ShoppingBag, Shirt, Tag } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory?: (slug: string) => void;
  selectedCategory?: string;
}

export default function CategoryGrid({ onSelectCategory, selectedCategory }: CategoryGridProps) {
  
  const getCategoryIcon = (image: string) => {
    switch (image) {
      case 'rigid-boxes':
        return <Layers className="w-7 h-7 text-[#FB8964]" />;
      case 'cardboard-boxes':
        return <Package className="w-7 h-7 text-[#FB8964]" />;
      case 'paper-bags':
        return <ShoppingBag className="w-7 h-7 text-[#FB8964]" />;
      case 'paper-hangers':
        return <Shirt className="w-7 h-7 text-[#FB8964]" />;
      case 'hangtags-labels':
        return <Tag className="w-7 h-7 text-[#FB8964]" />;
      default:
        return <ShieldAlert className="w-7 h-7 text-[#FB8964]" />;
    }
  };

  return (
    <div id="qpp-category-grid" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.slug;
        return (
          <div
            key={cat.slug}
            id={`category-item-${cat.slug}`}
            onClick={() => onSelectCategory && onSelectCategory(cat.slug)}
            className={`p-6 bg-white border rounded-sm cursor-pointer transition-all duration-300 flex flex-col items-start ${
              onSelectCategory 
                ? isSelected 
                  ? 'border-[#FB8964] ring-1 ring-[#FB8964]/20 shadow-sm'
                  : 'border-[#E5E7EB] hover:border-[#FB8964]/30 hover:shadow-md'
                : 'border-[#E5E7EB] hover:border-[#FB8964] hover:shadow-md'
            }`}
          >
            {/* Square/subtle Icon container matching sleek layout */}
            <div className="w-12 h-12 rounded-sm bg-[#FB8964]/10 flex items-center justify-center mb-4">
              {getCategoryIcon(cat.image)}
            </div>

            {/* Category Name */}
            <h3 className="text-sm font-bold text-[#16213E] mb-2 tracking-tight uppercase line-clamp-1">
              {cat.name}
            </h3>

            {/* Category Description */}
            <p className="text-xs leading-relaxed text-[#4B5563] line-clamp-3">
              {cat.description}
            </p>

            {/* If onSelectCategory is passed, show interactive pill */}
            {onSelectCategory && (
              <span className={`text-[9px] font-bold uppercase tracking-widest mt-4 py-1.5 px-3 rounded-full ${
                isSelected 
                  ? 'bg-[#FB8964] text-white' 
                  : 'bg-[#F8FAFC] text-[#16213E] hover:bg-[#FB8964]/10 hover:text-[#FB8964]'
              }`}>
                {isSelected ? 'Selected' : 'Filter'}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
