/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { getDownloadItems } from '../db/firebase';
import { DownloadItem } from '../types';
import { FileDown, Download, ShieldCheck, FileText, Info } from 'lucide-react';

export default function Downloads() {
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDownloads() {
      try {
        const data = await getDownloadItems();
        setDownloads(data);
      } catch (err) {
        console.error('Error loading downloads:', err);
      } finally {
        setLoading(false);
      }
    }
    loadDownloads();
  }, []);

  const filteredDownloads = selectedCat === 'all'
    ? downloads
    : downloads.filter(d => d.category === selectedCat);

  const handleDownload = (title: string) => {
    // Fictional clinical download helper alerting success of mock PDF saving
    alert(`Downloading ${title}... In a production environment, this link points to the secure Firebase Storage URL.`);
  };

  return (
    <div id="qpp-downloads-page" className="pb-24 space-y-16">
      <Breadcrumb title="Resources & Manuals" />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
        
        {/* Top Info Banner */}
        <div className="flex items-start gap-4 p-6 bg-brand-primary/5 border border-brand-primary/10 rounded-3xl mb-12">
          <Info className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
          <div className="text-xs sm:text-sm leading-relaxed text-brand-paragraph">
            <p className="font-extrabold text-brand-heading mb-1">Official Authorized Downloads</p>
            As the sole Indian importer, we provide certified English and bilingual Indian manuals. These PDFs are authorized by the QPP European head office and conform to international sterile health guidelines.
          </div>
        </div>

        {/* Categories Toolbar */}
        <div className="flex flex-wrap gap-2.5 mb-10 select-none">
          {['all', 'instruments', 'studs', 'aftercare', 'corporate'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold capitalize transition-all ${
                selectedCat === cat
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'bg-white border border-gray-200 text-brand-heading hover:border-brand-primary/30'
              }`}
            >
              {cat === 'all' ? 'All Resource Files' : cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-gray-50 border border-gray-100 rounded-3xl h-[180px] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="downloads-grid">
            {filteredDownloads.map((dl) => (
              <div 
                key={dl.id}
                className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all flex flex-col sm:flex-row justify-between items-start gap-6 group"
              >
                {/* Content */}
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-brand-heading text-base sm:text-lg group-hover:text-brand-primary transition-colors">
                        {dl.title}
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mt-1 inline-block">
                        {dl.fileType} • {dl.fileSize}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-paragraph leading-relaxed">
                    {dl.description}
                  </p>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(dl.title)}
                  className="flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-brand-heading text-white hover:bg-brand-primary transition-all text-xs font-bold w-full sm:w-auto flex-shrink-0 shadow-sm"
                  id={`btn-download-${dl.id}`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download File</span>
                </button>
              </div>
            ))}
          </div>
        )}

      </section>
    </div>
  );
}
