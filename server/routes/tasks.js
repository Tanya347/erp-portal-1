import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createTask);
router.put("/:id", verifyAdmin, updateTask);
router.delete("/:id", verifyAdmin, deleteTask);
router.get("/:id", verifyUser, getTask);
router.get("/", verifyAdmin, getTasks);

export default router;
