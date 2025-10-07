# Appwrite Integration Guide for EDVORA

This guide provides complete instructions for setting up the Appwrite backend for the EDVORA project with mentor assignment and project guidance features.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Appwrite Setup](#appwrite-setup)
3. [Database Schema](#database-schema)
4. [Collection Schemas](#collection-schemas)
5. [Permissions Setup](#permissions-setup)
6. [Sample Data](#sample-data)
7. [Environment Configuration](#environment-configuration)
8. [Testing the Integration](#testing-the-integration)

## 🔧 Prerequisites

- Appwrite Cloud account or self-hosted Appwrite instance
- Project created in Appwrite console
- Authentication enabled (Email/Password)

## 🚀 Appwrite Setup

### 1. Create Database

1. Go to your Appwrite console
2. Navigate to **Databases** section
3. Click **Create Database**
4. Set Database ID: `edvora_database`
5. Set Database Name: `EDVORA Database`

### 2. Create Collections

Create the following collections in your database:

#### Collection 1: Mentors
- **Collection ID:** `mentors`
- **Collection Name:** `Mentors`
- **Description:** Stores mentor profiles and expertise information

#### Collection 2: Projects
- **Collection ID:** `projects`
- **Collection Name:** `Projects`
- **Description:** Stores student project submissions and assignments

#### Collection 3: Mentor Relations
- **Collection ID:** `mentor_relations`
- **Collection Name:** `Mentor Relations`
- **Description:** Tracks mentor-student relationships and project assignments

## 📊 Database Schema

### Database Configuration
```
Database ID: edvora_database
Database Name: EDVORA Database
```

## 🗃️ Collection Schemas

### 1. Mentors Collection (`mentors`)

| Attribute | Type | Size | Required | Default | Array | Description |
|-----------|------|------|----------|---------|-------|-------------|
| name | String | 255 | Yes | - | No | Mentor's full name |
| email | String | 255 | Yes | - | No | Mentor's email address |
| domain | String | 100 | Yes | - | No | Primary expertise domain |
| subdomains | String | 1000 | No | - | Yes | Additional skills/technologies |
| experience_years | Integer | - | Yes | - | No | Years of professional experience |
| current_company | String | 255 | No | - | No | Current workplace |
| position | String | 255 | No | - | No | Current job title |
| bio | String | 2000 | No | - | No | Professional biography |
| availability | String | 50 | Yes | Available | No | Available, Busy, Unavailable |
| rating | Float | - | No | 0.0 | No | Average rating (0-5) |
| total_mentees | Integer | - | No | 0 | No | Number of mentees helped |
| profile_image | String | 500 | No | - | No | Profile image URL |
| linkedin | String | 500 | No | - | No | LinkedIn profile URL |
| github | String | 500 | No | - | No | GitHub profile URL |
| created_at | DateTime | - | Yes | - | No | Account creation date |
| updated_at | DateTime | - | Yes | - | No | Last update date |

### 2. Projects Collection (`projects`)

| Attribute | Type | Size | Required | Default | Array | Description |
|-----------|------|------|----------|---------|-------|-------------|
| student_id | String | 255 | Yes | - | No | Appwrite user ID of student |
| student_name | String | 255 | Yes | - | No | Student's full name |
| student_email | String | 255 | Yes | - | No | Student's email address |
| project_title | String | 255 | Yes | - | No | Project title |
| project_description | String | 5000 | Yes | - | No | Detailed project description |
| domain | String | 100 | Yes | - | No | Project domain/category |
| subdomain | String | 100 | No | - | No | Specific technology/framework |
| complexity | String | 50 | Yes | Intermediate | No | Beginner, Intermediate, Advanced |
| estimated_duration | String | 100 | No | - | No | Expected project duration |
| current_status | String | 50 | Yes | Pending | No | Pending, Assigned, In Progress, Completed, Cancelled |
| assigned_mentor_id | String | 255 | No | - | No | ID of assigned mentor |
| assigned_mentor_name | String | 255 | No | - | No | Name of assigned mentor |
| assigned_at | DateTime | - | No | - | No | Mentor assignment timestamp |
| project_goals | String | 2000 | No | - | No | Student's project objectives |
| technologies | String | 1000 | No | - | Yes | Technologies used in project |
| created_at | DateTime | - | Yes | - | No | Project creation date |
| updated_at | DateTime | - | Yes | - | No | Last update date |

### 3. Mentor Relations Collection (`mentor_relations`)

| Attribute | Type | Size | Required | Default | Array | Description |
|-----------|------|------|----------|---------|-------|-------------|
| mentor_id | String | 255 | Yes | - | No | ID of the mentor |
| student_id | String | 255 | Yes | - | No | ID of the student |
| project_id | String | 255 | Yes | - | No | ID of the project |
| status | String | 50 | Yes | Active | No | Active, Completed, Cancelled |
| start_date | DateTime | - | Yes | - | No | Relationship start date |
| end_date | DateTime | - | No | - | No | Relationship end date |
| rating | Float | - | No | - | No | Student's rating of mentor (0-5) |
| feedback | String | 2000 | No | - | No | Student feedback for mentor |
| created_at | DateTime | - | Yes | - | No | Relation creation date |

## 🔐 Permissions Setup

### 1. Mentors Collection Permissions

**Read Permissions:**
- `any` - Allow anyone to read mentor profiles (for public browsing)

**Write Permissions:**
- `users` - Only authenticated users can create/update mentors
- `role:admin` - Admin role for managing mentors

### 2. Projects Collection Permissions

**Read Permissions:**
- `users` - Authenticated users can read their own projects
- `role:admin` - Admin role for reading all projects

**Write Permissions:**
- `users` - Authenticated users can create/update their own projects
- `role:admin` - Admin role for managing all projects

### 3. Mentor Relations Collection Permissions

**Read Permissions:**
- `users` - Authenticated users can read their own relations
- `role:admin` - Admin role for reading all relations

**Write Permissions:**
- `users` - Authenticated users can create/update their own relations
- `role:admin` - Admin role for managing all relations

## 📝 Sample Data

### Sample Mentor Records

```json
{
  "name": "John Smith",
  "email": "john.smith@techcorp.com",
  "domain": "Web Development",
  "subdomains": ["React", "Node.js", "MongoDB", "Express"],
  "experience_years": 8,
  "current_company": "TechCorp Solutions",
  "position": "Senior Full-Stack Developer",
  "bio": "Experienced full-stack developer with 8+ years in web development. Expert in React, Node.js, and modern web technologies. Passionate about mentoring students and helping them grow in their careers.",
  "availability": "Available",
  "rating": 4.8,
  "total_mentees": 25,
  "profile_image": "https://example.com/john-smith.jpg",
  "linkedin": "https://linkedin.com/in/johnsmith",
  "github": "https://github.com/johnsmith"
}
```

```json
{
  "name": "Sarah Johnson",
  "email": "sarah.johnson@datascience.com",
  "domain": "Data Science",
  "subdomains": ["Python", "Machine Learning", "TensorFlow", "Pandas"],
  "experience_years": 6,
  "current_company": "DataTech Inc",
  "position": "Lead Data Scientist",
  "bio": "Data science expert with 6+ years of experience in machine learning and AI. Specialized in Python, TensorFlow, and building scalable ML solutions.",
  "availability": "Available",
  "rating": 4.9,
  "total_mentees": 18,
  "profile_image": "https://example.com/sarah-johnson.jpg",
  "linkedin": "https://linkedin.com/in/sarahjohnson",
  "github": "https://github.com/sarahjohnson"
}
```

```json
{
  "name": "Mike Chen",
  "email": "mike.chen@mobileapps.com",
  "domain": "Mobile Development",
  "subdomains": ["React Native", "Flutter", "iOS", "Android"],
  "experience_years": 7,
  "current_company": "MobileFirst Solutions",
  "position": "Senior Mobile Developer",
  "bio": "Mobile development specialist with 7+ years of experience in React Native and Flutter. Expert in cross-platform mobile app development.",
  "availability": "Available",
  "rating": 4.7,
  "total_mentees": 22,
  "profile_image": "https://example.com/mike-chen.jpg",
  "linkedin": "https://linkedin.com/in/mikechen",
  "github": "https://github.com/mikechen"
}
```

### Available Domains

Based on the sample mentors, the following domains are available:
- Web Development
- Data Science
- Mobile Development
- Machine Learning
- Cloud Computing
- DevOps
- UI/UX Design
- Cybersecurity

## ⚙️ Environment Configuration

### 1. Create Environment File

Create a `.env` file in the frontend directory:

```env
# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id-here

# Optional: Custom endpoints for development
# VITE_APPWRITE_ENDPOINT=http://localhost/v1
```

### 2. Update Appwrite Configuration

The configuration is already set up in `src/config/appwrite.js`:

```javascript
// Database and Collection IDs
export const DATABASE_ID = 'edvora_database';
export const MENTORS_COLLECTION_ID = 'mentors';
export const PROJECTS_COLLECTION_ID = 'projects';
export const MENTOR_RELATIONS_COLLECTION_ID = 'mentor_relations';
```

## 🧪 Testing the Integration

### 1. Test Mentor Assignment

1. Submit a project with domain "Web Development"
2. System should automatically assign John Smith as mentor
3. Check the project status changes to "Assigned"
4. Verify mentor-student relation is created

### 2. Test Project Dashboard

1. Create multiple projects with different domains
2. Verify projects appear in the dashboard
3. Check mentor details are displayed correctly
4. Test project status updates

### 3. Test Domain Filtering

1. Submit projects for different domains
2. Verify correct mentors are assigned
3. Check that unavailable mentors are not assigned

## 🔍 Troubleshooting

### Common Issues

1. **Permission Denied Errors**
   - Check collection permissions
   - Ensure user is authenticated
   - Verify user has correct roles

2. **Mentor Assignment Fails**
   - Check if mentors exist in database
   - Verify mentor availability status
   - Check domain matching logic

3. **Project Not Found**
   - Verify project ID is correct
   - Check if user has access to project
   - Ensure project exists in database

### Debug Steps

1. Check browser console for errors
2. Verify Appwrite console for database operations
3. Test API calls in Appwrite console
4. Check network requests in browser dev tools

## 📚 Additional Resources

- [Appwrite Documentation](https://appwrite.io/docs)
- [Appwrite Database Guide](https://appwrite.io/docs/products/databases)
- [Appwrite Permissions](https://appwrite.io/docs/products/databases/permissions)
- [Appwrite Query Builder](https://appwrite.io/docs/products/databases/query-builder)

## 🚀 Deployment Checklist

- [ ] Database created with correct ID
- [ ] All collections created with proper schemas
- [ ] Permissions configured correctly
- [ ] Sample mentor data added
- [ ] Environment variables configured
- [ ] Authentication enabled
- [ ] Frontend deployed and tested
- [ ] All features working correctly

## 📞 Support

For issues with this integration:
1. Check the troubleshooting section
2. Review Appwrite documentation
3. Check browser console for errors
4. Verify database permissions and data

---

**Last Updated:** January 2025
**Version:** 1.0.0
