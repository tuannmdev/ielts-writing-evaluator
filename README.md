# IELTS Writing Evaluation API

API RESTful đơn giản sử dụng Node.js và OpenAI để chấm điểm bài viết IELTS.

## Cài đặt

1. Clone repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Cài đặt các thư viện:

```bash
npm install
```

3. Tạo file .env và thêm API key của OpenAI:

```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```

## Chạy ứng dụng

```bash
# Chạy ở chế độ development với nodemon
npm run dev

# Hoặc chạy ở chế độ production
npm start
```

Server sẽ chạy tại `http://localhost:3000`

## API Endpoints

### Chấm điểm bài viết IELTS

```
POST /api/ielts/evaluate
```

#### Request Body

```json
{
  "essay": "Nội dung bài viết IELTS cần chấm điểm",
  "taskType": "task1", // hoặc "task2"
  "question": "Đề bài IELTS"
}
```

#### Response

```json
{
  "overallBand": 7.0,
  "criteria": {
    "taskAchievement": {
      "score": 7.0,
      "feedback": "Phản hồi chi tiết về Task Achievement",
      "examples": ["Ví dụ 1", "Ví dụ 2"],
      "suggestions": ["Gợi ý cải thiện 1", "Gợi ý cải thiện 2"]
    },
    "coherenceAndCohesion": {
      "score": 7.0,
      "feedback": "Phản hồi chi tiết về Coherence and Cohesion",
      "examples": ["Ví dụ 1", "Ví dụ 2"],
      "suggestions": ["Gợi ý cải thiện 1", "Gợi ý cải thiện 2"]
    },
    "lexicalResource": {
      "score": 7.0,
      "feedback": "Phản hồi chi tiết về Lexical Resource",
      "examples": ["Ví dụ 1", "Ví dụ 2"],
      "suggestions": ["Gợi ý cải thiện 1", "Gợi ý cải thiện 2"]
    },
    "grammaticalRangeAndAccuracy": {
      "score": 7.0,
      "feedback": "Phản hồi chi tiết về Grammatical Range and Accuracy",
      "examples": ["Ví dụ 1", "Ví dụ 2"],
      "suggestions": ["Gợi ý cải thiện 1", "Gợi ý cải thiện 2"]
    }
  },
  "summary": "Tóm tắt đánh giá tổng thể"
}
```

## Test với Postman

1. Mở Postman
2. Tạo request POST mới đến `http://localhost:3000/api/ielts/evaluate`
3. Trong tab Body, chọn raw và JSON
4. Nhập request body theo định dạng ở trên
5. Gửi request và xem kết quả

## Lưu ý

- API sử dụng model GPT-4o của OpenAI để đánh giá bài viết
- Đảm bảo API key của OpenAI có đủ credit để sử dụng model GPT-4o
- Kết quả đánh giá có thể khác với đánh giá của giám khảo IELTS thực tế