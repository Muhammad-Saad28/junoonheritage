const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public/frames');
const files = fs.readdirSync(dir);

async function convert() {
    for (let file of files) {
        if (file.endsWith('.jpg')) {
            const inputPath = path.join(dir, file);
            const outputPath = path.join(dir, file.replace('.jpg', '.webp'));
            await sharp(inputPath).webp().toFile(outputPath);
            fs.unlinkSync(inputPath);
            console.log(`Converted ${file}`);
        }
    }
    console.log("All frames converted to webp.");
}

convert();
