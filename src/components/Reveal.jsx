import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, className = "" }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {eyebrow}
          </p>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.08}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground">
            <span className="text-gradient-green">{title}</span>
          </h2>
        </Reveal>
      )}
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
