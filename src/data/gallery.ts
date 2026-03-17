export interface GalleryItem {
  id: string;
  category: "yoga" | "meditation" | "activities" | "service";
  title: { en: string; ta: string };
  placeholder: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "1", category: "yoga", title: { en: "Yoga Camp 2024", ta: "யோகா முகாம் 2024" }, placeholder: "Yoga practitioners in group session" },
  { id: "2", category: "yoga", title: { en: "Morning Yoga Session", ta: "காலை யோகா அமர்வு" }, placeholder: "Sunrise yoga practice" },
  { id: "3", category: "meditation", title: { en: "Group Meditation", ta: "குழு தியானம்" }, placeholder: "Peaceful group meditation" },
  { id: "4", category: "meditation", title: { en: "Meditation Retreat", ta: "தியான முகாம்" }, placeholder: "Serene meditation retreat" },
  { id: "5", category: "activities", title: { en: "Annual Day Celebration", ta: "ஆண்டு விழா" }, placeholder: "Trust annual celebration" },
  { id: "6", category: "activities", title: { en: "Branch Meeting", ta: "கிளை கூட்டம்" }, placeholder: "Trust coordination meeting" },
  { id: "7", category: "service", title: { en: "Health Camp", ta: "சுகாதார முகாம்" }, placeholder: "Community health camp" },
  { id: "8", category: "service", title: { en: "Food Distribution", ta: "உணவு விநியோகம்" }, placeholder: "Community food service" },
  { id: "9", category: "yoga", title: { en: "Children's Yoga", ta: "குழந்தைகள் யோகா" }, placeholder: "Children yoga class" },
  { id: "10", category: "meditation", title: { en: "Evening Meditation", ta: "மாலை தியானம்" }, placeholder: "Evening meditation session" },
  { id: "11", category: "activities", title: { en: "Kayakalpa Workshop", ta: "காயகல்ப பட்டறை" }, placeholder: "Kayakalpa yoga workshop" },
  { id: "12", category: "service", title: { en: "Tree Planting Drive", ta: "மரம் நடும் இயக்கம்" }, placeholder: "Environmental service activity" },
];
