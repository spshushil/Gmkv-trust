import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.organization": "Organization",
    "nav.branches": "Branches",
    "nav.programs": "Programs",
    "nav.gallery": "Gallery",
    "nav.membership": "Membership",
    "nav.contact": "Contact",

    // Trust
    "trust.name": "Gudiyatham Manavalakalai Mandram Arakkattalai",
    "trust.shortName": "GMKV Trust",
    "trust.slogan": "Nurturing Body, Mind & Spirit Through Yoga and Service",

    // Home
    "home.learnMore": "Learn More",
    "home.joinUs": "Join Us",
    "home.intro.title": "About Our Trust",
    "home.intro.text": "Gudiyatham Manavalakalai Mandram Arakkattalai dedicated to promoting yoga, meditation, and holistic well-being across communities. Founded with the vision of nurturing body, mind, and spirit, we serve people from all walks of life.",
    "home.mission.title": "Our Mission",
    "home.mission.text": "To spread the practice of yoga, meditation, and kayakalpa for physical, mental, and spiritual well-being of all people.",
    "home.vision.title": "Our Vision",
    "home.vision.text": "A society where every individual achieves harmony of body, mind, and soul through ancient yogic wisdom and selfless service.",
    "home.programs.title": "Our Programs",
    "home.programs.yoga": "Yoga Classes",
    "home.programs.yoga.desc": "Regular yoga sessions for all age groups with certified instructors.",
    "home.programs.meditation": "Meditation",
    "home.programs.meditation.desc": "Guided meditation practices for inner peace and mental clarity.",
    "home.programs.kayakalpa": "Kayakalpa Yoga",
    "home.programs.kayakalpa.desc": "Ancient rejuvenation practices for longevity and vitality.",
    "home.programs.community": "Community Service",
    "home.programs.community.desc": "Health awareness camps, social service, and community outreach programs.",
    "home.branches.title": "Our Branches",
    "home.branches.subtitle": "Find a branch near you",

    // About
    "about.title": "About the Trust",
    "about.history.title": "Our History",
    "about.history.text": "Temple of consciousness Gudiyatham was established with a deep commitment to serve humanity through the ancient sciences of yoga and spirituality. Over the years, we have grown from a small gathering of dedicated practitioners to a widespread trust with multiple branches, touching thousands of lives through yoga, meditation, and community service.",
    "about.purpose.title": "Purpose & Philosophy",
    "about.purpose.text": "Our trust is rooted in the belief that true well-being comes from the harmony of body, mind, and spirit. We follow the ancient yogic tradition that emphasizes self-realization, disciplined practice, and compassionate service. Our philosophy embraces all people regardless of background, promoting unity, peace, and spiritual growth.",
    "about.goals.title": "Spiritual & Social Goals",
    "about.goals.spiritual": "Spiritual Growth",
    "about.goals.spiritual.text": "Guide individuals toward inner transformation through yoga, meditation, and kayakalpa practices.",
    "about.goals.health": "Health & Wellness",
    "about.goals.health.text": "Promote physical and mental well-being through regular yoga programs and health awareness initiatives.",
    "about.goals.service": "Social Service",
    "about.goals.service.text": "Serve communities through outreach programs, health camps, and support for underprivileged sections of society.",
    "about.goals.education": "Spiritual Education",
    "about.goals.education.text": "Impart knowledge of ancient yogic sciences and spiritual wisdom to future generations.",

    // Organization
    "org.title": "Organization Structure",
    "org.subtitle": "Our Leadership",

    // Branches
    "branches.title": "Branches & Coordinators",
    "branches.subtitle": "Our network across the region",
    "branches.coordinator": "Coordinator",
    "branches.contact": "Contact",
    "branches.activities": "Activities",

    // Programs
    "programs.title": "Programs & Activities",
    "programs.subtitle": "Explore our offerings",
    "programs.schedule": "Schedule",
    "programs.details": "Details",

    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle": "Moments from our journey",
    "gallery.all": "All",
    "gallery.yoga": "Yoga Camps",
    "gallery.meditation": "Meditation",
    "gallery.activities": "Trust Activities",
    "gallery.service": "Social Service",

    // Membership
    "membership.title": "Join Our Trust",
    "membership.subtitle": "Become a member and be part of this spiritual journey",
    "membership.name": "Full Name",
    "membership.phone": "Phone Number",
    "membership.email": "Email Address",
    "membership.address": "Address",
    "membership.branch": "Select Branch",
    "membership.submit": "Submit Application",
    "membership.success": "Application submitted successfully! We will contact you soon.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We'd love to hear from you",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",
    "contact.form.success": "Message sent successfully!",
    "contact.address.value": "no.1, R.S.Road, Ammanankuppam, Gudiyatham, Tamil Nadu 635803",
    "contact.phone.value": "+91 82486 69855",
    "contact.email.value": "gudiyatham.officetoc@gmail.com",

    // Footer
    "footer.tagline": "Inspired by the principles of WCSC, Aliyar",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Info",
    "footer.copyright": "© 2026 Gudiyatham Manavalakalai Mandram Arakkattalai. All Rights Reserved.",
  },
  ta: {
    // Nav
    "nav.home": "முகப்பு",
    "nav.about": "எங்களைப் பற்றி",
    "nav.organization": "அமைப்பு",
    "nav.branches": "கிளைகள்",
    "nav.programs": "நிகழ்ச்சிகள்",
    "nav.gallery": "படத்தொகுப்பு",
    "nav.membership": "உறுப்பினர்",
    "nav.contact": "தொடர்பு",

    // Trust
    "trust.name": "குடியாத்தம் மனவளக்கலை மன்ற அறக்கட்டளை",
    "trust.shortName": "GMKV அறக்கட்டளை",
    "trust.slogan": "யோகா மற்றும் சேவை மூலம் உடல், மனம் மற்றும் ஆன்மாவை வளர்த்தல்",

    // Home
    "home.learnMore": "மேலும் அறிய",
    "home.joinUs": "இணையுங்கள்",
    "home.intro.title": "எங்கள் அறக்கட்டளை பற்றி",
    "home.intro.text": "குடியாத்தம் மனவளக்கலை மன்ற அறக்கட்டளை என்பது யோகா, தியானம் மற்றும் முழுமையான நல்வாழ்வை ஊக்குவிப்பதில் அர்ப்பணிக்கப்பட்ட ஒரு ஆன்மீக மற்றும் சமூக சேவை அறக்கட்டளையாகும். உடல், மனம் மற்றும் ஆன்மாவை வளர்க்கும் நோக்கத்துடன் நிறுவப்பட்டது.",
    "home.mission.title": "எங்கள் நோக்கம்",
    "home.mission.text": "அனைத்து மக்களின் உடல், மன மற்றும் ஆன்மீக நலனுக்காக யோகா, தியானம் மற்றும் காயகல்ப பயிற்சியை பரப்புதல்.",
    "home.vision.title": "எங்கள் தொலைநோக்கு",
    "home.vision.text": "பண்டைய யோக ஞானம் மற்றும் தன்னலமற்ற சேவை மூலம் ஒவ்வொரு தனிநபரும் உடல், மனம் மற்றும் ஆன்மாவின் இணக்கத்தை அடையும் சமூகம்.",
    "home.programs.title": "எங்கள் நிகழ்ச்சிகள்",
    "home.programs.yoga": "யோகா வகுப்புகள்",
    "home.programs.yoga.desc": "அனைத்து வயதினருக்கும் சான்றிதழ் பெற்ற பயிற்சியாளர்களுடன் வழக்கமான யோகா அமர்வுகள்.",
    "home.programs.meditation": "தியானம்",
    "home.programs.meditation.desc": "உள் அமைதி மற்றும் மன தெளிவுக்கான வழிகாட்டப்பட்ட தியான பயிற்சிகள்.",
    "home.programs.kayakalpa": "காயகல்ப யோகா",
    "home.programs.kayakalpa.desc": "நீண்ட ஆயுள் மற்றும் உயிர்ச்சக்திக்கான பண்டைய புத்துயிர் பயிற்சிகள்.",
    "home.programs.community": "சமூக சேவை",
    "home.programs.community.desc": "சுகாதார விழிப்புணர்வு முகாம்கள், சமூக சேவை மற்றும் சமூக அணுகல் நிகழ்ச்சிகள்.",
    "home.branches.title": "எங்கள் கிளைகள்",
    "home.branches.subtitle": "உங்களுக்கு அருகிலுள்ள கிளையைக் கண்டறியுங்கள்",

    // About
    "about.title": "அறக்கட்டளை பற்றி",
    "about.history.title": "எங்கள் வரலாறு",
    "about.history.text": "குடியாத்தம் அறிவுத் திருக்கோவில் யோகா மற்றும் ஆன்மீகத்தின் பண்டைய அறிவியல் மூலம் மனிதகுலத்திற்கு சேவை செய்ய ஆழ்ந்த அர்ப்பணிப்புடன் நிறுவப்பட்டது. பல ஆண்டுகளாக, நாங்கள் அர்ப்பணிக்கப்பட்ட பயிற்சியாளர்களின் சிறிய குழுவிலிருந்து பல கிளைகளுடன் பரந்த அறக்கட்டளையாக வளர்ந்துள்ளோம்.",
    "about.purpose.title": "நோக்கம் & தத்துவம்",
    "about.purpose.text": "உண்மையான நல்வாழ்வு உடல், மனம் மற்றும் ஆன்மாவின் இணக்கத்திலிருந்து வருகிறது என்ற நம்பிக்கையில் எங்கள் அறக்கட்டளை வேரூன்றியுள்ளது. சுய-உணர்தல், ஒழுங்கான பயிற்சி மற்றும் இரக்கமுள்ள சேவையை வலியுறுத்தும் பண்டைய யோக மரபை நாங்கள் பின்பற்றுகிறோம்.",
    "about.goals.title": "ஆன்மீக & சமூக இலக்குகள்",
    "about.goals.spiritual": "ஆன்மீக வளர்ச்சி",
    "about.goals.spiritual.text": "யோகா, தியானம் மற்றும் காயகல்ப பயிற்சிகள் மூலம் உள் மாற்றத்திற்கு தனிநபர்களை வழிநடத்துதல்.",
    "about.goals.health": "ஆரோக்கியம் & நல்வாழ்வு",
    "about.goals.health.text": "வழக்கமான யோகா நிகழ்ச்சிகள் மற்றும் சுகாதார விழிப்புணர்வு முன்முயற்சிகள் மூலம் உடல் மற்றும் மன நல்வாழ்வை ஊக்குவித்தல்.",
    "about.goals.service": "சமூக சேவை",
    "about.goals.service.text": "சமூக நிகழ்ச்சிகள், சுகாதார முகாம்கள் மற்றும் பின்தங்கிய சமூகத்தினருக்கு ஆதரவு மூலம் சமூகங்களுக்கு சேவை செய்தல்.",
    "about.goals.education": "ஆன்மீக கல்வி",
    "about.goals.education.text": "பண்டைய யோக அறிவியல் மற்றும் ஆன்மீக ஞானத்தை எதிர்கால சந்ததியினருக்கு வழங்குதல்.",

    // Organization
    "org.title": "அமைப்பு கட்டமைப்பு",
    "org.subtitle": "எங்கள் தலைமை",

    // Branches
    "branches.title": "கிளைகள் & ஒருங்கிணைப்பாளர்கள்",
    "branches.subtitle": "பிராந்தியம் முழுவதும் எங்கள் வலையமைப்பு",
    "branches.coordinator": "ஒருங்கிணைப்பாளர்",
    "branches.contact": "தொடர்பு",
    "branches.activities": "நடவடிக்கைகள்",

    // Programs
    "programs.title": "நிகழ்ச்சிகள் & செயல்பாடுகள்",
    "programs.subtitle": "எங்கள் சேவைகளை ஆராயுங்கள்",
    "programs.schedule": "அட்டவணை",
    "programs.details": "விவரங்கள்",

    // Gallery
    "gallery.title": "படத்தொகுப்பு",
    "gallery.subtitle": "எங்கள் பயணத்தின் தருணங்கள்",
    "gallery.all": "அனைத்தும்",
    "gallery.yoga": "யோகா முகாம்கள்",
    "gallery.meditation": "தியானம்",
    "gallery.activities": "அறக்கட்டளை நடவடிக்கைகள்",
    "gallery.service": "சமூக சேவை",

    // Membership
    "membership.title": "எங்கள் அறக்கட்டளையில் இணையுங்கள்",
    "membership.subtitle": "உறுப்பினராகி இந்த ஆன்மீக பயணத்தின் ஒரு பகுதியாக இருங்கள்",
    "membership.name": "முழு பெயர்",
    "membership.phone": "தொலைபேசி எண்",
    "membership.email": "மின்னஞ்சல் முகவரி",
    "membership.address": "முகவரி",
    "membership.branch": "கிளையைத் தேர்ந்தெடுக்கவும்",
    "membership.submit": "விண்ணப்பத்தை சமர்ப்பிக்கவும்",
    "membership.success": "விண்ணப்பம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது! நாங்கள் விரைவில் உங்களைத் தொடர்பு கொள்வோம்.",

    // Contact
    "contact.title": "எங்களைத் தொடர்பு கொள்ளுங்கள்",
    "contact.subtitle": "உங்களிடமிருந்து கேட்க விரும்புகிறோம்",
    "contact.address": "முகவரி",
    "contact.phone": "தொலைபேசி",
    "contact.email": "மின்னஞ்சல்",
    "contact.form.name": "உங்கள் பெயர்",
    "contact.form.email": "உங்கள் மின்னஞ்சல்",
    "contact.form.message": "உங்கள் செய்தி",
    "contact.form.send": "செய்தி அனுப்பு",
    "contact.form.success": "செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!",
    "contact.address.value": "எண் 1, ஆர்.எஸ். சாலை, அம்மனாங்குப்பம், குடியாத்தம், தமிழ்நாடு – 635803",
    "contact.phone.value": "+91 82486 69855",
    "contact.email.value": "gudiyatham.officetoc@gmail.com",

    // Footer
    "footer.tagline": "ஆழியார் WCSC அமைப்பின் கொள்கைகளால் ஊக்கமளிக்கப்பட்டது",
    "footer.quickLinks": "விரைவு இணைப்புகள்",
    "footer.contactInfo": "தொடர்பு தகவல்",
    "footer.copyright": "© 2026 குடியாத்தம் மனவளக்கலை மன்ற அறக்கட்டளை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
