/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Mail, Phone, MapPin, Clock, Check, AlertCircle, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Formulate links for auto/manual action
  const getWhatsAppUrl = () => {
    const whatsappMsg = `Hello, here is a new inquiry submitted through the Precise Piercing QPP website:\n\n👤 *Name:* ${formData.name}\n✉️ *Email:* ${formData.email}\n📞 *Phone:* ${formData.phone}\n📝 *Message:* ${formData.message}`;
    return `https://wa.me/919880058800?text=${encodeURIComponent(whatsappMsg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all the required fields.');
      return;
    }
    setError('');

    // Trigger WhatsApp redirect
    try {
      window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error("Popup/Auto-open blocked", err);
    }

    setSubmitted(true);
  };

  return (
    <div id="qpp-contact-page" className="pb-24 space-y-16">
      <Breadcrumb title="Our Offices" />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Coordinates and info Left (45%) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full inline-block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-heading tracking-tight leading-tight mt-4">
                Office & Customer Care
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-brand-paragraph mt-4">
                For distribution processing, wholesale inquiries or immediate order updates, contact our central corporate helpdesk in Bengaluru.
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-6">
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-brand-primary flex-shrink-0 border border-gray-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-heading text-sm uppercase tracking-wide">Registered Indian Office</h4>
                  <p className="text-sm sm:text-base text-brand-paragraph leading-relaxed mt-1">
                    Precise Piercing Products India LLP,<br />
                    First Floor, Prestige Business Park,
                    8/213 1st Main Road, 2nd Cross Rd,<br />
                     near shiva temple, Kaveri Nagar, <br />
                     Kamala Nagar, Bengaluru, Karnataka 560096
                    
                    <br />
                    
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-brand-primary flex-shrink-0 border border-gray-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-heading text-sm uppercase tracking-wide">Authorized Direct Line</h4>
                  <p className="text-sm sm:text-base text-brand-paragraph leading-relaxed mt-1">
                    +91 9880058800, <br />
                    +91 9747940222

                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-brand-primary flex-shrink-0 border border-gray-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-heading text-sm uppercase tracking-wide">Licensing & Operations</h4>
                  <p className="text-sm sm:text-base text-brand-paragraph leading-relaxed mt-1">
                    info@precisepiercing.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-brand-primary flex-shrink-0 border border-gray-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-heading text-sm uppercase tracking-wide">Operational Hours</h4>
                  <p className="text-sm sm:text-base text-brand-paragraph leading-relaxed mt-1">
                    Monday to Saturday: 09:00 AM – 07:00 PM IST <br />
                    Sundays & National Holidays: Closed
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Lead Contact Form Right (55%) */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-100 p-8 sm:p-12 rounded-[36px]">
            {submitted ? (
              <div className="text-center py-8 space-y-6" id="contact-success-banner">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-brand-heading">Inquiry Details Prepared!</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-brand-paragraph max-w-md mx-auto">
                    We have prepared your inquiry. If WhatsApp did not open automatically, please click the button below to complete your submission:
                  </p>
                </div>

                {/* Inquiry Preview Card */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 text-left space-y-3.5 max-w-md mx-auto shadow-xs">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-brand-muted border-b border-gray-100 pb-2">
                    Inquiry Summary
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="text-brand-paragraph">
                      <span className="text-brand-muted font-semibold">Name:</span> <strong className="text-brand-heading font-bold">{formData.name}</strong>
                    </p>
                    <p className="text-brand-paragraph">
                      <span className="text-brand-muted font-semibold">Email:</span> <strong className="text-brand-heading font-semibold">{formData.email}</strong>
                    </p>
                    <p className="text-brand-paragraph">
                      <span className="text-brand-muted font-semibold">Phone:</span> <strong className="text-brand-heading font-bold">{formData.phone}</strong>
                    </p>
                    <div className="border-t border-gray-100 pt-2.5 mt-2.5">
                      <span className="text-brand-muted font-semibold text-xs block mb-1">Detailed Message:</span>
                      <p className="text-brand-paragraph text-xs bg-gray-50 p-3 rounded-xl italic leading-relaxed max-h-[100px] overflow-y-auto">
                        "{formData.message}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Single WhatsApp Dispatch Channel */}
                <div className="max-w-md mx-auto pt-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all w-full"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'general',
                        message: ''
                      });
                    }}
                    className="text-brand-muted hover:text-brand-primary font-bold text-xs uppercase tracking-wider underline underline-offset-4 transition-colors"
                  >
                    Start a New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-message-form">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-brand-heading tracking-tight mb-2">
                    Send Us an Official Message
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted">
                    Your contact and correspondence details are securely stored under corporate NDA protocols.
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-heading uppercase tracking-wide">
                      Your Name <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Deshmukh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-full px-5 py-3.5 text-sm font-semibold focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-heading uppercase tracking-wide">
                      Your Email <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-full px-5 py-3.5 text-sm font-semibold focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-heading uppercase tracking-wide">
                    Phone Number <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-full px-5 py-3.5 text-sm font-semibold focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-heading uppercase tracking-wide">
                    Detailed Message <span className="text-brand-primary">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter details of your salon network, requirements, or diagnostic clinic..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[56px] rounded-full bg-brand-primary hover:bg-brand-hover text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
                >
                  Submit Authorized Contact Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
