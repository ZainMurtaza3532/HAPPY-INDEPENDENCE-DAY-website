import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Starfield } from "./Starfield";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 text-center sm:py-36">
      <Starfield count={40} />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.16 158 / 0.28), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-green">
              Our Pakistan. Our Pride. Our Freedom.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            “Together we celebrate the nation we call home.”
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <motion.a
            href="#celebrate"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-block rounded-full bg-[var(--gradient-emerald)] px-10 py-5 text-base font-bold tracking-[0.16em] text-foreground shadow-[var(--glow-green)]"
          >
            PAKISTAN ZINDABAD
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
