import express from "express";
import auth from "../middleware/auth.js";
import { getRandomTest, submitTest } from "../controllers/testController.js";

const router = express.Router();
router.get("/", auth, getRandomTest);
router.post("/submit", auth, submitTest);

export default router;
