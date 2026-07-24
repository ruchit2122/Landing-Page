import Reveal from '../components/Reveal';
import Faq from '../components/Faq';
import Counter from '../components/Counter';

const WHATSAPP =
  'https://wa.me/919999999999?text=Hi%20Acharya%20Ji%2C%20I%20need%20guidance%20for%20my%20relationship.';

const PROBLEMS = ['Feeling Distant', 'Family Interference', 'Divorce Threat', 'Cheating'];

const BULLETS = [
  'Precise, chart-based solutions designed to remove relationship blocks.',
  'Proven guidance to heal your bond, restore peace, and reunite stronger than before.',
  'Uncover the hidden astrological reasons behind fights, distance, and third-party issues.',
  'Put an end to the endless loop of daily arguments and growing distance.',
];

const STATS = [
  { value: '3', label: 'Generations of Astrological Wisdom' },
  { value: '3,000+', label: 'Relations Saved' },
  { value: '50,000+', label: 'Consultations' },
  { value: '10+', label: 'Countries' },
];

const SIGNS = [
  'Tiny arguments turn into days of no talking and constant tension',
  'They avoid talking to you, stay busy, and feel emotionally distant.',
  'Family members, in-laws, or an outsider are creating problems in your relationship.',
  'Secrecy, lying, or past mistakes are making it hard to trust each other again.',
  'Discussions of leaving or ending the relationship are happening more and more often.',
  'No space to express your feelings to save your relationship',
  'Constant misunderstandings & unresolved issues leading to unnecessary fights.',
];

const TESTIMONIALS = [
  {
    text: 'We had stopped talking for weeks. After the remedies, the tension at home slowly cooled down and we finally sat and spoke properly.',
    name: 'Priya S.',
    place: 'Mumbai',
  },
  {
    text: 'My in-laws were constantly interfering. Acharya Ji pointed out exactly where the disturbance was coming from. Things are far more peaceful now.',
    name: 'Rahul M.',
    place: 'Dubai',
  },
  {
    text: 'We were one step away from separation papers. The guidance gave us a calm space to reconnect instead of fighting every single day.',
    name: 'Anjali K.',
    place: 'London',
  },
  {
    text: 'Everything stayed completely private. That mattered the most to me. The clarity I received was worth every minute.',
    name: 'Vikram D.',
    place: 'Toronto',
  },
  {
    text: 'The distance between us had become unbearable. Within weeks of following the remedies, the warmth slowly returned.',
    name: 'Meera R.',
    place: 'Ahmedabad',
  },
  {
    text: 'I finally understood the real reason behind our endless arguments. It was not what I assumed at all.',
    name: 'Sanjay P.',
    place: 'Singapore',
  },
];

function WaIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.83 9.83 0 004.7 1.2h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0012.04 2zm0 17.94h-.01a8.2 8.2 0 01-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.13 8.13 0 01-1.25-4.34c0-4.52 3.68-8.2 8.2-8.2a8.14 8.14 0 015.8 2.4 8.1 8.1 0 012.4 5.8c0 4.52-3.68 8.19-8.2 8.19z" />
    </svg>
  );
}

function Cta({ children = 'BOOK NOW', className = '', variant = 'primary' }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === 'outline' ? 'btn-outline' : 'btn-primary'} ${className}`}
    >
      <WaIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="relative">
      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">Vedic Relationship Guidance</p>
          <h1 className="display text-[2rem] leading-[1.12] text-ink sm:text-[3rem]">
            Tired of Fights, Feeling Distant &amp; Unspoken Tension in Your Marriage or Relationship?
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-body">
            Stop Watching Your Relationship Fall Apart; get proven Astrological guidance to bring back love and peace
            with your partner
          </p>

          {/* problem chips */}
          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            {PROBLEMS.map((p) => (
              <span
                key={p}
                className="rounded-full border px-4 py-2 text-[0.8rem] font-medium text-body"
                style={{ borderColor: 'var(--c-line)' }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-2xl bg-ink px-8 py-11 sm:px-12 sm:py-12 lg:px-16">
          <div className="flex flex-col items-center gap-9 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:text-left">
            <div className="max-w-2xl">
              <span className="eyebrow mb-4 block text-white/45">Take the first step</span>
              <p className="display text-[1.45rem] leading-snug text-white sm:text-[1.85rem]">
                Save Your Relationship &amp; Marriage Before Damage Is Permanent!
              </p>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-white/65">
                Get Confidential Astrological Solutions via WhatsApp Today
              </p>
            </div>
            <Cta variant="outline" className="w-full shrink-0 sm:w-auto lg:px-10">
              BOOK NOW
            </Cta>
          </div>
        </div>
      </section>

      {/* ================= BULLETS ================= */}
      <section className="border-t py-20 sm:py-24" style={{ borderColor: 'var(--c-line)' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="eyebrow mb-4">What You Receive</p>
              <h2 className="display text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
                Real answers. Real remedies.
              </h2>
              <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-body">
                Every reading is built around your birth chart — not generic advice.
              </p>
              <Cta className="mt-8">Book your WhatsApp consultation</Cta>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2" style={{ borderColor: 'var(--c-line)', background: 'var(--c-line)' }}>
              {BULLETS.map((b, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="h-full bg-white p-7">
                    <span className="display text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <p className="mt-3 text-[0.97rem] leading-relaxed text-body">{b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-14 text-center">
            <p className="eyebrow mb-4 text-white/45">By The Numbers</p>
            <h2 className="display text-[1.7rem] leading-tight text-white sm:text-[2.2rem]">
              A legacy couples have trusted for generations
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className={`px-4 text-center lg:px-8 ${i > 0 ? 'lg:border-l lg:border-white/15' : ''}`}
              >
                <p className="display text-[2.8rem] leading-none tracking-tight text-white sm:text-[3.4rem]">
                  <Counter value={s.value} />
                </p>
                <div className="mx-auto mt-4 h-px w-8 bg-white/25" />
                <p className="mx-auto mt-4 max-w-[11rem] text-[0.82rem] uppercase leading-snug tracking-wider text-white/55">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIGNS ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="eyebrow mb-4">Does This Sound Familiar</p>
            <h2 className="display text-[1.7rem] leading-tight text-ink sm:text-[2.2rem]">
              If your relationship or marriage starts sounding like this…
            </h2>
          </Reveal>

          <div className="mt-12 divide-y" style={{ borderColor: 'var(--c-line)' }}>
            {SIGNS.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-5 py-5" style={{ borderColor: 'var(--c-line)' }}>
                  <span className="display shrink-0 text-[0.95rem] leading-6 text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[0.98rem] leading-relaxed text-body">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-12 text-center">
            <Cta>Book your WhatsApp consultation</Cta>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="border-t py-20 sm:py-24" style={{ borderColor: 'var(--c-line)' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Trusted Worldwide</p>
            <h2 className="display text-[1.7rem] leading-tight text-ink sm:text-[2.2rem]">
              Highly Confidential Astrological Guidance Trusted by Couples Globally
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <figure className="card flex h-full flex-col p-7">
                  <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-body">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t pt-5" style={{ borderColor: 'var(--c-line)' }}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-[0.78rem] font-semibold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-[0.88rem] font-medium text-ink">{t.name}</span>
                      <span className="block text-[0.76rem] text-muted">{t.place}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-t py-20 sm:py-24" style={{ borderColor: 'var(--c-line)' }}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-4">Your Questions</p>
            <h2 className="display text-[1.7rem] leading-tight text-ink sm:text-[2.2rem]">FAQs</h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="display text-[1.9rem] leading-tight text-white sm:text-[2.5rem]">
              Save Your Relationship &amp; Marriage Before Damage Is Permanent!
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[1rem] leading-relaxed text-white/70">
              Get Confidential Astrological Solutions via WhatsApp Today
            </p>
            <div className="mt-10">
              <Cta variant="outline">BOOK NOW</Cta>
            </div>
            <p className="mx-auto mt-10 max-w-lg text-[0.78rem] leading-relaxed text-white/45">
              3 Generations of Astrological Wisdom · 3,000+ Relations Saved · 50,000+ Consultations · 10+ Countries
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= STICKY MOBILE CTA ================= */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t bg-white px-4 py-3 md:hidden"
        style={{ borderColor: 'var(--c-line)' }}
      >
        <Cta className="w-full" />
      </div>
      <div className="h-20 md:hidden" aria-hidden="true" />
    </main>
  );
}
