"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/CasualTimeline.module.css";
import { AnimateIn } from "../AnimateScreen";

type CasualTimelineProps = {
  activeTimeline: string | null;
  setActiveTimeline: Function;
};

const CasualTimeline: React.FC<CasualTimelineProps> = ({
  activeTimeline,
  setActiveTimeline,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const divElements = document.querySelectorAll(".scroll-div");
      let activeDiv: string | null = null;

      divElements.forEach((divElement) => {
        const { top, bottom } = divElement.getBoundingClientRect();
        const isInView = top >= 0 && bottom <= window.innerHeight;

        if (isInView) {
          activeDiv = divElement.id;
        }
      });

      setActiveTimeline(activeDiv);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTimeline]);

  console.log("activeDiv ==>", activeTimeline);

  const CircleStylesObject = {
    background: `url(/svgs/casual-circle.svg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "40px",
    width: "40px",
  };

  const TimelineItemStylesObject = {
    background:
      "linear-gradient(280deg, #9d0101 0%, rgba(199, 14, 14, 0) 100%)",
  };

  return (
    <div className={`text-white  ${styles.timeline_container}`}>
      <AnimateIn className="flex items-center relative">
        <span
          className={`circle rounded-full absolute -left-5 z-10 ${styles.points_circle}`}
          style={activeTimeline === "div1" ? CircleStylesObject : {}}
        />
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeTimeline === "div1" && "bg-[#242929]"
          }`}
        />
        <div
          id="div1"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div ${styles.timeline_item} $`}
          style={activeTimeline === "div1" ? TimelineItemStylesObject : {}}
        >
          <p>Game your way to fun and rewards</p>
          <span className={`circle  ${styles.casual_circle}`} />
        </div>
      </AnimateIn>

      <AnimateIn className="flex items-center relative">
        <span
          className={`circle rounded-full absolute -left-5 z-10 ${styles.points_circle}`}
          style={activeTimeline === "div2" ? CircleStylesObject : {}}
        />
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeTimeline === "div2" && "bg-[#242929]"
          }`}
        />
        <div
          id="div2"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div ${styles.timeline_item}`}
          style={activeTimeline === "div2" ? TimelineItemStylesObject : {}}
        >
          <p>Upgrade your gaming rig and build your ranks</p>
          <span className={`circle ${styles.casual_circle}`} />
        </div>
      </AnimateIn>

      <AnimateIn className="flex items-center relative">
        <span
          className={`circle rounded-full absolute -left-5 z-10 ${styles.points_circle}`}
          style={activeTimeline === "div3" ? CircleStylesObject : {}}
        />
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeTimeline === "div3" && "bg-[#242929]"
          }`}
        />
        <div
          id="div3"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div  ${styles.timeline_item}`}
          style={activeTimeline === "div3" ? TimelineItemStylesObject : {}}
        >
          <p>Play games, gather Points, Win big</p>
          <span className={`circle ${styles.casual_circle}`} />
        </div>
      </AnimateIn>

      <AnimateIn className="flex items-center relative">
        <span
          className={`circle rounded-full absolute -left-5 z-10 ${styles.points_circle}`}
          style={activeTimeline === "div4" ? CircleStylesObject : {}}
        />
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeTimeline === "div4" && "bg-[#242929]"
          }`}
        />
        <div
          id="div4"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div  ${styles.timeline_item}`}
          style={activeTimeline === "div4" ? TimelineItemStylesObject : {}}
        >
          <p>Compete with friends and top the leaderboard</p>
          <span className={`circle ${styles.casual_circle}`} />
        </div>
      </AnimateIn>

      <AnimateIn className="flex items-center relative">
      <span
          className={`circle rounded-full absolute -left-5 z-10 ${styles.points_circle}`}
          style={activeTimeline === "div5" ? CircleStylesObject : {}}
        />
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeTimeline === "div5" && "bg-[#242929]"
          }`}
        />
        <div
          id="div5"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div  ${styles.timeline_item} `}
          style={activeTimeline === "div5" ? TimelineItemStylesObject : {}}
        >
          <p>Etch your gaming milestones on CASUAL</p>
          <span className={`circle ${styles.casual_circle}`} />
        </div>
      </AnimateIn>
    </div>
  );
};

export default CasualTimeline;
