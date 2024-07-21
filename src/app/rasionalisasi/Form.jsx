import React, { useState } from "react";
import Image from "next/image";
import { UniversityData } from "@/utils/UniversityData";
import { MajorData } from "@/utils/MajorData";

const Form = ({ handleClose, handleSave }) => {
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");

  const handleSubmit = () => {
    handleSave({ university, major });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#E6B2C0] p-8 rounded-lg shadow-lg w-96 text-center">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          &times;
        </button>
        <h1 className="text-xl font-bold mb-6">Pilih Universitas dan Jurusan</h1>
        <div className="mb-4 text-left">
          <label htmlFor="universitas" className="font-semibold mb-2 flex items-center">
            <Image
              src="/university.png"
              alt="University Icon"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            Universitas
          </label>
          <select
            id="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300"
          >
            <option value="">Cari Universitas/Sekolah Vokasi</option>
            {UniversityData.map((university, index) => (
              <option key={index} value={university}>{university}</option>
            ))}
          </select>
        </div>
        <div className="mb-6 text-left">
          <label htmlFor="jurusan" className="font-semibold mb-2 flex items-center">
            <Image
              src="/major.png"
              alt="Major Icon"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            Pilih Jurusan
          </label>
          <select
            id="major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300"
          >
            <option value="">Cari Jurusan</option>
            {MajorData.map((program, index) => (
              <option key={index} value={program}>{program}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <button className="bg-pink-200 text-black py-2 px-4 rounded-lg" onClick={handleClose}>
            Kembali
          </button>
          <button className="bg-gray-300 text-black py-2 px-4 rounded-lg" onClick={handleSubmit}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
