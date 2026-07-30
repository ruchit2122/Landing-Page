'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'How do I book an online session and what happens next?',
    a: 'Simply fill out the short form on this page. Once you share your details, your coach will personally reach out to schedule a direct 1-on-1 consultation to discuss your problems and get clear solutions.',
  },
  {
    q: 'Can coaching help if we are on the verge of separation or divorce?',
    a: 'Yes. Even when things feel completely broken, guided coaching can calm down ongoing conflicts, reduce anger, and create a soft space for both of you to talk and reconnect.',
  },
  {
    q: 'Do I need to share personal history before the session?',
    a: "Sharing your relationship history and current situation gives the most accurate guidance. If you're not sure where to start, your coach will walk you through it.",
  },
  {
    q: 'What if the problem is caused by family or a third person?',
    a: 'Third-party interference is very common. By understanding your situation, your coach can identify where this negative influence is coming from and give you specific strategies to protect your bond from outside disruptions.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-3xl border-t-[3px] border-[var(--c-ink)]">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b-[3px] border-[var(--c-ink)]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 py-5 text-left"
            >
              <span className="flex-1 text-[1rem] font-medium leading-snug text-ink">{item.q}</span>
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-gold bg-[var(--c-bg-alt)] text-lg font-bold leading-none text-gold transition-transform duration-300"
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
                <p className="pb-6 pr-10 text-[0.95rem] font-light leading-relaxed text-body">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
