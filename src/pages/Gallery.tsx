import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { galleryItems } from "@/data/gallery";
import { Button } from "@/components/ui/button";

type Category = "all" | "yoga" | "meditation" | "activities" | "service";

const Gallery = () => {
  const { t, language } = useLanguage();
  const [active, setActive] = useState<Category>("all");

  const cats: { key: Category; label: string }[] = [
    { key: "all", label: t("gallery.all") },
    { key: "yoga", label: t("gallery.yoga") },
    { key: "meditation", label: t("gallery.meditation") },
    { key: "activities", label: t("gallery.activities") },
    { key: "service", label: t("gallery.service") },
  ];

  const filtered = active === "all" ? galleryItems : galleryItems.filter((i) => i.category === active);

  const catColors: Record<string, string> = {
    yoga: "bg-primary/10 text-primary",
    meditation: "bg-secondary/10 text-secondary",
    activities: "bg-accent/20 text-accent-foreground",
    service: "bg-muted text-muted-foreground",
  };

  return (
    <main className="py-10 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-saffron mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>{t("gallery.title")}</h1>
        <p className="text-center text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">{t("gallery.subtitle")}</p>

        {/* Filters — scrollable on mobile */}
        <div className="flex gap-2 mb-8 md:mb-10 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible">
          {cats.map((c) => (
            <Button
              key={c.key}
              variant={active === c.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActive(c.key)}
              className="whitespace-nowrap shrink-0 touch-manipulation"
            >
              {c.label}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden bg-muted aspect-square hover:shadow-lg transition-shadow">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 md:gap-3 p-3 md:p-4 text-center">
                <span className="text-4xl md:text-5xl">
                  {item.category === "yoga" ? "🧘" : item.category === "meditation" ? "🕉️" : item.category === "activities" ? "🏛️" : "🤝"}
                </span>
                <p className="text-xs text-muted-foreground leading-tight hidden sm:block">{item.placeholder}</p>
              </div>
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                <div className="text-center">
                  <p className="text-background font-semibold text-xs md:text-sm">{item.title[language]}</p>
                  <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${catColors[item.category]}`}>
                    {t(`gallery.${item.category}`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
