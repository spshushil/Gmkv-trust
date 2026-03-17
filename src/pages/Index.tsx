import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { branches } from "@/data/branches";

const Index = () => {
  const { t, language } = useLanguage();

  const programs = [
    { icon: "🧘", key: "yoga" },
    { icon: "🕉️", key: "meditation" },
    { icon: "✨", key: "kayakalpa" },
    { icon: "🤝", key: "community" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-5xl md:text-6xl mb-4">🪷</div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight px-2" style={{ fontFamily: "'Crimson Text', serif" }}>
            {t("trust.name")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-2">
            {t("trust.slogan")}
          </p>
          <div className="flex gap-3 justify-center flex-wrap px-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8 text-sm md:text-base">
              <Link to="/about">{t("home.learnMore")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-6 md:px-8 text-sm md:text-base">
              <Link to="/membership">{t("home.joinUs")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4 py-12 md:py-16 max-w-3xl text-center">
        <div className="lotus-divider">
          <span className="text-saffron text-xl">🪷</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-saffron" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.intro.title")}</h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{t("home.intro.text")}</p>
      </section>

      {/* Mission & Vision */}
      <section className="section-cream py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 md:p-8 border-l-4 border-saffron shadow-sm">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl md:text-2xl font-bold text-saffron mb-3" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.mission.title")}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{t("home.mission.text")}</p>
            </div>
            <div className="bg-card rounded-xl p-6 md:p-8 border-l-4 border-sage shadow-sm">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl md:text-2xl font-bold text-sage mb-3" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.vision.title")}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{t("home.vision.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-saffron mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.programs.title")}</h2>
        <div className="lotus-divider"><span className="text-sage text-xl">✦</span></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
          {programs.map(({ icon, key }) => (
            <div key={key} className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{icon}</div>
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2 leading-tight" style={{ fontFamily: "'Crimson Text', serif" }}>
                {t(`home.programs.${key}`)}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">{t(`home.programs.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Branches preview */}
      <section className="section-cream py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sage mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.branches.title")}</h2>
          <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">{t("home.branches.subtitle")}</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            {branches.map((b) => (
              <span key={b.id} className="bg-card border border-border rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-foreground">
                {b.name[language]}
              </span>
            ))}
          </div>
          <Button asChild variant="outline" className="border-sage text-sage hover:bg-secondary hover:text-secondary-foreground">
            <Link to="/branches">{t("nav.branches")} →</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
