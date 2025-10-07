import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { createProject, getAvailableDomains } from '../services/projectService';

const ProjectSubmissionForm = ({ onSuccess, onCancel }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [domains, setDomains] = useState([]);
  const [formData, setFormData] = useState({
    project_title: '',
    project_description: '',
    domain: '',
    subdomain: '',
    complexity: 'Intermediate',
    estimated_duration: '2-3 months',
    project_goals: '',
    technologies: []
  });

  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [availableTechnologies] = useState([
    'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java', 'C++', 'JavaScript',
    'TypeScript', 'MongoDB', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Kubernetes',
    'Machine Learning', 'Data Science', 'Mobile Development', 'Web Development'
  ]);

  useEffect(() => {
    loadDomains();
  }, []);

  const loadDomains = async () => {
    try {
      const availableDomains = await getAvailableDomains();
      setDomains(availableDomains);
    } catch (error) {
      console.error('Error loading domains:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTechnologyToggle = (tech) => {
    setSelectedTechnologies(prev => {
      if (prev.includes(tech)) {
        return prev.filter(t => t !== tech);
      } else {
        return [...prev, tech];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const projectData = {
        ...formData,
        student_id: user.$id,
        student_name: user.name,
        student_email: user.email,
        technologies: selectedTechnologies,
        created_at: new Date().toISOString()
      };

      const result = await createProject(projectData);
      onSuccess(result);
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Error creating project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Submit Your Project</h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
              <input
                type="text"
                name="project_title"
                value={formData.project_title}
                onChange={handleInputChange}
                required
                className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                placeholder="Enter your project title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Domain</label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleInputChange}
                required
                className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
              >
                <option value="">Select Domain</option>
                {domains.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
            <textarea
              name="project_description"
              value={formData.project_description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
              placeholder="Describe your project in detail..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subdomain/Technology</label>
              <input
                type="text"
                name="subdomain"
                value={formData.subdomain}
                onChange={handleInputChange}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                placeholder="e.g., React, Python, Machine Learning"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Complexity Level</label>
              <select
                name="complexity"
                value={formData.complexity}
                onChange={handleInputChange}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Technologies Used</label>
            <div className="flex flex-wrap gap-2">
              {availableTechnologies.map(tech => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => handleTechnologyToggle(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedTechnologies.includes(tech)
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Goals</label>
            <textarea
              name="project_goals"
              value={formData.project_goals}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
              placeholder="What do you want to achieve with this project?"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Submitting...' : 'Submit Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectSubmissionForm;
