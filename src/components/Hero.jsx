import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, Play, Compass, HeartHandshake, Shield, Sparkle } from "lucide-react";
import minar from "@/assets/minar.jpg";
import { PakistanFlag } from "./PakistanFlag";
import { Starfield } from "./Starfield";

const heroStats = [
  { label: "Provinces & Territories", value: "6", suffix: "" },
  { label: "Years of Sovereignty", value: "79", suffix: "th" }, 
  { label: "UN Member Since", value: "1947", suffix: "" },
];

const actionButtons = [
  {
    id: "explore",
    href: "#pakistan",
    label: "Explore Pakistan",
    icon: Compass,
    className: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 hover:scale-[1.04]",
    iconClass: "animate-spin-slow",
  },
  {
    id: "video",
    href: "#national-pride",
    label: "Watch Film",
    icon: Play,
    className: "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 backdrop-blur-[8px] hover:border-emerald-400 hover:bg-emerald-500/20 hover:-translate-y-1 hover:scale-[1.04]",
    iconClass: "fill-emerald-400 text-emerald-400",
  },
  {
    id: "celebrate",
    href: "#celebrate",
    label: "Celebrate",
    icon: HeartHandshake,
    className: "border border-border/60 bg-white/5 text-white backdrop-blur-[8px] hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:-translate-y-1 hover:scale-[1.04]",
    iconClass: "text-emerald-400",
  },
];

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: (i * 31) % 100,
  size: 2 + (i % 5) * 1.5,
  delay: (i % 8) * 0.4,
  duration: 8 + (i % 6) * 2,
}));

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-32 pb-24 select-none"
      style={{ background: "var(--gradient-hero)" }}
      aria-label="Welcome to Pakistan Independence Day Celebration"
    >
      {/* Dynamic Background Light Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-emerald-600/10 blur-[130px] animate-pulse" style={{ animationDuration: "12s" }} />
      </div>

      {/* Minar silhouette */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[80%] bg-cover bg-bottom bg-no-repeat mix-blend-screen z-0"
        style={{
          backgroundImage: `url(${minar})`,
          maskImage: "linear-gradient(to top, black 15%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to top, black 15%, transparent 85%)",
        }}
        aria-hidden="true"
      />

      <Starfield count={100} />

      {/* Rising Sparks */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full"
            style={{ 
              left: `${p.left}%`, 
              width: p.size, 
              height: p.size,
              background: p.id % 2 === 0 ? "var(--primary)" : "#FFF",
              boxShadow: p.id % 2 === 0 ? "0 0 8px var(--primary)" : "0 0 8px #FFF",
              willChange: "transform, opacity"
            }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "-15%", opacity: [0, 0.95, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Rotating Crescent & Star Watermark */}
      <motion.svg
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-20 top-20 h-80 w-80 opacity-[0.08] text-primary z-0"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="70" fill="currentColor" />
        <circle cx="124" cy="86" r="64" fill="var(--background)" />
      </motion.svg>

      <div className="section-shell relative z-10 grid items-center gap-12 pb-16 lg:grid-cols-[1.15fr_0.85fr]">
        
        {/* Left Side: Content */}
        <div className="text-center lg:text-left">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400 backdrop-blur-[10px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
          >
            <Sparkles className="h-4 w-4 animate-spin text-emerald-400" style={{ animationDuration: "12s" }} />
            <span>79th Independence Celebration</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl leading-[0.98] sm:text-7xl lg:text-8xl select-none"
          >
            <span className="block text-gradient-green font-bold filter drop-shadow-[0_2px_10px_rgba(0,166,81,0.15)]">Happy</span>
            <span className="block shimmer-text font-black tracking-tight">Independence Day</span>
          </motion.h1>

          {/* Paragraph Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground/90 font-light leading-relaxed mx-auto lg:mx-0"
          >
            Celebrating sovereign freedom, rich heritage, and the progressive future of Pakistan. A resilient nation united under the emerald and white flag.
          </motion.p>

          {/* Golden Quote Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/[0.02] border border-white/5 px-4 py-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest backdrop-blur-md shadow-sm"
          >
            <Shield className="h-4 w-4 text-emerald-400" />
            <span>“There is no power on earth that can undo Pakistan.”</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-8"
          >
            <p className="font-display text-3xl font-bold tracking-[0.2em] text-foreground sm:text-4xl">
              <span className="shimmer-text">PAKISTAN ZINDABAD 🇵🇰</span>
            </p>
          </motion.div>

          {/* Action Buttons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            {actionButtons.map((btn) => (
              <a
                key={btn.id}
                href={btn.href}
                className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${btn.className}`}
              >
                <btn.icon className={`h-4.5 w-4.5 ${btn.iconClass}`} />
                {btn.label}
              </a>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-14 grid grid-cols-3 gap-4 sm:gap-10 border-t border-white/5 pt-8 w-full max-w-xl mx-auto lg:mx-0"
          >
            {heroStats.map((stat) => (
              <motion.div 
                key={stat.label} 
                className="text-center lg:text-left group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-display text-3xl font-black text-emerald-400 block tracking-tight">
                  {stat.value}
                  <span className="text-sm font-bold text-white/80 align-super">{stat.suffix}</span>
                </span>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-emerald-400 transition-colors duration-300 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Waving Flag (Moved here for split-screen) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md mx-auto perspective-1000 cursor-grab active:cursor-grabbing"
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          {/* Ring Glow */}
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-emerald-500/20 to-white/10 opacity-40 blur-2xl" />
          
          <div className="glass rounded-[2rem] p-5 border border-white/10 shadow-2xl relative z-10 transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(0,166,81,0.25)]">
            <PakistanFlag className="w-full drop-shadow-[0_0_30px_rgba(0,166,81,0.3)]" />
            
            {/* Motto Badge */}
            <div className="mt-5 pt-4 border-t border-white/10 text-center flex flex-col items-center">
              <span className="text-xs text-emerald-400 uppercase font-black tracking-[0.25em] flex items-center gap-1.5">
                <Sparkle className="h-3.5 w-3.5 text-emerald-400 animate-spin" style={{ animationDuration: "8s" }} />
                Faith • Unity • Discipline
              </span>
              <p className="text-[10px] text-muted-foreground font-light tracking-wide mt-1">
                Baba-e-Qaum's guiding principles for the nation
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Down Scroll Arrow */}
      <motion.a
        href="#countdown"
        aria-label="Scroll to countdown section"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-muted-foreground transition-colors hover:text-emerald-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}