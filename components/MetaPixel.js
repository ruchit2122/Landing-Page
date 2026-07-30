'use client';

import { useEffect } from 'react';

const PIXEL_ID = '4507778969494865';

export default function MetaPixel() {
  useEffect(() => {
    // Initialize fbq if not already done
    if (window.fbq) {
      console.log('✓ Meta Pixel already initialized');
      return;
    }

    // Create fbq stub before loading script
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize pixel
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
    console.log('✓ Meta Pixel initialized with ID:', PIXEL_ID);

    // Add noscript image fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = '1';
    img.width = '1';
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    console.log('✓ Meta Pixel component mounted');
  }, []);

  return null;
}
