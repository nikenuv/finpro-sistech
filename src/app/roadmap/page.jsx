import React from "react";
import Link from "next/link";

const Goals = () => {
  return (
    <div>
      <h1 className="font-bold text-[32px] text-center mt-10">
        Pilih Goals Kamu
      </h1>
      <div className="flex items-center justify-center mt-10">
        <div className="bg-white border-[1px] border-gray rounded-xl w-1/2">
          <div className="flex justify-between border-b border-gray p-4">
            <Link href="/path-to-page-3-days" passHref>
              <p className="flex-1 text-left cursor-pointer">3 days</p>
            </Link>
            <Link href="/path-to-page-baby-steps" passHref>
              <p className="flex-1 text-right cursor-pointer">Baby steps</p>
            </Link>
          </div>
          <div className="flex justify-between border-b border-gray p-4">
            <Link href="/path-to-page-7-days" passHref>
              <p className="flex-1 text-left cursor-pointer">7 days</p>
            </Link>
            <Link href="/path-to-page-strong-start" passHref>
              <p className="flex-1 text-right cursor-pointer">Strong start</p>
            </Link>
          </div>
          <div className="flex justify-between border-b border-gray p-4">
            <Link href="/path-to-page-14-days" passHref>
              <p className="flex-1 text-left cursor-pointer">14 days</p>
            </Link>
            <Link href="/path-to-page-clearly-committed" passHref>
              <p className="flex-1 text-right cursor-pointer">
                Clearly committed
              </p>
            </Link>
          </div>
          <div className="flex justify-between  p-4">
            <Link href="/path-to-page-30-days" passHref>
              <p className="flex-1 text-left cursor-pointer">30 days</p>
            </Link>
            <Link href="/path-to-page-unstoppable-streak" passHref>
              <p className="flex-1 text-right cursor-pointer">
                Unstoppable Streak
              </p>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-[16px] text-center mt-10">
        Kamu akan 5x lebih cepat menyelesaikan course
      </h3>
    </div>
  );
};

export default Goals;
