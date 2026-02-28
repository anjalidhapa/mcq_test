import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import seedQuestions from "./seeders/mcq.js";

// config
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

// inserting 50 MCQs
// ! NOTE: run only once
// seedQuestions();

const app = express();

app.get("/", (req, res) => {
  res.send("api working");
});

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/students", studentRoutes);
app.use("/api/test", testRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
