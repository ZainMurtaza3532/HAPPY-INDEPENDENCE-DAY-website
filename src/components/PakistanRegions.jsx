import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, X, ChevronRight } from "lucide-react";
import balochistan from "@/assets/balochistan.jpg";
import gilgit from "@/assets/gilgit.jpg";
import kashmir from "@/assets/kashmir.jpg";
import kpk from "@/assets/kpk.jpg";
import punjab from "@/assets/punjab.jpg";
import sindh from "@/assets/sindh.jpg";
import { Reveal, SectionHeading } from "./Reveal";

const regions = [
  {
    name: "Punjab",
    capital: "Lahore",
    badge: "Cultural Heart",
    image: punjab,
    text: "Golden wheat plains, five rivers, Mughal monuments, Sufi shrines, and the living heritage of Lahore.",
    detail: "Home to historical landmarks like Badshahi Mosque and Lahore Fort, Punjab is the agricultural backbone and cultural nexus of Pakistan."
  },
  {
    name: "Sindh",
    capital: "Karachi",
    badge: "Indus Heritage",
    image: sindh,
    text: "Ancient Indus Valley civilization, mystical Sufi shrines of Bhit Shah, and Karachi’s vibrant metropolis.",
    detail: "Cradle of Mohenjo-Daro (2500 BCE) and spiritual shrines of Shah Abdul Latif Bhittai, featuring Pakistan's largest economic hub."
  },
  {
    name: "Khyber Pakhtunkhwa",
    capital: "Peshawar",
    badge: "Valley of Legends",
    image: kpk,
    text: "Emerald river valleys of Swat & Kaghan, historic Khyber Pass, and legendary Pashtun hospitality.",
    detail: "Renowned for its towering pine forests, Gandhara civilization heritage, high mountain passes, and roaring rivers."
  },
  {
    name: "Balochistan",
    capital: "Quetta",
    badge: "Coastal & Canyons",
    image: balochistan,
    text: "Vast desert canyons, sculpted rock coastlines of Makran, and pristine turquoise beaches.",
    detail: "The largest province by land area, boasting Hingol National Park, Kund Malir beach, and deep rich mineral resources."
  },
  {
    name: "Gilgit-Baltistan",
    capital: "Gilgit",
    badge: "Mountain Paradise",
    image: gilgit,
    text: "Emerald lakes, Hunza valley, and the meeting point of Karakoram, Himalayas & Hindu Kush.",
    detail: "Home to 5 of the world's 14 8,000-meter peaks including K2 (8,611m), Attabad Lake, and ancient Altit & Baltit forts."
  },
  {
    name: "Azad Kashmir",
    capital: "Muzaffarabad",
    badge: "Paradise on Earth",
    image: kashmir,
    text: "Alpine meadows, pine-scented mountain forests of Neelum, and crystal clear streams.",
    detail: "Adorned with cascading waterfalls, Arang Kel, lush green valleys, and pristine snow-capped summits."
  },
];

export function PakistanRegions() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <section id="pakistan" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Land of the Pure"
          title="The Beauty of Pakistan"
          subtitle="Six regions, one nation — a country of extraordinary topography and rich heritage."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.1}>
              <article
                onClick={() => setSelectedRegion(r)}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-3xl border border-border transition-all duration-500 hover:border-primary/50"
              >
                <img
                  src={r.image}
                  alt={`Landscape of ${r.name}, Pakistan`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur border border-primary/30">
                    {r.badge}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-primary/20 backdrop-blur flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="glass rounded-2xl p-4 transition-all duration-500 group-hover:glow-ring">
                    <div className="flex items-center gap-1.5 text-xs text-primary font-mono mb-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Capital: {r.capital}</span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {r.text}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Region Detail Modal */}
      <AnimatePresence>
        {selectedRegion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md"
            onClick={() => setSelectedRegion(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass glow-ring max-w-xl w-full rounded-3xl overflow-hidden border border-primary/40 bg-card shadow-2xl relative"
            >
              <div className="relative h-60">
                <img
                  src={selectedRegion.image}
                  alt={selectedRegion.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedRegion(null)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-background/70 text-foreground flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest mb-1">
                  <MapPin className="h-4 w-4" />
                  <span>Capital: {selectedRegion.capital} • {selectedRegion.badge}</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-3">
                  {selectedRegion.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {selectedRegion.text}
                </p>
                <p className="text-foreground/90 text-sm font-light leading-relaxed border-t border-border/40 pt-4">
                  {selectedRegion.detail}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
