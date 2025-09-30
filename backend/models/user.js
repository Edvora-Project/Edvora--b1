import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["junior","senior","alumni","admin"], default: "junior" },
  branch: String,
  year: String,
  skills: [String],
  verified: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
