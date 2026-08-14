import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Flag, Flame, Heart } from "lucide-react";
import { useCallback, useState } from "react";
import confetti from "canvas-confetti";
import { Reveal } from "./Reveal";

let seed = 1;
const rand = () => {
  seed = (seed * 16807) % 2147483647;
  return seed / 2147483647;
};

function makeConfetti(batch) {
  return Array.from({ length: 90 }, (_, i) => ({
    id: batch * 1000 + i,
    x: rand() * 100,
    delay: rand() * 0.5,
    rotate: rand() * 720 - 360,
    white: i % 3 === 0,
    size: 6 + rand() * 10,
    drift: rand() * 140 - 70,
  }));
}

const fireworkAngles = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);

export function Celebration() {
  const [batch, setBatch] = useState(0);
  const [pieces, setPieces] = useState([]);
  const [burst, setBurst] = useState(false);

  const playFanfare = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const notes = [392.00, 493.88, 587.33, 783.99]; // G4, B4, D5, G5 fanfare chord
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.65);
      });
    } catch (e) {}
  };

  const celebrate = useCallback(() => {
    const next = batch + 1;
    setBatch(next);
    setPieces(makeConfetti(next));
    setBurst(true);
    playFanfare();

    // Trigger canvas confetti bursts
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { x: 0.2, y: 0.6 },
      colors: ["#00A651", "#FFFFFF", "#01411C", "#F59E0B"]
    });

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { x: 0.8, y: 0.6 },
      colors: ["#00A651", "#FFFFFF", "#01411C", "#F59E0B"]
    });

    setTimeout(() => {
      confetti({
        particleCount: 160,
        spread: 120,
        origin: { x: 0.5, y: 0.4 },
        colors: ["#00A651", "#FFFFFF", "#34D399", "#F59E0B"],
        scalar: 1.25
      });
    }, 250);

    window.setTimeout(() => setBurst(false), 3500);
  }, [batch]);

  return (
    <section
      id="celebrate"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 animate-aurora blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 45%, oklch(0.62 0.16 158 / 0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Confetti Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <AnimatePresence>
          {pieces.map((p) => (
            <motion.span
              key={p.id}
              initial={{ y: "-10%", opacity: 1, rotate: 0 }}
              animate={{ y: "115%", opacity: [1, 1, 0], rotate: p.rotate, x: p.drift }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3.5 + p.delay, delay: p.delay, ease: "easeIn" }}
              className="absolute top-0 rounded-[2px]"
              style={{
                left: `${p.x}%`,
                width: p.size,
                height: p.size * 1.6,
                background: p.white ? "#FFFFFF" : "var(--emerald-pk)",
                boxShadow: p.white ? "0 0 8px #FFF" : "0 0 12px oklch(0.62 0.16 158 / 0.8)",
              }}
            />
          ))}
        </AnimatePresence>

        {/* Fireworks Explosions */}
        <AnimatePresence>
          {burst &&
            [0, 1, 2, 3].map((f) => (
              <div
                key={f}
                className="absolute"
                style={{ top: `${20 + f * 15}%`, left: `${20 + f * 20}%` }}
              >
                {fireworkAngles.map((a) => (
                  <motion.span
                    key={a}
                    initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    animate={{
                      opacity: 0,
                      x: Math.cos((a * Math.PI) / 180) * (110 + f * 20),
                      y: Math.sin((a * Math.PI) / 180) * (110 + f * 20),
                      scale: 0.2,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, delay: f * 0.25, ease: "easeOut" }}
                    className="absolute h-2 w-2 rounded-full"
                    style={{
                      background: f % 2 === 0 ? "#FFFFFF" : "var(--emerald-pk)",
                      boxShadow: "0 0 16px currentColor",
                    }}
                  />
                ))}
              </div>
            ))}
        </AnimatePresence>
      </div>

      <div className="section-shell relative text-center">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Interactive Celebration
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">
            <span className="text-gradient-green">Celebrate Pakistan</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground font-light">
            Press the button to launch green & white confetti, light up fireworks, and express national pride!
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative inline-block mt-10">
            <div className="absolute -inset-4 rounded-full bg-[var(--gradient-emerald)] opacity-50 blur-xl animate-pulse" />
            <motion.button
              type="button"
              onClick={celebrate}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="relative inline-flex items-center gap-3 rounded-full bg-[var(--gradient-emerald)] px-10 py-5 text-xl sm:text-2xl font-bold tracking-[0.14em] text-foreground shadow-[var(--glow-green)] border border-white/20"
            >
              <Sparkles className="h-7 w-7 text-primary-foreground animate-spin" style={{ animationDuration: '5s' }} />
              PAKISTAN ZINDABAD 🇵🇰
            </motion.button>
          </div>
        </Reveal>

        <AnimatePresence>
          {burst && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <p className="font-display text-4xl sm:text-6xl md:text-7xl font-bold">
                <span className="shimmer-text">PAKISTAN ZINDABAD! 🇵🇰</span>
              </p>
              <p className="text-primary text-base sm:text-xl font-semibold mt-2 tracking-widest uppercase">
                Happy 79th Independence Day!
              </p>

              <motion.svg
                viewBox="0 0 200 200"
                className="mx-auto mt-6 h-28 w-28 text-primary"
                animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              >
                <circle cx="100" cy="100" r="60" fill="currentColor" />
                <circle cx="122" cy="88" r="53" fill="var(--background)" />
                <path
                  d="M148 62 l7 21 l22 0 l-18 13 l7 21 l-18 -13 l-18 13 l7 -21 l-18 -13 l22 0 Z"
                  fill="currentColor"
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
