import React from "react";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { ProgressClass } from ".";

const Home = () => {
  return (
    <section
      id="home"
      className="rounded-3xl bg-white h-screen border-[#D87582] border-[1px]"
    >
      <div className="search-bar flex m-5 mb-10 px-5 py-1 rounded-3xl border-[#D87582] border-[1px]">
        <IconSearch />
        <input
          type="text"
          placeholder="Cari Materi Belajar"
          className="w-full px-5 outline-none"
        />
      </div>
      <div className="menu flex justify-center items-center gap-44">
        <Link href="/roadmap">
          <div className="flex flex-col items-center">
            <Image src="/roadmap.png" width={70} height={70} />
            <p className="text-lg mt-2 text-black hover:text-gray-900">
              Roadmap
            </p>
          </div>
        </Link>
        <Link href="/rasionalisasi">
          <div className="flex flex-col items-center">
            <Image src="/rasionalisasi.png" width={70} height={70} />
            <p className="text-lg mt-2 text-black hover:text-gray-900">
              Rasionalisasi
            </p>
          </div>
        </Link>
        <Link href="/dailytest">
          <div className="flex flex-col items-center">
            <Image src="/dailytest.png" width={70} height={70} />
            <p className="text-lg mt-2 text-black hover:text-gray-900">
              Daily Test
            </p>
          </div>
        </Link>
      </div>
      <ProgressClass />
    </section>
  );
};

export default Home;
