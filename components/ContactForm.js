'use client';

import { useState, useEffect } from 'react';

const WEBHOOK_URL = 'https://connect.pabbly.com/webhook-listener/webhook/IjU3NmMwNTZmMDYzNzA0MzY1MjY1Ig_3D_3D_pc/IjU3NjcwNTY5MDYzZTA0MzI1MjZiNTUzYzUxMzUi_pc';

const COUNTRY_CODES = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA / Canada' },
  { code: '+44', country: 'UK' },
  { code: '+61', country: 'Australia' },
  { code: '+86', country: 'China' },
  { code: '+81', country: 'Japan' },
  { code: '+33', country: 'France' },
  { code: '+49', country: 'Germany' },
];

const RELATIONSHIP_STATUS = [
  'Married',
  'In a committed relationship (unmarried)',
  'Separated/Divorced',
];

const CHALLENGES = [
  'Frequent fights & Arguments',
  'Third Person Interference',
  'Lost Attraction / Partner Losing Interest',
  'Long-distance Relationship Problems',
  'Trust issues / Misunderstandings',
];

const WHATSAPP_NUMBER = '919876543210'; // same number as WhatsAppButton.js
const WHATSAPP_MESSAGE = 'Hi! I would like to book a consultation.';

function getUTMParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
    referrer: document.referrer || '',
  };
}

export default function ContactForm({ className = '' }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    relationshipStatus: '',
    challenge: '',
    whatsappConsent: false,
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    referrer: '',
    submittedAt: '',
  });
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const utmParams = getUTMParams();
    setForm((prev) => ({
      ...prev,
      ...utmParams,
      submittedAt: new Date().toISOString(),
    }));
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!WEBHOOK_URL) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const payloadToSend = {
        ...form,
        submittedAt: new Date().toISOString(),
      };
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadToSend),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setShowModal(true);
      const utmParams = getUTMParams();
      setForm({
        fullName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        relationshipStatus: '',
        challenge: '',
        whatsappConsent: false,
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_content: utmParams.utm_content,
        utm_term: utmParams.utm_term,
        referrer: utmParams.referrer,
        submittedAt: new Date().toISOString(),
      });
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <>
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className={`mx-auto w-full max-w-2xl rounded-2xl border-[3px] border-[var(--c-ink)] bg-[var(--c-bg)] p-5 shadow-[6px_6px_0_0_var(--c-line)] sm:p-7 ${className}`}
    >
      <h2 className="mb-6 text-[1.5rem] font-bold text-ink">Expert Advice on WhatsApp</h2>
      <p className="mb-6 text-[0.95rem] text-body">
        Enter details for your <span className="font-semibold text-gold">100% free</span> strategy chat.
      </p>

      <div className="grid gap-4">
        {/* Full Name */}
        <label className="block text-left">
          <span className="mb-1.5 block text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-ink">
            Full Name<span className="text-gold">*</span>
          </span>
          <input
            type="text"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
            className="w-full rounded-xl border-2 border-[var(--c-line)] bg-[var(--c-bg-alt)] px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-gold"
            placeholder="Your full name"
          />
        </label>

        {/* Email */}
        <label className="block text-left">
          <span className="mb-1.5 block text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-ink">
            Email<span className="text-gold">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border-2 border-[var(--c-line)] bg-[var(--c-bg-alt)] px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-gold"
            placeholder="your@email.com"
          />
        </label>

        {/* Country Code & Phone */}
        <div className="grid grid-cols-3 gap-3">
          <label className="block text-left">
            <span className="mb-1.5 block text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-ink">
              Country
            </span>
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="w-full rounded-xl border-2 border-[var(--c-line)] bg-[var(--c-bg-alt)] px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-gold"
            >
              {COUNTRY_CODES.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.country} ({item.code})
                </option>
              ))}
            </select>
          </label>

          <label className="col-span-2 block text-left">
            <span className="mb-1.5 block text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-ink">
              Phone Number<span className="text-gold">*</span>
            </span>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border-2 border-[var(--c-line)] bg-[var(--c-bg-alt)] px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-gold"
              placeholder="1234567890"
            />
          </label>
        </div>

        {/* Relationship Status */}
        <label className="block text-left">
          <span className="mb-1.5 block text-[0.95rem] font-semibold text-ink">
            What is your current relationship status?
          </span>
          <select
            name="relationshipStatus"
            required
            value={form.relationshipStatus}
            onChange={handleChange}
            className="w-full rounded-xl border-2 border-[var(--c-line)] bg-[var(--c-bg-alt)] px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-gold"
          >
            <option value="">--Choose Your Option--</option>
            {RELATIONSHIP_STATUS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        {/* Challenge */}
        <label className="block text-left">
          <span className="mb-1.5 block text-[0.95rem] font-semibold text-ink">
            What challenge are you facing most right now?
          </span>
          <select
            name="challenge"
            required
            value={form.challenge}
            onChange={handleChange}
            className="w-full rounded-xl border-2 border-[var(--c-line)] bg-[var(--c-bg-alt)] px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-gold"
          >
            <option value="">--Choose Your Option--</option>
            {CHALLENGES.map((challenge) => (
              <option key={challenge} value={challenge}>
                {challenge}
              </option>
            ))}
          </select>
        </label>

        {/* WhatsApp Consent */}
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="whatsappConsent"
            checked={form.whatsappConsent}
            onChange={handleChange}
            className="mt-1 h-5 w-5 cursor-pointer accent-gold"
          />
          <span className="text-[0.9rem] text-body">
            By registering, I agree to receive informative updates about this and related events via WhatsApp
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary mt-4 w-full py-3 text-base font-semibold"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Booking...' : 'Book Your Consultation Now'}
        </button>

        {/* Status Messages */}
        {status === 'error' && (
          <p className="text-center text-[0.85rem] font-medium" style={{ color: 'var(--c-red)' }}>
            {!WEBHOOK_URL
              ? 'Form is not configured yet. Please contact support.'
              : 'Something went wrong. Please try again shortly.'}
          </p>
        )}
      </div>

      {/* Security Note */}
      <p className="mt-6 text-center text-[0.8rem] text-body opacity-70">
        100% secure. We hate spam too.
      </p>
    </form>

    {showModal && (
      <div
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4"
        onClick={() => setShowModal(false)}
      >
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-sm rounded-2xl border-[3px] border-[var(--c-ink)] bg-[var(--c-bg)] p-6 shadow-[6px_6px_0_0_var(--c-line)] text-center"
        >
          <button
            onClick={() => setShowModal(false)}
            aria-label="Close"
            className="absolute right-3 top-3 text-lg font-bold text-ink/50 hover:text-ink"
          >
            ✕
          </button>

          <h3 className="text-[1.3rem] font-bold text-ink">Thank You!</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-body">
            Acharya Aman Ji will contact you soon. If you want to connect with them now, click here.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 inline-flex w-full items-center justify-center gap-2 py-3 text-base font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    )}
    </>
  );
}