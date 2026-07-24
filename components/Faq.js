'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'How do I book an online session and what happens next?',
    a: 'Simply click the book button to connect on WhatsApp. Once you share your details and schedule a time, you will have a direct 1-on-1 consultation with Acharya Ji to discuss your problems and get clear solutions.',
  },
  {
    q: 'Can astrology help if we are on the verge of separation or divorce?',
    a: 'Yes. Even when things feel completely broken, planetary remedies can calm down ongoing conflicts, reduce anger, and create a soft space for both of you to talk and reconnect.',
  },
  {
    q: 'Do I need exact birth details like birth time for this?',
    a: "Exact date, time, and place of birth give the most accurate chart reading. However, if you don't know the exact time, Acharya Ji can still guide you.",
  },
  {
    q: 'What if the problem is caused by family or a third person?',
    a: 'Third-party interference is very common. By looking at your charts, Acharya Ji can identify where this negative influence is coming from and give you specific remedies to protect your bond from outside disruptions.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-3xl border-t" style={{ borderColor: 'var(--c-line)' }}>
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b" style={{ borderColor: 'var(--c-line)' }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 py-5 text-left"
            >
              <span className="flex-1 text-[1rem] font-medium leading-snug text-ink">{item.q}</span>
              <span
                className="shrink-0 text-xl leading-none text-ink transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-[0.95rem] leading-relaxed text-body">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
