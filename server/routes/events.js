import express from "express"
import {
    createEvent,
    deleteEvent,
    getEvent,
    getEvents,
    updateEvent,
} from "../controllers/events.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
// router variable

const router = express.Router();

router.post("/", verifyUser, createEvent);
router.put("/:id", verifyUser, updateEvent);
router.delete("/:id", verifyUser, deleteEvent);
router.get("/:id", verifyUser, getEvent);
router.get("/", verifyUser, getEvents);

export default router;