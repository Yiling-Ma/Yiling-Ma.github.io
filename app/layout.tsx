import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yiling Ma — Research Portfolio',
  description:
    'Research portfolio and selected work by Yiling Ma, a prospective PhD student.',
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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
