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

const BULLET_EMOJI = ['🔮', '💞', '🌙', '🕉️'];

const STATS = [
  { value: '3', label: 'Generations of Wisdom', emoji: '🪔' },
  { value: '3,000+', label: 'Relations Saved', emoji: '💖' },
  { value: '50,000+', label: 'Consultations', emoji: '🔮' },
  { value: '10+', label: 'Countries', emoji: '🌏' },
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
    emoji: '🌸',
  },
  {
    text: 'My in-laws were constantly interfering. Acharya Ji pointed out exactly where the disturbance was coming from. Things are far more peaceful now.',
    name: 'Rahul M.',
    place: 'Dubai',
    emoji: '🌟',
  },
  {
    text: 'We were one step away from separation papers. The guidance gave us a calm space to reconnect instead of fighting every single day.',
    name: 'Anjali K.',
    place: 'London',
    emoji: '💫',
  },
  {
    text: 'Everything stayed completely private. That mattered the most to me. The clarity I received was worth every minute.',
    name: 'Vikram D.',
    place: 'Toronto',
    emoji: '🔒',
  },
  {
    text: 'The distance between us had become unbearable. Within weeks of following the remedies, the warmth slowly returned.',
    name: 'Meera R.',
    place: 'Ahmedabad',
    emoji: '🌷',
  },
  {
    text: 'I finally understood the real reason behind our endless arguments. It was not what I assumed at all.',
    name: 'Sanjay P.',
    place: 'Singapore',
    emoji: '✨',
  },
];

const TRUST = [
  { emoji: '🔒', title: '100% Confidential', desc: 'Your story stays between you & Acharya Ji.' },
  { emoji: '📿', title: 'Rooted in Vedic Jyotish', desc: 'Ancient scriptural wisdom, never generic advice.' },
  { emoji: '🪔', title: 'Blessings of 3 Generations', desc: 'A lineage devoted to healing bonds.' },
];

const RIBBON = ['✦ Love', '✦ Peace', '✦ Trust', '✦ Reunion', '✦ Harmony', '✦ Healing', '✦ Clarity', '✦ Blessings'];

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
        <Star key={i} className="h-4 w-4" style={{ color: 'var(--c-gold)' }} />
      ))}
    </span>
  );
}

/* Zodiac wheel — decorative rotating ring */
function ZodiacRing({ className = '' }) {
  const glyphs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 5" />
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {glyphs.map((g, i) => {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const x = 100 + Math.cos(angle) * 83;
        const y = 100 + Math.sin(angle) * 83;
        return (
          <text
            key={i}
            x={x}
            y={y}
            fontSize="14"
            fill="currentColor"
            textAnchor="middle"
            dominantBaseline="central"
            opacity="0.9"
          >
            {g}
          </text>
        );
      })}
    </svg>
  );
}

/* A floating emoji blob */
function FloatBlob({ emoji, className = '', anim = 'float' }) {
  return (
    <span className={`pointer-events-none absolute select-none ${anim} ${className}`} aria-hidden="true">
      {emoji}
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
      <section className="relative overflow-hidden bg-[var(--c-dark)] text-white">
        <div className="starfield" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-[-8rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(circle, rgba(255,122,61,0.35), transparent 65%)' }}
          aria-hidden="true"
        />

        {/* orbiting rings */}
        <ZodiacRing className="rotate-slow pointer-events-none absolute -right-24 top-6 h-80 w-80 text-gold-soft/40 sm:h-[26rem] sm:w-[26rem]" />
        <ZodiacRing className="rotate-rev pointer-events-none absolute -left-28 bottom-[-7rem] h-72 w-72 text-pink/30" />

        {/* floating funky spiritual emojis */}
        <FloatBlob emoji="🔮" className="left-[6%] top-[18%] text-4xl sm:text-5xl" anim="float" />
        <FloatBlob emoji="🌙" className="right-[8%] top-[30%] text-4xl sm:text-6xl" anim="float-2" />
        <FloatBlob emoji="✨" className="left-[14%] bottom-[16%] text-3xl blink" anim="float-slow" />
        <FloatBlob emoji="🪐" className="right-[16%] bottom-[12%] text-4xl" anim="wobble" />
        <FloatBlob emoji="☀️" className="left-[46%] top-[8%] text-3xl bob" anim="bob" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow-pill mb-6 text-white">
                <span className="text-lg bob">🕉️</span>
                <span className="eyebrow" style={{ color: 'var(--c-gold-bright)' }}>Vedic Relationship Guidance</span>
              </span>
              <h1 className="display display-black text-[2.6rem] leading-[0.98] sm:text-[4.2rem]">
                Fights, Distance &amp; <span className="gradient-text">Cold Silence</span> Ruining Your Love?
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-[1.1rem] font-medium leading-relaxed text-white/75">
                Stop watching your relationship fall apart! Get powerful astrological remedies rooted in
                ancient Jyotish to bring back the love, trust &amp; masti with your partner. 💫
              </p>

              {/* rating line */}
              <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border-2 border-gold-soft/40 bg-white/5 px-5 py-2 text-[0.85rem] font-semibold text-white/80">
                <Stars />
                <span>Loved by 3,000+ couples in 10+ countries</span>
              </div>
            </Reveal>

            {/* problem chips */}
            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {PROBLEMS.map((p, i) => (
                  <span
                    key={p}
                    className="rounded-full border-2 px-5 py-2.5 text-[0.85rem] font-bold text-white"
                    style={{
                      borderColor: ['var(--c-saffron)', 'var(--c-pink)', 'var(--c-purple)', 'var(--c-teal)'][i % 4],
                      background: 'rgba(255,255,255,0.06)',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-col items-center gap-3">
                <Cta>Chat on WhatsApp now</Cta>
                <span className="text-[0.8rem] font-medium text-white/50">🔒 Private &amp; confidential · Reply within hours</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* scrolling ribbon */}
        <div className="relative border-y-4 border-[var(--c-ink)] bg-[var(--c-saffron)] py-3 text-[var(--c-ink)]">
          <div className="marquee gap-8 whitespace-nowrap text-lg font-extrabold uppercase tracking-wide">
            {[...RIBBON, ...RIBBON].map((r, i) => (
              <span key={i} className="mx-4">{r}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST BAND ================= */}
      <section className="bg-[var(--c-bg-alt)] py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-3 sm:px-8">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <div className="flex items-start gap-4 rounded-3xl border-[3px] border-[var(--c-ink)] bg-white/70 p-5 shadow-[5px_5px_0_0_var(--c-ink)]">
                <span className="text-3xl bob">{t.emoji}</span>
                <div>
                  <p className="text-[1rem] font-extrabold text-ink">{t.title}</p>
                  <p className="mt-0.5 text-[0.82rem] font-medium leading-snug text-body">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= BULLETS ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <FloatBlob emoji="🌟" className="right-[5%] top-[10%] text-4xl opacity-70" anim="float" />
        <FloatBlob emoji="💜" className="left-[4%] bottom-[12%] text-4xl opacity-70" anim="float-2" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <span className="eyebrow-pill mb-4">
                <span className="text-lg">🔮</span>
                <span className="eyebrow">What You Receive</span>
              </span>
              <h2 className="display text-[2.6rem] leading-[1] text-ink sm:text-[3.2rem]">
                Real answers.<br /><span className="gradient-text">Sacred remedies.</span>
              </h2>
              <p className="mt-6 max-w-sm text-[1rem] font-medium leading-relaxed text-body">
                Every reading is drawn from YOUR birth chart &amp; the wisdom of Vedic Jyotish — never
                copy-paste advice, only guidance meant for your bond. 🙏
              </p>
              <Cta className="mt-8">Book your reading</Cta>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {BULLETS.map((b, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div
                    className="h-full rounded-3xl border-[3px] border-[var(--c-ink)] p-6 shadow-[6px_6px_0_0_var(--c-ink)]"
                    style={{ background: ['#fff0e0', '#ffe4f0', '#efe7ff', '#e0fbf5'][i % 4] }}
                  >
                    <span className="text-4xl float inline-block">{BULLET_EMOJI[i]}</span>
                    <p className="mt-4 text-[0.98rem] font-medium leading-relaxed text-ink">{b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative overflow-hidden bg-[var(--c-dark)] py-20 text-white sm:py-24">
        <div className="starfield" aria-hidden="true" />
        <ZodiacRing className="rotate-med pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 text-gold-soft/10" />
        <FloatBlob emoji="🌙" className="left-[8%] top-[16%] text-4xl" anim="float" />
        <FloatBlob emoji="⭐" className="right-[10%] bottom-[18%] text-4xl" anim="float-2" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-14 text-center">
            <span className="eyebrow-pill mb-4">
              <span className="text-lg wobble">🌠</span>
              <span className="eyebrow" style={{ color: 'var(--c-gold-bright)' }}>By The Grace of the Stars</span>
            </span>
            <h2 className="display display-black text-[2.2rem] leading-tight sm:text-[3rem]">
              A legacy couples trust for <span className="gradient-text">generations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="rounded-[26px] border-[3px] border-gold-soft/40 bg-white/[0.04] p-6 text-center shadow-[6px_6px_0_0_rgba(255,203,94,0.25)]">
                  <span className="text-3xl bob inline-block">{s.emoji}</span>
                  <p className="display display-black mt-2 text-[2.8rem] leading-none tracking-tight text-gold-bright sm:text-[3.4rem]">
                    <Counter value={s.value} />
                  </p>
                  <p className="mx-auto mt-3 max-w-[11rem] text-[0.8rem] font-bold uppercase leading-snug tracking-wide text-white/60">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIGNS ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <FloatBlob emoji="💔" className="right-[6%] top-[12%] text-4xl opacity-70" anim="wobble" />
        <FloatBlob emoji="🌗" className="left-[5%] bottom-[10%] text-4xl opacity-70" anim="float" />
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="text-center">
            <span className="eyebrow-pill mb-4">
              <span className="text-lg bob">👀</span>
              <span className="eyebrow">Does This Sound Familiar</span>
            </span>
            <h2 className="display text-[2.2rem] leading-tight text-ink sm:text-[3rem]">
              If your love life sounds like <span className="gradient-text">this…</span>
            </h2>
          </Reveal>

          <div className="mt-12 space-y-4">
            {SIGNS.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <div
                  className="flex items-start gap-4 rounded-3xl border-[3px] border-[var(--c-ink)] bg-white p-5 shadow-[5px_5px_0_0_var(--c-ink)] transition-transform hover:-translate-y-1"
                  style={{ background: ['#fff', '#fff6ec'][i % 2] }}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-[0.95rem] font-extrabold text-white"
                    style={{ background: ['var(--c-saffron)', 'var(--c-pink)', 'var(--c-purple)', 'var(--c-teal)'][i % 4] }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1.5 text-[0.98rem] font-medium leading-relaxed text-ink">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-12 text-center">
            <Cta>Fix it on WhatsApp</Cta>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative overflow-hidden bg-[var(--c-bg-alt)] py-20 sm:py-24">
        <FloatBlob emoji="💌" className="left-[5%] top-[8%] text-4xl opacity-70" anim="float" />
        <FloatBlob emoji="🥰" className="right-[6%] bottom-[10%] text-4xl opacity-70" anim="float-2" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow-pill mb-4">
              <span className="text-lg bob">💞</span>
              <span className="eyebrow">Blessings From Couples</span>
            </span>
            <h2 className="display display-black text-[2.2rem] leading-tight text-ink sm:text-[3rem]">
              Real couples. <span className="gradient-text">Real reunions.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <figure className="card flex h-full flex-col p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <Stars />
                    <span className="text-2xl bob">{t.emoji}</span>
                  </div>
                  <blockquote className="flex-1 text-[0.95rem] font-medium leading-relaxed text-ink">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t-2 border-dashed pt-5" style={{ borderColor: 'var(--c-line)' }}>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-2xl text-[0.85rem] font-extrabold text-white"
                      style={{ background: ['var(--c-saffron)', 'var(--c-pink)', 'var(--c-purple)'][i % 3] }}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-[0.9rem] font-extrabold text-ink">{t.name}</span>
                      <span className="block text-[0.78rem] font-medium text-muted">{t.place}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <FloatBlob emoji="❓" className="right-[7%] top-[14%] text-4xl opacity-60" anim="float" />
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow-pill mb-4">
              <span className="text-lg wobble">🕉️</span>
              <span className="eyebrow">Your Questions</span>
            </span>
            <h2 className="display display-black text-[2.2rem] leading-tight text-ink sm:text-[3rem]">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[var(--c-dark)] py-20 text-white sm:py-28">
        <div className="starfield" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(circle, rgba(255,122,61,0.28), transparent 65%)' }}
          aria-hidden="true"
        />
        <FloatBlob emoji="🔮" className="left-[10%] top-[16%] text-5xl" anim="float" />
        <FloatBlob emoji="✨" className="right-[12%] top-[22%] text-4xl blink" anim="float-2" />
        <FloatBlob emoji="🌙" className="left-[16%] bottom-[14%] text-4xl" anim="wobble" />
        <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="text-6xl pulse-glow inline-block">🪔</span>
            <h2 className="display display-black mt-6 text-[2.4rem] leading-[1.02] sm:text-[3.4rem]">
              Save Your Love Before It&apos;s <span className="gradient-text">Too Late!</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[1.05rem] font-medium leading-relaxed text-white/75">
              Take the first step today. Get confidential astrological solutions, one-on-one, on WhatsApp. 💬
            </p>
            <div className="mt-10">
              <Cta variant="outline">BOOK NOW</Cta>
            </div>
            <p className="mx-auto mt-10 max-w-lg text-[0.82rem] font-semibold leading-relaxed text-white/50">
              🪔 3 Generations · 💖 3,000+ Relations Saved · 🔮 50,000+ Consultations · 🌏 10+ Countries
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= STICKY MOBILE CTA ================= */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-[var(--c-saffron)] bg-[var(--c-dark)] px-4 py-3 md:hidden"
      >
        <Cta className="w-full" />
      </div>
      <div className="h-20 md:hidden" aria-hidden="true" />
    </main>
  );
}
