import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserProjects, getMentorDetails } from '../services/projectService';

const ProjectDashboard = ({ onClose }) => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mentorDetails, setMentorDetails] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const userProjects = await getUserProjects(user.$id);
      setProjects(userProjects);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectSelect = async (project) => {
    setSelectedProject(project);
    setMentorDetails(null);

    // Only load mentor details if a mentor has actually been assigned
    if (!project.assigned_mentor_id) return;

    try {
      const mentor = await getMentorDetails(project.assigned_mentor_id);
      setMentorDetails(mentor);
    } catch (error) {
      console.error('Error loading mentor details:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Assigned':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-purple-100 text-purple-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Yet</h3>
            <p className="text-gray-600 mb-6">Submit your first project to get started with mentorship!</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Projects List */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Projects ({projects.length})</h3>
              <div className="space-y-4">
                {projects.map(project => (
                  <div
                    key={project.$id}
                    onClick={() => handleProjectSelect(project)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      selectedProject?.$id === project.$id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{project.project_title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.current_status)}`}>
                        {project.current_status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{project.domain}</p>
                    <p className="text-xs text-gray-500">Created: {new Date(project.created_at).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              {selectedProject ? (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{selectedProject.project_title}</h4>
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-sm font-medium text-gray-600">Description:</span>
                        <p className="text-gray-900 mt-1">{selectedProject.project_description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm font-medium text-gray-600">Domain:</span>
                          <p className="text-gray-900">{selectedProject.domain}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Complexity:</span>
                          <p className="text-gray-900">{selectedProject.complexity}</p>
                        </div>
                      </div>
                      {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-gray-600">Technologies:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedProject.technologies.map(tech => (
                              <span key={tech} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {selectedProject.assigned_mentor_name && (
                      <div className="mt-2">
                        <span className="text-xs font-medium text-gray-600">Approved by:</span>
                        <p className="text-sm text-gray-900">{selectedProject.assigned_mentor_name}</p>
                      </div>
                    )}

                    {/* Status / notification for student */}
                    {selectedProject.current_status === 'Pending Review' && (
                      <div className="mt-4 p-3 rounded-xl bg-yellow-50 border border-yellow-100 text-sm text-yellow-800">
                        Your project has been submitted and is waiting for senior review.
                      </div>
                    )}

                    {selectedProject.current_status === 'Assigned' && !mentorDetails && (
                      <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-800">
                        Your project has been approved and a mentor has been assigned. Mentor details will appear here shortly.
                      </div>
                    )}

                    {mentorDetails && (
                      <div className="border-t pt-6">
                        <h5 className="font-semibold text-gray-900 mb-3">Your Mentor</h5>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {mentorDetails.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{mentorDetails.name}</p>
                            <p className="text-sm text-gray-600">{mentorDetails.position} at {mentorDetails.current_company}</p>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(mentorDetails.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <span className="text-xs text-gray-500 ml-1">{mentorDetails.rating}/5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Select a project to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDashboard;
