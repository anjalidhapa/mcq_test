import Student from "../models/Student.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerStudent = async (req, res) => {
  const { username, studentId, password } = req.body;
  try {
    let student = await Student.findOne({ studentId });
    if (student)
      return res.status(400).json({ message: "Student already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    student = new Student({ username, studentId, password: hashedPassword });
    await student.save();

    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginStudent = async (req, res) => {
  console.log(req.body);
  const { studentId, password } = req.body;
  try {
    const student = await Student.findOne({ studentId });
    if (!student)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: student._id, role: "student" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
