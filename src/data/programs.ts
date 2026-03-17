export interface Program {
  id: string;
  title: { en: string; ta: string };
  description: { en: string; ta: string };
  schedule: { en: string; ta: string };
  icon: string;
}

export const programs: Program[] = [
  {
    id: "yoga",
    title: { en: "Yoga Classes", ta: "யோகா வகுப்புகள்" },
    description: {
      en: "Comprehensive yoga sessions covering asanas, pranayama, and relaxation techniques. Suitable for beginners to advanced practitioners. Our certified instructors guide you through traditional Hatha yoga practices tailored to individual needs.",
      ta: "ஆசனங்கள், பிராணாயாமம் மற்றும் தளர்வு நுட்பங்களை உள்ளடக்கிய விரிவான யோகா அமர்வுகள். தொடக்கநிலையாளர்கள் முதல் மேம்பட்ட பயிற்சியாளர்கள் வரை பொருத்தமானது. எங்கள் சான்றிதழ் பெற்ற பயிற்சியாளர்கள் தனிநபர் தேவைகளுக்கு ஏற்ற பாரம்பரிய ஹத யோகா பயிற்சிகள் மூலம் உங்களை வழிநடத்துகிறார்கள்.",
    },
    schedule: {
      en: "Daily | Morning 6:00 AM - 7:30 AM | Evening 5:30 PM - 7:00 PM",
      ta: "தினசரி | காலை 6:00 - 7:30 | மாலை 5:30 - 7:00",
    },
    icon: "🧘",
  },
  {
    id: "meditation",
    title: { en: "Meditation Sessions", ta: "தியான அமர்வுகள்" },
    description: {
      en: "Guided meditation practices including mindfulness, breath awareness, and deep meditation techniques. Experience inner peace and mental clarity through ancient meditation traditions passed down through generations.",
      ta: "கவனமுடைமை, மூச்சு விழிப்புணர்வு மற்றும் ஆழ்ந்த தியான நுட்பங்கள் உள்ளிட்ட வழிகாட்டப்பட்ட தியான பயிற்சிகள். தலைமுறைகள் கடந்து வழங்கப்பட்ட பண்டைய தியான மரபுகள் மூலம் உள் அமைதி மற்றும் மன தெளிவை அனுபவியுங்கள்.",
    },
    schedule: {
      en: "Daily | Morning 6:00 AM - 7:30 AM | Evening 6:15 PM - 7:00 PM",
      ta: "தினசரி | காலை 6:00 - 7:30 | மாலை 6:15 - 7:00",
    },
    icon: "🕉️",
  },
  {
    id: "kayakalpa",
    title: { en: "Kayakalpa Yoga", ta: "காயகல்ப யோகா" },
    description: {
      en: "Ancient rejuvenation practice that promotes longevity, vitality, and spiritual growth. Kayakalpa yoga combines specific physical exercises, breathing techniques, and meditation to revitalize the body and mind at a cellular level.",
      ta: "நீண்ட ஆயுள், உயிர்ச்சக்தி மற்றும் ஆன்மீக வளர்ச்சியை ஊக்குவிக்கும் பண்டைய புத்துயிர் பயிற்சி. காயகல்ப யோகா குறிப்பிட்ட உடல் பயிற்சிகள், சுவாச நுட்பங்கள் மற்றும் தியானத்தை இணைத்து உடல் மற்றும் மனதை செல்லுலார் மட்டத்தில் புத்துயிர் அளிக்கிறது.",
    },
    schedule: {
      en: "Sunday | 9:30 AM - 12:00 AM (Special Sessions)First Sunday of every month",
      ta: "ஞாயிறு | காலை 9:30 - 12:00 (சிறப்பு அமர்வுகள்)ஒவ்வொரு மாதமும் முதல் ஞாயிறு",
    },
    icon: "✨",
  },
  {
    id: "health",
    title: { en: "Health Awareness Programs", ta: "சுகாதார விழிப்புணர்வு நிகழ்ச்சிகள்" },
    description: {
      en: "Regular health camps and awareness programs covering nutrition, natural healing, preventive healthcare, and holistic wellness. Free health checkups and consultations conducted by experienced practitioners.",
      ta: "ஊட்டச்சத்து, இயற்கை சிகிச்சை, தடுப்பு சுகாதாரம் மற்றும் முழுமையான நல்வாழ்வை உள்ளடக்கிய வழக்கமான சுகாதார முகாம்கள் மற்றும் விழிப்புணர்வு நிகழ்ச்சிகள். அனுபவம் வாய்ந்த பயிற்சியாளர்களால் நடத்தப்படும் இலவச சுகாதார பரிசோதனைகள் மற்றும் ஆலோசனைகள்.",
    },
    schedule: {
      en: "Monthly | First Sunday of every month",
      ta: "மாதாந்திர | ஒவ்வொரு மாதமும் முதல் ஞாயிறு",
    },
    icon: "💚",
  },
  {
    id: "community",
    title: { en: "Community Service", ta: "சமூக சேவை" },
    description: {
      en: "Giving back to society through various service activities including food distribution, educational support, environmental initiatives, and assistance to underprivileged communities. Service is the core of our spiritual practice.",
      ta: "உணவு விநியோகம், கல்வி ஆதரவு, சுற்றுச்சூழல் முன்முயற்சிகள் மற்றும் பின்தங்கிய சமூகங்களுக்கு உதவி உள்ளிட்ட பல்வேறு சேவை நடவடிக்கைகள் மூலம் சமூகத்திற்கு திருப்பி அளித்தல். சேவை எங்கள் ஆன்மீக பயிற்சியின் மையமாகும்.",
    },
    schedule: {
      en: "Ongoing | Various schedules based on activities",
      ta: "தொடர்ச்சியான | நடவடிக்கைகளின் அடிப்படையில் பல்வேறு அட்டவணைகள்",
    },
    icon: "🤝",
  },
];
