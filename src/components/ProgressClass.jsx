import React from "react";
import Image from "next/image";

const ProgressClass = () => {
  return (
    <section className="bg-blue-300">
      <h3 className="">Lanjutkan Kelasmu</h3>
      <div className="card flex w-full pt-2 bg-[#E6B2C0] border-[1px] border-black">
        <Image
          className="rounded-full"
          width={70}
          height={70}
          src="/logo.png"
          alt="progress-class"
        />
        <div>
          <div>
            <p>Modul 1</p>
            <p>Penalaran Kuantitatif</p>
          </div>
          <div>
            <div className="progress-bar"></div>
            <p className="progress-status"> 1/3 Materi </p>
          </div>
        </div>
      </div>
      <div className="card flex w-full pt-2 bg-[#E6B2C0] border-[1px] border-black">
        <Image
          className="rounded-full"
          width={70}
          height={70}
          src="/logo.png"
          alt="progress-class"
        />
        <div>
          <div>
            <p>Modul 1</p>
            <p>Penalaran Kuantitatif</p>
          </div>
          <div>
            <div className="progress-bar"></div>
            <p className="progress-status"> 1/3 Materi </p>
          </div>
        </div>
      </div>
      <div className="card flex w-full pt-2 bg-[#E6B2C0] border-[1px] border-black">
        <Image
          className="rounded-full"
          width={70}
          height={70}
          src="/logo.png"
          alt="progress-class"
        />
        <div>
          <div>
            <p>Modul 1</p>
            <p>Penalaran Kuantitatif</p>
          </div>
          <div>
            <div className="progress-bar"></div>
            <p className="progress-status"> 1/3 Materi </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressClass;
