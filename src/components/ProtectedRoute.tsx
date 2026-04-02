import { useEffect, useState } from "react";
import { auth } from "../data/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  // 🔐 Not logged in → redirect
  if (!user) return <Navigate to="/admin-login" />;

  return children;
};

export default ProtectedRoute;