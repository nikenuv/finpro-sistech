import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'


const Hero = () => {
  return (
    <>
    <Navbar />
    <section className="hero ml-20 py-7">
        <div className="">
            <h1 className="text-[28px] font-bold">Hi Jaehyun, Welcome Back!</h1>
        </div>
        <div className="flex pt-3">
            <Image className="rounded-full" width={100} height={100} src="/profile.jpeg" alt="profile"/>
            <div className="ml-5">
                <h3 className="profile-name text-[22px] pt-2 pb-5">Jaehyun</h3>
                <h3 className="point">100XP</h3>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero