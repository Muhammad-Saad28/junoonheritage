const fs = require('fs');
const path = require('path');

const htmlPath = 'e:/Own/Clients/JunonHeritage/stitch_junoon_luxury_pakistani_culinary_experience/junoon_the_soul_of_pakistani_cuisine/code.html';
const nextDir = 'e:/Own/Clients/JunonHeritage/junoon';

const html = fs.readFileSync(htmlPath, 'utf8');

// 1. Extract Tailwind config
const twMatch = html.match(/tailwind\.config=({[\s\S]*?})<\/script>/);
if (twMatch) {
    const rawConfig = twMatch[1];
    
    // Convert to TS module
    const finalTwConfigTs = `import type { Config } from "tailwindcss";

const parsedConfig = ${rawConfig};

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: parsedConfig.darkMode,
  theme: parsedConfig.theme,
  plugins: [],
};
export default config;
`;
    fs.writeFileSync(path.join(nextDir, 'tailwind.config.ts'), finalTwConfigTs);
}

// 2. Extract CSS
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
    const css = styleMatch[1];
    const globalsCss = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n${css}`;
    fs.mkdirSync(path.join(nextDir, 'src/app'), { recursive: true });
    fs.writeFileSync(path.join(nextDir, 'src/app/globals.css'), globalsCss);
}

// 3. Extract body and convert to JSX
let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (bodyMatch) {
    let body = bodyMatch[1];
    
    // Remove HTML comments
    body = body.replace(/<!--[\s\S]*?-->/g, '');
    
    const pageTsx = `import React from 'react';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: \`${body.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
    </>
  );
}
`;
    fs.writeFileSync(path.join(nextDir, 'src/app/page.tsx'), pageTsx);
}

// Extract body classes for layout.tsx
const bodyClassMatch = html.match(/<body class="([^"]+)"/);
const bodyClass = bodyClassMatch ? bodyClassMatch[1] : '';

const layoutTsx = `import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUNOON | The Soul of Pakistani Cuisine",
  description: "An archival culinary journey traversing royal Mughal repasts and the raw, wood-fired hearths of the Indus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&amp;family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body className="${bodyClass}">
        {children}
      </body>
    </html>
  );
}
`;

fs.writeFileSync(path.join(nextDir, 'src/app/layout.tsx'), layoutTsx);

console.log('Conversion complete.');
