import Reveal from '../components/Reveal';
import Faq from '../components/Faq';
import Counter from '../components/Counter';
import Mandala from '../components/Mandala';
import VideoSlider from '../components/VideoSlider';
import ContactForm from '../components/ContactForm';

const PROBLEMS = ['Feeling Distant', 'Family Interference', 'Divorce Threat', 'Cheating'];

const BULLETS = [
  'Practical, proven coaching techniques designed to remove relationship blocks.',
  'Guided sessions to heal your bond, restore peace, and reunite stronger than before.',
  'Uncover the real reasons behind fights, distance, and third-party issues.',
  'Put an end to the endless loop of daily arguments and growing distance.',
];

const STATS = [
  { value: '10+', label: 'Years of Coaching Experience' },
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
  { title: '100% Confidential', desc: 'Your story stays strictly between you & your coach.' },
  { title: 'Proven Coaching Methods', desc: 'Practical frameworks, never generic advice.' },
  { title: '10+ Years Experience', desc: 'A career devoted to healing bonds.' },
];

const SERVICES = [
  { title: 'Love & Marriage Counseling', desc: 'Structured sessions to resolve conflict and restore harmony between partners.' },
  { title: 'Divorce Prevention', desc: 'Targeted coaching to stop separation before it becomes permanent.' },
  { title: 'Extra-Marital Affairs', desc: 'Guided support to rebuild trust after infidelity or doubt.' },
  { title: 'Family Approval Coaching', desc: 'Communication strategies to ease family resistance and win support.' },
  { title: 'Pre-Marriage Compatibility', desc: 'Structured compatibility conversations before you commit.' },
  { title: 'Communication & Conflict Resolution', desc: 'Tools to break negative patterns affecting married life.' },
];

/* ---------- Icons ---------- */

function ArrowIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
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
      href="#contact-form"
      className={`${variant === 'outline' ? 'btn-outline' : 'btn-primary'} ${className}`}
    >
      {children}
      <ArrowIcon className="h-4 w-4" />
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
              Relationship Coaching &amp; Guidance
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
              Stop watching your relationship fall apart; get proven relationship coaching to bring back love
              and peace with your partner.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col items-center gap-4">
              <Cta className="hidden sm:inline-flex">Get Guidance Now</Cta>

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
                    className="rounded-xl border-2 px-4 py-2 text-[0.78rem] font-semibold sm:px-5 sm:py-2.5 sm:text-[0.82rem]"
                    style={{
                      borderColor: 'rgba(226,86,79,0.45)',
                      background: 'rgba(226,86,79,0.08)',
                      color: 'var(--c-red-bright)',
                    }}
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
                Real answers.<br /><span className="gold-text">Real solutions.</span>
              </h2>
              <p className="mt-5 max-w-md text-[0.98rem] font-light leading-relaxed text-body sm:text-[1rem]">
                Every session is built around your own relationship story — never
                generic advice, only guidance meant for your bond.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {BULLETS.map((b, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-2xl border-[3px] border-[var(--c-ink)] bg-[var(--c-bg)] p-4 shadow-[5px_5px_0_0_var(--c-line)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-gold hover:shadow-[7px_7px_0_0_var(--c-gold-soft)] sm:p-6">
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

      {/* ================= SERVICES ================= */}
      <section className="border-t border-[var(--c-line)] bg-[var(--c-bg-alt)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow eyebrow-mark mb-4 justify-center">Areas of Guidance</p>
            <h2 className="display text-[1.9rem] leading-tight text-ink sm:text-[2.8rem]">
              Coaching solutions for <span className="gold-text">every kind of bond</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="card h-full p-5 sm:p-6">
                  <Star className="h-5 w-5 text-gold" />
                  <p className="mt-4 text-[1rem] font-semibold text-ink">{s.title}</p>
                  <p className="mt-2 text-[0.85rem] font-light leading-relaxed text-body">{s.desc}</p>
                </div>
              </Reveal>
            ))}
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
              Track Record
            </p>
            <h2 className="display text-[1.9rem] leading-tight sm:text-[2.8rem]">
              A track record couples have <span className="gold-text">trusted for years</span>
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

          <div className="mt-10 divide-y-2 divide-[var(--c-line)] border-y-[3px] border-[var(--c-ink)] sm:mt-12">
            {SIGNS.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 py-5 sm:gap-5">
                  <span className="display flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-[var(--c-red)] bg-[var(--c-bg-alt)] text-[0.9rem] leading-none text-[var(--c-red)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[0.95rem] font-light leading-relaxed text-body sm:text-[0.98rem]">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-10 text-center sm:mt-12">
            <Cta className="w-full sm:w-auto">Book your consultation</Cta>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="border-t border-[var(--c-line)] bg-[var(--c-bg-alt)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow eyebrow-mark mb-4 justify-center">Words From Couples</p>
            <h2 className="display text-[1.9rem] leading-tight text-ink sm:text-[2.8rem]">
              Highly Confidential Relationship Coaching{' '}
              <span className="gold-text">Trusted by Couples Globally</span>
            </h2>
          </Reveal>

          <Reveal delay={90} className="mt-10 sm:mt-14">
            <VideoSlider />
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="border-t border-[var(--c-line)] bg-[var(--c-bg-alt)] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="mb-10 text-center sm:mb-12">
            <p className="eyebrow eyebrow-mark mb-4 justify-center">Get Started</p>
            <h2 className="display text-[1.9rem] leading-tight text-ink sm:text-[2.8rem]">
              Share your story, <span className="gold-text">get guidance</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[0.95rem] font-light leading-relaxed text-body">
              Fill this out and your coach will personally reach out to schedule your session.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ContactForm />
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
              Get Confidential Relationship Coaching Today
            </p>
            <div className="mt-9">
              <Cta variant="outline" className="w-full sm:w-auto">BOOK NOW</Cta>
            </div>
            <p className="mx-auto mt-9 max-w-lg text-[0.8rem] font-light leading-relaxed text-white/45">
              10+ Years of Coaching Experience · 3,000+ Relations Saved · 50,000+ Consultations · 10+ Countries
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
