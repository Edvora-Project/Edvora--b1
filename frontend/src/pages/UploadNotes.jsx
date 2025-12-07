import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { listNotes, createNote } from "../services/noteService";
import { storage, NOTES_BUCKET_ID, ID } from "../config/appwrite";

export default function UploadNotes() {
  const { user, logout, isSeniorUser } = useAuth();
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("Computer Science");
  const [semester, setSemester] = useState("1st Semester");
  const [file, setFile] = useState(null);

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

  const handleLogout = async () => {
    await logout();
  };

  const handleUpload = async () => {
    if (!title.trim() || !file) return;

    try {
      setUploading(true);
      setSuccessMessage("");
      // Upload file to Appwrite Storage
      const uploadedFile = await storage.createFile(
        NOTES_BUCKET_ID,
        ID.unique(),
        file
      );

      // Get a view URL for the uploaded file
      const fileUrl = storage.getFileView(NOTES_BUCKET_ID, uploadedFile.$id).href;

      const notePayload = {
        title: title.trim(),
        subject,
        semester,
        uploadedBy: user?.name || user?.email || "Senior",
        uploaderEmail: user?.email || "",
        fileUrl,
        uploadDate: new Date().toISOString(),
      };

      const created = await createNote(notePayload);
      setNotes((prev) => [created, ...prev]);
      setTitle("");
      setSubject("Computer Science");
      setSemester("1st Semester");
      setFile(null);
      setSuccessMessage("Notes uploaded successfully.");
    } catch (error) {
      console.error("Error uploading note:", error);
      const message =
        error?.message && typeof error.message === "string"
          ? error.message
          : "Failed to upload note. Please check your Appwrite 'notes' collection configuration and try again.";
      alert(message);
      setSuccessMessage("");
    } finally {
      setUploading(false);
    }
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
            Study Materials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Access and share study materials, notes, and resources with the EDVORA community
          </p>
        </div>
      </section>

      {/* Upload Section - only visible to seniors */}
      {isSeniorUser && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Upload New Notes</h2>
              <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter note title"
                  className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option>Computer Science</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
                <select
                  className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                >
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>3rd Semester</option>
                  <option>4th Semester</option>
                  <option>5th Semester</option>
                  <option>6th Semester</option>
                  <option>7th Semester</option>
                  <option>8th Semester</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
                  onChange={(e) => setFile(e.target.files[0] || null)}
                  className="w-full p-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 bg-white"
                />
              </div>
            </div>
            <div className="mt-8 text-center space-y-3">
              <button
                onClick={handleUpload}
                disabled={uploading || !title.trim() || !file}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {uploading ? "Uploading..." : "Upload Notes"}
              </button>
              {successMessage && (
                <p className="text-sm text-green-600 font-medium">
                  {successMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Notes Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Available Notes</h2>

          {loadingNotes ? (
            <p className="text-center text-gray-500">Loading notes...</p>
          ) : notes.length === 0 ? (
            <p className="text-center text-gray-500">No notes uploaded yet. Be the first to contribute!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {notes.map(note => (
                <div key={note.$id} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {note.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">{note.subject}</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">{note.semester}</span>
                    </div>
                    <p className="text-sm text-gray-500">By: {note.uploadedBy}</p>
                    <p className="text-xs text-gray-400 mt-1">Uploaded: {new Date(note.uploadDate).toLocaleDateString()}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <a 
                      href={note.fileUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Download
                    </a>
                    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-100"> 2025 EDVORA. All Rights Reserved.</p>
          <p className="text-indigo-100">© 2025 EDVORA. All Rights Reserved.</p>
          <p className="text-indigo-200 mt-2">Contact · Privacy · Terms</p>
        </div>
      </footer>
    </div>
  );
}
