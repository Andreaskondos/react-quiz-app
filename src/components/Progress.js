function Progress({ index, maxScore, numQuestions, points, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxScore}
      </p>
    </header>
  );
}

export default Progress;
