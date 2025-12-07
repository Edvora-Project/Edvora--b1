import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ExamPreparation() {
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
              Exam Preparation
            </h1>
            <p className="text-lg text-gray-600">
              Plan your semester and competitive exam preparation with the help of alumni who have already cleared them.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500" /> College Exams
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Competitive Exams
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Strategy with Alumni
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h3M8 8h8M5 4h14v16H5z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">College Exams</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Understand the pattern and important topics from seniors and toppers.</li>
                <li>Create a 2–4 week revision timetable for each subject.</li>
                <li>Use previous year question papers and notes shared on EDVORA.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Competitive Exams</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Identify which exams you want to target (GATE, CAT, placements tests, etc.).</li>
                <li>Follow seniors' recommended book lists and online resources.</li>
                <li>Give topic-wise and full-length mock tests regularly.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Study Strategy with Alumni</h2>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Ask alumni how they balanced college, projects, and exam preparation.</li>
              <li>Learn smart revision techniques: spaced repetition, active recall, and note-making.</li>
              <li>Clarify doubts early instead of waiting till the last week before exams.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            Tip: Combine your exam plan with shared notes and alumni guidance to avoid last-minute stress and score consistently well.
          </p>
        </div>
      </main>
    </div>
  );
}
