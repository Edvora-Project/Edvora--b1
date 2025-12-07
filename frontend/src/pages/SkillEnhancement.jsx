import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function SkillEnhancement() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EDVORA
              </Link>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex space-x-8 text-sm font-medium">
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition-colors">Dashboard</Link>
                <Link to="/alumni-guidance" className="text-gray-700 hover:text-indigo-600 transition-colors">Alumni Guidance</Link>
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

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              Skill Enhancement
            </h1>
            <p className="text-lg text-gray-600">
              Work with seniors to systematically improve your technical and soft skills.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500" /> Technical Skills
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> Soft Skills
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Habits & Accountability
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Technical Skills</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Choose a primary track: DSA, Web Dev, ML/AI, or another domain.</li>
                <li>Set weekly goals for topics, problems, or features to build.</li>
                <li>Ask seniors to review your code, GitHub, and project structure.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3h1a3 3 0 110 6h-1v2M9 8H7a3 3 0 100 6h1v2" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Soft Skills</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Improve communication through mock HR interviews and presentations.</li>
                <li>Learn how to write good emails, messages, and LinkedIn posts.</li>
                <li>Practice explaining your projects clearly and confidently.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2h-4.586a1 1 0 00-.707.293L9.586 6.414A2 2 0 009 7.828V9" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Habit Building with Seniors</h2>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Follow a daily or weekly schedule shared by mentors.</li>
              <li>Get accountability by sharing progress updates with seniors.</li>
              <li>Ask for feedback on where to focus more: fundamentals, projects, or interviews.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            Tip: Track your progress over months, not days, and use alumni feedback to continuously refine your learning plan.
          </p>
        </div>
      </main>
    </div>
  );
}
