import { MapPin } from "lucide-react";
import badshahi from "@/assets/badshahi.jpg";
import faisal from "@/assets/faisal.jpg";
import hunza from "@/assets/hunza.jpg";
import k2 from "@/assets/k2.jpg";
import minar from "@/assets/minar.jpg";
import monument from "@/assets/monument.jpg";
import neelum from "@/assets/neelum.jpg";
import { Reveal, SectionHeading } from "./Reveal";

export const landmarks = [
  { name: "Minar-e-Pakistan", location: "Lahore", image: minar, span: "lg:row-span-2" },
  { name: "Badshahi Mosque", location: "Lahore", image: badshahi, span: "" },
  { name: "Faisal Mosque", location: "Islamabad", image: faisal, span: "" },
  { name: "Pakistan Monument", location: "Islamabad", image: monument, span: "" },
  { name: "Hunza Valley", location: "Gilgit-Baltistan", image: hunza, span: "lg:row-span-2" },
  { name: "Neelum Valley", location: "Azad Kashmir", image: neelum, span: "" },
  { name: "K2", location: "Karakoram Range", image: k2, span: "sm:col-span-2" },
];

export function Landmarks() {
  return (
    <section id="landmarks" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Heritage"
          title="Icons of the Nation"
          subtitle="Monuments and mountains that define the Pakistani skyline."
        />

        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {landmarks.map((l, i) => (
            <Reveal key={l.name} delay={(i % 3) * 0.08} className={l.span}>
              <article className="group relative h-full min-h-[220px] overflow-hidden rounded-3xl border border-border">
                <img
                  src={l.image}
                  alt={`${l.name} in ${l.location}, Pakistan`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.12]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-display text-2xl text-foreground">{l.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary">
                    <MapPin className="h-3.5 w-3.5" /> {l.location}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
