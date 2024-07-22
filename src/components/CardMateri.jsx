import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CardMateri = ({icon, title, progress }) => {
  return (
    <div className="flex items-center p-4 bg-[#D8758280] rounded-lg shadow-md w-full">
      <div className="flex-shrink-0 mr-4">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="left-0 top-0 h-full bg-[#6B8F71]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="ml-4 text-lg font-bold">{progress}%</div>
    </div>
  );
};

const MateriSection = () => {
  const cardsData = [
    {
      id: 1,
      icon: '/icon1.png',
      title: 'Penalaran Deduktif',
      progress: 15,
    },
    {
      id: 2,
      icon: '/icon2.png',
      title: 'Penalaran Induktif',
      progress: 5,
    },
    {
      id: 3,
      icon: '/icon3.png',
      title: 'Penalaran Kuantitatif',
      progress: 95,
    },
  ];

  return (
    <section className="px-10 py-5 flex justify-center">
      <div className="max-w-screen-lg w-full">
        <h2 className="text-2xl font-bold mb-8">Materi</h2>
        <Link href="/lesson" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {cardsData.map((card, index) => (
            <CardMateri
              key={index}
              icon={card.icon}
              title={card.title}
              progress={card.progress}
            />
          ))}
        </div>
        </Link>
      </div>
    </section>
  );
};

export default MateriSection;
