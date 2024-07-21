import React from "react";

const RasioCard = ({ title, onClick, selection, onDelete }) => {
  return (
    <div className="w-[180px] h-[150px] border border-[#E6B2C0] rounded-2xl flex flex-col items-center justify-center text-center p-4 cursor-pointer relative">
      <p className="text-2xl font-bold" onClick={onClick}>+</p>
      <p>{title}</p>
      {selection && (
        <div className="text-sm mt-2">
          <p><strong>Univ:</strong> {selection.university}</p>
          <p><strong>Jurusan:</strong> {selection.major}</p>
          <button
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default RasioCard;
