import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as ieltsRouter } from './routes/ielts.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ielts', ieltsRouter);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to IELTS Writing Evaluation API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});