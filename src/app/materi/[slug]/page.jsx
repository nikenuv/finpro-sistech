import React from 'react';
import { redirect } from 'next/navigation';
import MateriPage from '@/components/MateriPage';

const lesson = [
  {
    slug: 'penalaran-deduktif',
    icon: '/icon1.png',
    title: 'Penalaran Deduktif',
    progress: 15,
  },
  {
    slug: 'penalaran-induktif',
    icon: '/icon2.png',
    title: 'Penalaran Induktif',
    progress: 5,
  },
  {
    slug: 'penalaran-kuantitatif',
    icon: '/icon3.png',
    title: 'Penalaran Kuantitatif',
    progress: 95,
  },
];

const LessonPage = ({ params }) => {
  const { slug } = params;

  if (!slug) return null;

  const material = lesson.find((lesson) => lesson.slug === slug);

  return (
    <div>
        <MateriPage lesson={material} />
    </div>
  );
};

export default LessonPage;
