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
    } catch (err) {
      alert("Invalid login ❌");
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-card p-6 rounded-xl border w-80 space-y-4">

        <h2 className="text-xl font-bold text-center text-saffron">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-saffron text-white py-2 rounded"
        >
          Login
        </button>

      </div>
    </main>
  );
};

export default AdminLogin;