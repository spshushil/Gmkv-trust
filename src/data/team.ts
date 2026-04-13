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
    name: { en: "Thiru. K. Murugavel", ta: "திரு. K. முருகவேல்" },
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
    name: { en: "Thiru. N. Jayapragasa Arvind", ta: "திரு. N. ஜெயப்பிரகாச அரவிந்த்" },
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
    name: { en: "Thiru. T. Jayakanthan", ta: "திரு. T. ஜெயகாந்தன்" },
    role: { en: "Treasurer", ta: "பொருளாளர்" },
    phone: "+919150823945",
    image: "/images/treasurer.jpeg",
    description: {
      en: "Managing financial matters of the trust and ensuring transparency in all financial activities.",
      ta: "அறக்கட்டளையின் நிதி தொடர்பான அனைத்து செயல்பாடுகளையும் பொறுப்புடன் நிர்வகித்து நிதி வெளிப்படைத்தன்மையை உறுதி செய்கிறார்.",
    },
  },
  {
    id: "program-officer",
    name: { en: "Thirumathi. V. Sarala", ta: "திருமதி. V. சரளா" },
    role: { en: "Program Officer", ta: "திட்ட அலுவலர்" },
    phone: "+918300170282",
    image: "/images/program-officer.jpg",
    description: {
      en: "Planning and executing yoga camps, meditation sessions, and community outreach programs. Ensuring quality and accessibility of all trust activities.",
      ta: "யோகா முகாம்கள், தியான அமர்வுகள் மற்றும் சமூக சேவை நிகழ்ச்சிகளை திட்டமிட்டு செயல்படுத்துகிறார். அறக்கட்டளையின் அனைத்து செயல்பாடுகளும் தரமாகவும் அனைவருக்கும் எளிதில் கிடைக்கவும் உறுதி செய்கிறார்.",
    },
  },
  {
    id: "SMART Vice President",
    name: { en: "Thirumathi. A. Ragavi", ta: "திருமதி. A. ரகவி" },
    role: { en: "SMART Vice President", ta: "SAMRT துணை தலைவர்" },
    phone: "+919150538059",
    image: "/images/ragavi.jpeg",
    description: {
      en: "Planning and executing yoga camps, meditation sessions, and community outreach programs. Ensuring quality and accessibility of all trust activities.",
      ta: "யோகா முகாம்கள், தியான அமர்வுகள் மற்றும் சமூக சேவை நிகழ்ச்சிகளை திட்டமிட்டு செயல்படுத்துகிறார். அறக்கட்டளையின் அனைத்து செயல்பாடுகளும் தரமாகவும் அனைவருக்கும் எளிதில் கிடைக்கவும் உறுதி செய்கிறார்.",
    },
  },
  {
    id: "pro",
    name: { en: "Thirumathi. V. Mahalakshmi", ta: "திருமதி. V. மகாலட்சுமி" },
    role: { en: "Public Relations Officer", ta: "மக்கள் தொடர்பு அதிகாரி" },
    phone: "+919442787991",
    image: "/images/pro.jpg",
    description: {
      en: "Building public awareness and community relationships. Managing communications, media, and outreach to spread the trust's message far and wide.",
      ta: "பொது விழிப்புணர்வை உருவாக்கி சமூக உறவுகளை வளர்த்தல். அறக்கட்டளையின் செய்தியை பரவலாக பரப்ப தகவல் தொடர்பு, ஊடகம் மற்றும் சமூக அணுகலை நிர்வகிக்கிறார்.",
    },
  },
  {
    id: "Vice President,Center Expansion",
    name: { en: "Thiru. N. Prabhu", ta: "திரு. ந. பிரபு" },
    role: { en: "Vice President,Center Expansion", ta: "தவமைய விரிவாக்க துணை தலைவர்" },
    phone: "+919159060040",
    image: "/images/prabhu.jpeg",
    description: {
      en: "The Vice President who formulates plans for the growth of the organization, establishes new centers, enhances operations, and drives expansion by integrating all branches.",
      ta: "தவமைய வளர்ச்சிக்கான திட்டங்களை உருவாக்கி, புதிய மையங்களை நிறுவுதல், செயல்பாடுகளை மேம்படுத்துதல் மற்றும் அனைத்து கிளைகளையும் ஒருங்கிணைத்து விரிவாக்கத்தை முன்னெடுக்கும் துணை தலைவர்.",
    },
  },
  {
    id: "VSP Vice President",
    name: { en: "Thiru. M.N. Murali", ta: "திரு. M.N. முரளி" },
    role: { en: "VSP Vice President", ta: "VSP துணைத்தலைவர்" },
    phone: "+919486723922",
    image: "/images/murali.jpeg",
    description: {
      en: "The Co-Chair plays a pivotal role in maintaining discipline and standards by collaborating with the forums' faculty advisors and coordinating training sessions and events.",
      ta: "மன்றங்களின் பொறுப்பாசிரியர்களுடன் இணைந்து செயல்பட்டு, பயிற்சி மற்றும் நிகழ்ச்சிகளை ஒருங்கிணைத்து, ஒழுங்கு மற்றும் தரத்தை பேணுவதில் முக்கிய பங்காற்றும் இணைத் தலைவர்.",
    },
  },
  {
    id: "YYE Vice President",
    name: { en: "Thirumathi. S. Usharani", ta: "திருமதி. S. உஷாராணி" },
    role: { en: "YYE Vice President", ta: "YYE துணைத் தலைவர்" },
    phone: "+916379298123",
    image: "/images/unknown.jpeg",
    description: {
      en: "The Vice President holds the responsibility of collaborating with the President, implementing initiatives, and coordinating all departments to enhance the organization's growth and efficiency.",
      ta: "அமைப்பின் வளர்ச்சி மற்றும் செயல்திறனை மேம்படுத்த, தலைவர் உடன் இணைந்து செயல்பட்டு, திட்டங்களை நடைமுறைப்படுத்தி, அனைத்து பிரிவுகளையும் ஒருங்கிணைக்கும் பொறுப்பை வகிக்கும் துணைத் தலைவர்",
    },
  },
  {
    id: "YHE Vice President",
    name: { en: "Thiru. A. Shanmugam", ta: "திரு. A. ஷண்முகம்" },
    role: { en: "YHE Vice President", ta: "YHE துணை தலைவர்" },
    phone: "+919790097013",
    image: "/images/police.jpeg",
    description: {
      en: "Intelligently planning tasks, and utilizing technology and skills to minimize time and effort while achieving superior results.",
      ta: "பணிகளை புத்திசாலித்தனமாக திட்டமிட்டு, தொழில்நுட்பம் மற்றும் திறமைகளை பயன்படுத்தி, நேரமும் முயற்சியும் குறைத்து சிறந்த முடிவுகளை அடைவது.",
    },
  },
  {
    id: "Vice President ALL FORUMS",
    name: { en: "Thiru. S. Arunachalam", ta: "திரு. S. அருணாசலம்" },
    role: { en: "Vice President for All Forums", ta: "அனைத்து மன்ற பொறுப்பாசிரியர் துணைத் தலைவர்" },
    phone: "+919043470395",
    image: "/images/aruna.jpeg",
    description: {
      en: "The Vice President, who coordinates the faculty advisors of all forums, guides their activities to ensure they proceed as planned, and undertakes administrative and coordination responsibilities.",
      ta: "அனைத்து மன்றங்களின் பொறுப்பாசிரியர்களை ஒருங்கிணைத்து, செயல்பாடுகள் திட்டமிட்டபடி நடைபெற வழிகாட்டி, நிர்வாக மற்றும் ஒருங்கிணைப்பு பொறுப்புகளை மேற்கொள்ளும் துணைத் தலைவர்",
    },
  },
];
