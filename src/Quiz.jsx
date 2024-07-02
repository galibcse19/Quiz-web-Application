import React, { useState } from 'react';
import Question from './Question.jsx';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  {
    question: 'What is 10 * 2?',
    options: ['20', '4', '5', '6'],
    answer: '20',
  },
  {
    question: 'What is 20 / 2?',
    options: ['3', '4', '10', '6'],
    answer: '10',
  },
  // Add more questions as needed
];

const Quiz = ({ onFinish }) => {
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));

  const handleAnswerChange = (index, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedOption;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === quizData[index].answer ? 1 : 0);
    }, 0);
    onFinish(score);
  };

  return (
    <div>
      {quizData.map((questionData, index) => (
        <Question
          key={index}
          data={questionData}
          selectedOption={answers[index]}
          onAnswerChange={(option) => handleAnswerChange(index, option)}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
