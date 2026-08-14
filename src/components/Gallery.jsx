import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import badshahi from "@/assets/badshahi.jpg";
import faisal from "@/assets/faisal.jpg";
import gilgit from "@/assets/gilgit.jpg";
import hunza from "@/assets/hunza.jpg";
import k2 from "@/assets/k2.jpg";
import minar from "@/assets/minar.jpg";
import monument from "@/assets/monument.jpg";
import neelum from "@/assets/neelum.jpg";
import truckart from "@/assets/truckart.jpg";
import { Reveal, SectionHeading } from "./Reveal";

const images = [
  { src: minar, alt: "Minar-e-Pakistan glowing green at night in Lahore" },
  { src: hunza, alt: "Autumn poplars and snow peaks in Hunza Valley" },
  { src: badshahi, alt: "Badshahi Mosque at sunset in Lahore" },
  { src: gilgit, alt: "Turquoise lake in Gilgit-Baltistan" },
  { src: faisal, alt: "Faisal Mosque at blue hour in Islamabad" },
  { src: truckart, alt: "Colourful Pakistani truck art detail" },
  { src: neelum, alt: "Forested river valley in Neelum, Azad Kashmir" },
  { src: monument, alt: "Pakistan Monument at dusk in Islamabad" },
  { src: k2, alt: "Snow-covered K2 summit in the Karakoram" },
];

export function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="Pakistan Through Our Eyes"
          subtitle="Moments of colour, height and heritage from across the country."
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 3) * 0.08}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-3xl border border-border"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-background/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-4 backdrop-blur-xl"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.img
              key={active}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[85vh] w-auto max-w-full rounded-3xl object-contain shadow-[var(--shadow-elegant)]"
            />
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-border bg-card/70 text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
