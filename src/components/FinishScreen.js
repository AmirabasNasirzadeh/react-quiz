function FinishScreen({ points, maxPosiblePoints, highScore, dispatch }) {
  let emoji;
  const precentage = (points / maxPosiblePoints) * 100;
  if (precentage === 100) emoji = "🥇";
  if (precentage >= 70 && precentage < 100) emoji = "🥈";
  if (precentage >= 40 && precentage < 70) emoji = "🥉";
  if (precentage >= 1 && precentage < 40) emoji = "❌";
  if (precentage === 0) emoji = "🤬";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPosiblePoints} ({Math.ceil(precentage)}
        %)
      </p>
      <p className="highscore">(Highscore: {highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
