import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const docsDir = path.join(__dirname, '../docs');
const indexPath = path.join(distDir, 'index.html');
const destPath = path.join(distDir, '404.html');

// Helper to copy directory recursively
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyDirRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Helper to remove directory recursively (safer fallback for older Node versions)
function rmDirRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    const entries = fs.readdirSync(dirPath);
    for (const entry of entries) {
      const entryPath = path.join(dirPath, entry);
      if (fs.statSync(entryPath).isDirectory()) {
        rmDirRecursive(entryPath);
      } else {
        fs.unlinkSync(entryPath);
      }
    }
    fs.rmdirSync(dirPath);
  }
}

try {
  // 1. Copy index.html to 404.html in dist/ for SPA routing
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, destPath);
    console.log('Successfully copied index.html to 404.html for SPA routing in dist/!');
  } else {
    console.warn('index.html not found in dist/ directory.');
  }

  // 2. Clear old docs/ directory and copy entire dist/ to docs/
  console.log('Synchronizing dist/ to docs/ for GitHub Pages...');
  if (fs.existsSync(docsDir)) {
    rmDirRecursive(docsDir);
  }
  copyDirRecursive(distDir, docsDir);
  console.log('Successfully synchronized dist/ to docs/!');

} catch (err) {
  console.error('Error during postbuild processing:', err);
}

