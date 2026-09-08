import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Name — Research Portfolio',
  description:
    'Research portfolio and selected work by Your Name, a prospective PhD student.',
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
