import { useState, useEffect } from "react";

export default function LessonPrompt() {
 
  const lessons = [
    { task: "Write a Python program to print your name.", solution: "print('Your Name')" },
    { task: "Write a Python program to add two numbers.", solution: "a = 5\nb = 3\nprint(a + b)" },
    { task: "Write a Python program to subtract two numbers.", solution: "a = 10\nb = 5\nprint(a - b)" },
    { task: "Write a Python program to multiply two numbers.", solution: "a = 4\nb = 6\nprint(a * b)" },
    { task: "Write a Python program to divide two numbers.", solution: "a = 8\nb = 4\nprint(a / b)" },
  ];

 
  const [randomLesson, setRandomLesson] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    
    const selectedLesson = lessons[Math.floor(Math.random() * lessons.length)];
    setRandomLesson(selectedLesson);
  }, [feedback]);

  // Normalize and handle answer submission
  const handleSubmit = () => {
    // Normalize user answer and solution by trimming whitespace, and removing newlines and extra spaces
    const normalizeText = (text) => text.replace(/\s+/g, " ").trim();

    const normalizedUserAnswer = normalizeText(userAnswer);
    const normalizedSolution = normalizeText(randomLesson.solution);

    // Compare the normalized answer with the solution
    if (normalizedUserAnswer === normalizedSolution) {
      setFeedback("Correct! Well done.");
    } else {
      setFeedback("Oops! Try again.");
    }

    // Reset the input field after submission
    setUserAnswer("");
  };

  // If randomLesson is not available yet, show a loading state
  if (!randomLesson) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold text-primary">Python Lesson</h2>
      <p className="mt-2 text-lg text-secondary">{randomLesson.task}</p>

      {/* User input for answer */}
      <textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Write your Python code here..."
        className="mt-4 w-full p-2 border border-gray-300 rounded-md"
        rows="4"
      />

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-yellow-500"
      >
        Submit Answer
      </button>

      {/* Feedback message */}
      {feedback && (
        <div className={`mt-4 text-lg ${feedback.startsWith("Correct") ? "text-green-500" : "text-red-500"}`}>
          {feedback}
        </div>
      )}
    </div>
  );
}



