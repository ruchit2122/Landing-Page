'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function InstagramButton() {
  const instagramUrl = 'https://www.instagram.com/acharyaamanofficial';
  const pixelFiredRef = useRef(false);

  const handleInstagramClick = () => {
    // Fire Meta Pixel Lead event only once
    if (typeof window !== 'undefined' && window.fbq && !pixelFiredRef.current) {
      try {
        pixelFiredRef.current = true;
        console.log('🔥 Firing Meta Pixel Lead event - Instagram Click');
        window.fbq('track', 'Lead', {
          currency: 'USD',
          value: 0,
        });
      } catch (err) {
        console.warn('⚠️ Error firing pixel:', err);
      }
    } else if (!window.fbq) {
      console.log('ℹ️ Meta Pixel not ready yet');
    }

    window.open(instagramUrl, '_blank');
  };

  return (
    <button
      onClick={handleInstagramClick}
      className="fixed bottom-24 right-6 z-50 transition-all duration-300 hover:scale-110 focus:outline-none"
      title="Follow us on Instagram"
      aria-label="Open Instagram profile"
    >
      <Image
        src="/instagram.png"
        alt="Instagram"
        width={56}
        height={56}
        className="h-14 w-14"
      />
    </button>
  );
}
