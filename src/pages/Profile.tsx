import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";
import { useLanguage } from "@/context/LanguageContext";

const Profile = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  const [member, setMember] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const q = query(
          collection(db, "members"),
          where("memberId", "==", id)
        );

        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          setMember(snapshot.docs[0].data());
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-muted-foreground">
        Loading...
      </p>
    );
  }

  if (!member) {
    return (
      <p className="text-center mt-10 text-red-500">
        Member not found ❌
      </p>
    );
  }

  return (
    <main className="py-10">
      <div className="max-w-md mx-auto px-4">

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg text-center">

          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-saffron/20 flex items-center justify-center mx-auto mb-4 text-3xl">
            🧘
          </div>

          {/* Name */}
          <h2 className="text-xl font-bold mb-1">
            {member.name}
          </h2>

          {/* Member ID */}
          <p className="text-saffron font-semibold mb-4">
            {member.memberId}
          </p>

          {/* Details */}
          <div className="text-left space-y-2 text-sm">

            <p><b>📞 Phone:</b> {member.phone}</p>

            <p><b>✉️ Email:</b> {member.email}</p>

            <p><b>🏛️ Branch:</b> {member.branch}</p>

            <p><b>📍 Address:</b> {member.address}</p>

          </div>

        </div>
      </div>
    </main>
  );
};

export default Profile;