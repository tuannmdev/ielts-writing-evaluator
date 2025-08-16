import express from 'express';
import { evaluateIeltsWriting } from '../controllers/ieltsController.js';

const router = express.Router();

// POST /api/ielts/evaluate - Evaluate IELTS writing
router.post('/evaluate', evaluateIeltsWriting);

export { router };