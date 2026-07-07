/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Category, GalleryItem, DownloadItem, FAQItem } from '../types';

// Categories expected by CategoryGrid and firebase
export const CATEGORIES: Category[] = [
  {
    id: 'rigid-boxes',
    name: 'Rigid Boxes',
    slug: 'rigid-boxes',
    description: 'Ultra-premium rigid cardboard packaging with luxury texture linings, ideal for jewelry, studs, and presentation instruments.',
    image: 'rigid-boxes'
  },
  {
    id: 'cardboard-boxes',
    name: 'Cardboard Boxes',
    slug: 'cardboard-boxes',
    description: 'Eco-friendly double-walled corrugated cardboard shippers and retail display boxes designed for clinical environments.',
    image: 'cardboard-boxes'
  },
  {
    id: 'paper-bags',
    name: 'Paper Bags',
    slug: 'paper-bags',
    description: 'Elegant heavyweight boutique carrier bags with custom ribbon or rope handles for professional retail presentation.',
    image: 'paper-bags'
  },
  {
    id: 'paper-hangers',
    name: 'Paper Hangers',
    slug: 'paper-hangers',
    description: 'Recyclable high-density paper hangers and display cards optimized for exhibiting sterling silver and surgical studs.',
    image: 'paper-hangers'
  },
  {
    id: 'hangtags-labels',
    name: 'Hangtags & Labels',
    slug: 'hangtags-labels',
    description: 'Pre-printed clinical compliance barcode labels and foil-stamped product identification hangtags.',
    image: 'hangtags-labels'
  }
];

// Fallback catalog products matching the corporate categories
export const PRODUCTS: Product[] = [
  {
    id: 'traditional-instrument',
    name: 'Traditional Ear Piercing Instrument (D22)',
    slug: 'traditional-instrument',
    category: 'Traditional',
    description: "The classic spring-less medical instrument trusted worldwide. Eliminates noisy spring triggers to prevent child anxiety while delivering 100% accurate visual alignment.",
    features: [
      'Comfort: Zero spring trigger noise prevents pediatric panic',
      'Hygiene: Easy to sterilize non-corrosive surgical steel frame',
      'Accuracy: Direct mechanical grip for millimeter-perfect alignment'
    ],
    specifications: {
      'Mechanism': 'Spring-less direct manual squeeze',
      'Composition': 'High-tensile medical grade stainless steel',
      'Compatibility': 'Standard traditional stud cassettes'
    },
    applications: ['Surgical clinics', 'Professional piercing salons', 'Medical centers'],
    downloads: [
      { label: 'Traditional System Manual', url: '#', type: 'manual' },
      { label: 'Sterility Assurance Report', url: '#', type: 'catalog' }
    ],
    images: ['https://qpp-ep.com/wp-content/uploads/2023/05/D22-1536x1536.png'],
    thumbnail: 'https://qpp-ep.com/wp-content/uploads/2023/05/D22-1536x1536.png',
    status: 'active',
    featured: false,
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-06-01T00:00:00Z'
  },
  {
    id: 'click-piercing-system',
    name: 'Click Disposable Manual Pressure System',
    slug: 'click-piercing-system',
    category: 'Click',
    description: 'Fully sterile, single-use, pressure-based manual piercing system. Standardised pre-loaded disposable cartridges eliminate any direct hand contact with the studs.',
    features: [
      'Sterility: 100% contact-free loading from sealed medical cartridges',
      'Pressure: Smooth hand-pressure mechanism is ultra-quiet and painless',
      'Safety: Integrated lock-on butterfly backs adjust automatically'
    ],
    specifications: {
      'Cartridge type': 'Pre-loaded EO gas sterilized single blister',
      'Materials': 'High-performance medical grade polymer housing',
      'Safety Standard': 'ISO 13485 medical device compliant'
    },
    applications: ['Retail salons', 'Pediatric practices', 'Pharmacies and beauty studios'],
    downloads: [
      { label: 'Click System Guide', url: '#', type: 'manual' }
    ],
    images: ['https://qpp-ep.com/wp-content/uploads/2023/05/Piercing-Gun-Click-1536x1536.png'],
    thumbnail: 'https://qpp-ep.com/wp-content/uploads/2023/05/Piercing-Gun-Click-1536x1536.png',
    status: 'active',
    featured: true,
    createdAt: '2026-01-05T00:00:00Z',
    updatedAt: '2026-05-15T00:00:00Z'
  },
  {
    id: 'blief-sterilized-studs',
    name: 'Blief Sterilized Studs & Clasps',
    slug: 'blief-sterilized-studs',
    category: 'Blief',
    description: 'Beautiful, hypoallergenic, nickel-free medical earrings pre-packaged in individual sterilized capsules. Ensures a completely safe and stylish healing process.',
    features: [
      'Purity: 100% hypoallergenic, nickel-free composition',
      'Design: Certified premium Swarovski crystals and genuine gold plating',
      'Healing: Air-permeable safety clasps prevent tissue compression'
    ],
    specifications: {
      'Metal Grade': '316L Surgical Stainless Steel / 24K Gold Plated',
      'Packaging': 'Double sealed EO gas sterilized blister cups',
      'Pediatric Safe': 'Yes, ideal for sensitive infant ear lobes'
    },
    applications: ['New piercings healing', 'Sensitive skin jewelry', 'Daily medical-grade luxury wear'],
    downloads: [
      { label: 'Jewelry Metal Quality Certificate', url: '#', type: 'catalog' }
    ],
    images: ['https://qpp-ep.com/wp-content/uploads/2023/11/Untitled-122-1-768x768.jpg'],
    thumbnail: 'https://qpp-ep.com/wp-content/uploads/2023/11/Untitled-122-1-768x768.jpg',
    status: 'active',
    featured: true,
    createdAt: '2026-02-10T00:00:00Z',
    updatedAt: '2026-06-10T00:00:00Z'
  }
];

// Gallery Media Items fallback
export const GALLERY: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Sterile Blister Assembly',
    image: 'https://qpp-ep.com/wp-content/uploads/2023/11/Untitled-122-1-768x768.jpg',
    category: 'studs',
    description: 'Clinical assembly room showcasing European-certified packaging for sterile earring studs.'
  },
  {
    id: 'gallery-2',
    title: 'Traditional Instrument Tray',
    image: 'https://qpp-ep.com/wp-content/uploads/2023/05/D22-1536x1536.png',
    category: 'instruments',
    description: 'Sterilized medical stainless steel instruments prepared for professional clinical usage.'
  }
];

// Resource Downloads list fallback
export const DOWNLOADS: DownloadItem[] = [
  {
    id: 'dl-1',
    title: 'QPP Piercing System Complete Catalog',
    description: 'The comprehensive distributor guide showing sizes, metal purity, and certification documentation for all Traditional, Click, and Blief lines.',
    fileSize: '14.8 MB',
    fileType: 'PDF Brochure',
    url: '#',
    category: 'corporate'
  },
  {
    id: 'dl-2',
    title: 'Click System Hygiene Compliance Manual',
    description: 'Detailed protocol booklet for technicians outlining sterilization, disposable cartridges, skin prepping, and ear healing guidelines.',
    fileSize: '3.2 MB',
    fileType: 'PDF Guide',
    url: '#',
    category: 'instruments'
  }
];

// FAQs fallback for FAQ.tsx
export const FAQS: FAQItem[] = [
  {
    question: 'Are QPP studs hypoallergenic and sterile?',
    answer: 'Absolutely. All QPP earring studs are pre-sterilized with E.O. Gas in sealed blister packs. They are manufactured using medical-grade 316L surgical stainless steel or pure biocompatible titanium, meeting stringent European and Indian BIS clinical safety directives.'
  },
  {
    question: 'How do I request wholesale prices or apply as an authorized state dealer?',
    answer: 'Please navigate to our "Dealer" or "Contact" page and fill out the wholesale form, or instantly click the floating WhatsApp button to speak with our Delhi head office trade desk directly at +91 98800 58800.'
  },
  {
    question: 'Does the Click Piercing System require electricity or noisy compressors?',
    answer: 'No. The Click system operates entirely on smooth mechanical hand pressure, ensuring a 100% silent, pain-free, and stress-free piercing experience, which is particularly beneficial for pediatric and pediatric ear piercings.'
  }
];
