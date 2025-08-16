import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Evaluate IELTS writing using OpenAI
 * @param {string} essay - The essay content to evaluate
 * @param {string} taskType - The IELTS task type (task1 or task2)
 * @param {string} question - The question or prompt given for the essay
 * @returns {Object} - Evaluation results
 */
export const evaluateWriting = async (essay, taskType, question) => {
  try {
    // Determine task-specific instructions
    const taskInstructions = taskType === 'task1' 
      ? 'This is an IELTS Academic Task 1 response. Evaluate it based on Task Achievement, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy.'
      : 'This is an IELTS Academic Task 2 response. Evaluate it based on Task Response, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy.';
    
    // Create system message with evaluation criteria
    const systemMessage = `
      You are an expert IELTS examiner. ${taskInstructions}
      
      Provide a detailed evaluation with the following structure:
      1. Overall Band Score (0-9, can use .5 increments)
      2. Individual scores for each criterion (0-9, can use .5 increments):
         - ${taskType === 'task1' ? 'Task Achievement' : 'Task Response'}
         - Coherence and Cohesion
         - Lexical Resource
         - Grammatical Range and Accuracy
      3. Detailed feedback for each criterion (strengths and areas for improvement)
      4. Specific examples from the essay to support your evaluation
      5. Suggestions for improvement
      
      Format your response as a JSON object with the following structure:
      {
        "overallBand": number,
        "criteria": {
          "${taskType === 'task1' ? 'taskAchievement' : 'taskResponse'}": {
            "score": number,
            "feedback": "string",
            "examples": ["string", "string"],
            "suggestions": ["string", "string"]
          },
          "coherenceAndCohesion": {
            "score": number,
            "feedback": "string",
            "examples": ["string", "string"],
            "suggestions": ["string", "string"]
          },
          "lexicalResource": {
            "score": number,
            "feedback": "string",
            "examples": ["string", "string"],
            "suggestions": ["string", "string"]
          },
          "grammaticalRangeAndAccuracy": {
            "score": number,
            "feedback": "string",
            "examples": ["string", "string"],
            "suggestions": ["string", "string"]
          }
        },
        "summary": "string"
      }
    `;

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Using GPT-4o for best results, can be changed to other models
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: `Question: ${question}\n\nEssay: ${essay}` }
      ],
      response_format: { type: "json_object" }
    });

    // Parse and return the evaluation
    const evaluation = JSON.parse(response.choices[0].message.content);
    return evaluation;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw new Error(`OpenAI API error: ${error.message}`);
  }
};