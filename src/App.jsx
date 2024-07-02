import React, { useState } from 'react';
import Quiz from './Quiz.jsx';
import Result from './Result.jsx';
import './App.css'

const App = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleFinishQuiz = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
  };

  return (
    <div>
      {showResult ? (
        <Result score={score} />
      ) : (
        <Quiz onFinish={handleFinishQuiz} />
      )}
    </div>
  );
};

export default App;
