import React from "react";

const RasioCard = ({ title, onclick }) => {
  return (
    <div
      onclick={onclick}
      className="w-[180px] h-[100px] border border-[#E6B2C0] rounded-2xl flex flex-col items-center justify-center text-center p-4"
    >
      <p className="text-2xl font-bold">+</p>
      <p>{title}</p>
    </div>
  );
};

export default RasioCard;
