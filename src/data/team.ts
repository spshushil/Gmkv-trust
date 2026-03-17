export interface TeamMember {
  id: string;
  name: { en: string; ta: string };
  role: { en: string; ta: string };
  description: { en: string; ta: string };
  phone: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "president",
    name: { en: "Thiru. K. Murugavel", ta: "திரு. கு. முருகவேல்" },
    role: { en: "President", ta: "தலைவர்" },
    phone: "+919865108087",
    image: "/images/president.jpg",
    description: {
      en: "Leading the trust with decades of experience in yoga and spiritual guidance. Dedicated to spreading the message of wellness and inner peace to all communities.",
      ta: "யோகா மற்றும் ஆன்மீக வழிகாட்டுதலில் பல ஆண்டுகள் அனுபவத்துடன் அறக்கட்டளையை வழிநடத்துகிறார். அனைத்து சமூகங்களுக்கும் நல்வாழ்வு மற்றும் உள் அமைதியின் செய்தியை பரப்ப அர்ப்பணிப்புடன் செயல்படுகிறார்.",
    },
  },
  {
    id: "secretary",
    name: { en: "Thiru. N. Jayapragasa Arvind", ta: "திரு. ந. ஜெயப்பிரகாச அரவிந்த்" },
    role: { en: "Secretary", ta: "செயலாளர்" },
    phone: "+919791290027",
    image: "/images/secretary.jpg",
    description: {
      en: "Managing day-to-day operations and ensuring smooth coordination between all branches. A dedicated administrator with a passion for service.",
      ta: "அன்றாட செயல்பாடுகளை நிர்வகித்து அனைத்து கிளைகளுக்கிடையில் சீரான ஒருங்கிணைப்பை உறுதி செய்கிறார். சேவையில் ஆர்வமுள்ள அர்ப்பணிப்புள்ள நிர்வாகி.",
    },
  },
  {
    id: "treasurer",
    name: { en: "Thiru. T. Jayakanthan", ta: "திரு. டி. ஜெயகாந்தன்" },
    role: { en: "Treasurer", ta: "பொருளாளர்" },
    phone: "+919150823945",
    image: "/images/treasurer.jpg",
    description: {
      en: "Managing financial matters of the trust and ensuring transparency in all financial activities.",
      ta: "அறக்கட்டளையின் நிதி தொடர்பான அனைத்து செயல்பாடுகளையும் பொறுப்புடன் நிர்வகித்து நிதி வெளிப்படைத்தன்மையை உறுதி செய்கிறார்.",
    },
  },
  {
    id: "program-officer",
    name: { en: "Thirumathi. V. Sarala", ta: "திருமதி. வே. சரளா" },
    role: { en: "Program Officer", ta: "நிகழ்ச்சி அதிகாரி" },
    phone: "+918300170282",
    image: "/images/program-officer.jpg",
    description: {
      en: "Planning and executing yoga camps, meditation sessions, and community outreach programs. Ensuring quality and accessibility of all trust activities.",
      ta: "யோகா முகாம்கள், தியான அமர்வுகள் மற்றும் சமூக சேவை நிகழ்ச்சிகளை திட்டமிட்டு செயல்படுத்துகிறார். அறக்கட்டளையின் அனைத்து செயல்பாடுகளும் தரமாகவும் அனைவருக்கும் எளிதில் கிடைக்கவும் உறுதி செய்கிறார்.",
    },
  },
  {
    id: "pro",
    name: { en: "Thirumathi. V. Mahalakshmi", ta: "திருமதி. வே. மகாலட்சுமி" },
    role: { en: "Public Relations Officer", ta: "மக்கள் தொடர்பு அதிகாரி" },
    phone: "+919442787991",
    image: "/images/pro.jpg",
    description: {
      en: "Building public awareness and community relationships. Managing communications, media, and outreach to spread the trust's message far and wide.",
      ta: "பொது விழிப்புணர்வை உருவாக்கி சமூக உறவுகளை வளர்த்தல். அறக்கட்டளையின் செய்தியை பரவலாக பரப்ப தகவல் தொடர்பு, ஊடகம் மற்றும் சமூக அணுகலை நிர்வகிக்கிறார்.",
    },
  },
];
