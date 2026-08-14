import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scroll, Landmark, Award, Flag, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./Reveal";

const events = [
  {
    year: "1857",
    title: "Beginning of the Struggle",
    subtitle: "The First War of Independence",
    text: "The historic uprising against colonial rule ignited the patriotic spirit across the Indian subcontinent. Muslim leaders recognized the critical necessity of defending their political and cultural identity.",
    impact: "Awakened national consciousness",
    icon: Scroll,
  },
  {
    year: "1906",
    title: "All-India Muslim League",
    subtitle: "Founding in Dhaka",
    text: "Established to safeguard the political rights, representation, and unique identity of the Muslims of the subcontinent under united leadership.",
    impact: "First unified political platform",
    icon: Landmark,
  },
  {
    year: "1930",
    title: "Allahabad Address",
    subtitle: "Allama Iqbal's Vision",
    text: "Dr. Allama Muhammad Iqbal articulated the groundbreaking vision of a separate, autonomous homeland for the Muslims of north-west India.",
    impact: "Philosophical blueprint of Pakistan",
    icon: Award,
  },
  {
    year: "1940",
    title: "Lahore Resolution",
    subtitle: "The Pakistan Resolution",
    text: "At Minto Park (now Iqbal Park, Lahore) under Quaid-e-Azam Muhammad Ali Jinnah, the demand for an independent sovereign Muslim state was formally passed.",
    impact: "Defined the ultimate national goal",
    icon: Flag,
  },
  {
    year: "1947",
    title: "Independence of Pakistan",
    subtitle: "Dawn of Freedom — 14 August",
    text: "On 14 August 1947 (27 Ramadan 1366 AH), Pakistan emerged on the world map as a sovereign, independent nation after decades of sacrifices.",
    impact: "Realized sovereign statehood",
    icon: Sparkles,
  },
];

export function History() {
  const [activeEvent, setActiveEvent] = useState(4); // default 1947

  return (
    <section id="history" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="section-shell">
        <SectionHeading
          eyebrow="1857 — 1947"
          title="The Journey to Freedom"
          subtitle="Ninety years of sacrifice, vision, and unwavering resolve that built our nation."
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Central Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:left-1/2" />

          <ul className="space-y-12">
            {events.map((e, i) => {
              const IconComponent = e.icon;
              const isSelected = activeEvent === i;

              return (
                <motion.li
                  key={e.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveEvent(i)}
                  className={`relative pl-12 md:w-1/2 md:pl-0 cursor-pointer group ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12 md:text-left"
                  }`}
                >
                  {/* Central Icon Node */}
                  <div
                    className={`absolute left-4 top-4 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-2 transition-all duration-300 shadow-lg md:left-auto ${
                      isSelected
                        ? "border-primary bg-primary text-foreground scale-110 shadow-[var(--glow-green)]"
                        : "border-primary/50 bg-background text-primary group-hover:border-primary group-hover:scale-105"
                    } ${
                      i % 2 === 0
                        ? "md:right-0 md:translate-x-1/2"
                        : "md:left-0 md:-translate-x-1/2"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </div>

                  {/* Card Content */}
                  <div
                    className={`glass rounded-3xl p-6 sm:p-8 transition-all duration-500 border ${
                      isSelected
                        ? "border-primary/60 bg-primary/10 shadow-[var(--glow-green)]"
                        : "border-border hover:border-primary/40 hover:-translate-y-1"
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-1 ${i % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                      <span className="font-display text-4xl sm:text-5xl font-bold text-primary">
                        {e.year}
                      </span>
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-semibold text-primary uppercase tracking-wider">
                        Milestone 0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground">
                      {e.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary/80 uppercase tracking-widest mt-0.5 mb-3">
                      {e.subtitle}
                    </p>

                    <p className="text-sm leading-relaxed text-muted-foreground font-light">
                      {e.text}
                    </p>

                    <div className={`mt-4 pt-3 border-t border-border/40 flex items-center gap-2 text-xs font-medium text-primary ${i % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{e.impact}</span>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
