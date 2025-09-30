import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AlumniGuidance from "./pages/AlumniGuidance";
import UploadNotes from "./pages/UploadNotes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alumni-guidance" element={<AlumniGuidance />} />
          <Route path="/upload" element={<UploadNotes />} />
        </Routes>
      </main>
    </div>
  );
}
