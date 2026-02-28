import express from "express";
import auth from "../middleware/auth.js";
import {
  registerAdmin,
  loginAdmin,
  getAllResults,
  addQuestion,
  deleteQuestion,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/results", auth, getAllResults);
router.post("/questions", auth, addQuestion);
router.delete("/questions/:id", auth, deleteQuestion);

export default router;
