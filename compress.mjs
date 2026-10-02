import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const framesDir = path.join(__dirname, 'public', 'frames');
const outDir = path.join(__dirname, 'public', 'frames-compressed');

async function processFrames() {
  console.log('Starting compression of frames...');
  try {
    await fs.mkdir(outDir, { recursive: true });
    
    const files = await fs.readdir(framesDir);
    const webpFiles = files.filter(f => f.endsWith('.webp'));
    console.log(`Found ${webpFiles.length} frames to process.`);

    let processed = 0;
    for (const file of webpFiles) {
      const filePath = path.join(framesDir, file);
      const outPath = path.join(outDir, file);

      // Compress and resize to the new folder
      await sharp(filePath)
        .resize({ width: 854, withoutEnlargement: true }) // Scale down to 480p equivalent
        .webp({ quality: 40, effort: 6 }) 
        .toFile(outPath);
      
      processed++;
      if (processed % 50 === 0) {
        console.log(`Processed ${processed}/${webpFiles.length} frames...`);
      }
    }
    console.log('Compression complete!');
  } catch (err) {
    console.error('Error during compression:', err);
  }
}

processFrames();
