import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebase";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<any>(null);
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
      <div className="text-center mt-20 text-lg">
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
      
      <h1 className="text-3xl font-bold mb-4 text-saffron">
        {event.title}
      </h1>

      <div className="bg-white shadow-md rounded-xl p-5 space-y-3">

        <p>📅 <b>Date:</b> {event.date}</p>
        <p>⏰ <b>Time:</b> {event.time}</p>
        <p>📍 <b>Place:</b> {event.place}</p>
        <p>👨‍🏫 <b>Teacher:</b> {event.teacher}</p>

      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-saffron text-white px-6 py-2 rounded-lg"
      >
        ⬅ Back
      </button>
    </div>
  );
};

export default EventDetails;