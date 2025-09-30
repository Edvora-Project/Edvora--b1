import React, { useState } from "react";
import API from "../api";
import { useNavigate , Link} from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log('Login successful:', response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      console.log("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F0EB]">
      <div className="bg-[#D6B896] p-10 rounded-lg shadow-lg w-[400px] text-center">
        <h2 className="text-3xl text-[#642226] font-bold mb-2">LOGIN</h2>
        <p className="text-sm bg-white p-2 rounded mb-6">Welcome back to Edvora</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="College Email Address"
            className="p-3 rounded border outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded border outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><Link to="/dashboard">
          <button
            type="submit"
            className="bg-[#642226] text-white py-3 rounded-full font-bold hover:bg-[#501418]"
          >
            Login
          </button></Link>
        </form>
      </div>
    </div>
  );
}
