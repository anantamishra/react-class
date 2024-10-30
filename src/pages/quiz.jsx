import React, { useState, useEffect } from "react";

export function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&category=18&type=multiple"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quiz");
        }
        const data = await response.json();
        setQuizData(data.results);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchQuiz();
  }, []);

  useEffect(() => {
    if (quizData.length > 0) {
      shuffleAnswers();
    }
  }, [quizData, currentQuestionIndex]);

  function shuffleAnswers() {
    const currentQuestion = quizData[currentQuestionIndex];
    const answers = [
      ...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer,
    ].sort(() => Math.random() - 0.5);
    setShuffledAnswers(answers);
  }

  function handleAnswerSelection(answer) {
    setSelectedAnswer(answer);
  }

  function handleNextQuestion() {
    if (selectedAnswer === quizData[currentQuestionIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
    } else {
      setIsQuizComplete(true);
    }
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (isQuizComplete) {
    return (
      <div className="flex  w-full justify-center items-center">
        <div className="container flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Quiz Complete!</h2>
          <p className="text-xl">
            Your Score: <span className="font-bold">{score}</span> /{" "}
            {quizData.length}
          </p>
        </div>
      </div>
    );
  }

  if (quizData.length === 0) {
    return <p className="text-center text-gray-500">Loading quiz...</p>;
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="flex flex-col container max-w-xl h-full p-6 bg-white rounded-lg shadow-md border">
        <h1 className="text-3xl font-bold text-center mb-6">Quiz</h1>
        <div>
          <div className="text-lg font-medium mb-4">
            Question {currentQuestionIndex + 1}:
            <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
          </div>
          <ul className="space-y-2 mb-6">
            {shuffledAnswers.map((answer, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswerSelection(answer)}
                  className={`w-full h-12 px-4 rounded-lg text-left transition-colors 
                ${
                  selectedAnswer === answer
                    ? "border-2 border-blue-500 bg-blue-50 shadow-md"
                    : "bg-gray-100 hover:bg-blue-100"
                }`}
                >
                  <p dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors 
          ${
            selectedAnswer
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          >
            {currentQuestionIndex < quizData.length - 1
              ? "Next Question"
              : "Finish Quiz"}
          </button>
        </div>
      </div>
    </div>
  );
}
