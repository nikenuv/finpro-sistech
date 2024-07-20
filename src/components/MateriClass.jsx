import React from "react";
import Image from "next/image";

const MateriClass = () => {
  return (
    <section className="materi-class mx-10 px-2">
      <h3 className="mt-10 mb-5 font-bold">Materi</h3>
      <div className="materi-wrapper flex">
        <div className="card w-[250px] h-[160px] mr-10 py-5 border-[1px] border-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-full mx-auto"
            width={70}
            height={70}
            src="/materi1.jpeg"
            alt="materi 1"
          />
          <p className="text-center mt-2"> Kemampuan Penalaran <br/> Umum </p>
        </div>
        <div className="card w-[250px] h-[160px] mr-10 py-5 border-[1px] border-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-full mx-auto"
            width={70}
            height={70}
            src="/materi2.jpeg"
            alt="materi 1"
          />
          <p className="text-center mt-2"> Pengetahuan dan <br/> Pemahaman Umum </p>
        </div>
        <div className="card w-[250px] h-[160px] mr-10 py-5 border-[1px] border-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-full mx-auto"
            width={70}
            height={70}
            src="/materi3.jpeg"
            alt="materi 1"
          />
          <p className="text-center mt-2"> Pemahaman Bacaan <br/> dan Menulis </p>
        </div>
        <div className="card w-[250px] h-[160px] mr-10 py-5 border-[1px] border-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-full mx-auto"
            width={70}
            height={70}
            src="/materi4.jpeg"
            alt="materi 1"
          />
          <p className="text-center mt-2"> Pengetahuan <br/> Kuantitatif </p>
        </div>
      </div>
    </section>
  );
};

export default MateriClass;
