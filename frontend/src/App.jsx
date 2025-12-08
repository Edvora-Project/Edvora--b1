import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import SeniorRoute from "./components/SeniorRoute";

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AlumniGuidance from "./pages/AlumniGuidance";
import UploadNotes from "./pages/UploadNotes";
import ProjectGuidance from "./pages/ProjectGuidance";
import YearRoadmap from "./pages/YearRoadmap";
import StudyMaterialSharing from "./pages/StudyMaterialSharing";
import SeniorDashboard from "./pages/SeniorDashboard";
import InterviewPreparation from "./pages/InterviewPreparation";
import ExamPreparation from "./pages/ExamPreparation";
import SkillEnhancement from "./pages/SkillEnhancement";
import StartupHiring from "./pages/StartupHiring";
import Dashboard from "./pages/dashboard";

// Loading component for initial app load
const AppLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto mb-6"></div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">EDVORA</h2>
      <p className="text-gray-600">Checking authentication...</p>
    </div>
  </div>
);

// Main app content
const AppContent = () => {
  const { loading } = useAuth();

  if (loading) {
    return <AppLoader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/alumni-guidance" 
            element={
              <ProtectedRoute>
                <AlumniGuidance />
              </ProtectedRoute>
            } 
          />
            <Route 
              path="/upload" 
              element={
                <SeniorRoute>
                  <UploadNotes />
                </SeniorRoute>
              } 
            />
            <Route 
              path="/project-guidance" 
              element={
                <ProtectedRoute>
                  <ProjectGuidance />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/study-materials" 
              element={
                <ProtectedRoute>
                  <StudyMaterialSharing />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/year-roadmap" 
              element={
                <ProtectedRoute>
                  <YearRoadmap />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/interview-preparation" 
              element={
                <ProtectedRoute>
                  <InterviewPreparation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/exam-preparation" 
              element={
                <ProtectedRoute>
                  <ExamPreparation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/skill-enhancement" 
              element={
                <ProtectedRoute>
                  <SkillEnhancement />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/startup-hiring" 
              element={
                <ProtectedRoute>
                  <StartupHiring />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/senior-dashboard" 
              element={
                <SeniorRoute>
                  <SeniorDashboard />
                </SeniorRoute>
              } 
            />
        </Routes>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
