import React from "react";

export default function Choices({
  questionId,
  choices,
  selectedAnswer,
  onSelect,
}) {
  return (
    <div>
      {choices.map((choice, index) => (
        <label key={index} style={{ display: "block", cursor: "pointer" }}>
          <input
            type="radio"
            name={`question-${questionId}`}
            value={choice}
            checked={selectedAnswer === choice}
            onChange={() => onSelect(choice)}
            style={{ margin: "10px" }}
          />
          {choice}
        </label>
      ))}
    </div>
  );
}
