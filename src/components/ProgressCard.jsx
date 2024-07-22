import React from "react";
import Image from "next/image";

const ProgressCard = ({ imageSrc, moduleName, subject, progress }) => {
  return (
    <div className="card flex flex-col sm:flex-row items-center w-full max-w-xs p-4 bg-[#E6B2C0] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        className="rounded-full"
        width={70}
        height={70}
        src={imageSrc}
        alt={`progress-${moduleName}`}
      />
      <div className="ml-4 flex-1">
        <h4 className="text-lg font-semibold mb-1 truncate">{moduleName}</h4>
        <p className="text-sm text-gray-700 mb-3 truncate">{subject}</p>
        <div className="flex items-center justify-between">
          <div className="flex-1 bg-gray-200 rounded-full border-white border-[0.5px] h-2 relative">
            <div
              className="bg-[#EAB595] h-full rounded-full absolute top-0 left-0"
              style={{ width: `${(parseInt(progress) / 3) * 100}%` }}
            ></div>
          </div>
          <p className="ml-3 text-xs text-gray-600 truncate">{progress} Materi</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
