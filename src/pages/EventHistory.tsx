import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";
import { useNavigate } from "react-router-dom";

type EventItem = {
  id: string;
  title?: string;
  date?: string;
  time?: string;
  place?: string;
};

const EventHistory = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const snapshot = await getDocs(collection(db, "events"));

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as EventItem[];

      const today = new Date();

      // 🔥 FILTER PAST EVENTS ONLY
      const pastEvents = list.filter((e) => {
        const eventDate = new Date(e.date || "");
        return eventDate < today;
      });

      // 🔥 SORT LATEST FIRST
      pastEvents.sort(
        (a, b) =>
          new Date(b.date || "").getTime() -
          new Date(a.date || "").getTime()
      );

      setEvents(pastEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-saffron">
        📜 Event History
      </h1>

      {events.length === 0 ? (
        <p>No past events available</p>
      ) : (
        <div className="space-y-4">
          {events.map((e) => (
            <div
              key={e.id}
              onClick={() => navigate(`/event/${e.id}`)}
              className="bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg"
            >
              <h2 className="font-semibold">{e.title}</h2>
              <p className="text-sm text-gray-600">
                📅 {e.date} | ⏰ {e.time}
              </p>
              <p className="text-sm">📍 {e.place}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventHistory;