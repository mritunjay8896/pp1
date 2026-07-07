/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, writeBatch, setDoc, query, where } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { Product, Category, GalleryItem, DownloadItem } from '../types';
import { PRODUCTS, CATEGORIES, GALLERY, DOWNLOADS } from '../data/products';

// Check if Firebase is genuinely configured with credentials
export const isFirebaseConfigured = !!(
  firebaseConfig &&
  firebaseConfig.projectId &&
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== ""
);

let dbInstance: any = null;

export function getDb() {
  if (!isFirebaseConfigured) {
    return null;
  }
  if (!dbInstance) {
    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      dbInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
      console.log('Firebase Firestore successfully initialized.');
    } catch (error) {
      console.error('Failed to initialize Firebase Firestore:', error);
      dbInstance = null;
    }
  }
  return dbInstance;
}

// Error Handler conforming to the FirestoreErrorInfo guidelines
enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
  };
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: null,
      email: null
    },
    operationType,
    path
  };
  console.error('Firestore Error details: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Fetch Categories
export async function getCategories(): Promise<Category[]> {
  const db = getDb();
  if (!db) {
    console.log('Firebase not configured. Returning local Categories.');
    return CATEGORIES;
  }

  const path = 'categories';
  try {
    const colRef = collection(db, path);
    const snap = await getDocs(colRef);
    if (snap.empty) {
      return CATEGORIES; // Return local fallback if collection is empty
    }
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Category));
  } catch (err) {
    // If it's a permission error, we throw conforming to specs
    return handleFirestoreError(err, OperationType.LIST, path);
  }
}

// Fetch Products
export async function getProducts(): Promise<Product[]> {
  const db = getDb();
  if (!db) {
    console.log('Firebase not configured. Returning local Products.');
    return PRODUCTS;
  }

  const path = 'products';
  try {
    const colRef = collection(db, path);
    const snap = await getDocs(colRef);
    if (snap.empty) {
      return PRODUCTS; // Return local fallback if collection is empty
    }
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Product));
  } catch (err) {
    return handleFirestoreError(err, OperationType.LIST, path);
  }
}

// Fetch Product by Slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const db = getDb();
  if (!db) {
    const localProd = PRODUCTS.find(p => p.slug === slug);
    return localProd || null;
  }

  const path = 'products';
  try {
    const colRef = collection(db, path);
    const q = query(colRef, where('slug', '==', slug));
    const snap = await getDocs(q);
    if (snap.empty) {
      // Fallback to local if not found in remote
      const localProd = PRODUCTS.find(p => p.slug === slug);
      return localProd || null;
    }
    const doc = snap.docs[0];
    return { id: doc.id, ...doc.data() } as Product;
  } catch (err) {
    return handleFirestoreError(err, OperationType.GET, `${path}/${slug}`);
  }
}

// Fetch Gallery
export async function getGalleryItems(): Promise<GalleryItem[]> {
  const db = getDb();
  if (!db) {
    return GALLERY;
  }

  const path = 'gallery';
  try {
    const colRef = collection(db, path);
    const snap = await getDocs(colRef);
    if (snap.empty) {
      return GALLERY;
    }
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as GalleryItem));
  } catch (err) {
    return handleFirestoreError(err, OperationType.LIST, path);
  }
}

// Fetch Downloads
export async function getDownloadItems(): Promise<DownloadItem[]> {
  const db = getDb();
  if (!db) {
    return DOWNLOADS;
  }

  const path = 'downloads';
  try {
    const colRef = collection(db, path);
    const snap = await getDocs(colRef);
    if (snap.empty) {
      return DOWNLOADS;
    }
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as DownloadItem));
  } catch (err) {
    return handleFirestoreError(err, OperationType.LIST, path);
  }
}

// Seed Firebase Firestore with initial QPP authorized catalog
export async function seedFirestoreDatabase(): Promise<{ success: boolean; message: string }> {
  const db = getDb();
  if (!db) {
    return { success: false, message: 'Firebase is not configured yet. Configure Firebase using the platform panel first.' };
  }

  try {
    console.log('Seeding categories...');
    const batch = writeBatch(db);
    
    // Seed Categories
    for (const cat of CATEGORIES) {
      const docRef = doc(db, 'categories', cat.id!);
      batch.set(docRef, {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        image: cat.image
      });
    }

    // Seed Products
    for (const prod of PRODUCTS) {
      const docRef = doc(db, 'products', prod.slug);
      batch.set(docRef, {
        name: prod.name,
        slug: prod.slug,
        category: prod.category,
        description: prod.description,
        features: prod.features,
        specifications: prod.specifications,
        applications: prod.applications,
        downloads: prod.downloads,
        images: prod.images,
        thumbnail: prod.thumbnail,
        status: prod.status,
        featured: prod.featured,
        createdAt: prod.createdAt,
        updatedAt: prod.updatedAt
      });
    }

    // Seed Gallery
    let gCount = 1;
    for (const gal of GALLERY) {
      const docRef = doc(db, 'gallery', `gallery_${gCount++}`);
      batch.set(docRef, {
        title: gal.title,
        image: gal.image,
        category: gal.category,
        description: gal.description || ''
      });
    }

    // Seed Downloads
    let dCount = 1;
    for (const dl of DOWNLOADS) {
      const docRef = doc(db, 'downloads', `download_${dCount++}`);
      batch.set(docRef, {
        title: dl.title,
        description: dl.description,
        fileSize: dl.fileSize,
        fileType: dl.fileType,
        url: dl.url,
        category: dl.category
      });
    }

    await batch.commit();
    return { success: true, message: 'Firestore Database successfully seeded with QPP authorized catalog!' };
  } catch (err) {
    console.error('Error during database seeding:', err);
    return { success: false, message: `Seeding failed: ${err instanceof Error ? err.message : String(err)}` };
  }
}
