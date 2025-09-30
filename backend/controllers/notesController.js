import Note from "../models/note.js";

export const createNote = async (req, res) => {
  try {
    const { title, description, subject, semester } = req.body;
    if (!req.file?.path) return res.status(400).json({ msg: 'File required' });

    const note = new Note({
      title,
      description,
      subject,
      semester,
      fileUrl: req.file.path,
      uploadedBy: req.user._id
    });
    await note.save();
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Upload failed' });
  }
};

export const getNotes = async (req, res) => {
  const notes = await Note.find().populate('uploadedBy', 'name year branch');
  res.json(notes);
};
