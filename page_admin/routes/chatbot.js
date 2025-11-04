import express from "express";
import { chat } from "../controllers/chatbotController.js";
const router = express.Router();

router.get("/", (req, res) => res.render("chatbot/chat"));
router.post("/ask", chat);

export default router;