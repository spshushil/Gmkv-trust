import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-saffron">
        {t("donate.title")}
      </h1>

      {/* Description */}
      <p className="text-muted-foreground max-w-xl mb-6">
        {t("donate.description")}
      </p>

      {/* QR */}
      <img
        src="/qr.png"
        alt="Donate QR"
        className="w-64 h-64 mb-6"
      />

      {/* UPI */}
      <p className="text-lg font-semibold mb-2">
        {t("donate.upiId")}
      </p>

      <p className="text-saffron font-bold mb-6">
        yourname@upi
      </p>

      {/* Button */}
      <button
        onClick={() => navigator.clipboard.writeText("yourname@upi")}
        className="bg-saffron text-white px-6 py-2 rounded-lg hover:bg-orange-600"
      >
        {t("donate.copy")}
      </button>
      <button
          onClick={() => navigate("/")}
            className="mt-4 bg-white/30 backdrop-blur-md border border-black/30 px-4 py-2 rounded-lg shadow hover:bg-white/50 transition"
          >
          ⬅ Back
        </button>
    </div>
  );
};

export default Donate;