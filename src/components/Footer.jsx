import { Heart } from "lucide-react";
import { PakistanFlag } from "./PakistanFlag";

const links = [
  { label: "Home", href: "#home" },
  { label: "History", href: "#history" },
  { label: "Quaid-e-Azam", href: "#quaid" },
  { label: "Pakistan", href: "#pakistan" },
  { label: "Landmarks", href: "#landmarks" },
  { label: "Gallery", href: "#gallery" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="section-shell flex flex-col items-center gap-8 text-center">
        <PakistanFlag className="w-28" />
        <p className="font-display text-2xl">
          <span className="shimmer-text">Pakistan Zindabad!</span>
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          Made with <Heart className="h-4 w-4 fill-primary text-primary" /> for Pakistan
        </p>
        <p className="text-xs text-muted-foreground/70">
          14 August 1947 — {new Date().getFullYear()} · Celebrating Independence Day
        </p>
      </div>
    </footer>
  );
}
