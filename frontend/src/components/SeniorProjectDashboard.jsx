import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getAllProjects, updateProjectStatus, approveAndAssignMentor } from "../services/projectService";

const SeniorProjectDashboard = ({ onClose }) => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    } catch (error) {
      console.error("Error loading projects for seniors:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleApproveAndAssign = async () => {
    if (!selectedProject) return;

    try {
      setUpdating(true);
      const { project: updated } = await approveAndAssignMentor(selectedProject.$id, user);
      setSelectedProject(updated);
      setProjects((prev) => prev.map((p) => (p.$id === updated.$id ? updated : p)));
    } catch (error) {
      console.error("Error approving project:", error);

      // Show a clearer message to seniors when no mentors are configured
      const message =
        error?.message && typeof error.message === "string"
          ? error.message
          : "Failed to approve and assign mentor. Please check mentor availability and try again.";

      alert(message);
    } finally {
      setUpdating(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800";
      case "Assigned":
        return "bg-blue-100 text-blue-800";
      case "In Progress":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-purple-100 text-purple-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getFilteredAndSortedProjects = () => {
    // Filter by status
    let filtered = projects;
    if (statusFilter !== "All") {
      filtered = projects.filter(
        (p) => (p.current_status || "").toLowerCase() === statusFilter.toLowerCase()
      );
    }

    // Sort so that Pending Review always comes first, then by created_at (newest first)
    return [...filtered].sort((a, b) => {
      const aStatus = (a.current_status || "").toLowerCase();
      const bStatus = (b.current_status || "").toLowerCase();

      if (aStatus === "pending review" && bStatus !== "pending review") return -1;
      if (bStatus === "pending review" && aStatus !== "pending review") return 1;

      const aTime = a.created_at ? new Date(a.created_at).getTime() : 0;
      const bTime = b.created_at ? new Date(b.created_at).getTime() : 0;
      return bTime - aTime;
    });
  };

  const filteredProjects = getFilteredAndSortedProjects();

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading student projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Student Projects</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Projects Submitted Yet
            </h3>
            <p className="text-gray-600 mb-6">
              Once students submit projects, they will appear here for your guidance.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Projects ({filteredProjects.length}/{projects.length})
                </h3>
                <div className="inline-flex rounded-full bg-gray-100 p-1 text-xs font-medium text-gray-600">
                  <button
                    onClick={() => setStatusFilter("All")}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      statusFilter === "All"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatusFilter("Pending Review")}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      statusFilter === "Pending Review"
                        ? "bg-white text-yellow-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Pending Review
                  </button>
                  <button
                    onClick={() => setStatusFilter("Assigned")}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      statusFilter === "Assigned"
                        ? "bg-white text-blue-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Assigned
                  </button>
                  <button
                    onClick={() => setStatusFilter("Completed")}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      statusFilter === "Completed"
                        ? "bg-white text-purple-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Completed
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredProjects.map((project) => (
                  <div
                    key={project.$id}
                    onClick={() => handleProjectSelect(project)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      selectedProject?.$id === project.$id
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {project.project_title}
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          project.current_status
                        )}`}
                      >
                        {project.current_status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {project.domain} · {project.complexity}
                    </p>
                    <p className="text-xs text-gray-500">
                      Student: {project.student_name} ({project.student_email})
                    </p>
                    {project.assigned_mentor_name && (
                      <p className="text-xs text-gray-500 mt-1">
                        Senior: {project.assigned_mentor_name}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {selectedProject ? (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Project Details & Approval
                  </h3>
                  <div className="bg-gray-50 rounded-2xl p-6 mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {selectedProject.project_title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {selectedProject.project_description}
                    </p>
                    {selectedProject.assigned_mentor_name && (
                      <p className="text-xs font-medium text-gray-700 mb-4">
                        Approved by: {selectedProject.assigned_mentor_name}
                      </p>
                    )}
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="font-medium text-gray-600">
                          Domain:
                        </span>
                        <p className="text-gray-900">{selectedProject.domain}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">
                          Complexity:
                        </span>
                        <p className="text-gray-900">{selectedProject.complexity}</p>
                      </div>
                      {selectedProject.estimated_duration && (
                        <div>
                          <span className="font-medium text-gray-600">
                            Duration:
                          </span>
                          <p className="text-gray-900">
                            {selectedProject.estimated_duration}
                          </p>
                        </div>
                      )}
                    </div>
                    {selectedProject.technologies &&
                      selectedProject.technologies.length > 0 && (
                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-600">
                            Technologies:
                          </span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedProject.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    {selectedProject.project_goals && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">
                          Student Goals:
                        </span>
                        <p className="text-sm text-gray-900 mt-1">
                          {selectedProject.project_goals}
                        </p>
                      </div>
                    )}
                  </div>

                  {selectedProject.current_status === "Pending Review" ? (
                    <button
                      onClick={handleApproveAndAssign}
                      disabled={updating}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {updating ? "Approving..." : "Approve & Assign Mentor"}
                    </button>
                  ) : (
                    <div className="mt-4 p-3 rounded-xl bg-green-50 border border-green-100 text-sm text-green-800 text-center">
                      This project has already been approved and assigned.
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Select a project to review details and start guiding the student.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeniorProjectDashboard;
