import React from "react";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { Progress, Materi, Recommendation, Xp } from ".";

const Home = () => {
  return (
    <section
      id="home"
      className="rounded-3xl bg-white border-[#D87582] border-[1px] p-4 md:p-6 lg:p-8"
    >
      <div className="search-bar flex items-center m-4 p-2 rounded-3xl border-[#D87582] border-[1px]">
        <IconSearch className="text-xl md:text-2xl" />
        <input
          type="text"
          placeholder="Cari Materi Belajar"
          className="w-full px-3 md:px-5 outline-none"
        />
      </div>
      <div className="menu flex flex-col md:flex-row md:justify-center items-center gap-20 mt-8">
        <Link href="/roadmap">
          <div className="flex flex-col items-center text-center">
            <Image src="/roadmap.png" width={60} height={60} className="md:w-70 md:h-70" />
            <p className="text-base md:text-lg mt-2 text-black hover:text-gray-900">
              Roadmap
            </p>
          </div>
        </Link>
        <Link href="/rasionalisasi">
          <div className="flex flex-col items-center text-center">
            <Image src="/rasionalisasi.png" width={60} height={60} className="md:w-70 md:h-70" />
            <p className="text-base md:text-lg mt-2 text-black hover:text-gray-900">
              Rasionalisasi
            </p>
          </div>
        </Link>
        <Link href="/dailytest">
          <div className="flex flex-col items-center text-center">
            <Image src="/dailytest.png" width={60} height={60} className="md:w-70 md:h-70" />
            <p className="text-base md:text-lg mt-2 text-black hover:text-gray-900">
              Daily Test
            </p>
          </div>
        </Link>
      </div>
      <Progress />
      <Materi />
      <Recommendation />
      <Xp />
    </section>
  );
};

export default Home;
