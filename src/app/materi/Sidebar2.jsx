'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import iconimg from './../../../public/materi1.jpeg';

const Menus = [
  { title: 'Materi1: Peran Pemimpin dalam Pemberdayaan', path: '/', icon: iconimg },
  { title: 'Materi2: Coaching sebagai Strategi...', path: '/', icon: iconimg },
  { title: 'Materi3: Perbedaan Coaching, Fasilitasi,...', path: '/', icon: iconimg },
  { title: 'Latihan Pemahaman', path: '/', icon: iconimg },
  { title: 'Diskusi & Saling Review', path: '/', icon: iconimg },
];

const DashboardSection = ({ children, titleField, buttonField }) => {
  const [open, setOpen] = useState(true);

  return (
    <section className=''>
      <section className="flex">
        <div
          className={`${
            open ? 'max-w-[240px] min-w-[230px]' : 'max-w-[90px] min-w-[80px]'
          } w-full bg-primary-3 h-screen p-5 duration-300 flex-1`}
        >

          <div className=''>
            <ul>
              {Menus.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link href={item.path} className="flex items-center space-x-3 rounded-md p-2">
                    <div className='flex flex-col items-center bg-white w-[186px] h-24 rounded-md p-2'>
                      <Image src={item.icon} alt={`${item.title} icon`} className='w-10 h-10 mb-2' />
                      {open && (
                        <span className="bg-gray-800 text-white w-full h-12 p-2 rounded-md text-center text-xs truncate">{item.title}</span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`flex-1 w-full duration-300 ${open ? 'ml-[240px]' : 'ml-[90px]'}`}>
          <div className="mb-20 space-y-8">
            <div className="flex items-center justify-between px-4 pt-8">
              <h1 className="text-3xl font-bold text-gray-800">{titleField ?? null}</h1>
              {buttonField ?? null}
            </div>
            <div className="block px-4 overflow-y-auto">{children}</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DashboardSection;