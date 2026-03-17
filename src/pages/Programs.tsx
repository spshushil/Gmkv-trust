import { useLanguage } from "@/context/LanguageContext";
import { programs } from "@/data/programs";

const Programs = () => {
  const { t, language } = useLanguage();

  return (
    <main className="py-10 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-saffron mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>{t("programs.title")}</h1>
        <p className="text-center text-muted-foreground mb-10 md:mb-12 text-sm md:text-base px-2">{t("programs.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
          {programs.map((prog) => (
            <div key={prog.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 p-4 md:p-6 flex items-center gap-3 md:gap-4 border-b border-border">
                <span className="text-4xl md:text-5xl">{prog.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
                  {prog.title[language]}
                </h3>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">{prog.description[language]}</p>
                <div className="flex items-start gap-2 bg-muted rounded-lg px-3 md:px-4 py-2 md:py-3">
                  <span className="text-saffron shrink-0">🕐</span>
                  <p className="text-xs md:text-sm text-muted-foreground">{prog.schedule[language]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Programs;
