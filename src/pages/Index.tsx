import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { branches } from "@/data/branches";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import mainlogo from "@/assets/main-logo.png";
import { useNavigate } from "react-router-dom";
import SplashScreen from "./SplashScreen";

const Index = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<any[]>([]);
  const [showSplash, setShowSplash] = useState(true);

  

  const programs = [
    { icon: "🧘", key: "yoga" },
    { icon: "🕉️", key: "meditation" },
    { icon: "✨", key: "kayakalpa" },
    { icon: "🤝", key: "community" },
  ];
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowSplash(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);
  useEffect(() => {
  const fetchEvents = async () => {
    setLoading(true);

    const snapshot = await getDocs(collection(db, "events"));

    const list = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data(),
    }));

    const now = new Date();

    const upcoming = list.filter((e: any) => {
      if (!e.date || !e.time) return false;

      const eventDateTime = new Date(`${e.date}T${e.time}`);
      return eventDateTime >= now;
    });

    setEvents(upcoming);
    setLoading(false); // 🔥 important
  };

  fetchEvents();
}, []);
useEffect(() => {
  const autoDelete = async () => {
    const snapshot = await getDocs(collection(db, "events"));

    snapshot.docs.forEach(async (docItem) => {
      const data: any = docItem.data();

      if (!data.date || !data.time) return;

      const eventDateTime = new Date(`${data.date}T${data.time}`);
      const now = new Date();

      if (now > eventDateTime) {
        await deleteDoc(doc(db, "events", docItem.id));
      }
    });
  };

  autoDelete();
}, []);
useEffect(() => {
  const fetchVideos = async () => {
    try {
      // 🔥 check cache first
      const CACHE_TIME = 60 * 60 * 1000;
      const cached = localStorage.getItem("ytVideos");
      const cacheTime = localStorage.getItem("ytVideosTime");
      if (cached && cacheTime && Date.now() - Number(cacheTime) < CACHE_TIME) {
        setVideos(JSON.parse(cached));
        return;
      }
      // after fetch
      localStorage.setItem("ytVideosTime", Date.now().toString());
      const API_KEY = "AIzaSyBe0Qgo1MoZcUUS16-M76MmXFzi0Btq8s4"; // ⚠️ replace this
      const CHANNEL_ID = "UCYGSsK0dL-_Ue2qMZ9Yo5Vw";

      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
      );

      const data = await res.json();

      const list = data.items
        .filter((item: any) => item.id.videoId)
        .map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));

      setVideos(list);

      // 🔥 save to cache
      localStorage.setItem("ytVideos", JSON.stringify(list));
    } catch (err) {
      console.error("YouTube Fetch Error:", err);
    }
  };

  fetchVideos();
}, []);
   if (showSplash) {
  return <SplashScreen onFinish={() => {}} />;
}
  return (
 
    <main>
      {/* 🔥 MOVING NEWS */}
      {loading ? (
       <div className="bg-saffron text-white py-2 text-center">
        Loading events...
       </div>
      ) : events.length === 0 ? (
      <div className="bg-gray-800 text-white py-2 text-center">
      🚫 No upcoming events → 🙏 Stay tuned for upcoming events
      </div>
      ) : (
      <div className="bg-saffron text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block pointer-events-auto">
          {events.map((e, i) => (
           <span
           key={i}
           className="mx-6 cursor-pointer hover:underline"
           onClick={() => {
            console.log("CLICKED EVENT:", e.id); // 🔥 debug
            navigate(`/event/${e.id}`);
          }}>
           🟠 {e.title} | 📅 {e.date} ⏰ {e.time} | 📍 {e.place} | 👨‍🏫 {e.teacher}
          </span>
        ))}
      </div>
      </div>
     )}
      {/* Hero */}
      <section className="hero-gradient min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-5xl md:text-6xl mb-4">
            <img              
              src={mainlogo}
              alt="Main Logo"
              className="mx-auto w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight px-2" style={{ fontFamily: "'Crimson Text', serif" }}>
            {t("trust.name")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-2">
            {t("trust.slogan")}
          </p>
          <div className="flex gap-3 justify-center flex-wrap px-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8 text-sm md:text-base">
              <Link to="/about">{t("home.learnMore")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-6 md:px-8 text-sm md:text-base">
              <Link to="/membership">{t("home.joinUs")}</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700 px-6 md:px-8 text-sm md:text-base">
              <Link to="/donate">💖{t("home.Donate")}</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Intro */}
      <section className="container mx-auto px-4 py-12 md:py-16 max-w-3xl text-center">
        <div className="lotus-divider">
          <span className="text-saffron text-xl">🪷</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-saffron" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.intro.title")}</h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{t("home.intro.text")}</p>
      </section>
      {/* Videos */}
      {videos.length === 0 ? (
        <div className="flex gap-4 overflow-hidden p-4 bg-black">
          {[1, 2, 3].map((i) => (
          <div
           key={i}
           className="w-72 h-40 bg-gray-700 animate-pulse rounded-lg"
          ></div>
          ))}
        </div>
        ) : (
        <div className="overflow-hidden w-full py-6 bg-black">
          <div
          className="flex gap-4"
          style={{ animation: "scroll 5s linear infinite" }} // 🔥 slower = smoother
          >
            {[...videos, ...videos].map((v, i) => (
              <div
              key={`${v.id}-${i}`}
              className="w-72 shrink-0 cursor-pointer"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${v.id}`,
                  "_blank"
                )
              }>
                <img
                src={v.thumbnail}
                loading="lazy" // 🔥 important
                className="w-full h-40 object-cover rounded-lg"
                />
                <p className="text-white text-xs mt-1 line-clamp-2">
                  {v.title}
                </p>
                </div>
              ))}
          </div>
        </div>
      )}
     {/* Mission & Vision */}
      <section className="section-cream py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 md:p-8 border-l-4 border-saffron shadow-sm">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl md:text-2xl font-bold text-saffron mb-3" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.mission.title")}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{t("home.mission.text")}</p>
            </div>
            <div className="bg-card rounded-xl p-6 md:p-8 border-l-4 border-sage shadow-sm">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl md:text-2xl font-bold text-sage mb-3" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.vision.title")}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{t("home.vision.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Programs */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-saffron mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.programs.title")}</h2>
        <div className="lotus-divider"><span className="text-sage text-xl">✦</span></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
          {programs.map(({ icon, key }) => (
            <div key={key} className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{icon}</div>
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2 leading-tight" style={{ fontFamily: "'Crimson Text', serif" }}>
                {t(`home.programs.${key}`)}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">{t(`home.programs.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Branches preview */}
      <section className="section-cream py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sage mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>{t("home.branches.title")}</h2>
          <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">{t("home.branches.subtitle")}</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            {branches.map((b) => (
              <span key={b.id} className="bg-card border border-border rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-foreground">
                {b.name[language]}
              </span>
            ))}
          </div>
          <Button asChild variant="outline" className="border-sage text-sage hover:bg-secondary hover:text-secondary-foreground">
            <Link to="/branches">{t("nav.branches")} →</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;