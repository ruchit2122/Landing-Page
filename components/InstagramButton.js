'use client';

import Image from 'next/image';

export default function InstagramButton() {
  const instagramUrl = 'https://www.instagram.com/acharyaamanofficial';

  const handleInstagramClick = () => {
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
