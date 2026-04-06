import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../data/firebase";
import { useNavigate } from "react-router-dom";

const AdminEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    place: "",
    teacher: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔥 TIME FORMAT (12hr AM/PM)
  const formatTime = (time: string) => {
    if (!time) return "";

    const [hour, minute] = time.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;

    return `${h}:${minute} ${ampm}`;
  };

  // 🔥 FETCH EVENTS
  const fetchEvents = async () => {
    const snapshot = await getDocs(collection(db, "events"));

    const list = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data(),
    }));

    setEvents(list);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // 🔥 ADD / UPDATE
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (editingId) {
        await updateDoc(doc(db, "events", editingId), {
          ...form,
        });
        alert("Event Updated ✅");
      } else {
        await addDoc(collection(db, "events"), {
          ...form,
          createdAt: new Date(),
        });
        alert("Event Added ✅");
      }

      setForm({
        title: "",
        date: "",
        time: "",
        place: "",
        teacher: "",
      });

      setEditingId(null);
      fetchEvents();
    } catch (err) {
      console.error(err);
      alert("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  // 🗑️ DELETE
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this event?")) return;

    await deleteDoc(doc(db, "events", id));
    fetchEvents();
  };

  // ✏️ EDIT
  const handleEdit = (event: any) => {
    setForm({
      title: typeof event.title === "object" ? event.title.en : event.title,
      date: event.date,
      time: event.time,
      place: typeof event.place === "object" ? event.place.en : event.place,
      teacher:
        typeof event.teacher === "object"
          ? event.teacher.en
          : event.teacher,
    });

    setEditingId(event.id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-100 to-white p-6">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate("/admin")}
            className="bg-white/30 backdrop-blur-md border px-4 py-2 rounded-lg shadow hover:bg-white/50 transition"
          >
            ⬅ Back
          </button>

          <h1 className="text-2xl font-bold text-saffron">
            {editingId ? "Edit Event ✏️" : "Add Event ➕"}
          </h1>

          <div />
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/30 backdrop-blur-lg border shadow-xl rounded-xl p-6 space-y-4 mb-8"
        >
          <input
            placeholder="Class Title"
            className="w-full p-2 rounded-lg"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <input
            type="date"
            className="w-full p-2 rounded-lg"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <input
            type="time"
            className="w-full p-2 rounded-lg"
            value={form.time}
            onChange={(e) =>
              setForm({ ...form, time: e.target.value })
            }
          />

          <input
            placeholder="Place"
            className="w-full p-2 rounded-lg"
            value={form.place}
            onChange={(e) =>
              setForm({ ...form, place: e.target.value })
            }
          />

          <input
            placeholder="Teacher"
            className="w-full p-2 rounded-lg"
            value={form.teacher}
            onChange={(e) =>
              setForm({ ...form, teacher: e.target.value })
            }
          />

          <button className="w-full bg-black text-white py-2 rounded-lg">
            {loading
              ? "Saving..."
              : editingId
              ? "Update Event"
              : "Add Event"}
          </button>
        </form>

        {/* EVENTS */}
        <div className="space-y-4">
          {events.map((e) => (
            <div
              key={e.id}
              className="bg-white/40 backdrop-blur-lg border shadow-lg p-5 rounded-2xl flex justify-between items-center hover:scale-[1.02] transition"
            >
              <div>
                <p className="font-bold text-lg">
                  {typeof e.title === "object"
                    ? e.title.en
                    : e.title}
                </p>

                <p className="text-sm text-gray-600">
                  📅 {e.date} • ⏰ {formatTime(e.time)}
                </p>

                <p className="text-sm">
                  📍{" "}
                  {typeof e.place === "object"
                    ? e.place.en
                    : e.place}
                </p>

                <p className="text-sm">
                  👨‍🏫{" "}
                  {typeof e.teacher === "object"
                    ? e.teacher.en
                    : e.teacher}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(e)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() => handleDelete(e.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AdminEvents;