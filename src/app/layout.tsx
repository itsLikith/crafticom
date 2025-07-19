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
  metadataBase: new URL('https://crafticom.vercel.app'),
  title: 'Crafticom - Handcrafted Treasures Marketplace',
  description:
    'Discover unique handmade products from passionate artisans. Crafticom connects craft enthusiasts with talented artisans offering handmade crafts.',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_ID',
  },
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
};

// Add JSON-LD structured data
function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Crafticom',
          description: 'Handcrafted Treasures Marketplace',
          url: 'https://crafticom.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate:
                'https://crafticom.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        }),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
