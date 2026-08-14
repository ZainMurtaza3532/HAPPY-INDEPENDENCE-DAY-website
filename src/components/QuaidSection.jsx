import { motion } from "framer-motion";
import { Quote, Shield, Award, CheckCircle2 } from "lucide-react";
import quaid from "@/assets/quaid.jpg";
import { Reveal } from "./Reveal";

const principles = [
  {
    title: "Unity",
    desc: "Standing together across all regions, languages, and beliefs as one united nation.",
  },
  {
    title: "Faith",
    desc: "Unwavering belief in our righteous purpose, national destiny, and moral values.",
  },
  {
    title: "Discipline",
    desc: "Relentless self-control, lawfulness, and dedication to public duty and nation-building.",
  },
];

export function QuaidSection() {
  return (
    <section
      id="quaid"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background:
          "linear-gradient(180deg, transparent, oklch(0.12 0.02 155), transparent)",
      }}
    >
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
        {/* Portrait Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[var(--gradient-emerald)] opacity-30 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-2xl">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img
                src={quaid}
                alt="Portrait of Quaid-e-Azam Muhammad Ali Jinnah, founder of Pakistan"
                loading="lazy"
                width={912}
                height={1200}
                className="w-full rounded-[1.5rem] object-cover grayscale-[0.15] transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 border border-white/10 text-center">
                <p className="font-display font-bold text-foreground text-lg">
                  Muhammad Ali Jinnah
                </p>
                <p className="text-[11px] text-primary uppercase tracking-widest font-semibold mt-0.5">
                  Baba-e-Qaum (Father of the Nation)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Column */}
        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Father of the Nation
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient-green">
                Quaid-e-Azam Muhammad Ali Jinnah
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground font-light">
              A barrister of extraordinary legal intellect and a statesman of rare
              conviction, Muhammad Ali Jinnah (1876–1948) led the movement that gave
              the Muslims of the subcontinent a homeland of their own. Through
              constitutional struggle, moral clarity, and unshakeable resolve, he
              founded Pakistan on 14 August 1947 and served as its first Governor-General.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <figure className="glass glow-ring mt-8 rounded-3xl border-l-4 border-l-primary p-6 sm:p-7">
              <Quote className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
              <blockquote className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                “Unity, Faith, Discipline”
              </blockquote>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground italic">
                “With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”
              </p>
              <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                — Quaid-e-Azam Muhammad Ali Jinnah
              </figcaption>
            </figure>
          </Reveal>

          {/* Principles Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={0.3 + i * 0.08}>
                <div className="glass rounded-2xl p-4 border border-border hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-primary font-bold font-display text-base mb-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug font-light">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
