import './globals.css';

export const metadata = {
  title: 'Save Your Relationship & Marriage — Confidential Astrological Guidance',
  description:
    'Stop watching your relationship fall apart. Get proven Astrological guidance to bring back love and peace with your partner. Confidential WhatsApp consultations.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0d0d',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
