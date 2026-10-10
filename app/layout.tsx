import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-display',
  display: 'swap',
});
const body = Jost({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const description =
  'Crystal Kizor designs climate-responsive spaces, African-rooted objects and futures shaped by place, culture and human flourishing.';

export const metadata: Metadata = {
  title: 'Crystal Kizor | Architect, designer and founder',
  description,
  openGraph: {
    title: 'Crystal Kizor',
    description,
    images: ['/img/portrait.webp'],
    type: 'website',
  },
};
export const viewport: Viewport = { themeColor: '#F5F0E8' };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
