import express from "express"
import {
    createUpdate,
    deleteUpdate,
    getUpdate,
    getUpdates,
    updateUpdate,
} from "../controllers/updates.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
// router variable
const router = express.Router();


router.post("/", verifyAdmin, createUpdate);
router.put("/:id", verifyAdmin, updateUpdate);
router.delete("/:id", verifyAdmin, deleteUpdate);
router.get("/:id", verifyUser, getUpdate);
router.get("/", verifyAdmin, getUpdates);


export default router;