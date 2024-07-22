"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const GoalsSelection = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const router = useRouter();

  const goals = [
    { days: 3, description: 'Baby steps', slug: 'example-roadmap' },
    { days: 7, description: 'Strong start', slug: 'example-roadmap' },
    { days: 14, description: 'Clearly committed', slug: 'example-roadmap' },
    { days: 30, description: 'Unstoppable Streak', slug: 'example-roadmap' },
  ];

  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal.days);
    router.push(`/roadmap/${goal.slug}`);
  };

  return (
    <div className="flex flex-col items-center my-32 h-screen bg-white">
      <div className="bg-white p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Pilih Goals Kamu</h1>
        <div className="flex flex-col border-2 p-2 border-black rounded-xl">
          {goals.map((goal) => (
            <button
              key={goal.days}
              onClick={() => handleGoalSelection(goal)}
              className={`py-2 px-4 text-left ${
                selectedGoal === goal.days ? 'bg-primary-1 text-white' : ''
              }`}
            >
              <div className="flex justify-between items-center ">
                <span>{goal.days} days</span>
                <span>{goal.description}</span>
                {selectedGoal === goal.days && (
                  <span className="ml-2 text-xl">&#x2713;</span>
                )}
              </div>
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-gray-500">
          Kamu akan 5x lebih cepat menyelesaikan course
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <GoalsSelection />
    </div>
  );
}
