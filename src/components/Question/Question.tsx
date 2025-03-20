import React, { JSX } from "react";
import { Question as QuestionType } from "../../types";
import { Button } from "../Button/Button";

export function Question({
  question,
}: {
  question: QuestionType;
}): JSX.Element {
  const [answerId, setAnswerId] = React.useState<number | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit, valið svar:", answerId);
  };

  const myButton = { text: "Svara" };

  return (
    <div>
      <h2>{question.text}</h2>
      <form onSubmit={onSubmit}>
        <ul>
          {question.answers.map((answer) => {
            const isCorrect = answerId === answer.id && answer.correct;
            return (
              <li key={answer.id}>
                <input
                  type="radio"
                  name="answer"
                  value={answer.id}
                  onChange={() => setAnswerId(answer.id)}
                />
                {answer.text}—{isCorrect ? "RÉTT" : "RANGT"}
              </li>
            );
          })}
        </ul>
        <Button button={myButton}></Button>
      </form>
    </div>
  );
}
