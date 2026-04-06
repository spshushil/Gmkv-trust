export interface GalleryItem {
  id: string;
  category: "yoga" | "meditation" | "activities" | "service";
  title: { en: string; ta: string };
  placeholder: string;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "1", category: "yoga", title: { en: "Yoga Camp 2024", ta: "யோகா முகாம் 2024" }, placeholder: "Yoga practitioners in group session", image: "/images/yoga-camp-2024.jpg" },
  { id: "2", category: "yoga", title: { en: "Morning Yoga Session", ta: "காலை யோகா அமர்வு" }, placeholder: "Sunrise yoga practice", image: "/images/morning-yoga.jpg" },
  { id: "3", category: "meditation", title: { en: "Group Meditation", ta: "குழு தியானம்" }, placeholder: "Peaceful group meditation", image: "/images/group-meditation.jpg" },
  { id: "4", category: "meditation", title: { en: "Meditation Retreat", ta: "தியான முகாம்" }, placeholder: "Serene meditation retreat", image: "/images/meditation.jpg" },
  { id: "5", category: "activities", title: { en: "Annual Day Celebration", ta: "ஆண்டு விழா" }, placeholder: "Trust annual celebration", image: "/images/annual-celebration.jpg" },
  { id: "6", category: "activities", title: { en: "Trust Meeting", ta: "அறக்கட்டளை கூட்டம்" }, placeholder: "Trust coordination meeting", image: "/images/Trust-meeting.jpg" },
  { id: "7", category: "service", title: { en: "Health Camp", ta: "சுகாதார முகாம்" }, placeholder: "Community health camp", image: "/images/health-camp.jpg" },
  { id: "8", category: "service", title: { en: "Food Distribution", ta: "உணவு விநியோகம்" }, placeholder: "Community food service", image: "/images/food-distribution.jpg" },
  { id: "9", category: "yoga", title: { en: "Children's Yoga", ta: "குழந்தைகள் யோகா" }, placeholder: "Children yoga class", image: "/images/children-yoga.jpg" },
  { id: "10", category: "meditation", title: { en: "Evening Meditation", ta: "மாலை தியானம்" }, placeholder: "Evening meditation session", image: "/images/evening-meditation.jpg" },
  { id: "11", category: "activities", title: { en: "Kayakalpa Workshop", ta: "காயகல்ப பட்டறை" }, placeholder: "Kayakalpa yoga workshop", image: "/images/kayakalpa-workshop.jpg" },
  { id: "12", category: "service", title: { en: "Tree Planting Drive", ta: "மரம் நடும் இயக்கம்" }, placeholder: "Environmental service activity", image: "/images/tree-planting-drive.jpg" },
];
