"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "../../styles/PointsTimeline.module.css";
import { AnimateIn } from "../AnimateScreen";

type PointTimelineProps = {
  activeDivId: string | null;
  setActiveDivId: Function;
};

const PointsTimeline: FC<PointTimelineProps> = ({
  activeDivId,
  setActiveDivId,
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

      setActiveDivId(activeDiv);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeDivId]);

  console.log("activeDiv ==>", activeDivId);

  const CircleStylesObject = {
    background: `url("/svgs/point-circle.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const TimelineItemStylesObject = {
    background: "linear-gradient(280deg, #143837 0%, rgba(34, 94, 90, 0) 100%)",
  };

  return (
    <div className={`text-white ${styles.timeline_container}`}>
      <AnimateIn className="flex items-center">
        <div
          id="div1"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div  ${styles.timeline_item} `}
          style={activeDivId === "div1" ? TimelineItemStylesObject : {}}
        >
          <p>Winning is just the beginning - Shop with your points!</p>
          <span
            className={`circle ${styles.points_circle}`}
            style={activeDivId === "div1" ? CircleStylesObject : {}}
          />
        </div>
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeDivId === "div1" && "bg-[#242929]"
          }`}
        />
      </AnimateIn>
      <AnimateIn className="flex items-center">
        <div
          id="div2"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div ${styles.timeline_item}`}
          style={activeDivId === "div2" ? TimelineItemStylesObject : {}}
        >
          <p>Explore the better way to shop with Points</p>
          <span
            className={`circle ${styles.points_circle}`}
            style={activeDivId === "div2" ? CircleStylesObject : {}}
          />
        </div>
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeDivId === "div2" && "bg-[#242929]"
          }`}
        />
      </AnimateIn>

      <AnimateIn className="flex items-center">
        <div
          id="div3"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div ${styles.timeline_item}`}
          style={activeDivId === "div3" ? TimelineItemStylesObject : {}}
        >
          <p>Mobile Top ups, online subsc3iptions, and more with Points! </p>
          <span
            className={`circle ${styles.points_circle}`}
            style={activeDivId === "div3" ? CircleStylesObject : {}}
          />
        </div>
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeDivId === "div3" && "bg-[#242929]"
          }`}
        />
      </AnimateIn>

      <AnimateIn className="flex items-center">
        <div
          id="div4"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div ${styles.timeline_item}`}
          style={activeDivId === "div4" ? TimelineItemStylesObject : {}}
        >
          <p>Transform your gaming prowess to real assets!</p>
          <span
            className={`circle ${styles.points_circle}`}
            style={activeDivId === "div4" ? CircleStylesObject : {}}
          />
        </div>
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeDivId === "div4" && "bg-[#242929]"
          }`}
        />
      </AnimateIn>

      <AnimateIn className="flex items-center">
        <div
          id="div5"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div ${styles.timeline_item}`}
          style={activeDivId === "div5" ? TimelineItemStylesObject : {}}
        >
          <p>Unlock premium rewards and more with CSL</p>
          <span
            className={`circle ${styles.points_circle}`}
            style={activeDivId === "div5" ? CircleStylesObject : {}}
          />
        </div>
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeDivId === "div5" && "bg-[#242929]"
          }`}
        />
      </AnimateIn>

      <AnimateIn className="flex items-center">
        <div
          id="div6"
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center scroll-div ${styles.timeline_item}`}
          style={activeDivId === "div6" ? TimelineItemStylesObject : {}}
        >
          <p>Play harder, Shop better. Experience the ease with Points!</p>
          <span
            style={activeDivId === "div6" ? CircleStylesObject : {}}
            className={`circle ${styles.points_circle}`}
          />
        </div>
        <div
          className={`h-1 w-1 -mt-2 flex-1 ${
            activeDivId === "div6" && "bg-[#242929]"
          }`}
        />
      </AnimateIn>
    </div>
  );
};

export default PointsTimeline;
