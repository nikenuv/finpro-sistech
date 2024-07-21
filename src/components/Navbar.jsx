import React from "react";
import { NavbarData } from "@/utils/NavbarData";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-primary-1 w-full flex justify-between items-center transition-transform duration-300">
      <div className="logo ml-5">
        <Image src="/logo.png" width={70} height={70} />
      </div>
      <nav className="nav-list bg-primary-1 flex justify-between mx-auto items-center">
        <ul className="flex gap-10">
          {NavbarData.map((nav) => (
            <li
              key={nav.id}
              className=" text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline"
            >
              <a className="text-black" href={nav.href}>
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#subscription" className="mr-5 text-right font-extrabold text-lg"> Langganan </a>
    </header>
  );
};

export default Navbar;
