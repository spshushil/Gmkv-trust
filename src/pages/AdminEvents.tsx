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

  console.log("SUBMIT CLICKED 🔥");

  try {
    setLoading(true);

    if (editingId) {
      // ✏️ UPDATE
      await updateDoc(doc(db, "events", editingId), {
        title: form.title,
        place: form.place,
        teacher: form.teacher,
        date: form.date,
        time: form.time,
      });

      alert("Event Updated ✅");

    } else {
      // ➕ ADD (🔥 THIS WAS MISSING)
      await addDoc(collection(db, "events"), {
        ...form,
        createdAt: new Date(),
      });

      alert("Event Added ✅");
    }

    // reset
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
    teacher: typeof event.teacher === "object" ? event.teacher.en : event.teacher,
  });

  setEditingId(event.id);
};

  return (
  <main className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-100 to-white p-6">

    <div className="max-w-3xl mx-auto">

      {/* 🔙 HEADER */}
      <div className="flex justify-between items-center mb-6">

        <button
          onClick={() => navigate("/admin")}
          className="bg-white/30 backdrop-blur-md border border-white/30 px-4 py-2 rounded-lg shadow hover:bg-white/50 transition"
        >
          ⬅ Back
        </button>

        <h1 className="text-2xl font-bold text-saffron">
          {editingId ? "Edit Event ✏️" : "Add Event ➕"}
        </h1>

        <div /> {/* empty space balance */}
      </div>

      {/* 🔥 FORM (GLASS) */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-lg border border-black/30 shadow-xl rounded-xl p-6 space-y-4 mb-8"
      >

        <input
          placeholder="Class Title"
          className="w-full bg-white/30 backdrop-blur-md border border-black/30 p-2 rounded-lg"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          type="date"
          className="w-full bg-white/30 border border-black/30 p-2 rounded-lg"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="time"
          className="w-full bg-white/30 border border-black/30 p-2 rounded-lg"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />

        <input
          placeholder="Place"
          className="w-full bg-white/30 border border-black/30 p-2 rounded-lg"
          value={form.place}
          onChange={(e) => setForm({ ...form, place: e.target.value })}
        />

        <input
          placeholder="Teacher"
          className="w-full bg-white/30 border border-black/30 p-2 rounded-lg"
          value={form.teacher}
          onChange={(e) => setForm({ ...form, teacher: e.target.value })}
        />

        <button
          disabled={loading}
          className="w-full bg-black/90 text-white py-2 rounded-lg shadow hover:opacity-90 transition"
        >
          {loading
            ? "Saving..."
            : editingId
            ? "Update Event"
            : "Add Event"}
        </button>

      </form>

      {/* 🔥 EVENTS LIST */}
      <div className="space-y-4">

        {events.map((e) => (
          <div
            key={e.id}
            className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg p-4 rounded-xl flex justify-between items-center"
          >

            <div>
              <p className="font-semibold text-lg">
                {typeof e.title === "object" ? e.title.en : e.title}
              </p>

              <p className="text-sm text-gray-600">
                📅 {e.date} | ⏰ {e.time}
              </p>

              <p className="text-sm text-gray-700">
                📍 {typeof e.place === "object" ? e.place.en : e.place} |
                👨‍🏫 {typeof e.teacher === "object" ? e.teacher.en : e.teacher}
              </p>
            </div>

            <div className="flex gap-2">

              <button
                onClick={() => handleEdit(e)}
                className="bg-blue-500/80 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(e.id)}
                className="bg-red-500/80 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
              >
                Delete
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