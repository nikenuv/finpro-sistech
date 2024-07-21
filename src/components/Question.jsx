import React from "react";
const Question = ({ question }) => {
  return (
    <div>
      <p>{question.text}</p>
      <div className="mt-4">
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="radio" id={`option${index}`} name="option" className="mr-2" />
            <label htmlFor={`option${index}`} className="flex-1 p-2 border rounded-lg">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
