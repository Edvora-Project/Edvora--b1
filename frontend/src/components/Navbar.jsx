import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Edvora</Link>
        <div className="space-x-4">
          <Link to="/notes" className="hover:underline">Notes</Link>
          <Link to="/upload" className="hover:underline">Upload</Link>
          <Link to="/auth" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
}
