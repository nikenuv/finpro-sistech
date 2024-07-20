import React from "react";
import Image from "next/image";

const Progress = () => {
  return (
    <section className="progress mx-10 px-2">
      <h3 className="mt-10 mb-5 font-bold">Lanjutkan Kelasmu</h3>
      <div className="progress-wrapper flex gap-10">
        <div className="flex w-[450px] px-5 py-5 bg-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src="/class1.jpeg"
            alt="progress-class"
          />
          <div className="ml-5">
            <p>Modul 1</p>
            <p>Penalaran Kuantitatif</p>
            <p className="progress-status"> 1/3 Materi </p>
          </div>
        </div>
        <div className="card flex w-[450px] px-5 py-5 bg-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src="/class2.jpeg"
            alt="progress-class"
          />
          <div className="ml-5">
            <p>Modul 3</p>
            <p>Ejaan</p>
            <div>
              <div className="progress-bar"></div>
              <p className="progress-status"> 1/3 Materi </p>
            </div>
          </div>
        </div>
        <div className="card flex w-[450px] px-5 py-5 bg-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src="/class3.jpeg"
            alt="progress-class"
          />
          <div className="ml-5">
            <p>Modul 2</p>
            <p>Makna Kata</p>
            <div>
              <div className="progress-bar"></div>
              <p className="progress-status"> 1/3 Materi </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
