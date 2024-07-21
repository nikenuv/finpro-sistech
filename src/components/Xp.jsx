"use client";
import React, { useRef, useState, useEffect } from 'react';
import XpCard from './XpCard';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const xpData = [
  {
    imageSrc: '/xaviera.jpeg',
    title: 'Live Teaching: Xaviera Putri',
    description: 'Class, launched less than ...',
    views: '251,232',
  },
  {
    imageSrc: '/xaviera.jpeg',
    title: 'Live Teaching: Xaviera Putri',
    description: 'Class, launched less than ...',
    views: '251,232',
  },
  {
    imageSrc: '/xaviera.jpeg',
    title: 'Live Teaching: Xaviera Putri',
    description: 'Class, launched less than ...',
    views: '251,232',
  },
  {
    imageSrc: '/xaviera.jpeg',
    title: 'Live Teaching: Xaviera Putri',
    description: 'Class, launched less than ...',
    views: '251,232',
  },
  {
    imageSrc: '/xaviera.jpeg',
    title: 'Live Teaching: Xaviera Putri',
    description: 'Class, launched less than ...',
    views: '251,232',
  },
];

const Xp = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [hovering, setHovering] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (sliderRef.current) {
        setShowScroll(
          sliderRef.current.scrollWidth > sliderRef.current.clientWidth
        );
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    
    return () => window.removeEventListener("resize", checkScroll);
  }, [sliderRef.current]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  return (
    <section className="xp mx-10 px-2">
      <h3 className="mt-10 mb-5 font-bold">Tukarkan XP</h3>
      <div className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showScroll && (
          <button
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full scroll-button ${hovering ? 'show' : ''}`}
            onClick={scrollLeft}
          >
            <IconArrowLeft size={20} />
          </button>
        )}
        <div
          ref={sliderRef}
          className="xp-wrapper flex gap-5 overflow-x-hidden whitespace-nowrap scroll-smooth"
        >
          {xpData.map((item, index) => (
            <XpCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              views={item.views}
            />
          ))}
        </div>
        {showScroll && (
          <button
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full scroll-button ${hovering ? 'show' : ''}`}
            onClick={scrollRight}
          >
            <IconArrowRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Xp;
