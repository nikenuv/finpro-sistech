"use client";

import { redirect } from 'next/navigation';
import Roadmap from "@/components/Roadmap";

const roadmaps = [
  {
    slug: "example-roadmap",
    name: "John Doe",
    skills: [
      { name: 'Kemampuan Penalaran Umum', progress: 25 },
      { name: 'Pengetahuan dan Pemahaman Umum', progress: 10 },
      { name: 'Pemahaman Bacaan dan Menulis', progress: 15 },
      { name: 'Pengetahuan Kuantitatif', progress: 5 },
    ],
    dailyQuests: [
      { name: 'Quest 1', progress: 2 },
      { name: 'Quest 2', progress: 2 },
      { name: 'Quest 3', progress: 2 },
      { name: 'Quest 4', progress: 2 },
    ],
  },
];

const RoadmapPage = ({ params }) => {
  const { slug } = params;

  if (!slug) return null;

  const road = roadmaps.find((roadmap) => roadmap.slug === slug);

  if (!road) {
    redirect("/roadmap");
  }

  return (
    <div>
      <Roadmap roadmap={road} />
    </div>
  );
};

export default RoadmapPage;
