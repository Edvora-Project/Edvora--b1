import { databases, DATABASE_ID, MENTORS_COLLECTION_ID, PROJECTS_COLLECTION_ID, MENTOR_RELATIONS_COLLECTION_ID, ID, Query } from '../config/appwrite';

// Get all available mentors
export const getMentors = async () => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      MENTORS_COLLECTION_ID,
      [Query.equal('availability', 'Available')]
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching mentors:', error);
    throw error;
  }
};

// Get all projects (for senior/mentor views)
export const getAllProjects = async () => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching all projects:', error);
    throw error;
  }
};

// Get mentors by domain
export const getMentorsByDomain = async (domain) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      MENTORS_COLLECTION_ID,
      [
        Query.or([
          Query.equal('domain', domain),
          Query.contains('subdomains', domain)
        ]),
        Query.equal('availability', 'Available')
      ]
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching mentors by domain:', error);
    throw error;
  }
};

// Assign mentor to project
export const assignMentor = async (projectDomain, projectSubdomain) => {
  try {
    // Get mentors by domain
    const mentors = await getMentorsByDomain(projectDomain);
    
    if (mentors.length === 0) {
      throw new Error('No available mentors found for this domain');
    }

    // Sort mentors by rating and experience
    const sortedMentors = mentors.sort((a, b) => {
      if (a.rating !== b.rating) return b.rating - a.rating;
      return b.experience_years - a.experience_years;
    });

    return sortedMentors[0];
  } catch (error) {
    console.error('Error assigning mentor:', error);
    throw error;
  }
};

// Create new project (initially Pending Review, no mentor yet)
export const createProject = async (projectData) => {
  try {
    const project = await databases.createDocument(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      ID.unique(),
      {
        ...projectData,
        assigned_mentor_id: null,
        assigned_mentor_name: null,
        current_status: 'Pending Review',
        created_at: new Date().toISOString(),
      }
    );

    return { project };
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

// Approve project and assign mentor (used by seniors)
// approver should be the currently logged-in senior user (from AuthContext)
export const approveAndAssignMentor = async (projectId, approver) => {
  try {
    // Load existing project
    const existingProject = await getProject(projectId);

    // Use the approving senior as the assigned mentor/guide
    const approverName = approver.name || approver.email;

    // Update project with mentor and approved status
    const updatedProject = await databases.updateDocument(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      projectId,
      {
        assigned_mentor_id: approver.$id,
        assigned_mentor_name: approverName,
        assigned_at: new Date().toISOString(),
        current_status: 'Assigned',
      }
    );

    // Create mentor-student relation
    await databases.createDocument(
      DATABASE_ID,
      MENTOR_RELATIONS_COLLECTION_ID,
      ID.unique(),
      {
        mentor_id: approver.$id,
        student_id: existingProject.student_id,
        project_id: updatedProject.$id,
        status: 'Active',
        start_date: new Date().toISOString(),
      }
    );

    return { project: updatedProject };
  } catch (error) {
    console.error('Error approving and assigning mentor:', error);
    throw error;
  }
};

// Get user's projects
export const getUserProjects = async (userId) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      [Query.equal('student_id', userId)]
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching user projects:', error);
    throw error;
  }
};

// Get project by ID
export const getProject = async (projectId) => {
  try {
    const project = await databases.getDocument(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      projectId
    );
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};

// Update project status
export const updateProjectStatus = async (projectId, status) => {
  try {
    const project = await databases.updateDocument(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      projectId,
      {
        current_status: status,
        updated_at: new Date().toISOString()
      }
    );
    return project;
  } catch (error) {
    console.error('Error updating project status:', error);
    throw error;
  }
};

// Get mentor details
export const getMentorDetails = async (mentorId) => {
  try {
    const mentor = await databases.getDocument(
      DATABASE_ID,
      MENTORS_COLLECTION_ID,
      mentorId
    );
    return mentor;
  } catch (error) {
    console.error('Error fetching mentor details:', error);
    throw error;
  }
};

// Get available domains
export const getAvailableDomains = async () => {
  try {
    const mentors = await getMentors();
    const domains = [...new Set(mentors.map(mentor => mentor.domain))];
    return domains;
  } catch (error) {
    console.error('Error fetching domains:', error);
    throw error;
  }
};
