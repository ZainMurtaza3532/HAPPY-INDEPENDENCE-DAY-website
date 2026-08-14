import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, ShieldCheck, Flame, CalendarCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

function nextIndependenceDay(now) {
  const year = now.getFullYear();
  const target = new Date(year, 7, 14, 0, 0, 0);
  if (now >= target) target.setFullYear(year + 1);
  return target;
}

function diff(target, now) {
  const ms = Math.max(0, target.getTime() - now.getTime());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    isToday: now.getMonth() === 7 && now.getDate() === 14
  };
}

export function Countdown() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(diff(nextIndependenceDay(now), now));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time?.days, icon: CalendarCheck },
    { label: "Hours", value: time?.hours, icon: Clock },
    { label: "Minutes", value: time?.minutes, icon: ShieldCheck },
    { label: "Seconds", value: time?.seconds, icon: Flame },
  ];

  return (
    <section id="countdown" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-72 max-w-4xl -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.16 158 / 0.22), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Countdown to 14 August"
          title="Celebrating Pakistan's Independence"
          subtitle="Counting every second to honor the sacrifices, sovereignty, and unity of our nation."
        />

        {time?.isToday ? (
          <Reveal>
            <div className="glass glow-ring p-10 rounded-3xl text-center border-2 border-primary/50 bg-gradient-to-br from-primary/20 to-background shadow-2xl">
              <Flame className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
              <h3 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-2">
                TODAY IS 14 AUGUST! 🇵🇰
              </h3>
              <p className="text-xl text-primary font-semibold">
                HAPPY INDEPENDENCE DAY TO ALL PAKISTANIS WORLDWIDE!
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {units.map((u, i) => {
              const IconComp = u.icon;
              return (
                <Reveal key={u.label} delay={i * 0.08}>
                  <div className="glass glow-ring group relative overflow-hidden rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 sm:p-8">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
                    
                    <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <IconComp className="h-4 w-4" />
                    </div>

                    <AnimatePresence mode="popLayout">
                      <motion.p
                        key={u.value}
                        initial={{ y: -15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 15, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-display text-5xl tabular-nums leading-none text-foreground sm:text-6xl shimmer-text"
                      >
                        {u.value === undefined ? "--" : String(u.value).padStart(2, "0")}
                      </motion.p>
                    </AnimatePresence>

                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
                      {u.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
