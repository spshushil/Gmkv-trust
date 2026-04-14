import { useEffect } from "react";
import mainlogo from "@/assets/main-logo.png";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // ⏱ 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      
      {/* ✨ Logo (optional) */}
      <div className="mb-6 animate-scaleIn">
        <img
          src={mainlogo} // 👉 change if needed
          alt="logo"
          className="w-20 h-20 md:w-28 md:h-28 object-contain"
        />
      </div>

      {/* 🔥 Main Text */}
      <h1
        className="text-3xl md:text-5xl font-bold tracking-wide animate-fadeIn"
        style={{ fontFamily: "'Crimson Text', serif" }}
      >
        வாழ்க வளமுடன்
      </h1>

      {/* 🌿 Sub text */}
      <p className="mt-4 text-sm md:text-lg text-gray-300 animate-fadeIn delay-500">
        Peace • Health • Happiness
      </p>

      {/* 🔄 Loader */}
      <div className="mt-8">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default SplashScreen;