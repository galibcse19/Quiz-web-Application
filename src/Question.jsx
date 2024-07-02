import React from 'react';

const Question = ({ data, selectedOption, onAnswerChange }) => {
  const { question, options } = data;

  return (
    <div>
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={question}
              value={option}
              checked={selectedOption === option}
              onChange={() => onAnswerChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
