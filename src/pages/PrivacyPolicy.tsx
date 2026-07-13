/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function PrivacyPolicy() {
  return (
    <div id="qpp-privacy-page" className="pb-24 space-y-12">
      <Breadcrumb title="Privacy Policy" />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 prose prose-slate">
        <div className="bg-white border border-gray-100 p-8 sm:p-12 rounded-[32px] space-y-6 text-brand-paragraph leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-heading mb-4">Privacy & Data Governance</h2>
          <p className="text-sm sm:text-base">
            This Privacy Policy governs the manner in which **Precise Piercing Products India LLP** collects, uses, maintains, and discloses information collected from users of the website `https://precisepiercing.in`. This policy applies to the site and all corporate product distribution lines and training certification registrations offered.
          </p>

          <h3 className="text-lg font-bold text-brand-heading mt-6">Personal Identification Data</h3>
          <p className="text-sm">
            We collect personal identification data from Users when they fill out our partner dealership forms, general contact forms, or register for training. This information includes name, email address, corporate telephone number, medical licensing coordinates, and business location. We only collect such data when voluntarily submitted.
          </p>

          <h3 className="text-lg font-bold text-brand-heading mt-6">Data Sharing and Non-Disclosure (NDA)</h3>
          <p className="text-sm">
            Precise Piercing Products India LLP does not sell, trade, or rent user data to third parties. We may share corporate business data with our European head offices to validate import registration numbers, coordinate direct logistics, or issues official sterilization standard certifications.
          </p>

          <h3 className="text-lg font-bold text-brand-heading mt-6">Contact Us</h3>
          <p className="text-sm">
            If you have any questions or require modifications to your corporate records, please email our Delhi board of directors at: <strong className="text-brand-heading">info@precisepiercing.in</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
