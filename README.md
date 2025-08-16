# IELTS Writing Evaluation API

A simple RESTful API using Node.js and OpenAI to score IELTS writing essays.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file and add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```

## Running the Application

```bash
# Run in development mode with nodemon
npm run dev

# Or run in production mode
npm start
```

The server will run at `http://localhost:3000`

## API Endpoints

### Evaluate IELTS Writing

```
POST /api/ielts/evaluate
```

#### Request Body

```json
{
  "essay": "Content of the IELTS essay to be evaluated",
  "taskType": "task1", // or "task2"
  "question": "IELTS question prompt"
}
```

#### Response

```json
{
  "overallBand": 7.0,
  "criteria": {
    "taskAchievement": {
      "score": 7.0,
      "feedback": "Detailed feedback on Task Achievement",
      "examples": ["Example 1", "Example 2"],
      "suggestions": ["Improvement suggestion 1", "Improvement suggestion 2"]
    },
    "coherenceAndCohesion": {
      "score": 7.0,
      "feedback": "Detailed feedback on Coherence and Cohesion",
      "examples": ["Example 1", "Example 2"],
      "suggestions": ["Improvement suggestion 1", "Improvement suggestion 2"]
    },
    "lexicalResource": {
      "score": 7.0,
      "feedback": "Detailed feedback on Lexical Resource",
      "examples": ["Example 1", "Example 2"],
      "suggestions": ["Improvement suggestion 1", "Improvement suggestion 2"]
    },
    "grammaticalRangeAndAccuracy": {
      "score": 7.0,
      "feedback": "Detailed feedback on Grammatical Range and Accuracy",
      "examples": ["Example 1", "Example 2"],
      "suggestions": ["Improvement suggestion 1", "Improvement suggestion 2"]
    }
  },
  "summary": "Overall evaluation summary"
}
```

## Testing with Postman

1. Open Postman
2. Create a new POST request to `http://localhost:3000/api/ielts/evaluate`
3. In the Body tab, select raw and JSON
4. Enter the request body according to the format above
5. Send the request and view the results

## Notes

- Make sure your OpenAI API key is valid and has sufficient quota
- The API uses the GPT-4o model for evaluation
- The evaluation criteria follow the official IELTS Writing assessment criteria