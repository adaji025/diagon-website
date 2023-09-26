"use client";

import { useState, useEffect } from "react";
import Carousel from "@/components/Carousel/Carousel";
import styles from "../styles/Home.module.css";
import { Arrow } from "@/components/Svg/Svg";
import Faq from "@/components/Faq/Faq";
import CasualTimeline from "@/components/Timeline/CasualTimeline";
import PointsTimeline from "@/components/Timeline/PointsTimeline";
import Link from "next/link";

interface GameTypes {
  id: string;
  image: string;
  title: string;
  url: string;
}

export default function Home() {
  const [activeTimeline, setActiveTimeline] = useState<string | null>(null);
  const [activeDivId, setActiveDivId] = useState<string | null>(null);
  const [games, setGames] = useState<GameTypes[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch("https://api.diagon.gg/games");
      const game = await res.json();
      setGames(game);
    };

    fetchGames();
  }, []);

  return (
    <div className="bg-black">
      {/* hero */}
      <div
        className={`h-[80vh] w-full flex flex-col justify-center items-center px-6 md:px-6 ${styles.hero}`}
      >
        <div className="max-w-[1000px] text-center mx-auto mt-[100px]">
          <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] text-white font-extrabold">
            Play Games & Shop with your Points on the Go!
          </h2>
          <Link href="/games">
            <button className="py-4 px-8 bg-[#E20001] text-2xl rounded-full text-white font-semibold mt-10 hover:bg-opacity-80 hover:scale-95 transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* partners */}
      <div className="flex justify-center items-center flex-col">
        <div className="tracking-diagon text-white text-center text-sm">
          OUR TRUSTED PARTNERS
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-5">
          <img
            className="w-[80px] lg:w-[unset]"
            src="/svgs/nodo.svg"
            alt="nodo"
          />
          <img
            className="w-[80px] lg:w-[unset]"
            src="/svgs/adaverse.svg"
            alt="adaverse"
          />
          <img
            className="w-[80px] lg:w-[unset]"
            src="/svgs/emurgo.svg"
            alt="emurgo"
          />
          <img
            className="w-[80px] lg:w-[unset]"
            src="/svgs/techcircle.svg"
            alt="tech circle"
          />
        </div>
      </div>

      {/* Casual description */}
      <div className="bg-black py-5 overflow-hidden">
        <div className={`py-20 ${styles.exp}`}>
          <div className="flex flex-col md:flex-row gap-10 items-center max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="flex-1 flex justify-center order-2 md:order-1">
              <img
                src={
                  activeTimeline === "div1"
                    ? "/image/casual.png"
                    : activeTimeline === "div2"
                    ? "/image/casual-1.png"
                    : activeTimeline === "div3"
                    ? "/image/casual-2.png"
                    : activeTimeline === "div4"
                    ? "/image/casual-3.png"
                    : "/image/casual.png"
                }
                alt="casual"
                className="transition-all duration-300"
              />
            </div>
            <div className="flex-1 flex flex-col md:items-center justify-center order-1 md:order-2">
              <CasualTimeline {...{ setActiveTimeline, activeTimeline }} />
              <div className="flex gap-5 mt-10">
                <Link
                  className="w-[40%]"
                  href="https://testflight.apple.com/join/REp8yh7x"
                  target="_blank"
                >
                  <button>
                    <img src="/svgs/apple-btn.svg" alt="" />
                  </button>
                </Link>
                <Link
                  className="w-[40%]"
                  href="https://play.google.com/store/apps/details?id=io.diagon.casual"
                  target="_blank"
                >
                  <img src="/svgs/playstore-btn.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* points description */}
      <div className="bg-black py-5">
        <div className={`py-20 ${styles.shop}`}>
          <div className="flex flex-col md:flex-row gap-10 items-center max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="flex-1 flex justify-center order-2">
              <img
                src={
                  activeDivId === "div1"
                    ? "/image/points.png"
                    : activeDivId === "div2"
                    ? "/image/points-1.png"
                    : activeDivId === "div3"
                    ? "/image/points-2.png"
                    : activeDivId === "div4"
                    ? "/image/points-3.png"
                    : activeDivId === "div5"
                    ? "/image/points-4.png"
                    : "/image/points-5.png"
                }
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col md:items-center justify-center order-1">
              <PointsTimeline {...{ activeDivId, setActiveDivId }} />
              <div className="flex gap-5 mt-10 max-w-[450px]">
                <Link
                  href="https://testflight.apple.com/join/REp8yh7x"
                  target="_blank"
                  className="w-[40%]"
                >
                  <img src="/svgs/apple-btn.svg" alt="" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=io.diagon.casual"
                  target="_blank"
                  className="w-[40%]"
                >
                  <img src="/svgs/playstore-btn.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* games description */}
      <div className="bg-black py-5 max-w-[1200px] mx-auto px-4 md:px-6 ">
        <div
          className={`py-20 h-screen flex flex-col justify-center ${styles.games}`}
        >
          <h2 className="text-[32px] md:text-[40px] lg:text-[50px] text-white text-center font-bold">
            Explore More Games
          </h2>
          <div className="text-[#776E6E] text-center text-2xl">
            Our arsenal of Casual Games reward players based on tickets
            gathered.
          </div>
          <div className="mt-10 overflow-hidden">
            <Carousel {...{ games }} />
          </div>
          <div className="mt-10 mx-auto">
            <Link href="/games">
              <button className="flex items-center gap-2 bg-[#1E1E1E] py-3 px-8 rounded-full text-white">
                See More <Arrow />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Subscription section */}
      <div
        className={`max-w-[1200px] mx-auto min-h-[600px] rounded-2xl flex items-center px-6 md:px-6 ${styles.subscribe}`}
      >
        <div className="flex justify-center flex-col md:flex-row gap-10 mx-auto">
          <div className="flex-1">
            <h2 className="text-[32px] sm:text-[42px] md:text-[52px] max-w-[400px] text-white font-extrabold">
              Want to get the latest news?
            </h2>
          </div>
          <div className="flex-1">
            <div className="text-white max-w-[530px] text-2xl">
              Subscribe to get the latest news on bonuses, promotions and
              updates on casual gaming and shopping.
            </div>
            <div className="mt-5 bg-white/10 rounded-full max-w-[530px] flex justify-between items-center px-2">
              <input
                type="text"
                placeholder="Enter Email address"
                className="w-full py-3 bg-transparent outline-none px-2 text-white text-sm"
              />
              <button className="bg-white py-2 px-5 text-sm rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* empty image */}
      <div className="my-20">
        <img src="/image/extra.png" alt="" />
      </div>

      {/* Payment */}
      <div className="max-w-[1200px] mx-auto">
        <div className="tracking-diagon text-white text-center text-sm mb-10">
          Payment Powered by:
        </div>
        <img src="/svgs/csl.svg" alt="csl" className="mx-auto" />
        <div className="mt-10 max-w-[800px] mx-auto text-center text-2xl text-white">
          CSL is Casual’s in-game currency with real money value to which users
          can exchange for incentives and cash.
        </div>
        <div className="mt-20 max-w-[1000px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 place-content-center">
          <div className="grid place-items-center ">
            <img src="/svgs/subtract.svg" alt="" />
            <div className="mt-8 text-[#484848] text-xl max-w-[300px] mx-auto text-center">
              Play Battles games and Tournaments
            </div>
          </div>

          <div className="grid place-items-center ">
            <img src="/svgs/coins.svg" alt="" />
            <div className="mt-8 text-[#484848] text-xl max-w-[300px] mx-auto text-center">
              Win CLS as rewards
            </div>
          </div>

          <div className="grid place-items-center ">
            <img src="/svgs/bag.svg" alt="" />
            <div className="mt-8 text-[#484848] text-xl max-w-[300px] mx-auto text-center">
              Shop with CLS or Exchange for real money
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="pt-20 max-w-[1200px] flex flex-col md:flex-row mx-auto px-4 md:px-6 gap-10">
        <div className="flex-1">
          <div
            className={`max-w-[540px] mx-auto py-[70px] max-h-min  ${styles.faq}`}
          >
            <div className="text-white">
              <h3 className="md:text-[40px] font-bold text-center">
                Frequently Asked Questions
              </h3>
              <p className="text-center text-xl">
                For other questions, visit our help page
              </p>
              <div className="mt-10 w-[86px] h-[86px] bg-[#4C27E0] rounded-full flex justify-center items-center mx-auto font-bold text-2xl">
                !
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Faq />
        </div>
      </div>
    </div>
  );
}
