import Reveal from '../components/Reveal';
import Faq from '../components/Faq';
import Counter from '../components/Counter';
import Mandala from '../components/Mandala';
import VideoSlider from '../components/VideoSlider';

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

const TRUST = [
  { title: '100% Confidential', desc: 'Your story stays between you & Acharya Ji.' },
  { title: 'Rooted in Vedic Jyotish', desc: 'Ancient scriptural wisdom, never generic advice.' },
  { title: 'Blessings of 3 Generations', desc: 'A lineage devoted to healing bonds.' },
];

/* ---------- Icons ---------- */

function WaIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.83 9.83 0 004.7 1.2h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0012.04 2zm0 17.94h-.01a8.2 8.2 0 01-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.13 8.13 0 01-1.25-4.34c0-4.52 3.68-8.2 8.2-8.2a8.14 8.14 0 015.8 2.4 8.1 8.1 0 012.4 5.8c0 4.52-3.68 8.19-8.2 8.19z" />
    </svg>
  );
}

function Star({ className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.26L21.8 9.3l-5 4.86 1.2 6.84L12 17.77 5.99 21l1.2-6.84-5-4.86 6.9-1.04L12 2z" />
    </svg>
  );
}

function Stars({ className = '' }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 text-gold" />
      ))}
    </span>
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
      <WaIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="relative">
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-[#0e0c07] text-white">
        {/* decorative layer, contained to the hero's own box */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-mandala-bg">
            <Mandala className="mandala-backdrop" />
          </div>
          <div
            className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
            style={{ background: 'radial-gradient(circle, rgba(191,155,71,0.15), transparent 70%)' }}
          />
          <div className="absolute inset-0 opacity-60">
            {[
              [8, 16], [18, 62], [30, 10], [46, 78], [62, 14], [76, 58], [88, 24], [94, 70], [12, 88],
            ].map(([x, y], i) => (
              <span
                key={i}
                className="absolute h-[3px] w-[3px] rounded-full bg-white/50"
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            ))}
          </div>
          {/* inner vignette for a more composed, premium edge */}
          <div
            className="absolute inset-0"
            style={{ boxShadow: 'inset 0 0 12rem 2rem rgba(14,12,7,0.85)' }}
          />
        </div>

        {/* dark pool behind the copy so the gold mandala lines never cross the gold headline text */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 65% 62% at 50% 44%, rgba(14,12,7,0.94) 0%, rgba(14,12,7,0.8) 48%, rgba(14,12,7,0.35) 72%, transparent 88%)',
          }}
        />

        <div className="relative z-[2] mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <div className="mb-6 flex items-center justify-center gap-3" aria-hidden="true">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70" />
              <Star className="h-4 w-4 text-gold" />
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70" />
            </div>

            <p className="eyebrow" style={{ color: 'var(--c-gold-bright)' }}>
              Vedic Relationship Guidance
            </p>

            <h1
              className="display display-black mt-5 text-[1.85rem] leading-[1.16] xs:text-[2.1rem] sm:text-[2.7rem] sm:leading-[1.12] lg:text-[3.1rem]"
              style={{ textWrap: 'balance' }}
            >
              Tired of Fights, Feeling Distant &amp; Unspoken Tension in Your{' '}
              <span className="gold-text">Marriage or Relationship?</span>
            </h1>

            <p
              className="mx-auto mt-5 max-w-xl text-[0.98rem] font-light leading-relaxed text-white/70 sm:text-[1.05rem]"
              style={{ textWrap: 'balance' }}
            >
              Stop watching your relationship fall apart; get proven astrological guidance to bring back love
              and peace with your partner.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col items-center gap-4">
              <Cta className="w-full sm:w-auto">Chat on WhatsApp</Cta>

              <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[0.82rem] font-light text-white/60">
                <Stars className="align-middle" />
                <span className="font-medium text-white/80">Trusted by 3,000+ couples</span>
                <span className="text-white/30">·</span>
                <span>Private &amp; confidential</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 border-t border-white/10 pt-6">
              <div className="flex flex-wrap justify-center gap-2">
                {PROBLEMS.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-gold/25 bg-white/[0.03] px-4 py-1.5 text-[0.78rem] font-medium text-white/80 sm:px-4.5 sm:text-[0.82rem]"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="mx-auto mt-8 flex max-w-lg items-start justify-between gap-2">
                {STATS.map((s, i) => (
                  <div key={s.label} className={`flex-1 ${i > 0 ? 'border-l border-white/10 pl-2' : ''}`}>
                    <p className="display display-black text-[1.15rem] leading-none text-gold-bright sm:text-[1.4rem]">
                      <Counter value={s.value} />
                    </p>
                    <p className="mx-auto mt-2 max-w-[6.5rem] text-[0.62rem] font-light uppercase leading-snug tracking-[0.1em] text-white/45 sm:text-[0.66rem]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TRUST BAND ================= */}
      <section className="border-b border-[var(--c-line)] bg-[var(--c-bg-alt)]">
        <div className="mx-auto grid max-w-7xl divide-y divide-[var(--c-line)] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <div className="flex items-start gap-4 py-6 sm:px-6 sm:py-8">
                <Star className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-[0.95rem] font-semibold text-ink">{t.title}</p>
                  <p className="mt-1 text-[0.82rem] font-light leading-snug text-body">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= BULLETS ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow eyebrow-mark mb-4">What You Receive</p>
              <h2 className="display text-[2rem] leading-[1.08] text-ink sm:text-[2.7rem] sm:leading-[1.05]">
                Real answers.<br /><span className="gold-text">Sacred remedies.</span>
              </h2>
              <p className="mt-5 max-w-md text-[0.98rem] font-light leading-relaxed text-body sm:text-[1rem]">
                Every reading is drawn from your own birth chart and the wisdom of Vedic Jyotish — never
                generic advice, only guidance meant for your bond.
              </p>
              <Cta className="mt-7">Book your reading</Cta>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {BULLETS.map((b, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-2xl border border-[var(--c-line)] bg-[var(--c-bg)] p-4 transition-colors hover:border-gold-soft sm:p-6">
                    <span className="display text-xl text-gold sm:text-2xl">{String(i + 1).padStart(2, '0')}</span>
                    <span className="mt-3 gold-line" aria-hidden="true" />
                    <p className="mt-4 text-[0.85rem] font-light leading-relaxed text-body sm:text-[0.95rem]">{b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative overflow-hidden bg-[#0e0c07] py-16 text-white sm:py-24">
        <div className="hero-mandala-bg" aria-hidden="true">
          <Mandala className="mandala-backdrop" />
        </div>
        <div className="relative z-[1] mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-10 text-center sm:mb-14">
            <p className="eyebrow eyebrow-mark mb-4 justify-center" style={{ color: 'var(--c-gold-bright)' }}>
              By The Grace of the Stars
            </p>
            <h2 className="display text-[1.9rem] leading-tight sm:text-[2.8rem]">
              A legacy couples have trusted for <span className="gold-text">generations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className={`px-3 text-center sm:px-6 ${i > 0 ? 'lg:border-l lg:border-white/10' : ''}`}
              >
                <p className="display display-black text-[2.1rem] leading-none tracking-tight text-gold-bright sm:text-[3.2rem]">
                  <Counter value={s.value} />
                </p>
                <span className="mx-auto mt-4 block gold-line" aria-hidden="true" />
                <p className="mx-auto mt-4 max-w-[11rem] text-[0.72rem] font-medium uppercase leading-snug tracking-[0.14em] text-white/55 sm:text-[0.78rem]">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIGNS ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="eyebrow eyebrow-mark mb-4 justify-center">Does This Sound Familiar</p>
            <h2 className="display text-[1.9rem] leading-tight text-ink sm:text-[2.8rem]">
              If your relationship or marriage starts sounding like <span className="gold-text">this…</span>
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-[var(--c-line)] border-y border-[var(--c-line)] sm:mt-12">
            {SIGNS.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 py-5 sm:gap-5">
                  <span className="display shrink-0 text-[1rem] leading-6 text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[0.95rem] font-light leading-relaxed text-body sm:text-[0.98rem]">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-10 text-center sm:mt-12">
            <Cta className="w-full sm:w-auto">Book your WhatsApp consultation</Cta>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="border-t border-[var(--c-line)] bg-[var(--c-bg-alt)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow eyebrow-mark mb-4 justify-center">Blessings From Couples</p>
            <h2 className="display text-[1.9rem] leading-tight text-ink sm:text-[2.8rem]">
              Highly Confidential Astrological Guidance{' '}
              <span className="gold-text">Trusted by Couples Globally</span>
            </h2>
          </Reveal>

          <Reveal delay={90} className="mt-10 sm:mt-14">
            <VideoSlider />
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="mb-10 text-center sm:mb-12">
            <p className="eyebrow eyebrow-mark mb-4 justify-center">Your Questions</p>
            <h2 className="display text-[1.9rem] leading-tight text-ink sm:text-[2.8rem]">
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#0e0c07] py-16 text-white sm:py-28">
        <div className="hero-mandala-bg" aria-hidden="true">
          <Mandala className="mandala-backdrop" />
        </div>
        <div className="relative z-[1] mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="mx-auto mb-6 block gold-line" aria-hidden="true" />
            <h2 className="display display-black text-[2.1rem] leading-[1.06] sm:text-[3.2rem]">
              Save Your Relationship &amp; Marriage Before{' '}
              <span className="gold-text">Damage Is Permanent!</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[1rem] font-light leading-relaxed text-white/70 sm:text-[1.05rem]">
              Get Confidential Astrological Solutions via WhatsApp Today
            </p>
            <div className="mt-9">
              <Cta variant="outline" className="w-full sm:w-auto">BOOK NOW</Cta>
            </div>
            <p className="mx-auto mt-9 max-w-lg text-[0.8rem] font-light leading-relaxed text-white/45">
              3 Generations of Astrological Wisdom · 3,000+ Relations Saved · 50,000+ Consultations · 10+ Countries
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= STICKY MOBILE CTA ================= */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-[var(--c-dark)] px-4 py-3 md:hidden">
        <Cta className="w-full" />
      </div>
      <div className="h-24 md:hidden" aria-hidden="true" />
    </main>
  );
}
