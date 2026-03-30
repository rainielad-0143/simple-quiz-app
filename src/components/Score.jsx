import React from "react";

export default function Score({ score, questions }) {
  return (
    <div className="score">
      <h2>
        Your score: {score} / {questions.length}
      </h2>
    </div>
  );
}
