import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebase";

type EventItem = {
  id: string;
  title?: string;
  date?: string;
  time?: string;
  place?: string;
  teacher?: string;
  description?: string;
};

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) return;

      const ref = doc(db, "events", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setEvent({ id: snap.id, ...snap.data() });
      }

      setLoading(false);
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg animate-pulse">
        Loading event...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center mt-20 text-red-500">
        Event not found ❌
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-saffron mb-4">
        {event.title}
      </h1>

      {/* CARD */}
      <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 hover:shadow-2xl transition">

        <p>📅 <b>Date:</b> {event.date}</p>
        <p>⏰ <b>Time:</b> {event.time}</p>
        <p>📍 <b>Place:</b> {event.place}</p>
        <p>👨‍🏫 <b>Teacher:</b> {event.teacher}</p>

        {event.description && (
          <p className="mt-4 text-gray-700">
            {event.description}
          </p>
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-3 mt-6">

        <button
          onClick={() => navigate("/")}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          ⬅ Back
        </button>

        <button
  onClick={() => {
    const message =
`Join this event 👇

📌 நிகழ்வு / Event: ${event.title}
📅 தேதி / Date: ${event.date}
⏰ நேரம் / Time: ${event.time}
📍 இடம் / Place: ${event.place}
👨‍🏫 ஆசிரியர் / Teacher: ${event.teacher}

👉 More details:
"https://gym-mvkm-trust.vercel.app/"`;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
  className="bg-green-600 text-white px-4 py-2 rounded"
>
  📤 Share on WhatsApp
</button>

      </div>
    </div>
  );
};

export default EventDetails;