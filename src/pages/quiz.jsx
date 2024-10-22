import React, { useState, useEffect } from "react";

export function Quiz() {
  const [quizData, setQuizData] = useState([]); // State to store quiz data
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&category=18&type=multiple"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quiz");
        }
        const data = await response.json();
        setQuizData(data.results); // Store the quiz questions in state
      } catch (err) {
        setError(err.message); // Catch and set any error
      }
    };

    fetchQuiz();
  }, []); // Empty dependency array, so the effect runs once on component mount

  if (error) {
    return <div>Error: {error}</div>; // Display error if it occurs
  }

  return (
    <div>
      <h1>Quiz</h1>
      {quizData.length > 0 ? (
        <ul>
          {quizData.map((quiz, index) => (
            <li key={index}>
              <p>
                <strong>{quiz.question}</strong>
              </p>
              <ul>
                {[...quiz.incorrect_answers, quiz.correct_answer].map(
                  (answer, i) => (
                    <li key={i}>{answer}</li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quiz data available</p>
      )}
    </div>
  );
}
