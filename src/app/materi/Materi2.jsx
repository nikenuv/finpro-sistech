import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import NextButton from "./../../../public/next-icon.png";
import BackButton from "./../../../public/back-icon.png";
import Icon from "./../../../public/icon.png";
import Sidebar from "./Sidebar2";

const Materi2 = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="flex gap-3 w-full py-3 px-10 bg-primary-2">
        <p>Beranda</p>
        <Image src={NextButton} className="w-4 h-4 mt-1" />
        <p>Pelatihan</p>
        <Image src={NextButton} className="w-4 h-4 mt-1" />
        <p>Topik</p>
        <Image src={NextButton} className="w-4 h-4 mt-1" />
        <p>Modul</p>
      </section>

      <section className="flex w-full px-10 py-5 bg-primary-3">
        <div className="mx-auto flex gap-5">
          <Image src={NextButton} className="w-4 h-4 my-3.5" />
          <Image src={Icon} className="w-12 h-12" />
          <div className="grid grid-cols-2 gap-x-[500px]">
            <p className="text-xs">Materi 1</p>
            <p className="text-xs text-right">Kerjakan</p>
            <p className="text-xl font-bold">Peran Pemimpin dalam Pemberdayaan</p>
            <p className="text-lg text-right">Latihan Pemahaman</p>
          </div>
          <Image src={BackButton} className="w-4 h-4 my-3.5" />
        </div>
      </section>

      <div className="flex bg-white">
        <Sidebar className="static" />
        {/* Video Section */}
        <section className="flex-1 p-10">
          <video className="w-[900px] bg-slate-100 my-2" controls />
          <h1 className="font-bold text-xl">Peran Pemimpin dalam Pemberdayaan</h1>
          <p>Kepala satuan pendidikan memaknai paradigma kepemimpinan sistem among yang terkandung dalam semboyan pendidikan Indonesia yakni Ing ngarso sung tulodo, Ing madya mangun karso, Tut wuri handayani. Kepala satuan pendidikan akan belajar bagaimana menjadi seorang pemimpin yang dapat memberdayakan potensi setiap individu dalam komunitas pendidikan mereka. Referensi: Irayati, Monika dan Tim Pengembang Modul. 2022. Paket Modul 2.3. Coaching untuk Supervisi Akademik – Program Pendidikan Guru Penggerak</p>
        </section>
      </div>
    </>
  );
};

export default Materi2;
