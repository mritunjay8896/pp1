/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function TermsOfService() {
  return (
    <div id="qpp-terms-page" className="pb-24 space-y-12">
      <Breadcrumb title="Terms of Service" />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 prose prose-slate">
        <div className="bg-white border border-gray-100 p-8 sm:p-12 rounded-[32px] space-y-6 text-brand-paragraph leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-heading mb-4">Terms and Wholesale Distribution Conditions</h2>
          <p className="text-sm sm:text-base">
            Welcome to `https://precisepiercing.in`. By accessing this corporate web portal, you agree to comply with and be bound by the following terms of service governing all transactions, product orders, and training registrations.
          </p>

          <h3 className="text-lg font-bold text-brand-heading mt-6">Sole Authorized Distribution Rights</h3>
          <p className="text-sm">
            All content, images, brochures, trademarks, and manuals displayed are protected under European and Indian intellectual property laws. Precise Piercing Products India LLP holds full authorization to utilize these assets for national product promotion. Reselling imported QPP cartridges or studs outside the territory of the Republic of India is strictly prohibited under brand license rules.
          </p>

          <h3 className="text-lg font-bold text-brand-heading mt-6">Clinical and Safety Standards</h3>
          <p className="text-sm">
            Partner dealers agree to only load sterile QPP studs into QPP patented instruments. Using third-party, non-sterile, or uncertified spring studs with QPP instruments immediately voids all clinical safety certifications, European liability insurances, and sole distributor guarantees.
          </p>

          <h3 className="text-lg font-bold text-brand-heading mt-6">Limitation of Corporate Liability</h3>
          <p className="text-sm">
            Precise Piercing Products India LLP is a logistics importer and educational distributor. Real-world piercing services must only be administered by trained, certified practitioners in compliant sterile surroundings. The final practitioner assumes full liability for procedural errors or localized infection issues resulting from inadequate skin preparation or user aftercare neglect.
          </p>
        </div>
      </section>
    </div>
  );
}
