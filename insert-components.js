const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Add imports
if (!code.includes('import SignatureDishes')) {
  // Find where imports should go (top of file)
  code = `import SignatureDishes from '@/components/SignatureDishes';\nimport ChefPhilosophy from '@/components/ChefPhilosophy';\n` + code;
}

// Insert after the first </section>
const insertPos = code.indexOf('</section>') + '</section>'.length;
const newCode = code.slice(0, insertPos) + '\n\n<SignatureDishes />\n<ChefPhilosophy />\n' + code.slice(insertPos);

fs.writeFileSync('app/page.tsx', newCode);
