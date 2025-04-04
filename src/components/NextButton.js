import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, countQuestions, index } = useQuiz();

  if (answer === null) return null;

  if (index < countQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === countQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
