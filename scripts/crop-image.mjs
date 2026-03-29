import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../public/hair2.jpg');
const outputPath = path.join(__dirname, '../public/hair2.jpg');

// Get image metadata first
const metadata = await sharp(inputPath).metadata();
console.log('Original dimensions:', metadata.width, 'x', metadata.height);

// Hair1.jpg is portrait format (approximately 4:5 ratio)
// We need to crop hair2.jpg to similar portrait ratio
const targetRatio = 4 / 5; // width / height ratio for portrait
const currentWidth = metadata.width;
const currentHeight = metadata.height;

// Calculate new dimensions to get portrait format
// We want to keep the full height and crop the width to center
const newWidth = Math.round(currentHeight * targetRatio);
const left = Math.round((currentWidth - newWidth) / 2);

console.log('Cropping to:', newWidth, 'x', currentHeight);
console.log('Left offset:', left);

await sharp(inputPath)
  .extract({
    left: left,
    top: 0,
    width: newWidth,
    height: currentHeight
  })
  .toFile(outputPath + '.tmp');

// Replace original with cropped version
import fs from 'fs';
fs.renameSync(outputPath + '.tmp', outputPath);

console.log('Image cropped successfully!');
