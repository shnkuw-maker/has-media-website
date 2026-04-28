import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HAS MEDIA | Luxury Marketing Agency Kuwait',
  description:
    'HAS MEDIA is a luxury bilingual marketing agency in Kuwait delivering premium branding, content, campaigns, and digital growth.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar">
      <body className="antialiased">{children}</body>
    </html>
  );
}
