const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Replace href="#" with actual Next.js Link tags or just update hrefs
code = code.replace(/href="#"/g, (match, offset, str) => {
  // we can use a simpler replacement if we just look at the data-path
  return match;
});

// Let's do string replacement for the specific links in page.tsx
code = code.replace(/<a aria-current="page"([^>]+)data-path="our-story" href="#">/g, '<a aria-current="page"$1data-path="our-story" href="/">');
code = code.replace(/<a([^>]+)data-path="menu" href="#">/g, '<a$1data-path="menu" href="/menu">');
code = code.replace(/<a([^>]+)data-path="experience" href="#">/g, '<a$1data-path="experience" href="/experience">');
code = code.replace(/<a([^>]+)data-path="gallery" href="#">/g, '<a$1data-path="gallery" href="/gallery">');
code = code.replace(/<a([^>]+)data-path="reservations" href="#">/g, '<a$1data-path="reservations" href="/reservations">');

fs.writeFileSync('app/page.tsx', code);
