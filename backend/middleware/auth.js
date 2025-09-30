import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

export default async function auth(req, res, next){
  const header = req.headers['authorization'] || req.headers['Authorization'];
  if (!header?.startsWith('Bearer ')) return res.status(401).json({ msg: 'No token' });
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) return res.status(401).json({ msg: 'Invalid token user' });
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token invalid' });
  }
}
