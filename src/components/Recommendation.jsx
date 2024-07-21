import React from "react";
import Image from "next/image";
import { IconCalculator, IconAlarm } from "@tabler/icons-react";

const Recommendation = () => {
  return (
    <section className="recommendation mx-10 px-2">
      <h3 className="mt-10 mb-5 font-bold">Rekomendasi Untukmu</h3>
      <div className="recom-wrapper flex gap-5">
        <div className="card w-[370px] h-[370px] mb-5 px-5 py-5 bg-primary-3 rounded-2xl">
          <Image
            className="rounded-3xl"
            width={350}
            height={150}
            src="/rekomendasi.png"
            alt="progress-class"
          />
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
            <IconCalculator />
            <p>Pengetahuan Kuantitatif</p>
            <IconAlarm />
            <p>4 jam</p>
          </div>
          <h1 className="mt-2 font-bold text-[24px] text-[#252641]">
            Belajar Kuantitatif
          </h1>
          <h3 className="text-[16px] text-[#696984]">
            konsep dasar bilangan berpangkat
          </h3>
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
            <div className="flex items-center gap-5">
              <Image
                className="rounded-full"
                width={45}
                height={45}
                src="/profile.jpeg"
              />
              <p className="text-[16px]">Lina</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="italic line-through text-[20px]">$100</p>
              <p className="font-extrabold text-[24px]">$80</p>
            </div>
          </div>
        </div>
        <div className="card w-[370px] h-[370px] mb-5 px-5 py-5 bg-primary-3 rounded-2xl">
          <Image
            className="rounded-3xl"
            width={350}
            height={150}
            src="/rekomendasi.png"
            alt="progress-class"
          />
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
            <IconCalculator />
            <p>Pengetahuan Kuantitatif</p>
            <IconAlarm />
            <p>4 jam</p>
          </div>
          <h1 className="mt-2 font-bold text-[24px] text-[#252641]">
            Belajar Kuantitatif
          </h1>
          <h3 className="text-[16px] text-[#696984]">
            konsep dasar bilangan berpangkat
          </h3>
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
            <div className="flex items-center gap-5">
              <Image
                className="rounded-full"
                width={45}
                height={45}
                src="/profile.jpeg"
              />
              <p className="text-[16px]">Lina</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="italic line-through text-[20px]">$100</p>
              <p className="font-extrabold text-[24px]">$80</p>
            </div>
          </div>
        </div>
        <div className="card w-[370px] h-[370px] mb-5 px-5 py-5 bg-primary-3 rounded-2xl">
          <Image
            className="rounded-3xl"
            width={350}
            height={150}
            src="/rekomendasi.png"
            alt="progress-class"
          />
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
            <IconCalculator />
            <p>Pengetahuan Kuantitatif</p>
            <IconAlarm />
            <p>4 jam</p>
          </div>
          <h1 className="mt-2 font-bold text-[24px] text-[#252641]">
            Belajar Kuantitatif
          </h1>
          <h3 className="text-[16px] text-[#696984]">
            konsep dasar bilangan berpangkat
          </h3>
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
            <div className="flex items-center gap-5">
              <Image
                className="rounded-full"
                width={45}
                height={45}
                src="/profile.jpeg"
              />
              <p className="text-[16px]">Lina</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="italic line-through text-[20px]">$100</p>
              <p className="font-extrabold text-[24px]">$80</p>
            </div>
          </div>
        </div>
        <div className="card w-[370px] h-[370px] mb-5 px-5 py-5 bg-primary-3 rounded-2xl">
          <Image
            className="rounded-3xl"
            width={350}
            height={150}
            src="/rekomendasi.png"
            alt="progress-class"
          />
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
            <IconCalculator />
            <p>Pengetahuan Kuantitatif</p>
            <IconAlarm />
            <p>4 jam</p>
          </div>
          <h1 className="mt-2 font-bold text-[24px] text-[#252641]">
            Belajar Kuantitatif
          </h1>
          <h3 className="text-[16px] text-[#696984]">
            konsep dasar bilangan berpangkat
          </h3>
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#79616F]">
            <div className="flex items-center gap-5">
              <Image
                className="rounded-full"
                width={45}
                height={45}
                src="/profile.jpeg"
              />
              <p className="text-[16px]">Lina</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="italic line-through text-[20px]">$100</p>
              <p className="font-extrabold text-[24px]">$80</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
