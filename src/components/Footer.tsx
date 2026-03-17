import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { key: "nav.home", path: "/" },
    { key: "nav.about", path: "/about" },
    { key: "nav.programs", path: "/programs" },
    { key: "nav.branches", path: "/branches" },
    { key: "nav.membership", path: "/membership" },
    { key: "nav.contact", path: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🪷</span>
              <h3 className="font-bold text-saffron text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
                {t("trust.shortName")}
              </h3>
            </div>
            <p className="text-sm opacity-70">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-saffron">{t("footer.quickLinks")}</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-1">
              {links.map((l) => (
                <li key={l.key}>
                  <Link to={l.path} className="text-sm opacity-70 hover:opacity-100 hover:text-saffron transition-colors touch-manipulation py-0.5 inline-block">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-saffron">{t("footer.contactInfo")}</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li className="flex gap-2"><span className="shrink-0">📍</span><span>{t("contact.address.value")}</span></li>
              <li>
                <a href={`tel:${t("contact.phone.value")}`} className="flex gap-2 hover:opacity-100 transition-opacity touch-manipulation">
                  <span className="shrink-0">📞</span><span>{t("contact.phone.value")}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${t("contact.email.value")}`} className="flex gap-2 hover:opacity-100 transition-opacity touch-manipulation break-all">
                  <span className="shrink-0">✉️</span><span>{t("contact.email.value")}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/20 text-center text-xs opacity-50">
          {t("footer.copyright")}
          <p>Created and Developed by Gudiytham T.O.C 
            <b>(IT wing)</b></p>
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
