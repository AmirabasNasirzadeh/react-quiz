import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, countQuestions, points, maxPosiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={countQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {countQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPosiblePoints} Points
      </p>
    </header>
  );
}

export default Progress;
