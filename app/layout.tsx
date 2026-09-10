import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yiling-ma.github.io'),
  title: 'Yiling Ma',
  description:
    'Yiling Ma is an MS Biostatistics student at Yale University working on trustworthy LLMs, multimodal AI, and AI for scientific decision-making.',
  authors: [{ name: 'Yiling Ma', url: 'https://yiling-ma.github.io/' }],
  keywords: [
    'Yiling Ma',
    'Yale University',
    'MS Biostatistics',
    'trustworthy LLMs',
    'multimodal AI',
    'scientific decision-making',
    'AI research',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Yiling Ma',
    description:
      'MS Biostatistics student at Yale University working on trustworthy LLMs, multimodal AI, and AI for scientific decision-making.',
    url: 'https://yiling-ma.github.io/',
    siteName: 'Yiling Ma',
    type: 'profile',
    images: [
      {
        url: '/yiling-photo.jpeg',
        width: 256,
        height: 256,
        alt: 'Yiling Ma',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Yiling Ma',
    description:
      'MS Biostatistics student at Yale University working on trustworthy LLMs, multimodal AI, and AI for scientific decision-making.',
    images: ['/yiling-photo.jpeg'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yiling Ma',
    url: 'https://yiling-ma.github.io/',
    image: 'https://yiling-ma.github.io/yiling-photo.jpeg',
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'Yale University',
      url: 'https://www.yale.edu/',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Kean University',
      url: 'https://www.kean.edu/',
    },
    jobTitle: 'MS Biostatistics student',
    sameAs: [
      'https://scholar.google.com/citations?user=iChZAC0AAAAJ',
      'https://github.com/Yiling-Ma',
      'https://www.linkedin.com/in/elena-ma-402a47310/',
    ],
    knowsAbout: [
      'Trustworthy large language models',
      'Multimodal artificial intelligence',
      'Scientific decision-making',
      'Biomedical AI',
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
