import Link from "next/link";
import React from "react";

type Props = {
  sideNav: boolean;
  setSideNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideNav = ({ sideNav, setSideNav }: Props) => {
  return (
    <div
      className={`bg-black w-full h-[40%] fixed top-[100px]  z-50 transition-all duration-300 px-4 md:hidden ${
        sideNav ? "left-0" : "left-[-100%]"
      }`}
    >
      <div className="grid gap-5 lg:gap-8 text-white font-medium text-base lg:text-lg text-center mt-5">
        <Link href="https://whitepaper.diagon.io/" className="cursor-pointer">
          Whitepaper
        </Link>
        <Link
          href="/leadersboard"
          target="_blank"
          className="cursor-pointer"
        >
          Leaderboard
        </Link>
        <Link
          href="https://www.pointstopay.io/"
          target="_blank"
          className="cursor-pointer"
        >
          Shop & Refill
        </Link>
      </div>
      <div className="mx-auto w-4/5">
        <button className="mt-10 w-full bg-white  px-6 py-4 font-semibold">
          Play free games
        </button>
      </div>
    </div>
  );
};

export default SideNav;
