export default function Questions({ questions }) {
  return (
    <div>
      {questions.map((item) => (
        <div key={item.id}>
          <p>
            <strong>{item.question}</strong>
          </p>

          <ul>
            {item.choices.map((choice, index) => (
              <li key={index}>{choice}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
