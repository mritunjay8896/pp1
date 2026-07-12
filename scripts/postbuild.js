import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');
const destPath = path.join(distDir, '404.html');

try {
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, destPath);
    console.log('Successfully copied index.html to 404.html for SPA routing!');
  } else {
    console.warn('index.html not found in dist/ directory.');
  }
} catch (err) {
  console.error('Error copying index.html to 404.html:', err);
}
