"use client";

import React from 'react';

const Dashboard = () => {
  const skills = [
    { name: 'Kemampuan Penalaran Umum', progress: 25 },
    { name: 'Pengetahuan dan Pemahaman Umum', progress: 10 },
    { name: 'Pemahaman Bacaan dan Menulis', progress: 15 },
    { name: 'Pengetahuan Kuantitatif', progress: 5 },
  ];

  const dailyQuests = [
    { name: 'Quest 1', progress: 2 },
    { name: 'Quest 2', progress: 2 },
    { name: 'Quest 3', progress: 2 },
    { name: 'Quest 4', progress: 2 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="grid grid-cols-3 w-full p-4 gap-4">
        <div className="bg-white shadow-lg p-4">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-gray-300 w-20 h-20 rounded-full mb-4"></div>
            <h2 className="text-xl font-semibold">John Doe</h2>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">25% Completed</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white shadow-lg p-4 flex flex-col items-center">
          <div className="absolute top-4 right-4 flex space-x-4">
            <button className="px-4 py-2 bg-white border rounded">STREAK</button>
            <button className="px-4 py-2 bg-white border rounded">124 XP</button>
          </div>
          <h3 className="text-lg font-semibold mb-4">Milestone 1</h3>
          <div className="relative w-full">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-200 h-full"></div>
            <div className="flex flex-col items-center">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Leaderboard</h3>
            <p>You're ranked #143</p>
            <p className="text-gray-500">Rangkingmu belum aman, yuk tingkatkan</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View All</button>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Daily Quest</h3>
            {dailyQuests.map((quest, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Icon</span>
                  <span>{quest.progress}/10</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(quest.progress / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
