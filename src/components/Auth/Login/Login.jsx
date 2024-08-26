import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase"; // Adjust the import path to your Firebase config
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Assuming you have a method to verify admin users (e.g., custom claims, Firestore role-based access)
      // For this example, let's assume all authenticated users are admins
      // Navigate to the admin dashboard
      navigate("/admin"); // Adjust to your admin route
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form m-4 bg-gray-300 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-1">Email:</label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">Password:</label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
