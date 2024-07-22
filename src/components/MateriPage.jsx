import React from "react";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import SidebarMateri from "/SidebarMateri";

const MateriPage = () => {
  return (
    <>
      <section className="flex w-full px-10 py-5 bg-[#EFD2C9]">
        <div className="mx-auto flex gap-5">
          <IconArrowLeft className="my-auto cursor-pointer" />
          <Image
            src="/materi1.jpeg"
            width={50}
            height={50}
            className="rounded-xl"
          />
          <div className="grid grid-cols-2 gap-x-[500px]">
            <p className="text-xs">Materi 1</p>
            <p className="text-xs text-right">Kerjakan</p>
            <p className="text-xl font-bold">
              Peran Pemimpin dalam Pemberdayaan
            </p>
            <p className="text-lg text-right font-bold">Latihan Pemahaman</p>
          </div>
          <IconArrowRight className="my-auto cursor-pointer" />
        </div>
      </section>

      <div className="w-full flex bg-white">
        <SidebarMateri className="static" />
        <div className="w-[900px] ml-20 mt-10">
          <video className="w-full bg-slate-100 my-2" controls />
          <h1 className="font-bold text-xl mt-5">
            Peran Pemimpin dalam Pemberdayaan
          </h1>
          <p className="text-justify mt-3">
            Kepala satuan pendidikan memaknai paradigma kepemimpinan sistem
            among yang terkandung dalam semboyan pendidikan Indonesia yakni Ing
            ngarso sung tulodo, Ing madya mangun karso, Tut wuri handayani.
            Kepala satuan pendidikan akan belajar bagaimana menjadi seorang
            pemimpin yang dapat memberdayakan potensi setiap individu dalam
            komunitas pendidikan mereka. </p>
          <p className="text-justify mt-5 text-[12px]"> 
            Referensi: Irayati, Monika dan Tim
            Pengembang Modul. 2022. Paket Modul 2.3. Coaching untuk Supervisi
            Akademik – Program Pendidikan Guru Penggerak
          </p>
        </div>
      </div>
    </>
  );
};

export default MateriPage;
