"use client";
import React, { useRef, useState, useEffect } from "react";
import ProgressCard from "./ProgressCard";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const Progress = () => {
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

  const classes = [
    {
      imageSrc: "/class1.jpeg",
      moduleName: "Modul 1",
      subject: "Penalaran Kuantitatif",
      progress: "1/3",
    },
    {
      imageSrc: "/class2.jpeg",
      moduleName: "Modul 2",
      subject: "Ejaan",
      progress: "2/3",
    },
    {
      imageSrc: "/class3.jpeg",
      moduleName: "Modul 3",
      subject: "Makna Kata",
      progress: "2/3",
    },
    {
      imageSrc: "/class1.jpeg",
      moduleName: "Modul 4",
      subject: "Penalaran Kuantitatif",
      progress: "1/3",
    },
    {
      imageSrc: "/class2.jpeg",
      moduleName: "Modul 5",
      subject: "Ejaan",
      progress: "1/3",
    },
  ];

  return (
    <section className="progress mx-10 px-2">
      <h3 className="mt-10 mb-5 font-bold">Lanjutkan Kelasmu</h3>
      <div
        className="relative"
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
          className="progress-wrapper flex gap-4 overflow-x-auto whitespace-nowrap scroll-smooth"
        >
          {classes.map((classInfo, index) => (
            <ProgressCard
              key={index}
              imageSrc={classInfo.imageSrc}
              moduleName={classInfo.moduleName}
              subject={classInfo.subject}
              progress={classInfo.progress}
              className="inline-block"
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

export default Progress;
