import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  subject: String,
  semester: String,
  fileUrl: { type: String, required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('Note', NoteSchema);
