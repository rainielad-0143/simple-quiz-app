import React, { useEffect, useState } from "react";
import Choices from "./Choices";
import Error from "./Error";
import Score from "./Score";
import "../App.css";

export default function Questions({ questions }) {
  const [error, setError] = useState("");

  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("SCORE");
    return saved ? JSON.parse(saved) : null;
  });

  const [selectedAnswer, setSelectedAnswer] = useState(() => {
    const saved = localStorage.getItem("ANSWERS");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("ANSWERS", JSON.stringify(selectedAnswer));
  }, [selectedAnswer]);

  const handleChange = (questionId, choice) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionId]: choice,
    }));
    setError("");
  };

  const handleSubmit = () => {
    const unanswered = questions.some(
      (question) => !selectedAnswer[question.id],
    );

    if (unanswered) {
      setError("Please answer all questions before submitting!");
      return;
    }

    let newScore = 0;

    questions.forEach((question) => {
      if (selectedAnswer[question.id] === question.answer) {
        newScore++;
      }
    });

    setScore(newScore);
    localStorage.setItem("SCORE", JSON.stringify(newScore));
  };

  const handleReset = () => {
    setSelectedAnswer({});
    setScore(null);
    setError("");

    localStorage.removeItem("ANSWERS");
    localStorage.removeItem("SCORE");
  };

  return (
    <div>
      {questions.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <p style={{ marginBottom: "15px" }}>
            <strong>{item.question}</strong>
          </p>
          <Choices
            questionId={item.id}
            choices={item.choices}
            selectedAnswer={selectedAnswer[item.id]}
            onSelect={(choice) => handleChange(item.id, choice)}
          />
        </div>
      ))}

      {error && <Error error={error} />}

      <button className="counter" onClick={handleSubmit}>
        Submit
      </button>

      <button className="counter" onClick={handleReset}>
        Reset
      </button>

      {score !== null && <Score score={score} questions={questions} />}
    </div>
  );
}
