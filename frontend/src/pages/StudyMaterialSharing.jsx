import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { listNotes } from "../services/noteService";

export default function StudyMaterialSharing() {
  const { user, logout, isSeniorUser } = useAuth();
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(true);

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    const load = async () => {
      try {
        setLoadingNotes(true);
        const docs = await listNotes();
        setNotes(docs);
      } catch (error) {
        console.error("Error loading notes:", error);
      } finally {
        setLoadingNotes(false);
      }
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
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
            Browse Notes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Central place to browse notes and study resources uploaded by seniors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/year-roadmap"
              className="bg-white/80 border border-gray-200 text-gray-800 px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:shadow-md transition-all duration-200"
            >
              View Semester Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Notes Grid - browse-only view, visible to all users */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Notes</h2>

          {loadingNotes ? (
            <p className="text-center text-gray-500">Loading notes...</p>
          ) : notes.length === 0 ? (
            <p className="text-center text-gray-500">No notes uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {notes.map((note) => (
                <div
                  key={note.$id}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {note.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">{note.subject}</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">{note.semester}</span>
                    </div>
                    <p className="text-sm text-gray-500">By: {note.uploadedBy}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Uploaded: {new Date(note.uploadDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={note.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-100"> 2025 EDVORA. All Rights Reserved.</p>
          <p className="text-indigo-100">© 2025 EDVORA. All Rights Reserved.</p>
          <p className="text-indigo-200 mt-2">Contact · Privacy · Terms</p>
        </div>
      </footer>
    </div>
  );
}
