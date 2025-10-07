import React from 'react';

const MentorAssignmentConfirmation = ({ project, mentor, onClose, onViewProject }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Submitted Successfully!</h2>
          <p className="text-gray-600">Your mentor has been assigned and will contact you soon.</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Assigned Mentor</h3>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {mentor.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900">{mentor.name}</h4>
              <p className="text-gray-600">{mentor.position} at {mentor.current_company}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(mentor.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{mentor.rating}/5</span>
                </div>
                <span className="text-sm text-gray-500">• {mentor.experience_years} years experience</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-4">{mentor.bio}</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Project:</span>
              <span className="font-medium">{project.project_title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Domain:</span>
              <span className="font-medium">{project.domain}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Complexity:</span>
              <span className="font-medium">{project.complexity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="text-green-600 font-semibold">{project.current_status}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
          <button
            onClick={onViewProject}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            View Project Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorAssignmentConfirmation;
