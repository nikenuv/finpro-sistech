"use client";

import React from "react";
import Image from "next/image";
import { IconArrowLeft } from "@tabler/icons-react";

const roadmapImage = [
  {
    id: 1,
    src: "/materi1.jpeg",
  },
  {
    id: 2,
    src: "/materi2.jpeg",
  },
  {
    id: 3,
    src: "/materi3.jpeg",
  },
  {
    id: 4,
    src: "/materi4.jpeg",
  },
  {
    id: 5,
    src: "/materi5.png",
  },
];

const Roadmap = ({ roadmap }) => {
  if (!roadmap) return null;

  const { name, skills, dailyQuests } = roadmap;

  return (
    <>
      <nav className="bg-[#EFD2C9] pt-6 pb-4 px-6 flex items-end">
        <IconArrowLeft className="my-auto cursor-pointer" />
        <div className="ml-auto flex gap-5">
          <button className="px-4 py-2  border-white bg-[#E6B2C0] border rounded-xl">
            124 XP
          </button>
          <button className="px-4 py-2 border-white bg-[#E6B2C0] border rounded-xl">
            STREAK
          </button>
        </div>
      </nav>
      <div className="flex h-screen bg-[#EFD2C9]">
        <div className="grid grid-cols-3 w-full p-4 gap-4">
          <div className="bg-white shadow-lg p-4">
            <div className="flex flex-col items-center mb-8">
              <Image
                className="rounded-full"
                width={100}
                height={100}
                src="/profile.jpeg"
                alt="profile"
              />
              <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">25% Completed</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <div className="bg-[#7E9680] bg-opacity-50 rounded-full h-2.5">
                    <div
                      className="bg-[#7E9680] h-2.5 rounded-full"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-lg p-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Milestone 1</h3>
            <div className="relative w-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px bg-black h-full"></div>
              <div className="relative flex flex-col items-center">
                {roadmapImage.map((image, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      width={90}
                      height={90}
                      src={image.src}
                      alt="materi"
                      className="rounded-full mb-8 border-black"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Leaderboard</h3>
              <h1 className="font-bold text-xl">You're ranked #143</h1>
              <p className="text-gray-500">
                Rangkingmu belum aman, yuk tingkatkan!
              </p>
              <button className="mt-4 px-4 py-2 bg-[#7E9680] text-white rounded">
                View All
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Daily Quest</h3>
              {dailyQuests.map((quest, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>Icon</span>
                    <span>{quest.progress}/10</span>
                  </div>
                  <div className="bg-[#7E9680] bg-opacity-50 rounded-full h-2.5">
                    <div
                      className="bg-[#7E9680] h-2.5 rounded-full"
                      style={{ width: `${(quest.progress / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
