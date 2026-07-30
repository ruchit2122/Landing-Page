import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import InstagramButton from '@/components/InstagramButton';
import MetaPixel from '@/components/MetaPixel';

export const metadata = {
  title: 'Save Your Relationship & Marriage — Confidential Relationship Coaching',
  description:
    'Stop watching your relationship fall apart. Get proven relationship coaching to bring back love and peace with your partner. Confidential consultations.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0d0d',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MetaPixel />
        {children}
        <InstagramButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
