import { useLanguage } from "@/context/LanguageContext";
import { branches } from "@/data/branches";

const Branches = () => {
  const { t, language } = useLanguage();

  return (
    <main className="py-10 md:py-12">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-center text-saffron mb-2"
          style={{ fontFamily: "'Crimson Text', serif" }}
        >
          {t("branches.title")}
        </h1>

        <p className="text-center text-muted-foreground mb-10 text-sm md:text-base">
          {t("branches.subtitle")}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-card border border-border rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >

              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏛️</span>
                  <h3
                    className="text-lg md:text-xl font-bold text-foreground"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    {branch.name[language]}
                  </h3>
                </div>

                {/* Address */}
                <p className="text-xs text-muted-foreground mb-3">
                  📍 {branch.address[language]}
                </p>

                {/* Coordinators */}
                <div className="mb-3">
                  <p className="text-saffron font-semibold text-xs md:text-sm mb-1">
                    {t("branches.coordinator")}:
                  </p>

                  <div className="space-y-1">
                    {branch.coordinators.map((coord, i) => (
                      <div key={i} className="text-xs md:text-sm text-muted-foreground flex justify-between">
                        <span>👤 {coord.name[language]}</span>
                        <a
                          href={`https://wa.me/${coord.phone}`}
                          className="text-green-600 hover:underline"
                        >
                          📱 {coord.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div className="mb-4">
                  <p className="text-saffron font-semibold text-xs md:text-sm mb-1">
                    {t("branches.activities")}:
                  </p>

                  <ul className="space-y-1">
                    {branch.activities[language].map((act, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm"
                      >
                        <span className="text-sage">✦</span> {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-4 flex flex-wrap gap-2">

                {/* Email */}
                <a
                  href={`mailto:${branch.email}`}
                  className="flex-1 text-center bg-blue-600 text-white text-xs md:text-sm py-2 rounded-lg hover:opacity-90"
                >
                  ✉️ Email
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
};

export default Branches;