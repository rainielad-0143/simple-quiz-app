import React, { useState } from "react";
import Choices from "./Choices";
import Error from "./Error";
import Score from "./Score";

export default function Questions({ questions }) {
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [score, setScore] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (questionId, choice) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionId]: choice,
    }));
  };

  const handleSubmit = () => {
    const unanswered = questions.some(
      (question) => !selectedAnswer[question.id],
    );

    if (unanswered) {
      setError("Please answer all question before submitting!");
      return;
    }

    setError("");

    let newScore = 0;
    questions.forEach((question) => {
      if (selectedAnswer[question.id] === question.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
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

      <Error error={error} />

      <button className="counter" onClick={handleSubmit}>
        Submit
      </button>

      <Score score={score} questions={questions} />
    </div>
  );
}
