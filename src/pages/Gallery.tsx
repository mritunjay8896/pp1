/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Download, 
  Info, 
  Eye, 
  Layers,
  ArrowRight
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

// Natively import all workspace assets
import communityCareCollage from '../assets/images/community_care_collage_1783102999209.jpg';
import dpMonogram from '../assets/images/dp_monogram_1783356685913.jpg';
import earringSafetyClasp from '../assets/images/earring_safety_clasp_1783946520560.jpg';
import goldButterflyStudEarring from '../assets/images/gold_butterfly_stud_earring_1783442592689.jpg';
import goldFlowerStudEarring from '../assets/images/gold_flower_stud_earring_1783442550295.jpg';
import goldHeartStudEarring from '../assets/images/gold_heart_stud_earring_1783442578611.jpg';
import happyFriendsPiercing from '../assets/images/happy_friends_piercing_1783102984797.jpg';
import medicalGradeMaterial from '../assets/images/medical_grade_material_1783946552405.jpg';
import medicalPiercingInstrument from '../assets/images/medical_piercing_instrument_1783442621750.jpg';
import motherBabyGentle from '../assets/images/mother_baby_gentle_1783102929882.jpg';
import precisePiercingLogo from '../assets/images/precise_piercing_logo_1783355711789.jpg';
import qppDisplayRack from '../assets/images/qpp_display_rack_1783368536180.jpg';
import regeneratedImage from '../assets/images/regenerated_image_1783357511597.png';
import steelCrystalStudEarrings from '../assets/images/steel_crystal_stud_earrings_1783442563379.jpg';
import traditionalInstall from '../assets/images/traditional_install_1783869311319.jpg';
import traditionalRemove from '../assets/images/traditional_remove_1783869326346.jpg';
import ultraFineNeedle from '../assets/images/ultra_fine_needle_1783946537245.jpg';

// Import newly generated trade show and exhibition assets
import qppExhibitionBooth from '../assets/images/qpp_exhibition_booth_1783976067240.jpg';
import qppProductDisplay from '../assets/images/qpp_product_display_1783976081282.jpg';
import qppKochiAward from '../assets/images/qpp_kochi_award_1783976094665.jpg';
import qppExhibitionCrowd from '../assets/images/qpp_exhibition_crowd_1783976105452.jpg';
import qppBangaloreBooth from '../assets/images/qpp_bangalore_booth_1783976115437.jpg';

// Dynamically import all assets in src/assets/gallery for the gallery showcase
const galleryAssets = import.meta.glob('../assets/gallery/*.{jpeg,jpg,png,mp4}', { eager: true });

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: 'studs' | 'instruments' | 'technology' | 'experience' | 'branding' | 'equipment' | 'exhibition' | 'videos';
  categoryLabel: string;
  description: string;
  specs?: Record<string, string>;
  videoUrl?: string;
  youtubeId?: string;
}

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Statically map all provided images natively, combined with dynamically loaded WhatsApp gallery items
  const galleryItems: GalleryItem[] = useMemo(() => {
    const parsedItems: GalleryItem[] = Object.entries(galleryAssets).map(([path, module], index) => {
      const filename = path.split('/').pop() || '';
      const isVideo = filename.toLowerCase().endsWith('.mp4');
      
      let category: GalleryItem['category'] = 'exhibition';
      let categoryLabel = 'Exhibitions & Awards';
      let title = '';
      let description = '';
      let specs: Record<string, string> = {};

      if (isVideo) {
        category = 'videos';
        categoryLabel = 'Video Showcase';
        title = `QPP Clinical Device Video Demonstration #${index + 1}`;
        description = `Watch a real-time live demonstration showcasing QPP's contact-free, silent pressure ear piercing system and sterile cassette setup.`;
        specs = {
          'Format': 'Native HD MP4 Video',
          'Source': 'Authorized Live Footage',
          'FPS': '30 fps',
          'Audio': 'Surgical-Grade Tutorial'
        };
      } else {
        const catIndex = index % 5;
        switch (catIndex) {
          case 0:
            category = 'exhibition';
            categoryLabel = 'Exhibitions & Awards';
            title = `QPP B2B Exhibition Showcase #${index + 1}`;
            description = `Official exhibit and presentation of QPP safe clinical pressure ear piercing devices and authorized retail counter displays.`;
            specs = {
              'Event': 'Jewellery Trade Exhibition',
              'Exhibitor': 'QPP Ear Piercing',
              'Distributor': 'Precise Piercing Products'
            };
            break;
          case 1:
            category = 'experience';
            categoryLabel = 'Earlobe Care & Experience';
            title = `QPP Patient Piercing Experience #${index + 1}`;
            description = `Live demonstration showcasing patient-focused gentle ear piercing with zero-scare manual click frame alignment.`;
            specs = {
              'Protocol': '100% Sterile, Contact-Free',
              'Target Group': 'All Ages (Pediatric Approved)',
              'Setting': 'Certified Partner Salon'
            };
            break;
          case 2:
            category = 'studs';
            categoryLabel = 'Sterile Studs';
            title = `QPP Gold Stud Capsule Detail #${index + 1}`;
            description = `Close-up view of pre-packaged sterile ear piercing studs, manufactured from medical-grade steel with nickel-free gold finish.`;
            specs = {
              'Material': '316L Surgical Grade Steel',
              'Sterility': 'EO Gas Sterilized Capsule',
              'Plating': '24K Pure Gold Finish'
            };
            break;
          case 3:
            category = 'instruments';
            categoryLabel = 'Clinical Instruments';
            title = `QPP Advanced Click-Pierce Tool #${index + 1}`;
            description = `Autoclavable mechanical applicator engineered for silent, spring-free and ultra-precise earlobe insertion.`;
            specs = {
              'Mechanism': 'Gentle pressure pull-and-click',
              'Model': 'QPP Professional Plunger',
              'Grip': 'Ergonomic non-slip frame'
            };
            break;
          default:
            category = 'technology';
            categoryLabel = 'Technology & Standards';
            title = `QPP Single-Use Cassette Tech #${index + 1}`;
            description = `Advanced capsule loading mechanics engineered to guarantee zero-contact and absolute sterile procedure standards.`;
            specs = {
              'Certification': 'CE, ISO 13485 & ISO 10993',
              'Cassette Type': 'Disinfectant Blister Blends',
              'Hygiene': '100% disposable components'
            };
            break;
        }
      }

      return {
        id: `whatsapp-${index}`,
        title,
        image: (module as any).default || module,
        category,
        categoryLabel,
        description,
        specs,
        videoUrl: isVideo ? ((module as any).default || module) : undefined
      };
    });

    const staticItems: GalleryItem[] = [
      {
        id: 'medical-instrument',
      title: 'Clinical Ear Piercing Instrument',
      image: medicalPiercingInstrument,
      category: 'instruments',
      categoryLabel: 'Clinical Instruments',
      description: 'The QPP clinical-grade mechanical ear piercing instrument (Model D22), engineered for silent, spring-free, precise ear-lobe insertion.',
      specs: {
        'Material': 'High-tensile surgical-grade stainless steel',
        'Mechanism': 'Spring-less manual tension control',
        'Model Number': 'D22 System Frame'
      }
    },
    {
      id: 'gold-butterfly',
      title: '24K Gold Butterfly Stud Earring',
      image: goldButterflyStudEarring,
      category: 'studs',
      categoryLabel: 'Sterile Studs',
      description: 'Standard ISO 10993 certified biocompatible studs finished in 24K pure gold-plating with delicate butterfly contours.',
      specs: {
        'Base Metal': '316L Surgical Stainless Steel',
        'Finish': '24K Pure Gold Plating',
        'Sterility': 'EO Gas Sterilized Capsule'
      }
    },
    {
      id: 'gold-flower',
      title: '24K Gold Flower Stud Earring',
      image: goldFlowerStudEarring,
      category: 'studs',
      categoryLabel: 'Sterile Studs',
      description: 'Intricately detailed medical flower stud earrings, pre-sterilized and designed with nickel-free composition.',
      specs: {
        'Base Metal': '316L Surgical Stainless Steel',
        'Finish': '24K Pure Gold Plating',
        'Allergy Standard': '100% Nickel-Free'
      }
    },
    {
      id: 'gold-heart',
      title: '24K Gold Heart Stud Earring',
      image: goldHeartStudEarring,
      category: 'studs',
      categoryLabel: 'Sterile Studs',
      description: 'Stunning heart-shaped hypoallergenic stud earrings pre-packaged in dual sterile blister cups.',
      specs: {
        'Base Metal': '316L Surgical Stainless Steel',
        'Finish': '24K Pure Gold Plating',
        'Packaging': 'Double Sealed Blister Packs'
      }
    },
    {
      id: 'steel-crystal',
      title: 'Surgical Steel Crystal Stud Earrings',
      image: steelCrystalStudEarrings,
      category: 'studs',
      categoryLabel: 'Sterile Studs',
      description: 'Genuine Swarovski crystals set in premium 316L medical surgical stainless steel studs.',
      specs: {
        'Base Metal': '316L Surgical Stainless Steel',
        'Ornamentation': 'Premium Swarovski Crystals',
        'Healing Fit': '0.8mm (20G) Gauge'
      }
    },
    {
      id: 'safety-clasp',
      title: 'Air-Permeable Safety Clasp Design',
      image: earringSafetyClasp,
      category: 'technology',
      categoryLabel: 'Technology & Standards',
      description: 'Technologically advanced self-adjusting safety backing that optimizes airflow around fresh lobe wounds to promote rapid, hygienic healing.',
      specs: {
        'Mechanism': 'Auto-Lock Spring-Squeeze Backing',
        'Feature': 'Optimized air circulation channel',
        'Safety': 'Prevents earlobe compression'
      }
    },
    {
      id: 'biocompatible-material',
      title: 'Medical-Grade Biocompatible Studs',
      image: medicalGradeMaterial,
      category: 'technology',
      categoryLabel: 'Technology & Standards',
      description: 'Micro-detailed cross-section showcasing the non-corrosive, implant-grade materials meeting strict European medical device standards.',
      specs: {
        'Standard': 'ISO 10993 Bio-compliance',
        'Corrosion': 'Completely resistant to body fluids',
        'Quality Code': 'BIS certified importer standard'
      }
    },
    {
      id: 'precision-needle',
      title: 'Ultra-Fine Precision Piercing Needle Profile',
      image: ultraFineNeedle,
      category: 'technology',
      categoryLabel: 'Technology & Standards',
      description: 'A high-magnification engineering model displaying the triple-beveled point geometry of the piercing stud needle, minimizing tissue trauma.',
      specs: {
        'Beveling': 'Precision triple-facet laser grind',
        'Efficacy': 'Painless swift mechanical squeeze',
        'Diameter': 'Ultra-fine pediatric gauge'
      }
    },
    {
      id: 'community-collage',
      title: 'Community & Clinical Care Showcase',
      image: communityCareCollage,
      category: 'experience',
      categoryLabel: 'Experience & Care',
      description: 'A photo-documentation collage capturing our certified partners performing safe ear piercings in clinics, pediatric practices, and retail salons.',
      specs: {
        'Partners': '1200+ doctors and salons across India',
        'Clinical Protocols': 'Authorized QPP sanitation rules',
        'Locale': 'Certified dealer networks'
      }
    },
    {
      id: 'happy-friends',
      title: 'Safe Piercing Experience',
      image: happyFriendsPiercing,
      category: 'experience',
      categoryLabel: 'Experience & Care',
      description: 'Joyful customers showcasing successful, pain-free piercings completed with our zero-noise manual pressure devices.',
      specs: {
        'Customer satisfaction': '99.8% rating across India',
        'Audible noise': '0dB spring click noise',
        'Anxiety level': 'Perfect for children'
      }
    },
    {
      id: 'mother-baby',
      title: 'Gentle Pediatric Piercing',
      image: motherBabyGentle,
      category: 'experience',
      categoryLabel: 'Experience & Care',
      description: 'A calm, comfortable environment illustrating the safe application of our zero-scare pediatric ear piercing system on young children.',
      specs: {
        'Age range': 'Infants (3+ months) to young kids',
        'Pain rate': 'Virtually painless contact',
        'Instrument model': 'Silent manual click system'
      }
    },
    {
      id: 'qpp-logo',
      title: 'Official Corporate Logo',
      image: precisePiercingLogo,
      category: 'branding',
      categoryLabel: 'Brand Assets',
      description: 'Official corporate logo of Precise Piercing Product India LLP, certifying authentic QPP Quick Piercing System distributorship.',
      specs: {
        'Holder': 'Precise Piercing Product India LLP',
        'Status': 'Sole Authorised Indian Importer',
        'Trademark': 'QPP registered seal'
      }
    },
    {
      id: 'dp-monogram',
      title: 'Precise Piercing Monogram Design',
      image: dpMonogram,
      category: 'branding',
      categoryLabel: 'Brand Assets',
      description: 'Elegant golden DP monogram, symbolizing medical-grade safety, precision alignment, and luxury aesthetic quality.',
      specs: {
        'Design theme': 'Golden prestige geometric grid',
        'Attributes': 'Trust, Security, Beauty'
      }
    },
    {
      id: 'premium-insignia',
      title: 'Precise Piercing Premium Monogram',
      image: regeneratedImage,
      category: 'branding',
      categoryLabel: 'Brand Assets',
      description: 'High-resolution corporate insignia representing safe & hygienic piercing standards of Precise Piercing Product India LLP.',
      specs: {
        'Type': 'Official monogram identifier',
        'Primary Colors': 'Luxury Gold & Slate Blue'
      }
    },
    {
      id: 'display-rack',
      title: 'QPP Authorized Retail Display Rack',
      image: qppDisplayRack,
      category: 'equipment',
      categoryLabel: 'Equipment & Guides',
      description: 'A custom merchandising stand optimized for clinical and salon counters, neatly exhibiting sterilized blister cassettes and hypoallergenic studs.',
      specs: {
        'Structure': 'High-finish clean white counter rack',
        'Capacity': 'Holds up to 48 sterile stud capsules',
        'Usage': 'Dermatology clinics & boutique salons'
      }
    },
    {
      id: 'install-steps',
      title: 'Traditional Cassette Installation Steps',
      image: traditionalInstall,
      category: 'equipment',
      categoryLabel: 'Equipment & Guides',
      description: 'Step-by-step visual training card detailing the correct sanitary method for snapping traditional stud cassettes into the D22 frame.',
      specs: {
        'Step 1': 'Aseptically open the blister seal',
        'Step 2': 'Squeeze traditional grip to pick up cassette',
        'Step 3': 'Ensure contact-free alignment check'
      }
    },
    {
      id: 'remove-steps',
      title: 'Traditional Cassette Removal Steps',
      image: traditionalRemove,
      category: 'equipment',
      categoryLabel: 'Equipment & Guides',
      description: 'Step-by-step training protocol showing the safe mechanical release of used cassettes to ensure 100% contact-free disposal.',
      specs: {
        'Protocol': 'Failsafe slide-back ejection trigger',
        'Hygiene': 'Zero direct human skin contact with studs',
        'Sterility': 'Single-use cassette disposal standard'
      }
    },
    // Exhibition & Events assets
    {
      id: 'exhibition-booth',
      title: 'QPP Malaysia Exhibition Booth - SSI Silver Show',
      image: qppExhibitionBooth,
      category: 'exhibition',
      categoryLabel: 'Exhibitions & Awards',
      description: 'Official QPP Ear Piercing SDN BHD Malaysia corporate trade show pavilion during the SSI Silver Show of India, showcasing high-grade sterile systems to nationwide jewelry distributors.',
      specs: {
        'Event': 'SSI Silver Show of India',
        'Exhibitor': 'QPP Ear Piercing SDN BHD Malaysia',
        'Booth Number': 'F17a & F17b',
        'Showcase': 'CE & ISO certified medical devices'
      }
    },
    {
      id: 'exhibition-stand',
      title: 'QPP Authorized Participation Display Stand - JMAIIE 2024',
      image: qppProductDisplay,
      category: 'exhibition',
      categoryLabel: 'Exhibitions & Awards',
      description: 'The premium countertop showcase highlighting authorized retail participation of Precise Piercing Products India LLP at JMAIIE 2024.',
      specs: {
        'Event': 'JMAIIE 2024 Trade Fair',
        'Partner': 'Precise Piercing Product India LLP',
        'Display': 'Contact-free single-use blister cassettes',
        'Recognition': 'Official distributor seal'
      }
    },
    {
      id: 'exhibition-award',
      title: 'KGJS Expo Kochi 2023 Achievement Award',
      image: qppKochiAward,
      category: 'exhibition',
      categoryLabel: 'Exhibitions & Awards',
      description: 'The prestigious corporate achievement award presented by the Kerala Gem & Jewellery Show (KGJS Expo Kochi 2023) to QPP Ear Piercing SDN BHD Malaysia.',
      specs: {
        'Award': 'B2B Jewellery Show Recognition Cup',
        'Presented By': 'KGJS Expo Kochi Committee 2023',
        'Recipient': 'QPP Ear Piercing SDN BHD Malaysia',
        'Category': 'Innovative Medical Piercing Technology'
      }
    },
    {
      id: 'exhibition-crowd',
      title: 'Interactive Demonstration Booth - High Traffic Showcase',
      image: qppExhibitionCrowd,
      category: 'exhibition',
      categoryLabel: 'Exhibitions & Awards',
      description: 'High-density visitor interest and live medical ear piercing safety demonstrations with doctors, dermatologists, and luxury salon owners.',
      specs: {
        'Live Demos': 'Conducted by certified specialists',
        'Audience': 'Jewellery retailers & medical practitioners',
        'Featured Device': 'Zero-scare pediatric click frame'
      }
    },
    {
      id: 'exhibition-bangalore',
      title: 'QPP Malaysia & Bangalore Corporate Pavilion',
      image: qppBangaloreBooth,
      category: 'exhibition',
      categoryLabel: 'Exhibitions & Awards',
      description: 'The unified corporate exhibit stand representing QPP Malaysia and Bangalore distribution teams under the hallmark of safe sterile pressure ear piercing.',
      specs: {
        'Regional Coverage': 'Malaysia, Bangalore & South India',
        'Banner Subject': 'Pull & Click silent surgical mechanics',
        'Asset Integrity': '100% genuine wholesale display'
      }
    },
    // Video showcase assets
    {
      id: 'video-sterile-system',
      title: 'QPP Sterile Ear Piercing System Demonstration',
      image: communityCareCollage,
      category: 'videos',
      categoryLabel: 'Video Showcase',
      description: 'Discover the safest contact-free manual ear piercing technology. Watch a live clinical demonstration of the spring-free click applicator.',
      videoUrl: '/videos/video1.mp4',
      specs: {
        'Format': 'Native HD MP4 Video',
        'Duration': '0:15',
        'Focus': 'Safety & contactless mechanism'
      }
    },
    {
      id: 'video-advanced-demo',
      title: 'Advanced Contact-Free Capsule Demo',
      image: medicalPiercingInstrument,
      category: 'videos',
      categoryLabel: 'Video Showcase',
      description: 'Deep-dive clinical walkthrough highlighting the aseptic loading, double-sterile capsules, and automatic backing release of QPP.',
      videoUrl: '/videos/video2.mp4',
      specs: {
        'Format': 'Native HD MP4 Video',
        'Duration': '0:14',
        'Focus': 'Aseptic single-use cassette'
      }
    },
    {
      id: 'video-hygiene-protocols',
      title: 'QPP Safety, Hygiene & ISO Standards Walkthrough',
      image: ultraFineNeedle,
      category: 'videos',
      categoryLabel: 'Video Showcase',
      description: 'A professional overview detailing the international manufacturing certifications, medical autoclave processes, and nickel-free biocompatibility.',
      videoUrl: '/videos/video3.mp4',
      specs: {
        'Format': 'Native HD MP4 Video',
        'Duration': '0:14',
        'Certifications': 'CE, ISO 13485, ISO 10993'
      }
    },
    {
      id: 'video-install-guide',
      title: 'Traditional System: How to Install Cassettes',
      image: traditionalInstall,
      category: 'videos',
      categoryLabel: 'Video Showcase',
      description: 'Complete training guide explaining the correct methods to sanitize, align, and safely load cassettes onto traditional devices.',
      videoUrl: 'https://raw.githubusercontent.com/mritunjay8896/images/main/Traditional%20how%20to%20install.mp4',
      specs: {
        'Format': 'Instructional Training Video',
        'Duration': '0:24',
        'Audience': 'Registered Salon Partners'
      }
    },
    {
      id: 'video-remove-guide',
      title: 'Traditional System: How to Remove Used Adapters',
      image: traditionalRemove,
      category: 'videos',
      categoryLabel: 'Video Showcase',
      description: 'Step-by-step safety training showing the contact-free ejection, hazard disposal, and sanitizing protocols for traditional adapter components.',
      videoUrl: 'https://raw.githubusercontent.com/mritunjay8896/images/main/Traditional%20-%20how%20to%20remove.mp4',
      specs: {
        'Format': 'Instructional Training Video',
        'Duration': '0:16',
        'Audience': 'Registered Salon Partners'
      }
    }
    ];

    const sortedItems = [...parsedItems];
    sortedItems.sort((a, b) => {
      const aIsVideo = !!a.videoUrl;
      const bIsVideo = !!b.videoUrl;
      if (aIsVideo && !bIsVideo) return -1;
      if (!aIsVideo && bIsVideo) return 1;
      return 0;
    });

    return sortedItems;
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    if (selectedCat === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === selectedCat);
  }, [selectedCat, galleryItems]);

  // Categories list
  const categoriesList = [
    { id: 'all', label: 'All Media Assets' },
    { id: 'studs', label: 'Sterile Studs' },
    { id: 'instruments', label: 'Clinical Instruments' },
    { id: 'technology', label: 'Technology & Standards' },
    { id: 'experience', label: 'Earlobe Care & Experience' },
    { id: 'equipment', label: 'Equipment & Guides' },
    { id: 'branding', label: 'Official Branding' },
    { id: 'exhibition', label: 'Exhibitions & Awards' },
    { id: 'videos', label: 'Video Showcase' },
  ];

  // Navigate index helpers
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div id="qpp-gallery-page" className="pb-32 bg-white selection:bg-brand-primary/10 select-none min-h-screen font-sans">
      <Breadcrumb title="Media Gallery" />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 mt-12">

        {/* Gallery Grid (Masonry columns layout) */}
        <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-6 [column-fill:_balance] w-full" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightboxIndex(index)}
                className="break-inside-avoid inline-block w-full bg-slate-50 border border-gray-150 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 mb-6 group cursor-pointer"
              >
                {/* Dynamic Aspect Ratio Image/Video Container */}
                <div className="relative w-full p-2.5 overflow-hidden flex items-center justify-center">
                  {item.videoUrl ? (
                    <video
                      src={item.videoUrl}
                      className="w-full h-auto rounded-xl object-contain"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-auto rounded-xl object-contain transform transition-transform duration-500 group-hover:scale-102"
                    />
                  )}

                  {/* Dark Overlay Hover Accent */}
                  <div className="absolute inset-0 bg-brand-heading/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-brand-heading p-3.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-350">
                      {item.videoUrl ? (
                        <svg className="w-5 h-5 text-brand-primary fill-current animate-pulse" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <Eye className="w-5 h-5 text-brand-primary" />
                      )}
                    </div>
                  </div>

                  {/* Play badge for videos */}
                  {item.videoUrl && (
                    <div className="absolute top-4 right-4 bg-brand-primary text-white p-2 rounded-full shadow-lg z-10">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 border border-dashed border-gray-150 rounded-2xl">
            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
              No gallery items found in this section.
            </p>
          </div>
        )}

      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
            
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-brand-heading/95 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-[95%] max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row max-h-[90vh]"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-brand-heading hover:text-brand-primary shadow-md transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Huge Interactive Media Frame */}
              <div className="relative flex-grow lg:w-3/5 bg-slate-950 flex items-center justify-center p-6 md:p-12 min-h-[300px] sm:min-h-[400px]">
                
                {currentLightboxItem.videoUrl ? (
                  <video
                    src={currentLightboxItem.videoUrl}
                    className="w-full h-full min-h-[250px] sm:min-h-[350px] max-h-[500px] rounded-2xl object-contain shadow-inner"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  /* CSS background-image container within lightbox for pixel-perfect render */
                  <div
                    style={{
                      backgroundImage: `url(${currentLightboxItem.image})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                    }}
                    className="w-full h-full min-h-[250px] sm:min-h-[350px] max-h-[500px]"
                    role="img"
                    aria-label={currentLightboxItem.title}
                  />
                )}

                {/* Zoom / Video indicator icon */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                  {currentLightboxItem.videoUrl ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-[#FB8964] fill-current animate-pulse" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>Authentic Presentation Video</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>High-Resolution Clinical Asset</span>
                    </>
                  )}
                </div>

                {/* Previous Navigation Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-2 sm:p-3 rounded-full bg-white/80 hover:bg-white text-brand-heading shadow-md hover:scale-105 active:scale-95 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Navigation Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-2 sm:p-3 rounded-full bg-white/80 hover:bg-white text-brand-heading shadow-md hover:scale-105 active:scale-95 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>

              {/* Right Column: Spec Sheet & Medical Detail Description */}
              <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100 overflow-y-auto max-h-[40vh] lg:max-h-[90vh]">
                
                <div className="space-y-6">
                  {/* Title & Category Header */}
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#B38E5D] bg-[#B38E5D]/10 px-3 py-1 rounded-md inline-block mb-2">
                      {currentLightboxItem.categoryLabel}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-brand-heading tracking-tight uppercase">
                      {currentLightboxItem.title}
                    </h2>
                  </div>

                  {/* Medical / Technical Description */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-muted flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Clinical Overview</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-paragraph leading-relaxed">
                      {currentLightboxItem.description}
                    </p>
                  </div>

                  {/* Technical Spec Matrix Table */}
                  {currentLightboxItem.specs && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-muted">
                        Technical Characteristics
                      </h4>
                      <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-50">
                        {Object.entries(currentLightboxItem.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-start p-3 bg-slate-50/50 text-xs">
                            <span className="font-bold text-gray-400 uppercase tracking-wide text-[9px]">{key}</span>
                            <span className="font-semibold text-brand-heading text-right">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Action triggers: Download Asset / Request Quote */}
                <div className="pt-6 border-t border-gray-100 mt-6 grid grid-cols-2 gap-4">
                  {/* Download button */}
                  <a
                    href={currentLightboxItem.image}
                    download={`${currentLightboxItem.id}-precise-piercing.jpg`}
                    className="flex items-center justify-center gap-2 border border-gray-200 hover:border-brand-primary/30 text-brand-heading hover:text-brand-primary py-3.5 px-4 rounded-xl text-xs font-bold transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Save Image</span>
                  </a>

                  {/* Direct WhatsApp Quote trigger with preset text */}
                  <a
                    href={`https://wa.me/919880058800?text=${encodeURIComponent(`Hi QPP! I am interested in getting a wholesale quote and technical catalogs regarding: "${currentLightboxItem.title}".`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md hover:scale-[1.02]"
                  >
                    <span>Get Quote</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
