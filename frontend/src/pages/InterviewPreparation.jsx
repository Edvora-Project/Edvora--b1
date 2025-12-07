import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function InterviewPreparation() {
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
              Interview Preparation
            </h1>
            <p className="text-lg text-gray-600">
              Learn how alumni cracked their interviews and follow a structured plan for coding rounds, technical interviews, and HR discussions.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500" /> Coding / DSA
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                <span className="w-2 h-2 rounded-full bg-sky-500" /> CS Fundamentals
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> HR / Communication
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4h14M5 8h14M7 12h10M9 16h6" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Coding & DSA Rounds</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Focus on problem patterns: arrays, strings, DP, graphs, trees.</li>
                <li>Practice daily on platforms using a topic-wise roadmap.</li>
                <li>Simulate timed contests to build speed and accuracy.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-700 text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">System Design & Fundamentals</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Revise OS, DBMS, CN, OOPs and language-specific concepts.</li>
                <li>For senior roles, start with basic system design examples.</li>
                <li>Discuss trade-offs with alumni who have interview experience.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9a3 3 0 00-3 3c0 1.657 1.5 3 3 5 1.5-2 3-3.343 3-5a3 3 0 00-3-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22v-1" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">HR & Behavioral Rounds</h2>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Prepare clear answers for: Tell me about yourself, strengths/weaknesses, failures.</li>
              <li>Use STAR method (Situation, Task, Action, Result) for project and experience questions.</li>
              <li>Ask alumni to take mock HR interviews and give feedback on communication and confidence.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            Tip: Use this page as a checklist and combine it with guidance from seniors/alumni to fine-tune your preparation for your dream companies.
          </p>
        </div>
      </main>
    </div>
  );
}
