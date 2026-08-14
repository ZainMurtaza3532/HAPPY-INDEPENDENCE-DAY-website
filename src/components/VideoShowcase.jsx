import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2, Film } from "lucide-react";
import videoSrc from "@/assets/most_improve_and_enhance.mp4";
import { Reveal, SectionHeading } from "./Reveal";

export function VideoShowcase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="video" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 animate-aurora blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.16 158 / 0.2), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="section-shell relative text-center">
        <SectionHeading
          eyebrow="Cinematic Experience"
          title="Spirit of Independence in Motion"
          subtitle="Watch the patriotic video celebrating freedom, culture, and national pride."
        />

        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-5xl">
            {/* Ambient Glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--gradient-emerald)] opacity-30 blur-3xl" />

            <div className="glass relative overflow-hidden rounded-[2rem] p-3 border border-border shadow-2xl">
              <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-black">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  /* CHANGED: object-cover to object-contain so nothing gets cut off */
                  className="h-full w-full object-contain"
                  loop
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Overlay Play Button when Paused */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label="Play video"
                    className="absolute inset-0 grid place-items-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/30 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="grid h-20 w-20 place-items-center rounded-full bg-[var(--gradient-emerald)] text-foreground shadow-[var(--glow-green)]"
                    >
                      <Play className="h-9 w-9 translate-x-1" />
                    </motion.div>
                  </button>
                )}

                {/* Bottom Control Bar */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 opacity-0 transition-opacity duration-300 hover:opacity-100 focus-within:opacity-100">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="grid h-10 w-10 place-items-center rounded-full bg-foreground/10 text-foreground backdrop-blur hover:bg-foreground/20"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-0.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={toggleMute}
                      className="grid h-10 w-10 place-items-center rounded-full bg-foreground/10 text-foreground backdrop-blur hover:bg-foreground/20"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium hidden sm:inline flex items-center gap-1.5">
                      <Film className="h-3.5 w-3.5 text-primary" /> 14 August Cinematic Film
                    </span>
                    <button
                      type="button"
                      onClick={toggleFullscreen}
                      className="grid h-10 w-10 place-items-center rounded-full bg-foreground/10 text-foreground backdrop-blur hover:bg-foreground/20"
                    >
                      <Maximize2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}