'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function WhatsAppButton() {
  const whatsappNumber = '919876543210'; // Replace with your WhatsApp number (country code + number, no spaces/dashes)
  const whatsappMessage = 'Hi! I would like to book a consultation.';
  const pixelFiredRef = useRef(false);

  const handleWhatsAppClick = () => {
    // Fire Meta Pixel Lead event only once
    if (typeof window !== 'undefined' && window.fbq && !pixelFiredRef.current) {
      try {
        pixelFiredRef.current = true;
        console.log('🔥 Firing Meta Pixel Lead event - WhatsApp Click');
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

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110 focus:outline-none"
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="h-14 w-14"
      />
    </button>
  );
}
