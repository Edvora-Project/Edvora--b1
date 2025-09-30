import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      console.log("Signup successful:", data);

      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F0EB]">
      <div className="bg-[#D6B896] p-10 rounded-lg shadow-lg w-[400px] text-center">
        <h2 className="text-3xl text-[#642226] font-bold mb-2">SIGN UP</h2>
        <p className="text-sm bg-white p-2 rounded mb-6">Join Edvora</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="p-3 rounded border outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 rounded border outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Link to="/Login">
          <button
            type="submit"
            className="bg-[#642226] text-white py-3 rounded-full font-bold hover:bg-[#501418]"
          >
            Create Account
          </button></Link>
        </form>
      </div>
    </div>
  );
}

