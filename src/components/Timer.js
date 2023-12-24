import { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, numQuestions } = useQuiz();

  const SECS_PER_QUESTION = 30;
  const [timeLeft, setTimeLeft] = useState(numQuestions * SECS_PER_QUESTION);
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  useEffect(
    function () {
      const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);

      if (timeLeft === 0) dispatch({ type: "finish" });
      return () => clearInterval(id);
    },
    [timeLeft, dispatch]
  );
  return (
    <p className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </p>
  );
}

export default Timer;
