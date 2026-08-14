import { motion, AnimatePresence } from "framer-motion";
import { Music4, Pause, Play, Volume2, VolumeX, Maximize2, Film, Sparkles, Heart } from "lucide-react";
import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import videoSrc from "@/assets/most_improve_and_enhance.mp4";
import anthemSrc from "@/assets/Pakistan-National-Anthem.mp3";

const words = [
  { term: "Faith", translation: "یقین محکم", color: "text-emerald-400" },
  { term: "Unity", translation: "اتحاد", color: "text-white" },
  { term: "Discipline", translation: "تنظیم", color: "text-emerald-400" }
];

const anthemLines = [
  { urdu: "پاک سرزمیں شاد باد", roman: "Pak sarzamin shad bad", translation: "Blessed be the sacred land" },
  { urdu: "کشورِ حسیں شاد باد", roman: "Kishwar-e-haseen shad bad", translation: "Happy be the bounteous realm" },
  { urdu: "تُو نشانِ عزمِ عالی شان", roman: "Tu nishan-e-azm-e-aali shan", translation: "Symbol of high resolve" },
  { urdu: "ارضِ پاکستان!‏", roman: "Arz-e-Pakistan!", translation: "Land of Pakistan!" },
  { urdu: "مرکزِ یقین شاد باد", roman: "Markaz-e-yaqin shad bad", translation: "Blessed be the citadel of faith" }
];

// Simple decorative equalizer bars count
const visualizerBars = Array.from({ length: 16 }, (_, i) => i);

export function NationalPride() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeLine, setActiveLine] = useState(0);
  const audioRef = useRef(null);

  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const handleTimeUpdate = (e) => {
    const el = e.currentTarget;
    if (el.duration) {
      const pct = (el.currentTime / el.duration) * 100;
      setProgress(pct);

      const lineIndex = Math.min(
        Math.floor((el.currentTime / el.duration) * anthemLines.length),
        anthemLines.length - 1
      );
      setActiveLine(lineIndex);
    }
  };

  const toggleAnthem = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      if (videoRef.current && isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
      void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      if (audioRef.current && playing) {
        audioRef.current.pause();
        setPlaying(false);
      }
      videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  const toggleVideoFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="national-pride" className="relative overflow-hidden py-24 sm:py-32 bg-[#020B06]">
      {/* Decorative Background Gradients */}
      <div
        className="pointer-events-none absolute inset-0 animate-aurora blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.16 158 / 0.18), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary flex items-center justify-center gap-1.5">
              <Heart className="h-3 w-3 fill-primary animate-pulse" />
              <span>National Pride &amp; Anthem</span>
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">
              <span className="text-gradient-green">The Spirit of Pakistan</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground font-light max-w-xl mx-auto">
              Immerse yourself in our national melody and explore the cinematic beauty of a sovereign homeland.
            </p>
          </div>
        </Reveal>

        {/* Dashboard Console */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Panel: National Motto, Anthem Console & Waveform Visualizer */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8 glass rounded-[2.5rem] p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden bg-white/[0.02]">
            
            {/* Top Motto Header */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">National Motto</span>
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {words.map((w, i) => (
                  <motion.div
                    key={w.term}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-colors text-center"
                  >
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{w.term}</span>
                    <span className={`text-base font-bold font-display mt-1 ${w.color}`}>{w.translation}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Lyric Prompter */}
            <div className="flex-1 flex flex-col justify-center py-6 min-h-[140px]">
              <div className="h-28 flex flex-col justify-center items-center text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLine}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.4 }}
                    className="space-y-2"
                  >
                    <p className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-wide">
                      {anthemLines[activeLine].urdu}
                    </p>
                    <p className="text-xs text-muted-foreground italic font-light tracking-wide">
                      {anthemLines[activeLine].roman}
                    </p>
                    <p className="text-[11px] uppercase tracking-widest text-primary/70 font-semibold">
                      {anthemLines[activeLine].translation}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bouncing Audio Waveform Equalizer (Interactive improvement!) */}
            <div className="flex items-end justify-center gap-1 h-10 w-full px-8">
              {visualizerBars.map((bar) => (
                <motion.div
                  key={bar}
                  className="w-1.5 bg-gradient-to-t from-emerald-600 to-primary rounded-full"
                  animate={{
                    height: playing 
                      ? [10, 35 - (bar % 3) * 6, 12, 40 - (bar % 4) * 8, 10] 
                      : 4
                  }}
                  transition={{
                    duration: 1.2 + (bar % 3) * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Anthem Audio Controls */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleAnthem}
                  aria-label={playing ? "Pause anthem" : "Play anthem"}
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-foreground transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95"
                >
                  {playing ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 translate-x-0.5 text-white" />}
                </button>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground flex items-center gap-1.5">
                      <Music4 className="h-3.5 w-3.5 text-primary" /> Qaumi Taranah (Vocal)
                    </span>
                    <span className="text-[10px] tracking-wider text-emerald-400 uppercase font-bold">Audio Player</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10 relative">
                    <motion.div
                      className="h-full rounded-full bg-[var(--gradient-emerald)] absolute left-0 top-0"
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear", duration: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <audio
              ref={audioRef}
              preload="none"
              src={anthemSrc}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => {
                setPlaying(false);
                setProgress(0);
                setActiveLine(0);
              }}
            />
          </div>

          {/* Right Panel: Cinematic Video Showcase */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <Reveal delay={0.15}>
              <div className="relative">
                {/* Ambient Glow Backdrop */}
                <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--gradient-emerald)] opacity-30 blur-3xl pointer-events-none" />

                <div className="glass relative overflow-hidden rounded-[2.5rem] p-3.5 border border-white/10 shadow-2xl bg-white/[0.01]">
                  <div className="relative aspect-video w-full overflow-hidden rounded-[1.8rem] bg-black shadow-inner">
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      className="h-full w-full object-contain"
                      loop
                      playsInline
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                    />

                    {/* Overlay Play Button when Paused */}
                    {!isVideoPlaying && (
                      <button
                        type="button"
                        onClick={toggleVideoPlay}
                        aria-label="Play video"
                        className="absolute inset-0 grid place-items-center bg-black/50 backdrop-blur-[2px] transition-all hover:bg-black/40 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-foreground shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                        >
                          <Play className="h-7 w-7 translate-x-0.5 text-white" />
                        </motion.div>
                      </button>
                    )}

                    {/* Bottom Control Bar */}
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 hover:opacity-100 focus-within:opacity-100">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={toggleVideoPlay}
                          className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-all"
                        >
                          {isVideoPlaying ? <Pause className="h-4.5 w-4.5" /> : <Play className="h-4.5 w-4.5 translate-x-0.5" />}
                        </button>

                        <button
                          type="button"
                          onClick={toggleVideoMute}
                          className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-all"
                        >
                          {isVideoMuted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold hidden sm:inline-flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                          <Film className="h-3.5 w-3.5 text-emerald-400" /> Cinematic Film
                        </span>
                        <button
                          type="button"
                          onClick={toggleVideoFullscreen}
                          className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-all"
                        >
                          <Maximize2 className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
