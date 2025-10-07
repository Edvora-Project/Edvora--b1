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
      icon: "🎯"
    },
    {
      title: "Exam Preparation", 
      desc: "Tips and mentorship to excel in competitive exams with confidence.",
      img: "/images/examprep.jpg",
      icon: "📚"
    },
    {
      title: "Project Mentorship",
      desc: "Learn how to design, build, and present impactful academic or personal projects.",
      img: "/images/promen.jpg",
      icon: "🚀"
    },
    {
      title: "Startup Hiring",
      desc: "Connect with startups and explore exciting career opportunities.",
      img: "/images/startup.png",
      icon: "💼"
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
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{item.icon}</span>
                      <h3 className="text-3xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{item.desc}</p>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                      Get Guidance
                    </button>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-64 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
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
