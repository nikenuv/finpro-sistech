import React from "react";
import Image from "next/image";
import { IconCalculator, IconAlarm } from "@tabler/icons-react";
import Link from "next/link";

const RecommendationCard = ({
  id,
  imageSrc,
  title,
  description,
  subject,
  duration,
  instructorImg,
  instructorName,
  oldPrice,
  newPrice,
}) => {
  return (
    <Link href={`/recommendations/${id}`} passHref>
      <div className="card w-[370px] h-[370px] mb-5 px-5 py-5 bg-[#E6B2C0] rounded-2xl cursor-pointer">
        <Image
          className="rounded-3xl"
          width={350}
          height={150}
          src={imageSrc}
          alt="progress-class"
        />
        <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
          <IconCalculator />
          <p>{subject}</p>
          <IconAlarm />
          <p>{duration}</p>
        </div>
        <h1 className="mt-2 font-bold text-[24px] text-[#252641]">{title}</h1>
        <h3 className="text-[16px] text-[#696984]">{description}</h3>
        <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
          <div className="flex items-center gap-5">
            <Image
              className="rounded-full"
              width={45}
              height={45}
              src={instructorImg}
              alt={instructorName}
            />
            <p className="text-[16px]">{instructorName}</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="italic line-through text-[20px]">{oldPrice}</p>
            <p className="font-extrabold text-[24px]">{newPrice}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecommendationCard;
