/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductDownload {
  label: string;
  url: string;
  type: 'manual' | 'catalog' | 'certificate';
}

export interface Product {
  id?: string;
  name: string;
  slug: string;
  category: string; // e.g. "instruments", "studs", "aftercare"
  description: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  downloads: ProductDownload[];
  images: string[];
  thumbnail: string;
  manual?: string;
  catalog?: string;
  status: 'active' | 'archived';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id?: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id?: string;
  title: string;
  image: string;
  category: string;
  description?: string;
}

export interface DownloadItem {
  id?: string;
  title: string;
  description: string;
  fileSize: string;
  fileType: string; // e.g. "PDF"
  url: string;
  category: 'instruments' | 'studs' | 'aftercare' | 'corporate';
}

export interface FAQItem {
  question: string;
  answer: string;
}
