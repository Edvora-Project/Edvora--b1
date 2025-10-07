import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import ProjectSubmissionForm from '../components/ProjectSubmissionForm';
import MentorAssignmentConfirmation from '../components/MentorAssignmentConfirmation';
import ProjectDashboard from '../components/ProjectDashboard';

const ProjectGuidance = () => {
  const { user, logout } = useAuth();
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [showProjectDashboard, setShowProjectDashboard] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleLogout = async () => {
    await logout();
  };

  const handleSubmissionSuccess = (result) => {
    setSubmissionResult(result);
    setShowSubmissionForm(false);
  };

  const handleViewProject = () => {
    setSubmissionResult(null);
    setShowProjectDashboard(true);
  };

  const handleCloseSubmission = () => {
    setSubmissionResult(null);
  };

  const handleCloseDashboard = () => {
    setShowProjectDashboard(false);
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
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Dashboard
                </Link>
                <Link to="/alumni-guidance" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Alumni Guidance
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
            Project Guidance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Get expert mentorship for your projects from experienced professionals in your field
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How It Works */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Project</h3>
                    <p className="text-gray-600">Describe your project, select the domain, and provide details about your goals and technologies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Matched</h3>
                    <p className="text-gray-600">Our system automatically matches you with the best mentor based on their expertise and availability.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Learning</h3>
                    <p className="text-gray-600">Connect with your mentor, get personalized guidance, and work together to achieve your project goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit New Project</h3>
                  <p className="text-gray-600 mb-6">Get started with expert mentorship for your project</p>
                  <button
                    onClick={() => setShowSubmissionForm(true)}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Submit Project
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">View My Projects</h3>
                  <p className="text-gray-600 mb-6">Track your project progress and mentor communications</p>
                  <button
                    onClick={() => setShowProjectDashboard(true)}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Mentorship?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Mentors</h3>
              <p className="text-gray-600">Get guidance from industry professionals with years of experience in your field.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Schedule</h3>
              <p className="text-gray-600">Work at your own pace with mentors who understand your time constraints.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">Join thousands of students who have successfully completed their projects with our guidance.</p>
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

      {/* Modals */}
      {showSubmissionForm && (
        <ProjectSubmissionForm
          onSuccess={handleSubmissionSuccess}
          onCancel={() => setShowSubmissionForm(false)}
        />
      )}

      {submissionResult && (
        <MentorAssignmentConfirmation
          project={submissionResult.project}
          mentor={submissionResult.mentor}
          onClose={handleCloseSubmission}
          onViewProject={handleViewProject}
        />
      )}

      {showProjectDashboard && (
        <ProjectDashboard onClose={handleCloseDashboard} />
      )}
    </div>
  );
};

export default ProjectGuidance;
