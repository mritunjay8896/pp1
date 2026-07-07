/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, ArrowLeft, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div 
      id="qpp-notfound-page" 
      className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 bg-linear-to-b from-white to-gray-50/50"
    >
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Animated Icon Container */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary shadow-xs"
        >
          <Compass className="w-12 h-12 stroke-[1.5] animate-spin-slow" />
          <div className="absolute -top-1 -right-1 bg-brand-primary text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            404
          </div>
        </motion.div>

        {/* Text Area */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="space-y-3.5"
        >
          <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-brand-heading tracking-tight">
            Lost Your Way?
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-brand-paragraph max-w-sm mx-auto">
            The page you are looking for does not exist, has been archived, or was moved to another location.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-brand-hover text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/faq"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-brand-heading border border-gray-200 font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <HelpCircle className="w-4 h-4 text-brand-primary" />
            <span>Visit Help Center</span>
          </Link>
        </motion.div>

        {/* Subtle Decorative Hint */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-[11px] font-semibold text-brand-muted uppercase tracking-widest pt-4"
        >
          Precise Piercing Products
        </motion.p>
      </div>
    </div>
  );
}
