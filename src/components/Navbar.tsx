import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { key: "nav.home", path: "/" },
    { key: "nav.about", path: "/about" },
    { key: "nav.organization", path: "/organization" },
    { key: "nav.branches", path: "/branches" },
    { key: "nav.programs", path: "/programs" },
    { key: "nav.gallery", path: "/gallery" },
    { key: "nav.membership", path: "/membership" },
    { key: "nav.contact", path: "/contact" },
    { key: "History", path: "/events" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-0" onClick={() => setIsOpen(false)}>
            <img src="/wcsc logo.png" alt="Logo" className="h-8 w-8 object-contain" />

            <div className="min-w-0">
              <p
               className="text-sm font-bold text-saffron leading-tight truncate"
               style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {t("trust.shortName")}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`px-2.5 py-1.5 text-sm rounded-md transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-saffron hover:bg-muted"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            {/* 🔐 ADMIN BUTTON */}
            <Link
              to="/admin"
              className="ml-2 px-3 py-1.5 text-sm rounded-md bg-saffron text-white hover:opacity-90 transition"
            >
              🔐 Admin
            </Link>

          </div>

          {/* Language + Mobile */}
          <div className="flex items-center gap-2">

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ta" : "en")}
              className="flex items-center gap-1 border-saffron text-saffron hover:bg-primary hover:text-primary-foreground text-xs px-2 py-1 h-8"
            >
              <Globe className="h-3.5 w-3.5" />
              {language === "en" ? "தமிழ்" : "English"}
            </Button>

            <button
              className="lg:hidden p-2 text-foreground rounded-md hover:bg-muted"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-3 border-t border-border grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-3 text-sm rounded-md ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="px-3 py-3 text-sm rounded-md bg-saffron text-white text-center col-span-2"
            >
              🔐 Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;