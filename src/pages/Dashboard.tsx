import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

type EventItem = {
  id: string;
  date?: string;
  teacher?: string;
};

const Dashboard = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
    const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [upcoming, setUpcoming] = useState(0);
  const [past, setPast] = useState(0);
  const [teachers, setTeachers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "events"));

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as EventItem[];

      setEvents(list);

      const now = new Date();

      // 🔥 total
      setTotal(list.length);

      // 🔥 upcoming
      const upcomingEvents = list.filter(
        (e) => new Date(e.date || "") >= now
      );
      setUpcoming(upcomingEvents.length);

      // 🔥 past
      const pastEvents = list.filter(
        (e) => new Date(e.date || "") < now
      );
      setPast(pastEvents.length);

  // 🔥 unique teachers
  const uniqueTeachers = new Set(
    list.map((e) => e.teacher)
  );
  setTeachers(uniqueTeachers.size);

  // 🔥 GROUP EVENTS BY DATE
  const map: any = {};

  list.forEach((e) => {
    const date = e.date || "Unknown";

    if (!map[date]) {
      map[date] = 0;
    }

    map[date]++;
  });

  // 🔥 CONVERT TO ARRAY
  const chartArray = Object.keys(map).map((date) => ({
    date,
    count: map[date],
  }));

  setChartData(chartArray);
};

fetchData();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/admin")}
          className="bg-white/30 backdrop-blur-md border border-white/30 px-4 py-2 rounded-lg shadow hover:bg-white/50 transition"
        >
          ⬅ Back
        </button>
      <h1 className="text-2xl font-bold mb-6 text-saffron">
        📊 Admin Dashboard
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-white shadow p-4 rounded text-center">
          <h2 className="text-lg font-semibold">Total Events</h2>
          <p className="text-2xl">{total}</p>
        </div>

        <div className="bg-white shadow p-4 rounded text-center">
          <h2 className="text-lg font-semibold">Upcoming</h2>
          <p className="text-2xl text-green-600">{upcoming}</p>
        </div>

        <div className="bg-white shadow p-4 rounded text-center">
          <h2 className="text-lg font-semibold">Past</h2>
          <p className="text-2xl text-red-500">{past}</p>
        </div>

        <div className="bg-white shadow p-4 rounded text-center">
          <h2 className="text-lg font-semibold">Teachers</h2>
          <p className="text-2xl">{teachers}</p>
        </div>
        <div className="bg-white shadow p-4 rounded mt-6">
  <h2 className="text-lg font-semibold mb-4">
    📈 Events by Date
  </h2>

  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={chartData}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#f97316" />
    </BarChart>
  </ResponsiveContainer>
</div>

      </div>
    </div>
  );
};

export default Dashboard;