import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log('Mongo connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

app.get('/', (req,res) => res.send('Edvora backend running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server ${PORT}`));
