import express from 'express';
import { askGemini, updateApiKey } from '../controllers/aiController.js';

const router = express.Router();

// Route to handle AI requests
router.post("/chat", askGemini); 
router.post("/update-api-key", updateApiKey);

export default router;
