"use client";
import React, { useState } from "react";
import { Navbar } from "@/components";
import RasioCard from "./RasionalisasiCard";
import Form from "./Form";

const page = () => {
  const [showForm, setShowForm] = useState(false);

  const handleCardClick = () => {
    console.log("Card clicked!");
    setShowForm(true);
  };

  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="flex justify-center items-center">
          <div className="border border-[#E6B2C0] rounded-2xl p-8 justify-between items-center w-50%">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-4">
              <h2 className="text-xl font-bold">Kampus Impianmu</h2>
              <p className="text-xl font-bold cursor-pointer">Ubah Kampus</p>
            </div>
            <div className="flex gap-4 mb-4 lg:mb-0 justify-between items-center">
              <RasioCard title="Pilihan Pertama" onClick={handleCardClick} />
              <RasioCard title="Pilihan Kedua" onClick={handleCardClick} />
              <RasioCard title="Pilihan Ketiga" onClick={handleCardClick} />
              <RasioCard title="Pilihan Keempat" onClick={handleCardClick} />
            </div>
          </div>
        </div>
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Form />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
