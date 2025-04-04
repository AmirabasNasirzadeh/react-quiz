import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question({ question }) {
  const { dispatch, answer } = useQuiz();

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
