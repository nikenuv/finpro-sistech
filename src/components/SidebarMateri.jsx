"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menus = [
  {
    id: 1,
    title: "Peran Pemimpin dalam Pemberdayaan",
    path: "/",
    icon: "/materi1.jpeg",
  },
  {
    id: 2,
    title: "Coaching sebagai Strategi...",
    path: "/",
    icon: "/materi1.jpeg",
  },
  {
    id: 3,
    title: "Perbedaan Coaching, Fasilitasi,...",
    path: "/",
    icon: "/materi1.jpeg",
  },
  { id: 4, title: "Latihan Pemahaman", path: "/", icon: "/materi1.jpeg" },
  { id: 5, title: "Diskusi & Saling Review", path: "/", icon: "/materi1.jpeg" },
];

const SidebarMateri = ({ children, titleField, buttonField }) => {
  return (
    <section className="">
      <section className="flex">
        <div
          className="w-full bg-primary-3 h-screen p-5 duration-300 flex-1"
        >
          <div className="">
            <ul>
              {Menus.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href={item.path}
                    className="flex items-center space-x-3 rounded-md p-2"
                  >
                    <div className="flex flex-col items-center bg-white w-[186px] h-24 rounded-md p-2">
                      <Image
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={40}
                        height={40}
                        className="w-10 h-10 mb-2"
                      />
                        <span className="bg-gray-800 text-white w-full h-12 p-2 rounded-md text-center text-xs truncate">
                          {item.title}
                        </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="flex-1 w-full duration-300"
        >
          <div className="mb-20 space-y-8">
            <div className="flex items-center justify-between px-4 pt-8">
              <h1 className="text-3xl font-bold text-gray-800">
                {titleField ?? null}
              </h1>
              {buttonField ?? null}
            </div>
            <div className="block px-4 overflow-y-auto">{children}</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SidebarMateri;
