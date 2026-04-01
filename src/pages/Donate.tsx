import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";
import mainlogo from "@/assets/main-logo.png";

const Donate = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  

  const upiLink =
    "upi://pay?pa=Manavalakkaimandram@iob&pn=Donation&cu=INR";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-orange-50">
      {/* 🔥 Logo */}
       <img
         src={mainlogo}
         alt="Logo"
         className="w-20 h-20 mb-4 object-contain"
        />
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-saffron">
        {t("donate.title")}
      </h1>
      {/* Description */}
      <p className="text-gray-600 max-w-md mb-6">
        {t("donate.description")}
      </p>
      {/* 🔥 QR Card */}
      <div className="bg-white p-5 rounded-2xl shadow-lg mb-6 border">
        <QRCodeSVG
        value={upiLink}
        size={220}
        level="H"
        includeMargin={true}
        imageSettings={{
          src: mainlogo,
          height: 40,
          width: 40,
          excavate: true,
        }}
        />
        <p className="mt-4 text-sm text-gray-500">
          Scan & Pay via UPI
        </p>
      </div>

      {/* UPI ID */}
      <p className="text-sm text-gray-500">UPI ID</p>
      <p className="text-saffron font-semibold text-lg mb-5">
        Manavalakkaimandram@iob
      </p>

      {/* Pay Button */}
      <button
        onClick={() => (window.location.href = upiLink)}
        className="bg-green-600 text-white px-8 py-3 rounded-xl font-medium shadow hover:bg-green-700 transition mb-3"
      >
        💳 Pay Now
      </button>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-gray-600 text-white px-8 py-3 rounded-xl hover:text-black hover:bg-black/10 transition text-sm"
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Donate;