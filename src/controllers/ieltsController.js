import { evaluateWriting } from '../services/openaiService.js';

/**
 * Evaluate IELTS writing submission
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const evaluateIeltsWriting = async (req, res) => {
  try {
    const { essay, taskType, question } = req.body;
    
    // Validate request body
    if (!essay) {
      return res.status(400).json({ error: 'Essay content is required' });
    }
    
    if (!taskType || !['task1', 'task2'].includes(taskType)) {
      return res.status(400).json({ error: 'Valid taskType is required (task1 or task2)' });
    }
    
    if (!question) {
      return res.status(400).json({ error: 'Question prompt is required' });
    }
    
    // Call OpenAI service to evaluate the writing
    const evaluation = await evaluateWriting(essay, taskType, question);
    
    // Return the evaluation results
    return res.status(200).json(evaluation);
  } catch (error) {
    console.error('Error evaluating IELTS writing:', error);
    return res.status(500).json({ 
      error: 'An error occurred while evaluating the writing',
      message: error.message 
    });
  }
};