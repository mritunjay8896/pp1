/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Traditional from './pages/Traditional';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Downloads from './pages/Downloads';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';

// Scroll to top helper to improve navigation UX across page changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-brand-heading font-sans selection:bg-brand-primary/20 selection:text-brand-heading">
        
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Global Navigation Header */}
        <Header />

        {/* Core Router Viewport */}
        <main className="flex-grow pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/traditional" element={<Traditional />} />
            <Route path="/products/catalog" element={<Catalog />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Corporate Sitemap Footer */}
        <Footer />

        {/* Mobile Bottom Navigation Bar */}
        <BottomNav />

        {/* Floating WhatsApp Get Quote Button */}
        <a
          href="https://wa.me/919880058800?text=Hi!%20I%20am%20interested%20in%20QPP%20Ear%20Piercing%20products%20and%20would%20like%20to%20get%20a%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 md:bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          aria-label="Get Quote on WhatsApp"
          id="whatsapp-floating-button"
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-white text-[#16213E] text-xs font-bold px-3 py-1.5 rounded-sm shadow-md border border-[#E5E7EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:inline-block">
            Get Quote (+91 98800 58800)
          </span>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3.15 5.348 1.401 5.277 0 9.554-4.277 9.557-9.554.002-2.553-.988-4.955-2.788-6.758C16.804 2.44 14.4 1.45 12.01 1.45c-5.277 0-9.553 4.277-9.557 9.553-.001 1.914.501 3.78 1.457 5.422l-.959 3.502 3.596-.944zm11.03-5.633c-.268-.134-1.585-.782-1.831-.872-.247-.09-.427-.134-.607.134-.18.269-.696.872-.853 1.052-.157.18-.314.202-.582.068-.268-.134-1.134-.418-2.16-1.334-.799-.713-1.338-1.593-1.495-1.861-.157-.269-.017-.414.118-.548.121-.121.268-.314.403-.47.135-.157.18-.269.269-.449.09-.18.045-.337-.022-.47-.068-.134-.607-1.462-.831-2.002-.219-.527-.459-.456-.607-.456-.157-.002-.337-.002-.517-.002-.18 0-.471.067-.718.337-.247.269-.942.921-.942 2.247 0 1.326.965 2.606 1.099 2.786.135.18 1.9 2.901 4.594 4.061.64.276 1.14.44 1.53.564.643.205 1.228.176 1.69.108.514-.077 1.585-.648 1.81-1.27.225-.623.225-1.157.157-1.27-.067-.113-.247-.18-.515-.314z" />
          </svg>
        </a>

      </div>
    </Router>
  );
}
