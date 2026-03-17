import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "members"));

        const list = snapshot.docs.map((doc) => doc.data());

        setMembers(list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <main className="py-10">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl font-bold text-center text-saffron mb-8">
          Admin Panel
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg overflow-hidden">

            <thead className="bg-muted">
              <tr className="text-left text-sm">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Branch</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {members.map((m, i) => (
                <tr key={i} className="border-t text-sm">

                  <td className="p-3 font-semibold text-saffron">
                    {m.memberId}
                  </td>

                  <td className="p-3">{m.name}</td>

                  <td className="p-3">{m.phone}</td>

                  <td className="p-3">{m.branch}</td>

                  <td className="p-3">
                    <button
                      onClick={() => navigate(`/profile/${m.memberId}`)}
                      className="bg-saffron text-white px-3 py-1 rounded text-xs"
                    >
                      View
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </main>
  );
};

export default Admin;