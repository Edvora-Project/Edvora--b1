import express from "express";
import auth from "../middleware/auth.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";
import { createNote, getNotes } from "../controllers/notesController.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'edvora_notes',
    resource_type: 'auto'
  }
});
const upload = multer({ storage });

router.post('/', auth, upload.single('file'), createNote);
router.get('/', getNotes);

export default router;
