import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SeniorProjectDashboard from "../components/SeniorProjectDashboard";

export default function SeniorDashboard() {
  const { user, logout } = useAuth();
  const [showProjectDashboard, setShowProjectDashboard] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EDVORA
              </Link>
              <span className="ml-3 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
                Senior Panel
              </span>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex space-x-8 text-sm font-medium">
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition-colors">
                  Student Dashboard
                </Link>
                <Link to="/study-materials" className="text-gray-700 hover:text-indigo-600 transition-colors">
                  Study Materials
                </Link>
                <Link to="/alumni-guidance" className="text-gray-700 hover:text-indigo-600 transition-colors">
                  Alumni Guidance
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline text-sm text-gray-600">{user?.name || user?.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Senior Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Dedicated space for seniors to upload notes, curate resources, and guide juniors in their academic and career journey.
          </p>
        </div>
      </section>

      {/* Senior actions */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Upload Study Materials</h2>
            <p className="text-sm text-gray-600 mb-6">
              Share high-quality notes, previous year papers, and reference PDFs for juniors.
            </p>
            <Link
              to="/upload"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 shadow-md transition-colors"
            >
              Go to Upload Notes
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Student Projects</h2>
            <p className="text-sm text-gray-600 mb-6">
              View projects submitted by students and mark which ones you are guiding.
            </p>
            <button
              onClick={() => setShowProjectDashboard(true)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 shadow-md transition-colors"
            >
              Open Project List
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-100">Thank you for contributing as a senior. Your guidance matters a lot.</p>
        </div>
      </footer>

      {showProjectDashboard && (
        <SeniorProjectDashboard onClose={() => setShowProjectDashboard(false)} />
      )}
    </div>
  );
}
