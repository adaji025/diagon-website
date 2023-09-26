"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  sideNav: boolean;
  setSideNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideNav = ({ sideNav, setSideNav }: Props) => {
  const navigate = useRouter()
  return (
    <div
      className={`bg-black w-full h-[40%] fixed top-[100px]  z-50 transition-all duration-300 px-4 md:hidden ${
        sideNav ? "left-0" : "left-[-100%]"
      }`}
    >
      <div className="grid gap-5 lg:gap-8 text-white font-medium text-base lg:text-lg text-center mt-5">
        <Link
          href="https://whitepaper.diagon.io/"
          className="cursor-pointer"
          onClick={() => setSideNav(false)}
        >
          Whitepaper
        </Link>
        <Link
          href="/leadersboard"
          className="cursor-pointer"
          onClick={() => setSideNav(false)}
        >
          Leaderboard
        </Link>
        <Link
          href="https://www.pointstopay.io/"
          target="_blank"
          className="cursor-pointer"
          onClick={() => setSideNav(false)}
        >
          Marketplace
        </Link>
      </div>
      <div className="mx-auto w-4/5">
        <button className="mt-10 w-full bg-white  px-6 py-4 font-semibold"
        onClick={() => navigate.push("/games")}>
          Play free Games
        </button>
      </div>
    </div>
  );
};

export default SideNav;
