import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";
import  CardMateri  from "@/components/CardMateri"

const Page = () => {
  return (
    <>
    <section className="flex w-full px-10 py-5 bg-[#EFD2C9]">
      <div className="flex gap-5">
        <IconArrowLeft className="my-auto cursor-pointer" />
        <Image
          src="/materi1.jpeg"
          width={50}
          height={50}
          className="rounded-xl"
        />
        <p className="text-xl font-bold my-auto">Penalaran Umum</p>
      </div>
      <div className="search-bar flex ml-auto px-6 py-1 rounded-3xl border-primary-2 border-[1px] bg-white">
        <IconSearch className="my-auto" />
        <input
          type="text"
          placeholder="Cari Materi Belajar"
          className="outline-none bg-white ml-2"
        />
      </div>
    </section>
    
    <section className="flex flex-col gap-5 px-10 py-5">
      <CardMateri />
    </section>
    </>
  );
};

export default Page;
