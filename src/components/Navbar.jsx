"use client";
import React, { useState } from "react";
import { NavbarData } from "@/utils/NavbarData";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#EAB595] w-full flex flex-col md:flex-row md:justify-between items-center px-4 py-2 transition-transform duration-300">
      <div className="logo flex items-center">
        <Image src="/logo.png" width={70} height={70} alt="Logo" />
      </div>

      <div className="md:hidden justify-center flex items-center">
        <button onClick={toggleMenu} className="text-black text-2xl">
          {isOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </div>

      <nav
        className={`nav-list ${
          isOpen ? "flex" : "hidden"
        } md:flex md:relative flex-col md:flex-row md:justify-between items-center absolute top-16 md:top-0 left-0 w-full md:w-auto bg-[#EAB595] transition-transform duration-300`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-0">
          {NavbarData.map((nav) => (
            <li
              key={nav.id}
              className="text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline"
            >
              <a href={nav.href}>{nav.name}</a>
            </li>
          ))}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black text-2xl">
              {isOpen ? <IconX /> : <IconMenu2 />}
            </button>
          </div>
        </ul>
      </nav>

      <a
        href="#subscription"
        className="mt-4 md:mt-0 font-extrabold text-lg text-black"
      >
        Langganan
      </a>
    </header>
  );
};

export default Navbar;
