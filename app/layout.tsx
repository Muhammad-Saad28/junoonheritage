import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUNOON | The Soul of Pakistani Cuisine",
  description: "An archival culinary journey traversing royal Mughal repasts and the raw, wood-fired hearths of the Indus.",
  icons: {
    icon: "/logo.png",
  }
};

import JunoonLight from "@/components/JunoonLight";

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
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-fixed">
        <JunoonLight />
        {children}
      </body>
    </html>
  );
}
