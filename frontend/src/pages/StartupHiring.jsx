import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function StartupHiring() {
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
              Startup Hiring
            </h1>
            <p className="text-lg text-gray-600">
              Explore how to get internships and jobs at startups with help from alumni already working there.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500" /> Startup vs Big Tech
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Finding Opportunities
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Interviews & Offers
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Understanding Startups</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Learn the differences between startup and big company roles.</li>
                <li>Understand what skills and mindset startups usually look for.</li>
                <li>Talk to alumni about their day-to-day work in startups.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v1H7l5 5 5-5h-2v-1c0-1.657-1.343-3-3-3z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Getting Opportunities</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Discover openings through LinkedIn, AngelList, and senior referrals.</li>
                <li>Prepare a project-heavy resume that matches startup expectations.</li>
                <li>Reach out politely to founders and engineers with a clear value proposition.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Interview & Offer Stage</h2>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Prepare for practical interviews: take-home projects, live coding, or pair programming.</li>
              <li>Discuss salary, equity, and work expectations with help from experienced alumni.</li>
              <li>Evaluate if the startup is a good fit for your learning and career goals.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            Tip: Use alumni connections to understand each startup better and avoid random applications. Quality networking beats quantity.
          </p>
        </div>
      </main>
    </div>
  );
}
