/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FAQS } from '../data/products';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQS = FAQS.filter(
    f => f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
         f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="qpp-faq-page" className="pb-24 space-y-16">
      <Breadcrumb title="Frequently Asked Questions" />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* FAQ Intro Left (40%) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full inline-block">
              Support Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-heading tracking-tight leading-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-brand-paragraph">
              Whether you are a parent booking your baby\'s first ear piercing, a salon professional upgrading your piercing guns, or a jewelry brand looking to optimize retail margins, we are here to support you.
            </p>

            {/* Interactive Search bar */}
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search support questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-full pl-12 pr-6 py-3.5 text-sm font-semibold focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
              />
            </div>
            
            <div className="p-6 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl flex gap-3 text-xs sm:text-sm text-brand-paragraph leading-normal">
              <HelpCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
              <span>For immediate telephone support regarding clinic set-up or order dispatch: call our Delhi desk at <strong>+91 98765 43210</strong>.</span>
            </div>
          </div>

          {/* FAQ Accordions Right (60%) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFAQS.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 border border-gray-150 rounded-2xl">
                <p className="font-bold text-brand-heading">No Questions Match Your Search</p>
                <p className="text-xs text-brand-muted mt-1">Try searching for keywords like "nickel", "child", "sterile", or "lotion".</p>
              </div>
            ) : (
              filteredFAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:border-gray-200 transition-colors"
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-6 sm:p-7 flex justify-between items-center text-left gap-4 focus:outline-none"
                    >
                      <span className="font-extrabold text-brand-heading text-base sm:text-lg tracking-tight leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-brand-primary transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Content */}
                    {isOpen && (
                      <div className="px-7 pb-7 text-sm sm:text-base leading-relaxed text-brand-paragraph border-t border-gray-50 pt-5 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
