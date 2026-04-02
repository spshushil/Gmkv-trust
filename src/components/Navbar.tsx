import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { auth } from "../data/auth";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState<any>(null);

  const navLinks = [
    { key: "nav.home", path: "/" },
    { key: "nav.about", path: "/about" },
    { key: "nav.organization", path: "/organization" },
    { key: "nav.branches", path: "/branches" },
    { key: "nav.programs", path: "/programs" },
    { key: "nav.gallery", path: "/gallery" },
    { key: "nav.membership", path: "/membership" },
    { key: "nav.contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // 🔥 AUTH CHECK
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img src="/wcsc logo.png" alt="Logo" className="h-8 w-8" />
            <p className="text-sm font-bold text-saffron">
              {t("trust.shortName")}
            </p>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`px-2.5 py-1.5 text-sm rounded-md ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:text-saffron"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            {/* 🔥 ADMIN ONLY HISTORY */}
            {user && (
              <Link
                to="/EventHistory"
                className="px-2.5 py-1.5 text-sm rounded-md text-green-600 font-semibold"
              >
                📜 History
              </Link>
            )}
            {user && (
              <Link to="/dashboard" className="text-blue-600 font-semibold">
                📊 Dashboard
              </Link>
            )}

            {/* 🔐 ADMIN */}
            <Link
              to="/admin"
              className="ml-2 px-3 py-1.5 text-sm rounded-md bg-saffron text-white"
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
              className="text-xs"
            >
              <Globe className="h-3.5 w-3.5" />
              {language === "en" ? "தமிழ்" : "English"}
            </Button>

            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden grid grid-cols-2 gap-1 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="p-2"
              >
                {t(link.key)}
              </Link>
            ))}

            {/* 🔥 ADMIN ONLY HISTORY */}
            {user && (
              <Link
                to="/EventHistory"
                onClick={() => setIsOpen(false)}
                className="p-2 text-green-600 font-semibold"
              >
                📜 History
              </Link>
            )}
            {user && (
              <Link to="/dashboard" className="text-blue-600 font-semibold">
                📊 Dashboard
              </Link>
            )}

            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="col-span-2 bg-saffron text-white text-center p-2"
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