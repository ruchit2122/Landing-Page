export default function Mandala({ className = '' }) {
  const petals = 24;
  const dots = 36;

  return (
    <svg className={`mandala ${className}`} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <circle cx="200" cy="200" r="196" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="128" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="86" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="44" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="8" fill="currentColor" opacity="0.5" />

      {Array.from({ length: petals }).map((_, i) => (
        <ellipse
          key={`p${i}`}
          cx="200"
          cy="93"
          rx="13"
          ry="34"
          stroke="currentColor"
          strokeWidth="0.5"
          transform={`rotate(${(360 / petals) * i} 200 200)`}
        />
      ))}

      {Array.from({ length: petals }).map((_, i) => (
        <ellipse
          key={`q${i}`}
          cx="200"
          cy="151"
          rx="9"
          ry="22"
          stroke="currentColor"
          strokeWidth="0.45"
          transform={`rotate(${(360 / petals) * i + 360 / petals / 2} 200 200)`}
        />
      ))}

      {Array.from({ length: dots }).map((_, i) => (
        <circle
          key={`d${i}`}
          cx="200"
          cy="17"
          r="1.6"
          fill="currentColor"
          transform={`rotate(${(360 / dots) * i} 200 200)`}
        />
      ))}

      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`l${i}`}
          x1="200"
          y1="158"
          x2="200"
          y2="130"
          stroke="currentColor"
          strokeWidth="0.45"
          transform={`rotate(${30 * i} 200 200)`}
        />
      ))}
    </svg>
  );
}
