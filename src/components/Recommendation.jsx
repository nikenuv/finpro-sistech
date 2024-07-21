"use client";
import React, { useRef, useState, useEffect } from "react";
import RecommendationCard from "./RecommendationCard";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const Recommendation = () => {
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
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const recommendations = [
    {
      id: 1,
      imageSrc: "/rekomendasi.png",
      title: "Belajar Kuantitatif",
      description: "konsep dasar bilangan berpangkat",
      subject: "Pengetahuan Kuantitatif",
      duration: "4 jam",
      instructorImg: "/profile.jpeg",
      instructorName: "Lina",
      oldPrice: "$100",
      newPrice: "$80",
    },
    {
      id: 1,
      imageSrc: "/rekomendasi.png",
      title: "Belajar Kuantitatif",
      description: "konsep dasar bilangan berpangkat",
      subject: "Pengetahuan Kuantitatif",
      duration: "4 jam",
      instructorImg: "/profile.jpeg",
      instructorName: "Lina",
      oldPrice: "$100",
      newPrice: "$80",
    },
    {
      id: 1,
      imageSrc: "/rekomendasi.png",
      title: "Belajar Kuantitatif",
      description: "konsep dasar bilangan berpangkat",
      subject: "Pengetahuan Kuantitatif",
      duration: "4 jam",
      instructorImg: "/profile.jpeg",
      instructorName: "Lina",
      oldPrice: "$100",
      newPrice: "$80",
    },
    {
      id: 1,
      imageSrc: "/rekomendasi.png",
      title: "Belajar Kuantitatif",
      description: "konsep dasar bilangan berpangkat",
      subject: "Pengetahuan Kuantitatif",
      duration: "4 jam",
      instructorImg: "/profile.jpeg",
      instructorName: "Lina",
      oldPrice: "$100",
      newPrice: "$80",
    },
    {
      id: 1,
      imageSrc: "/rekomendasi.png",
      title: "Belajar Kuantitatif",
      description: "konsep dasar bilangan berpangkat",
      subject: "Pengetahuan Kuantitatif",
      duration: "4 jam",
      instructorImg: "/profile.jpeg",
      instructorName: "Lina",
      oldPrice: "$100",
      newPrice: "$80",
    },
  ];

  return (
    <section
      className="recommendation mx-10 px-2"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <h3 className="mt-10 mb-5 font-bold">Rekomendasi Untukmu</h3>
      <div className="relative overflow-x-hidden">
        {showScroll && (
          <button
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full scroll-button ${
              hovering ? "show" : ""
            }`}
            onClick={scrollLeft}
          >
            <IconArrowLeft size={20} />
          </button>
        )}
        <div
          ref={sliderRef}
          className="recom-wrapper flex gap-5 whitespace-nowrap scroll-smooth overflow-x-hidden"
        >
          {recommendations.map((rec) => (
            <RecommendationCard
              key={rec.id}
              id={rec.id}
              imageSrc={rec.imageSrc}
              title={rec.title}
              description={rec.description}
              subject={rec.subject}
              duration={rec.duration}
              instructorImg={rec.instructorImg}
              instructorName={rec.instructorName}
              oldPrice={rec.oldPrice}
              newPrice={rec.newPrice}
            />
          ))}
        </div>
        {showScroll && (
          <button
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full scroll-button ${
              hovering ? "show" : ""
            }`}
            onClick={scrollRight}
          >
            <IconArrowRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Recommendation;
