'use client';

import { useEffect } from 'react';

const PIXEL_ID = '4507778969494865';

export default function MetaPixel() {
  useEffect(() => {
    // Check if fbq is already loaded
    if (window.fbq) {
      console.log('Meta Pixel already initialized');
      return;
    }

    // Load the pixel script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.onload = () => {
      console.log('Meta Pixel script loaded');
      if (window.fbq) {
        window.fbq('init', PIXEL_ID);
        window.fbq('track', 'PageView');
        console.log('Meta Pixel initialized with ID:', PIXEL_ID);
      }
    };
    script.onerror = () => {
      console.error('Failed to load Meta Pixel script');
    };

    document.head.appendChild(script);

    // Also add noscript pixel image for completeness
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = '1';
    img.width = '1';
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    console.log('Meta Pixel component mounted');
  }, []);

  return null;
}
