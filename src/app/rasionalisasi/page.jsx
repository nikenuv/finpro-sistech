import React from "react";
import { Navbar } from "@/components";
import Card from "./Card";

const page = () => {
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
              <Card title="Pilihan Pertama" />
              <Card title="Pilihan Kedua" />
              <Card title="Pilihan Ketiga" />
              <Card title="Pilihan Keempat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
