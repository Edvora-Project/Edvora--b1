import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function AlumniGuidance() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const guidanceCards = [
    {
      title: "Interview Preparation",
      desc: "Get guidance from alumni on how to crack technical and HR interviews with confidence.",
      img: "/images/Inertviewprep.webp",
      icon: "🎯",
      path: "/interview-preparation"
    },
    {
      title: "Exam Preparation", 
      desc: "Tips and mentorship to excel in competitive exams with confidence.",
      img: "/images/examprep.jpg",
      icon: "📚",
      path: "/exam-preparation"
    },
    {
      title: "Skill Enhancement",
      desc: "Get guidance to improve your core skills (coding, problem solving, communication, and more).",
      img: "/images/promen.jpg",
      icon: "🚀",
      path: "/skill-enhancement"
    },
    {
      title: "Startup Hiring",
      desc: "Connect with startups and explore exciting career opportunities.",
      img: "/images/startup.png",
      icon: "💼",
      path: "/startup-hiring"
    }
  ];

  const mentors = [
    {
      name: "Aisha Verma",
      role: "SDE II",
      company: "Google",
      help: "DSA, system design basics, and product-based interview strategy."
    },
    {
      name: "Rohan Mehta",
      role: "Software Engineer",
      company: "Microsoft",
      help: "Data structures, operating systems, and low-level design for tech interviews."
    },
    {
      name: "Sara Khan",
      role: "Data Scientist",
      company: "Amazon",
      help: "ML/AI roadmap, projects to add in your portfolio, and internship preparation."
    },
    {
      name: "Arjun Patel",
      role: "Backend Engineer",
      company: "Uber",
      help: "Scalable backend, databases, and real-world project guidance."
    },
    {
      name: "Neha Singh",
      role: "Frontend Engineer",
      company: "Flipkart",
      help: "React, UI/UX basics, and how to showcase web projects effectively."
    },
    {
      name: "Vikram Rao",
      role: "Product Engineer",
      company: "Stripe",
      help: "Building portfolio projects, product thinking, and startup hiring."
    },
    {
      name: "Priya Nair",
      role: "SDE",
      company: "Swiggy",
      help: "Campus placements, referral strategy, and balancing college with preparation."
    },
    {
      name: "Karthik Iyer",
      role: "Full Stack Developer",
      company: "Zoho",
      help: "End-to-end project mentoring and improving GitHub/profile for recruiters."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Modern Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EDVORA
              </Link>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex space-x-8">
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Dashboard
                </Link>
                <Link to="/upload" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Upload Notes
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Welcome, {user?.name || user?.email}</span>
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Alumni Guidance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Connect with successful alumni and get personalized guidance for your career journey
          </p>
        </div>
      </section>

      {/* Guidance Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {guidanceCards.map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-700">
                      {item.title === "Interview Preparation" && (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4h14M5 8h14M7 12h10M9 16h6" />
                        </svg>
                      )}
                      {item.title === "Exam Preparation" && (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                      {item.title === "Skill Enhancement" && (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 00-4 12.748V22l4-2 4 2v-7.252A7 7 0 0012 2z" />
                        </svg>
                      )}
                      {item.title === "Startup Hiring" && (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2M7 13h3v6H7zM14 13h3v6h-3z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{item.desc}</p>
                  <Link
                    to={item.path}
                    className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Get Guidance
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Mentors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with seniors and alumni working at top companies. Use EDVORA to reach out,
              ask questions, and request guidance for interviews, projects, and career decisions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold mb-3 mx-auto">
                    {mentor.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center">{mentor.name}</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">
                    {mentor.role} · {mentor.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    {mentor.help}
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-2xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    Seek Guidance
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Connect with Alumni?</h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join our community and start your journey towards success with expert guidance
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-100">© 2025 EDVORA. All Rights Reserved.</p>
          <p className="text-indigo-200 mt-2">Contact · Privacy · Terms</p>
        </div>
      </footer>
    </div>
  );
}
