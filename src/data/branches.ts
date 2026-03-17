export interface Coordinator {
  name: { en: string; ta: string };
  phone: string;
}

export interface Branch {
  id: string;

  name: { en: string; ta: string };

  coordinators: Coordinator[];

  email: string;

  contact: string;
  altContact?: string;

  address: { en: string; ta: string };

  activities: { en: string[]; ta: string[] };
}
export const branches: Branch[] = [
  {
    id: "ammanankuppam",
    name: {
      en: "Gudiyatham Temple of Consciousness",
      ta: "குடியாத்தம் அறிவு திருக்கோவில்",
    },

    coordinators: [
      {
        name: { en: "A/N Sarala V", ta: "அ/நி சரளா வி" },
        phone: "8300170282",
      },
      {
        name: { en: "A/N Kalaiselvi A", ta: "அ/நி கலைசெல்வி ஏ" },
        phone: "6369142454",
      },
    ],

    email: "gudiyathamskytrust@gmail.com",
    contact: "8300170282",
    altContact: "6369142454",

    address: {
      en: "3/44, Vethathiri Nagar, R.S. Road, Ammanankuppam, Gudiyatham - 635803",
      ta: "3/44, வேதாதிரி நகர், ஆர்.எஸ். சாலை, அம்மனாங்குப்பம், குடியாத்தம் - 635803",
    },

    activities: {
      en: ["Yoga", "Meditation", "Kayakalpa"],
      ta: ["யோகா", "தியானம்", "காயகல்பம்"],
    },
  },

  {
    id: "dharanampettai",
    name: {
      en: "Dharanampet MVK Sub Centre",
      ta: "தரணம்பேட்டை எம்.வி.கே மையம்",
    },

    coordinators: [
      {
        name: { en: "A/N Jayalakshmi Bai B", ta: "அ/நி ஜெயலட்சுமி பாய்" },
        phone: "9952357100",
      },
      {
        name: { en: "A/N Jayakanthan T", ta: "அ/நி ஜெயகாந்தன் டி" },
        phone: "9150823945",
      },
    ],

    email: "jayakanthant@gmail.com",
    contact: "9150823945",
    altContact: "9952357100",

    address: {
      en: "Opp. Thenmozhi Sound Service, Public Road, Dharanampet, Gudiyatham - 632602",
      ta: "தென்மொழி சவுண்ட் சர்வீஸ் அருகில், தரணம்பேட்டை, குடியாத்தம் - 632602",
    },

    activities: {
      en: ["Yoga", "Meditation", "Community Service"],
      ta: ["யோகா", "தியானம்", "சமூக சேவை"],
    },
  },

  {
    id: "kaliammanpatti",
    name: {
      en: "Kaliammanpatti MVK Sub Centre",
      ta: "கலியம்மன்பட்டி எம்.வி.கே மையம்",
    },

    coordinators: [
      {
        name: { en: "A/N Gowri B", ta: "அ/நி கௌரி பி" },
        phone: "9952298907",
      },
      {
        name: { en: "A/N Shanmugam", ta: "அ/நி சண்முகம்" },
        phone: "9790097013",
      },
    ],

    email: "psmsi1963@gmail.com",
    contact: "9952298907",
    altContact: "9790097013",

    address: {
      en: "Mahatma Gandhi Street, Srinivasa Nagar, Kaliammanpatti, Gudiyatham - 632602",
      ta: "மகாத்மா காந்தி தெரு, ஸ்ரீநிவாச நகர், கலியம்மன்பட்டி, குடியாத்தம் - 632602",
    },

    activities: {
      en: ["Yoga", "Meditation", "Community Service"],
      ta: ["யோகா", "தியானம்", "சமூக சேவை"],
    },
  },

  {
    id: "KV kuppam",
    name: {
      en: "KV Kuppam MVK Sub Centre",
      ta: "கே.வி. குப்பம் எம்.வி.கே மையம்",
    },

    coordinators: [
      {
        name: { en: "A/N Kavitha M", ta: "அ/நி கவிதா எம்" },
        phone: "9677888384",
      },
      {
        name: { en: "A/N Prabu N", ta: "அ/நி பிரபு என்" },
        phone: "9159060040",
      },
    ],

    email: "prabu.mvk@gmail.com",
    contact: "9677888384",
    altContact: "9159060040",

    address: {
      en: "Santhaimedu, K.V. Kuppam - 632201",
      ta: "சந்தைமேடு, கே.வி. குப்பம் - 632201",
    },

    activities: {
      en: ["Yoga", "Meditation"],
      ta: ["யோகா", "தியானம்"],
    },
  },

  {
    id: "vallalar",
    name: {
      en: "Vallalar Nagar MVK Sub Centre",
      ta: "வள்ளலார் நகர் எம்.வி.கே மையம்",
    },

    coordinators: [
      {
        name: { en: "A/N Latha R", ta: "அ/நி லதா ஆர்" },
        phone: "9655700885",
      },
    ],

    email: "latharavichandhiran1976@gmail.com",
    contact: "9655700885",

    address: {
      en: "Ragavendra Street, Vallalar Nagar, Gudiyatham",
      ta: "ராகவேந்திரா தெரு, வள்ளலார் நகர், குடியாத்தம்",
    },

    activities: {
      en: ["Yoga", "Meditation"],
      ta: ["யோகா", "தியானம்"],
    },
  },

  {
    id: "pichanoor",
    name: {
      en: "Pichanoor MVK Sub Centre",
      ta: "பிச்சானூர் எம்.வி.கே மையம்",
    },

    coordinators: [
      {
        name: { en: "A/N Kumar P", ta: "அ/நி குமார் பி" },
        phone: "8072559524",
      },
      {
        name: { en: "A/N Murali M N", ta: "அ/நி முரளி எம்.என்" },
        phone: "9486723922",
      },
    ],

    email: "muraliyoga62@gmail.com",
    contact: "9486723922",
    altContact: "8072559524",

    address: {
      en: "Near Arasamaram Bus Stop, Pichanoor, Gudiyatham",
      ta: "அரசமரம் பஸ் நிறுத்தம் அருகில், பிச்சானூர், குடியாத்தம்",
    },

    activities: {
      en: ["Yoga", "Meditation"],
      ta: ["யோகா", "தியானம்"],
    },
  },

  {
    id: "rajakoil",
    name: {
      en: "Rajakoil MVK Sub Centre",
      ta: "ராஜகோவில் எம்.வி.கே மையம்",
    },

    coordinators: [
      {
        name: { en: "A/N Jayanthi K", ta: "அ/நி ஜெயந்தி கே" },
        phone: "9894393109",
      },
      {
        name: { en: "A/N Mahalakshmi V", ta: "அ/நி மகாலட்சுமி வி" },
        phone: "9442787991",
      },
    ],

    email: "vengatmahal5@gmail.com",
    contact: "9894393109",
    altContact: "9442787991",

    address: {
      en: "Thamizh Solai Nagar, Rajakoil, Gudiyatham",
      ta: "தமிழ்சோலை நகர், ராஜகோவில், குடியாத்தம்",
    },

    activities: {
      en: ["Yoga", "Meditation"],
      ta: ["யோகா", "தியானம்"],
    },
  },
  {
  id: "bhuvaneshwaripet",

  name: {
    en: "Bhuvaneshwaripet MVK Sub Centre",
    ta: "புவனேஸ்வரிப்பேட்டை எம்.வி.கே மையம்",
  },

  coordinators: [
    {
      name: { en: "A/N Banumathi D", ta: "அ/நி பானுமதி டி" },
      phone: "9944480387",
    },
    {
      name: { en: "A/N Angayarkanni M", ta: "அ/நி அங்கையற்கண்ணி எம்" },
      phone: "8778005578",
    },
  ],

  email: "kanniangai2@gmail.com",

  contact: "9944480387",
  altContact: "8778005578",

  address: {
    en: "Balamurugan Annadhana Koodam, 19/27, Patel Street, Bhuvaneshwaripet, Gudiyatham - 632602",
    ta: "பாலமுருகன் அன்னதான கூடம், 19/27, பட்டேல் தெரு, புவனேஸ்வரிப்பேட்டை, குடியாத்தம் - 632602",
  },

  activities: {
    en: ["Yoga", "Meditation", "Community Service"],
    ta: ["யோகா", "தியானம்", "சமூக சேவை"],
  },
}
];