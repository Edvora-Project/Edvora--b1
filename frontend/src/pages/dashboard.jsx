// src/pages/Dashboard.jsx
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  const toggleAccountModal = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
  };

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
                <Link to="/alumni-guidance" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Alumni Guidance
                </Link>
                <Link to="/upload" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Upload Notes
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleAccountModal}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-2xl border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Account Info Modal */}
      {isAccountModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Account Information</h3>
              <button
                onClick={toggleAccountModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{user?.name || 'User'}</h4>
                <p className="text-gray-600">{user?.email}</p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Account Details</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">User ID:</span>
                      <span className="text-gray-900 font-mono">{user?.$id || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Member since:</span>
                      <span className="text-gray-900">{new Date(user?.$createdAt || Date.now()).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors">
                    Edit Profile
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="flex-1 bg-red-600 text-white px-4 py-3 rounded-2xl font-semibold hover:bg-red-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Welcome to EDVORA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Your gateway to academic excellence, mentorship, and career growth
          </p>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Study Material Sharing */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/study_material_sharing.avif" alt="Study Material Sharing" className="w-12 h-12 rounded-lg object-cover"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Material Sharing</h3>
                <p className="text-gray-600 mb-6">Access and share study materials with your peers</p>
                <Link to="/upload" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Skill Development - Commented Out */}
            {/* <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/skill_development.webp" alt="Skill Development" className="w-12 h-12 rounded-lg object-cover"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skill Development</h3>
                <p className="text-gray-600 mb-6">Enhance your skills with expert guidance</p>
                <Link to="/alumni-guidance" className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-2xl font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Explore
                </Link>
              </div>
            </div> */}

            {/* Year Wise Roadmap */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/year_wise_roadmap.avif" alt="Year Wise Roadmap" className="w-12 h-12 rounded-lg object-cover"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Year Wise Roadmap</h3>
                <p className="text-gray-600 mb-6">Plan your academic journey strategically</p>
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-2xl font-semibold hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  View Roadmap
                </button>
              </div>
            </div>

            {/* Project Guidance */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/project_guidance.avif" alt="Project Guidance" className="w-12 h-12 rounded-lg object-cover"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Guidance</h3>
                <p className="text-gray-600 mb-6">Get expert help with your projects</p>
                <Link to="/project-guidance" className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-2xl font-semibold hover:from-orange-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block">
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Browse Notes</h3>
                <p className="text-gray-600 mb-6">Explore study materials shared by the community</p>
                <Link to="/upload" className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-colors">
                  Browse Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Mentors</h3>
                <p className="text-gray-600 mb-6">Connect with alumni for career guidance</p>
                <Link to="/alumni-guidance" className="bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-700 transition-colors">
                  Find Mentors
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8M7 4h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Content</h3>
                <p className="text-gray-600 mb-6">Share your study materials with others</p>
                <Link to="/upload" className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition-colors">
                  Upload Now
                </Link>
              </div>
            </div>
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
