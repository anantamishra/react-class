import React, { useState, useEffect } from "react";

export const QuizGpt = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        const formattedQuestions = data.results.map((question) => ({
          question: question.question,
          answers: [
            ...question.incorrect_answers,
            question.correct_answer,
          ].sort(() => Math.random() - 0.5),
          correct_answer: question.correct_answer,
        }));
        setQuestions(formattedQuestions);
      });
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {showScore ? (
          <Score score={score} totalQuestions={questions.length} />
        ) : (
          <QuizComponent
            question={questions[currentQuestionIndex]}
            handleAnswerClick={handleAnswerClick}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        )}
      </div>
    </div>
  );
};

const QuizComponent = ({
  question,
  handleAnswerClick,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Question {questionNumber}/{totalQuestions}
      </h2>
      <p className="mb-6">{question?.question}</p>
      <div className="flex flex-col gap-3">
        {question?.answers.map((answer, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() =>
              handleAnswerClick(answer === question.correct_answer)
            }
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Quiz Completed!</h2>
      <p className="mt-4 text-lg">
        You scored {score} out of {totalQuestions}.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Try Again
      </button>
    </div>
  );
};
