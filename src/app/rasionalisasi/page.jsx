"use client";
import React, { useState, useEffect } from "react";
import RasioCard from "./RasionalisasiCard";
import Form from "./Form";

const Page = () => {
  const [showForm, setShowForm] = useState(false);
  const [selections, setSelections] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  const handleCardClick = (index) => {
    setCurrentCard(index);
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  const handleSaveSelection = (selection) => {
    setSelections((prevSelections) => {
      const newSelections = [...prevSelections];
      newSelections[currentCard] = selection;
      return newSelections;
    });
    setShowForm(false);
  };

  const handleDeleteSelection = (index) => {
    setSelections((prevSelections) => {
      const newSelections = [...prevSelections];
      newSelections[index] = null;
      return newSelections;
    });
  };

  useEffect(() => {
    const storedSelections = JSON.parse(localStorage.getItem("selections"));
    if (storedSelections) setSelections(storedSelections);
  }, []);

  useEffect(() => {
    localStorage.setItem("selections", JSON.stringify(selections));
  }, [selections]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-20 flex justify-center">
        <div className="border border-[#E6B2C0] rounded-2xl p-8 w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-4">
            <h2 className="text-xl font-bold">Kampus Impianmu</h2>
            <p className="text-xl font-bold cursor-pointer">Ubah Kampus</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4 lg:mb-0">
            {["Pilihan Pertama", "Pilihan Kedua", "Pilihan Ketiga", "Pilihan Keempat"].map((title, index) => (
              <RasioCard
                key={index}
                title={title}
                onClick={() => handleCardClick(index)}
                selection={selections[index]}
                onDelete={() => handleDeleteSelection(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Form handleClose={handleCloseModal} handleSave={handleSaveSelection} />
        </div>
      )}
    </div>
  );
};

export default Page;
