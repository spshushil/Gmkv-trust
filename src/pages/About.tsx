import { useLanguage } from "@/context/LanguageContext";

const timelineItems = [
  { year: "2005", label: { en: "Founded", ta: "நிறுவப்பட்டது" } },
  { year: "2005", label: { en: "First Branch", ta: "முதல் கிளை" } },
  { year: "2010", label: { en: "Regional Expansion", ta: "பிராந்திய விரிவாக்கம்" } },
  { year: "2020", label: { en: "9 Branches", ta: "9 கிளைகள்" } },
];

const About = () => {
  const { t, language } = useLanguage();

  const goals = [
    { icon: "🕉️", titleKey: "about.goals.spiritual", textKey: "about.goals.spiritual.text" },
    { icon: "💚", titleKey: "about.goals.health", textKey: "about.goals.health.text" },
    { icon: "🤝", titleKey: "about.goals.service", textKey: "about.goals.service.text" },
    { icon: "📚", titleKey: "about.goals.education", textKey: "about.goals.education.text" },
  ];

  return (
    <main className="py-10 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-saffron mb-6 md:mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>{t("about.title")}</h1>

        {/* History */}
        <section className="mb-10 md:mb-12">
          <div className="border-l-4 border-saffron pl-4 md:pl-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>{t("about.history.title")}</h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">{t("about.history.text")}</p>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-cream rounded-xl p-5 md:p-8 mb-10 md:mb-12">
          <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-around gap-5 md:gap-6 text-center">
            {timelineItems.map(({ year, label }) => (
              <div key={year} className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs md:text-sm">
                  {year}
                </div>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground">{label[language]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Purpose */}
        <section className="mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-sage mb-3 md:mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>{t("about.purpose.title")}</h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">{t("about.purpose.text")}</p>
        </section>

        {/* Goals */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-saffron mb-5 md:mb-6 text-center" style={{ fontFamily: "'Crimson Text', serif" }}>{t("about.goals.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {goals.map(({ icon, titleKey, textKey }) => (
              <div key={titleKey} className="bg-card border border-border rounded-xl p-5 md:p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">{icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>{t(titleKey)}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t(textKey)}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
