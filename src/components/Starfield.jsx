import { useMemo } from "react";

export function Starfield({ count = 60, className = "" }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: (i * 37.5) % 100,
        left: (i * 61.8) % 100,
        size: 1 + ((i * 13) % 3),
        delay: (i % 12) * 0.45,
        duration: 3 + ((i * 7) % 5),
      })),
    [count],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-foreground animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: "0 0 8px currentColor",
          }}
        />
      ))}
    </div>
  );
}
