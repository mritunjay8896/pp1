/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  title: string;
  parent?: { name: string; path: string };
}

export default function Breadcrumb({ title, parent }: BreadcrumbProps) {
  return (
    <div id="qpp-breadcrumb" className="bg-gray-50 border-b border-gray-100 py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 flex items-center justify-between flex-wrap gap-4">
        
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-heading tracking-tight">
          {title}
        </h1>

        {/* Navigation path */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold select-none">
          <Link 
            to="/" 
            className="flex items-center gap-1.5 text-brand-muted hover:text-brand-primary transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          
          <ChevronRight className="w-4 h-4 text-gray-300" />

          {parent && (
            <>
              <Link 
                to={parent.path} 
                className="text-brand-muted hover:text-brand-primary transition-colors"
              >
                {parent.name}
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </>
          )}

          <span className="text-brand-primary font-bold">
            {title}
          </span>
        </nav>
      </div>
    </div>
  );
}
