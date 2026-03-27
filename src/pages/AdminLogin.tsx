import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch {
      alert("Invalid login ❌");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-white">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-80 space-y-5 border">

        <h2 className="text-2xl font-bold text-center text-saffron">
          🔐 Admin Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-saffron outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-saffron outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-saffron text-white py-2 rounded-lg hover:scale-105 transition"
        >
          Login
        </button>

      </div>

    </main>
  );
};

export default AdminLogin;