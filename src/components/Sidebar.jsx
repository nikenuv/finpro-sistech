import React from "react";

const Sidebar = ({ questions, selectedQuestion, setSelectedQuestion }) => {
  return (
    <div className="bg-pink-100 p-4 bg-[#D8758280] h-screen w-56">
      <div className="mb-4">Soal</div>
      <div className="grid grid-cols-2 gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            className={`p-2 rounded-lg ${selectedQuestion === index ? "bg-green-500" : "bg-green-200"}`}
            onClick={() => setSelectedQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div>Sudah dijawab: 9</div>
        <div>Ditandai: 1</div>
        <div>Belum dijawab: 1</div>
      </div>
    </div>
  );
};

export default Sidebar;
