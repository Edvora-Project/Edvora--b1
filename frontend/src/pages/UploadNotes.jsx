import React, {useEffect, useState} from "react";
import API from "../api";

export default function Notes(){
  const [notes,setNotes] = useState([]);
  useEffect(()=> {
    API.get('/api/notes').then(res => setNotes(res.data)).catch(console.error);
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Notes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(n=>(
          <div key={n._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{n.title}</h3>
            <p className="text-sm text-gray-600">{n.subject} • {n.semester}</p>
            <p className="text-xs text-gray-500 mt-2">By: {n.uploadedBy?.name || 'Unknown'}</p>
            <a href={n.fileUrl} target="_blank" rel="noreferrer" className="text-blue-600 inline-block mt-3">Open</a>
          </div>
        ))}
      </div>
    </div>
  );
}
