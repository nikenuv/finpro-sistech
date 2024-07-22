import React from "react";

const SidebarTest = ({ questions, selectedQuestion, setSelectedQuestion, answers }) => {
  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const markedQuestions = 0;
  const unansweredQuestions = totalQuestions - answeredQuestions;

  return (
    <div className="bg-[#D8758280] p-4 h-screen w-56">
      <div className="mb-4 font-bold text-lg">Soal</div>
      <div className="grid grid-cols-2 gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            className={`p-2 rounded-lg ${
              selectedQuestion === index ? "bg-green-500" : answers[question.id] ? "bg-green-400" : "bg-green-200"
            }`}
            onClick={() => setSelectedQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div>Sudah dijawab: {answeredQuestions}</div>
        <div>Ditandai: {markedQuestions}</div>
        <div>Belum dijawab: {unansweredQuestions}</div>
      </div>
    </div>
  );
};

export default SidebarTest;
