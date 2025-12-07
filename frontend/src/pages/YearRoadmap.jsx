import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function YearRoadmap() {
  const [selectedSemester, setSelectedSemester] = useState("");
  const semesterRefs = Array.from({ length: 8 }, () => useRef(null));

  const handleFocusSemester = () => {
    if (!selectedSemester) return;
    const index = parseInt(selectedSemester, 10) - 1;
    const targetRef = semesterRefs[index];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const getSectionClasses = (index) => {
    const base = "bg-white rounded-2xl shadow-lg border border-gray-100 p-8";
    if (selectedSemester && parseInt(selectedSemester, 10) - 1 === index) {
      return base + " ring-2 ring-indigo-300 border-indigo-400";
    }
    return base;
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
            <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link to="/dashboard" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                Semester-wise Roadmap
              </h1>
              <p className="text-gray-600 max-w-2xl">
                High-level 1st to 8th semester roadmap focused mainly on DSA, Web Development, and a gradual introduction to ML/AI.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" /> DSA Track
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                  <span className="w-2 h-2 rounded-full bg-purple-500" /> Web Development
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-100">
                  <span className="w-2 h-2 rounded-full bg-pink-500" /> ML / AI
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Career / Internships
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select your current semester
                </label>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="w-full sm:w-56 rounded-2xl border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">-- Choose semester --</option>
                  <option value="1">1st Semester</option>
                  <option value="2">2nd Semester</option>
                  <option value="3">3rd Semester</option>
                  <option value="4">4th Semester</option>
                  <option value="5">5th Semester</option>
                  <option value="6">6th Semester</option>
                  <option value="7">7th Semester</option>
                  <option value="8">8th Semester</option>
                </select>
              </div>

              <button
                onClick={handleFocusSemester}
                className="inline-flex justify-center items-center px-4 py-2 rounded-2xl bg-indigo-600 text-white text-sm font-semibold shadow-md hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                disabled={!selectedSemester}
              >
                Focus on my semester
              </button>

              <Link
                to="/dashboard"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-200 bg-white/80 hover:bg-white shadow-sm text-sm font-medium text-gray-700 transition-colors"
              >
                ← Back to Dashboard
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1st Semester */}
            <section ref={semesterRefs[0]} className={getSectionClasses(0)}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">1st Semester</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Start your journey and build strong basics.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li><span className="font-semibold">DSA:</span> Learn a programming language and basics of arrays, strings, and time complexity.</li>
                <li><span className="font-semibold">Web Dev:</span> HTML, CSS fundamentals and simple responsive pages.</li>
                <li><span className="font-semibold">ML/AI:</span> Understand what ML/AI is at a high level, basic statistics/probability from your math courses.</li>
              </ul>
            </section>

            {/* 2nd Semester */}
            <section ref={semesterRefs[1]} className={getSectionClasses(1)}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">2nd Semester</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Strengthen logic and touch real-world basics.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li><span className="font-semibold">DSA:</span> Recursion, searching, sorting and basic problem solving on platforms.</li>
                <li><span className="font-semibold">Web Dev:</span> Intro to JavaScript, DOM and simple interactive pages.</li>
                <li><span className="font-semibold">ML/AI:</span> Learn Python basics (if not already), NumPy and pandas fundamentals.</li>
              </ul>
            </section>

            {/* 3rd Semester */}
            <section ref={semesterRefs[2]} className={getSectionClasses(2)}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">3rd Semester</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Move from basics to intermediate level.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li><span className="font-semibold">DSA:</span> Linked lists, stacks, queues and consistent problem practice.</li>
                <li><span className="font-semibold">Web Dev:</span> Start a frontend framework (React) and build 1–3 mini projects.</li>
                <li><span className="font-semibold">ML/AI:</span> Basic data analysis with pandas, Matplotlib/Seaborn; explore simple ML ideas (what is regression/classification).</li>
              </ul>
            </section>

            {/* 4th Semester */}
            <section ref={semesterRefs[3]} className={getSectionClasses(3)}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">4th Semester</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Build stronger projects and problem-solving habits.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li><span className="font-semibold">DSA:</span> Trees, hashmaps and an introduction to dynamic programming.</li>
                <li><span className="font-semibold">Web Dev:</span> Learn basic backend (Node/Express) and database and build a simple full-stack project.</li>
                <li><span className="font-semibold">ML/AI:</span> Learn core ML concepts: train/test split, overfitting, evaluation metrics (accuracy, precision/recall).</li>
              </ul>
            </section>

            {/* 5th Semester */}
            <section ref={semesterRefs[4]} className={getSectionClasses(4)}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">5th Semester</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Start serious internship preparation with strong DSA, development, and ML/AI foundations.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li><span className="font-semibold">DSA:</span> Advanced DP, graphs and common interview patterns.</li>
                <li><span className="font-semibold">Web Dev:</span> Improve code quality, learn auth, deployment, APIs and polish 1–2 production-like projects.</li>
                <li><span className="font-semibold">ML/AI:</span> Implement classic algorithms with scikit-learn (linear/logistic regression, decision trees, KNN, clustering).</li>
                <li><span className="font-semibold">Career/Internships:</span> Build a clean resume and LinkedIn, start applying for summer internships, and give basic coding contests and quizzes.</li>
              </ul>
            </section>

            {/* 6th Semester */}
            <section ref={semesterRefs[5]} className={getSectionClasses(5)}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">6th Semester</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Peak internship season: convert your skills into real opportunities.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li><span className="font-semibold">DSA:</span> Maintain daily/weekly problem practice and revise weak topics.</li>
                <li><span className="font-semibold">Web Dev:</span> Work on performance, testing and clean architecture in your projects.</li>
                <li><span className="font-semibold">ML/AI:</span> Start deep learning basics: neural networks concepts, tensors, and a simple model in PyTorch or TensorFlow/Keras.</li>
                <li><span className="font-semibold">Career/Internships:</span> Actively give online assessments, company tests, and start basic mock interviews with friends or platforms.</li>
              </ul>
            </section>

            {/* 7th Semester */}
            <section ref={semesterRefs[6]} className={getSectionClasses(6)}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">7th Semester</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Placement and career strategy phase in DSA, Web Development, and ML/AI.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li><span className="font-semibold">DSA:</span> Full revision of important topics and previous interview questions.</li>
                <li><span className="font-semibold">Web Dev:</span> Finalize 1–3 showcase projects and document them well (README, live link).</li>
                <li><span className="font-semibold">ML/AI:</span> Build 1 solid ML project (e.g., classification/regression) with proper EDA, model comparison and documentation.</li>
                <li><span className="font-semibold">Mock Interviews:</span> Regularly practice full-length mock interviews (DSA + system design/ML basics + HR) to simulate real company rounds.</li>
              </ul>
            </section>

            {/* 8th Semester */}
            <section ref={semesterRefs[7]} className={getSectionClasses(7)}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">8th Semester</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Wrap up college and prepare for the next big step in DSA, Web Development, ML/AI, and your career.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li><span className="font-semibold">DSA:</span> Light revision and occasional practice to stay sharp.</li>
                <li><span className="font-semibold">Web Dev:</span> Stabilize long-term projects, fix bugs and add finishing touches.</li>
                <li><span className="font-semibold">ML/AI:</span> Decide a specialization (ML engineer, data scientist, MLOps) and polish a capstone ML/AI project or thesis.</li>
                <li><span className="font-semibold">Jobs/Mock Interviews:</span> Focus on company-specific preparation, revise past interview experiences, and do targeted mock interviews for final job offers.</li>
              </ul>
            </section>
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-200 bg-white/80 hover:bg-white shadow-sm text-sm font-medium text-gray-700 transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
