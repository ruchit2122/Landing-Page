'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
  const whatsappNumber = '919876543210'; // Replace with your WhatsApp number (country code + number, no spaces/dashes)
  const whatsappMessage = 'Hi! I would like to book a free consultation.';

  const handleWhatsAppClick = () => {
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
