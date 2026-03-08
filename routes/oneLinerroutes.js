import express from "express";
import {
  createOneLiner,
  getOneLiners,
  getTopics,
} from "../controllers/oneLinerController.js";

const router = express.Router(); // ✅ THIS WAS MISSING

router.post("/new", createOneLiner);

// 🆕 get topics
router.get("/topics", getTopics);

// get questions by type + topic
router.get("/", getOneLiners);

export default router;
