import { useLanguage } from "@/context/LanguageContext";
import { teamMembers } from "@/data/team";

const Organization = () => {
  const { t, language } = useLanguage();

  return (
    <main className="py-10 md:py-14">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-center text-saffron mb-2"
          style={{ fontFamily: "'Crimson Text', serif" }}
        >
          {t("org.title")}
        </h1>

        <p className="text-center text-muted-foreground mb-10 md:mb-12 text-sm md:text-base">
          {t("org.subtitle")}
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center"
            >

              {/* Avatar */}
              <img
                src={member.image}
                alt={member.name[language]}
                className="w-24 h-24 rounded-full object-cover border-4 border-saffron/30 mb-4"
              />
              
              {/* Name */}
              <h3
                className="text-xl font-bold text-foreground mb-1"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {member.name[language]}
              </h3>

              {/* Role */}
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {member.role[language]}
              </span>

              {/* Contact Buttons */}
              <div className="flex justify-center gap-3 mb-4">

                <a
                  href={`tel:${member.phone}`}
                  className="bg-saffron text-white px-4 py-1.5 rounded-md text-sm hover:opacity-90 transition"
                >
                  📞 Call
                </a>

                <a
                  href={`https://wa.me/${member.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-1.5 rounded-md text-sm hover:opacity-90 transition"
                >
                  💬 WhatsApp
                </a>

              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.description[language]}
              </p>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
};

export default Organization;