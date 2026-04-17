import { useLanguage } from "@/context/LanguageContext";


const historyData = [
  {
    year: "1989",
    title: {
      en: "Formation of Manavalakkalai Mandram",
      ta: "மனவளக்கலை மன்றம் தொடக்கம்",
    },
    description: {
      en: "The trust activities began in Gudiyatham with guidance from spiritual leaders.",
      ta: "ஆன்மீக தலைவர்களின் வழிகாட்டுதலுடன் குடியாத்தத்தில் அறக்கட்டளை செயல்பாடுகள் தொடங்கின.",
    },
  },
  {
    year: "1994",
    title: {
      en: "Trust Registration",
      ta: "அறக்கட்டளை பதிவு",
    },
    description: {
      en: "The organization was officially registered as Gudiyatham SKY Trust.",
      ta: "குடியாத்தம் SKY அறக்கட்டளை அதிகாரப்பூர்வமாக பதிவு செய்யப்பட்டது.",
    },
  },
  {
    year: "1998",
    title: {
      en: "Land Purchase",
      ta: "நிலம் வாங்குதல்",
    },
    description: {
      en: "Land was purchased to establish a permanent center.",
      ta: "நிலையான மையம் அமைக்க நிலம் வாங்கப்பட்டது.",
    },
  },
  {
    year: "2005",
    title: {
      en: "Temple Opening",
      ta: "அறிவுத்திருக்கோயில் திறப்பு",
    },
    description: {
      en: "Arivuthirukoil was inaugurated.",
      ta: "அறிவுத்திருக்கோயில் திறந்து வைக்கப்பட்டது.",
    },
  },
  {
    year: "2013",
    title: {
      en: "Trust Committee Formation",
      ta: "அறக்கட்டளை நிர்வாகம் அமைப்பு",
    },
    description: {
      en: "Administrative committee was formed.",
      ta: "நிர்வாக குழு அமைக்கப்பட்டது.",
    },
  },
  {
    year: "2022",
    title: {
      en: "New Leadership",
      ta: "புதிய நிர்வாகம்",
    },
    description: {
      en: "New leadership team appointed.",
      ta: "புதிய நிர்வாக குழு நியமிக்கப்பட்டது.",
    },
  },
];

const TrustHistory = () => {
    const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-white py-12 px-4">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-saffron mb-12">
        {language === "en" ? "🏛 Trust History" : "🏛 அறக்கட்டளை வரலாறு"}
      </h1>

      <div className="max-w-4xl mx-auto relative">

        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-saffron/40 h-full"></div>

        {historyData.map((item, index) => (
          <div
            key={index}
            className={`mb-10 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full md:w-1/2 px-4">

              <div className="bg-white/40 backdrop-blur-lg border shadow-xl p-6 rounded-xl hover:scale-[1.03] transition">

                <h2 className="text-xl font-bold text-saffron mb-2">
                  {item.year}
                </h2>

                <h3 className="font-semibold text-gray-800">
                  {item.title[language]}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {item.description[language]}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TrustHistory;