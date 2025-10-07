# Appwrite Authentication Setup

This project has been migrated from MongoDB authentication to Appwrite authentication.

## Setup Instructions

### 1. Create an Appwrite Project

1. Go to [Appwrite Cloud](https://cloud.appwrite.io/)
2. Create a new project
3. Note down your Project ID

### 2. Configure Environment Variables

Create a `.env` file in the frontend directory with the following variables:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id-here
```

### 3. Enable Authentication

In your Appwrite console:

1. Go to **Authentication** section
2. Enable **Email/Password** authentication
3. Configure your authentication settings

### 4. Database Setup (Optional)

If you need to store additional user data:

1. Create a database in Appwrite
2. Create collections for your data
3. Set up proper permissions

### 5. Update Configuration

Update the configuration in `src/config/appwrite.js` with your actual project details.

## Features Implemented

- ✅ User registration with email/password
- ✅ User login with email/password
- ✅ Protected routes for authenticated users
- ✅ User session management
- ✅ Logout functionality
- ✅ Modern UI with glass-morphism design

## Protected Routes

The following routes are now protected and require authentication:

- `/dashboard` - Main dashboard
- `/alumni-guidance` - Alumni guidance page
- `/upload` - Upload notes page

## Authentication Context

The app uses React Context for authentication state management. The `AuthProvider` wraps the entire application and provides:

- `user` - Current user object
- `loading` - Loading state
- `isAuthenticated` - Boolean authentication status
- `login(email, password)` - Login function
- `signup(name, email, password)` - Signup function
- `logout()` - Logout function

## Usage

```jsx
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { user, logout, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```
