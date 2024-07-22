import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="hero px-5 md:px-20 py-7">
        <div className="text-center md:text-left">
          <h1 className="text-[28px] font-bold">Hi Jaehyun, Welcome Back!</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-5">
          <Image 
            className="rounded-full"
            width={100} 
            height={100} 
            src="/profile.jpeg" 
            alt="profile"
          />
          <div className="ml-0 md:ml-5 mt-4 md:mt-0 text-center md:text-left">
            <h3 className="profile-name text-[22px] pt-2 pb-5 font-semibold">Jaehyun</h3>
            <h3 className="point">100XP</h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
