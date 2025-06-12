import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Crafticom - Handcrafted Treasures Marketplace',
  description:
    'Discover unique handmade products from passionate artisans. Crafticom connects craft enthusiasts with talented artisans offering handmade crafts, home décor, and artisanal food items.',
  keywords: [
    'handmade crafts',
    'artisan marketplace',
    'handcrafted products',
    'artisanal food',
    'home décor',
    'craft enthusiasts',
    'handmade treasures',
  ],
  authors: [{ name: 'Crafticom Team' }],
  openGraph: {
    title: 'Crafticom - Handcrafted Treasures Marketplace',
    description:
      'Discover unique handmade products from passionate artisans. Connect with talented craftspeople offering handmade treasures.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Crafticom',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crafticom - Handcrafted Treasures Marketplace',
    description: 'Discover unique handmade products from passionate artisans',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
