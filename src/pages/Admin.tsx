import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../data/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../data/auth";

const Admin = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  

  // 🔥 FETCH MEMBERS
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "members"));

        const list = snapshot.docs.map((docItem) => ({
          id: docItem.id, // 🔥 IMPORTANT
          ...docItem.data(),
        }));

        setMembers(list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // 🔥 DELETE MEMBER
  const deleteMember = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure to delete this member?");

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "members", id));

      // update UI
      setMembers((prev) => prev.filter((m) => m.id !== id));

      alert("Member deleted ✅");

    } catch (err) {
      console.error(err);
      alert("Delete failed ❌");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
  <main className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-100 to-white py-10">

    <div className="container mx-auto px-4">

      {/* 🔥 HEADER CARDS (GLASS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-5 text-center">
          <h2 className="text-2xl font-bold text-saffron">{members.length}</h2>
          <p className="text-gray-700 text-sm">Total Members</p>
        </div>

        <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-5 text-center">
          <h2 className="text-2xl font-bold text-green-600">Active</h2>
          <p className="text-gray-700 text-sm">Status</p>
        </div>

        <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-5 text-center">
          <button
            onClick={() => navigate("/admin-events")}
            className="bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            ➕ Add Event
          </button>
        </div>

      </div>

      {/* 🔥 TABLE (GLASS) */}
      <div className="overflow-x-auto bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl">

        <table className="w-full">

          <thead className="bg-white/30">
            <tr className="text-left text-sm">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Branch</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {members.map((m) => (
              <tr
                key={m.id}
                className="border-t text-sm hover:bg-white/20 transition"
              >
                <td className="p-3 font-semibold text-saffron">
                  {m.memberId}
                </td>

                <td className="p-3">{m.name}</td>

                <td className="p-3">{m.phone}</td>

                <td className="p-3">{m.branch}</td>

                <td className="p-3 flex justify-center gap-2">

                  {/* VIEW */}
                  <button
                    onClick={() => navigate(`/profile/${m.memberId}`)}
                    className="bg-saffron/80 backdrop-blur text-black px-3 py-1 rounded text-xs hover:opacity-90"
                  >
                    View
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => deleteMember(m.id)}
                    className="bg-red-500/80 backdrop-blur text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* EMPTY */}
      {members.length === 0 && (
        <p className="text-center mt-6 text-gray-600">
          No members found
        </p>
      )}

      {/* 🔥 LOGOUT BUTTON (GLASS) */}
      <div className="flex justify-center mt-8">
        <button
          onClick={async () => {
            await signOut(auth);
            window.location.href = "/";
          }}
          className="bg-red-500/80 backdrop-blur-lg text-white px-6 py-2 rounded-xl shadow-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

    </div>
  </main>
);
};

export default Admin;