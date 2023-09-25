"use client";

import React, { useState } from "react";
import SideNav from "./SideNav";
import { Cancel, Hamburger } from "../Svg/Svg";
import Link from "next/link";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <>
      <SideNav {...{ sideNav, setSideNav }} />

      <div className="bg-black backdrop-blur-[30px] fixed w-full z-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex justify-between h-[100px] items-center">
          <div className="flex items-center gap-10 lg:gap-16">
            <Link href="/">
              <img src="/svgs/diagon-logo.svg" alt="diagon studio" />
            </Link>

            <div className="hidden md:flex gap-5 lg:gap-8 text-white font-medium text-base lg:text-lg">
              <Link href="https://whitepaper.diagon.io/"  target="_blank" className="cursor-pointer">Whitepaper</Link>
              <Link href="/leadersboard" className="cursor-pointer">Leaderboard</Link>
              <Link href="https://www.pointstopay.io/" target="_blank" className="cursor-pointer">Market place</Link>
            </div>
          </div>

         <Link href="/games">
          <button className="hidden md:flex bg-white rounded-full px-6 py-4 font-semibold">
            Play free Games
          </button>
          </Link>

          <div className="md:hidden cursor-pointer">
            {sideNav ? (
              <div className="transition-all duration-300" onClick={() => setSideNav(!sideNav)}>
                <Cancel />
              </div>
            ) : (
              <div className="transition-all duration-300" onClick={() => setSideNav(!sideNav)}>
                <Hamburger />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

