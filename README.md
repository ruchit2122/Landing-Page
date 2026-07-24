# Relationship Astrology — Landing Page

Next.js 14 (App Router) + Tailwind CSS. Build tested, zero errors.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Change the WhatsApp number

Open `app/page.js`, line 4. Replace `919999999999` with your number (country code, no `+`, no spaces).

```js
const WHATSAPP = 'https://wa.me/919999999999?text=...';
```

## Deploy to Vercel

Push to GitHub → import on vercel.com → deploy. No env variables needed.

## Files

```
app/
  layout.js      Metadata + fonts
  page.js        All sections + content
  globals.css    Colors, animations, textures
components/
  Reveal.js      Scroll-reveal wrapper
  Faq.js         FAQ accordion
tailwind.config.js
```

## Sections

Hero → Bullets → Stats → Warning Signs → Testimonials → FAQ → Final CTA → Footer, plus a sticky mobile CTA bar.

## Notes

- Fonts: Fraunces (display) + Karla (body), loaded from Google Fonts.
- Colors are CSS variables in `globals.css` under `:root`.
- Respects `prefers-reduced-motion`.
# Landing-Page
