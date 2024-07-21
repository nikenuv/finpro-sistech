import React from "react";
import Image from "next/image";

const Materi = () => {
  return (
    <section className="materi mx-5 md:mx-10 px-2">
      <h3 className="mt-10 mb-5 font-bold text-xl md:text-2xl">
        Materi
      </h3>
      <div className="materi-wrapper flex flex-wrap justify-center gap-5">
        <div className="card w-full sm:w-[250px] h-[160px] py-5 border-[1px] border-[#E6B2C0] rounded-2xl flex flex-col items-center">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src="/materi1.jpeg"
            alt="materi 1"
          />
          <p className="text-center mt-2 text-sm sm:text-base">
            Kemampuan Penalaran <br /> Umum
          </p>
        </div>
        <div className="card w-full sm:w-[250px] h-[160px] py-5 border-[1px] border-[#E6B2C0] rounded-2xl flex flex-col items-center">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src="/materi2.jpeg"
            alt="materi 2"
          />
          <p className="text-center mt-2 text-sm sm:text-base">
            Pengetahuan dan <br /> Pemahaman Umum
          </p>
        </div>
        <div className="card w-full sm:w-[250px] h-[160px] py-5 border-[1px] border-[#E6B2C0] rounded-2xl flex flex-col items-center">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src="/materi3.jpeg"
            alt="materi 3"
          />
          <p className="text-center mt-2 text-sm sm:text-base">
            Pemahaman Bacaan <br /> dan Menulis
          </p>
        </div>
        <div className="card w-full sm:w-[250px] h-[160px] py-5 border-[1px] border-[#E6B2C0] rounded-2xl flex flex-col items-center">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src="/materi4.jpeg"
            alt="materi 4"
          />
          <p className="text-center mt-2 text-sm sm:text-base">
            Pengetahuan <br /> Kuantitatif
          </p>
        </div>
      </div>
    </section>
  );
};

export default Materi;
