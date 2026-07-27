'use client';

import { useRef, useState } from 'react';

const VIDEOS = [
  { id: 'Z6yUQm5rvEk', caption: 'Priya S. · Mumbai' },
  { id: 'Pc5HL58JlA4', caption: 'Rahul M. · Dubai' },
  { id: 'xkrgJumy1sI', caption: 'Anjali K. · London' },
  { id: 'Ud6FCyNGpPM', caption: 'Vikram D. · Toronto' },
  { id: 'pvO65eHUVy4', caption: 'Meera R. · Ahmedabad' },
  { id: '99ORmS3KW_Q', caption: 'Sanjay P. · Singapore' },
];

function post(iframe, func) {
  if (!iframe?.contentWindow) return;
  iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*');
}

function VolumeIcon({ muted, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4 9v6h4l5 5V4L8 9H4z" />
      {muted ? (
        <path
          d="M16 9.5l5 5m0-5l-5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M16.5 8.5a5 5 0 010 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function ArrowIcon({ direction = 'right', className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

export default function VideoSlider() {
  const iframeRefs = useRef([]);
  const trackRef = useRef(null);
  const [unmutedIndex, setUnmutedIndex] = useState(null);

  const toggleVolume = (i) => {
    if (unmutedIndex === i) {
      post(iframeRefs.current[i], 'mute');
      setUnmutedIndex(null);
      return;
    }
    if (unmutedIndex !== null) {
      post(iframeRefs.current[unmutedIndex], 'mute');
    }
    post(iframeRefs.current[i], 'unMute');
    setUnmutedIndex(i);
  };

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]');
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 sm:mx-0 sm:px-0"
      >
        {VIDEOS.map((v, i) => (
          <div
            key={v.id}
            data-card
            className="relative aspect-[9/16] w-[78vw] max-w-[260px] shrink-0 snap-center overflow-hidden rounded-2xl border border-[var(--c-line)] bg-[var(--c-bg)] xs:w-[220px] sm:w-[260px] sm:snap-start"
          >
            <iframe
              ref={(el) => {
                iframeRefs.current[i] = el;
              }}
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&loop=1&playlist=${v.id}&controls=0&playsinline=1&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&enablejsapi=1`}
              title={v.caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
            <button
              type="button"
              onClick={() => toggleVolume(i)}
              aria-label={unmutedIndex === i ? 'Mute video' : 'Unmute video'}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm"
            >
              <VolumeIcon muted={unmutedIndex !== i} className="h-4 w-4" />
            </button>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10">
              <p className="text-[0.8rem] font-medium text-white/90">{v.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous video"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--c-line)] bg-[var(--c-bg)] text-ink"
        >
          <ArrowIcon direction="left" className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next video"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--c-line)] bg-[var(--c-bg)] text-ink"
        >
          <ArrowIcon direction="right" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
