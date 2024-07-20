import React from 'react'
import Image from 'next/image'
import { IconEye } from '@tabler/icons-react'

const Xp = () => {
  return (
    <section className="recommendation mx-10 px-2">
      <h3 className="mt-10 mb-5 font-bold">Tukarkan XP</h3>
      <div className="recom-wrapper flex gap-5">
        <div className="card w-[370px] h-[370px] mb-5 px-5 py-5 bg-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-3xl"
            width={350}
            height={150}
            src="/xaviera.jpeg"
          />
          <h1 className="mt-2 font-bold text-[24px] text-[#252641]">
            Live Teaching: Xaviera Putri
          </h1>
          <h3 className="my-5 text-[20px] text-[#696984]">
            Class, launched less than ...
          </h3>
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#696984]">
            <p className="text-[16px] underline">Read More</p>
            <div className="flex items-center gap-5">
              <IconEye className="text-[#49BBBD]" />
              <p className="text-[16px]">251,232</p>
            </div>
          </div>
        </div>
        <div className="card w-[370px] h-[370px] mb-5 px-5 py-5 bg-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-3xl"
            width={350}
            height={150}
            src="/xaviera.jpeg"
          />
          <h1 className="mt-2 font-bold text-[24px] text-[#252641]">
            Live Teaching: Xaviera Putri
          </h1>
          <h3 className="my-5 text-[20px] text-[#696984]">
            Class, launched less than ...
          </h3>
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#696984]">
            <p className="text-[16px] underline">Read More</p>
            <div className="flex items-center gap-5">
              <IconEye className="text-[#49BBBD]" />
              <p className="text-[16px]">251,232</p>
            </div>
          </div>
        </div>
        <div className="card w-[370px] h-[370px] mb-5 px-5 py-5 bg-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-3xl"
            width={350}
            height={150}
            src="/xaviera.jpeg"
          />
          <h1 className="mt-2 font-bold text-[24px] text-[#252641]">
            Live Teaching: Xaviera Putri
          </h1>
          <h3 className="my-5 text-[20px] text-[#696984]">
            Class, launched less than ...
          </h3>
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#696984]">
            <p className="text-[16px] underline">Read More</p>
            <div className="flex items-center gap-5">
              <IconEye className="text-[#49BBBD]" />
              <p className="text-[16px]">251,232</p>
            </div>
          </div>
        </div>
        <div className="card w-[370px] h-[370px] mb-5 px-5 py-5 bg-[#E6B2C0] rounded-2xl">
          <Image
            className="rounded-3xl"
            width={350}
            height={150}
            src="/xaviera.jpeg"
          />
          <h1 className="mt-2 font-bold text-[24px] text-[#252641]">
            Live Teaching: Xaviera Putri
          </h1>
          <h3 className="my-5 text-[20px] text-[#696984]">
            Class, launched less than ...
          </h3>
          <div className="flex mt-4 justify-between items-center text-[14px] text-[#696984]">
            <p className="text-[16px] underline">Read More</p>
            <div className="flex items-center gap-5">
              <IconEye className="text-[#49BBBD]" />
              <p className="text-[16px]">251,232</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Xp