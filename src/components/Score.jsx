import React from "react";

export default function Score({ score, questions }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>
        Your score: {score} / {questions.length}
      </h2>
    </div>
  );
}
