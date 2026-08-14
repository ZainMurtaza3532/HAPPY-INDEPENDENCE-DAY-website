import { motion, useReducedMotion } from "framer-motion";

/**
 * Pure CSS/SVG waving Pakistan flag — no emoji.
 */
export function PakistanFlag({ className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative ${className}`}
      animate={reduce ? {} : { y: [0, -10, 0], rotateZ: [-1.2, 1.2, -1.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 18px 40px oklch(0.62 0.16 158 / 0.45))" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 300 200" className="h-full w-full">
        <defs>
          <linearGradient id="flagShade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#000" stopOpacity="0.28" />
            <stop offset="18%" stopColor="#fff" stopOpacity="0.16" />
            <stop offset="38%" stopColor="#000" stopOpacity="0.26" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.14" />
            <stop offset="82%" stopColor="#000" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
          </linearGradient>
          <clipPath id="flagClip">
            <path d="M0 12 C 75 -8, 150 32, 225 12 C 262 2, 285 6, 300 2 L300 172 C 285 176, 262 172, 225 182 C 150 202, 75 162, 0 182 Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#flagClip)">
          <rect x="0" y="0" width="300" height="200" fill="#01411C" />
          <rect x="0" y="0" width="75" height="200" fill="#FFFFFF" />
          {/* crescent + star */}
          <g transform="translate(190,100)">
            <circle cx="0" cy="0" r="45" fill="#FFFFFF" />
            <circle cx="14" cy="-8" r="40" fill="#01411C" />
            <path
              d="M 40 -34 l 6.5 19.5 l 20.5 0 l -16.6 12 l 6.3 19.6 l -16.7 -12.1 l -16.7 12.1 l 6.3 -19.6 l -16.6 -12 l 20.5 0 Z"
              fill="#FFFFFF"
              transform="translate(-2,-4) scale(0.85)"
            />
          </g>
          <rect x="0" y="0" width="300" height="200" fill="url(#flagShade)">
            {!reduce && (
              <animate
                attributeName="x"
                values="-14;14;-14"
                dur="5s"
                repeatCount="indefinite"
              />
            )}
          </rect>
        </g>
      </svg>
    </motion.div>
  );
}
