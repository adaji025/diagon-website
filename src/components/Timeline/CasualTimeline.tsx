"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/CasualTimeline.module.css";
import { AnimateIn } from "../AnimateScreen";

type CasualTimelineProps = {
  backgroundDivIndex: number | null
  setBackgroundDivIndex : Function
}

const CasualTimeline: React.FC<CasualTimelineProps> = ({backgroundDivIndex, setBackgroundDivIndex}) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  

  const divRefs: React.RefObject<HTMLDivElement>[] = [];

  // Create refs for each div element
  const CreateDivRef = (index: number): React.RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);
    divRefs[index] = ref;
    return ref;
  };

  // Function to get the top position of each div element
  const getTopPositions = () => {
    const topPositions = divRefs.map((ref) => {
      if (ref.current) {
        return ref.current.getBoundingClientRect().top;
      }
      return null;
    });
    return topPositions;
  };

  useEffect(() => {
    // Update the scroll position in the state on scroll
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Get the top positions of each div element
    const topPositions = getTopPositions();

    // Determine which div should have the background with a slight delay
    let newIndex: number | null = null;
    for (let i = 0; i < topPositions.length; i++) {
      if (topPositions[i] !== null) {
        const element = divRefs[i].current;
        if (element) {
          const isTopInView =
            // @ts-ignore
            topPositions[i] - window.innerHeight + element.clientHeight <
            scrollPosition;
          // @ts-ignore
          const isBottomInView = topPositions[i] > scrollPosition;
          if (isTopInView && isBottomInView) {
            newIndex = i;
            break;
          }
        }
      }
    }

    // Update the background div index state with a slight delay
    setTimeout(() => {
      setBackgroundDivIndex((prevIndex: number) =>
        newIndex !== null ? newIndex : prevIndex
      );
    }, 200); // Adjust the delay duration as needed
  }, [scrollPosition]);

  return (
    <div className={`text-white  ${styles.timeline_container}`}>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(0)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center ${styles.timeline_item} ${
            backgroundDivIndex === 0 ? "background-in-view" : ""
          }`}
        >
          <p>Game your way to fun and rewards</p>
          <span className={`circle  ${styles.casual_circle}`} />
        </div>
      </AnimateIn>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(1)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center  ${styles.timeline_item} ${
            backgroundDivIndex === 1 ? "background-in-view" : ""
          }`}
        >
          <p>Upgrade your gaming rig and build your ranks</p>
          <span className={`circle ${styles.casual_circle}`} />
        </div>
      </AnimateIn>

      <AnimateIn className="">
        <div
          ref={CreateDivRef(2)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center  ${styles.timeline_item} ${
            backgroundDivIndex === 2 ? "background-in-view" : ""
          }`}
        >
          <p>Play games, gather Points, Win big</p>
          <span className={`circle ${styles.casual_circle}`} />
        </div>
      </AnimateIn>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(3)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center  ${styles.timeline_item} ${
            backgroundDivIndex === 3 ? "background-in-view" : ""
          }`}
        >
          <p>Compete with friends and top the leaderboard</p>
          <span className={`circle ${styles.casual_circle}`} />
        </div>
      </AnimateIn>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(4)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center  ${styles.timeline_item} ${
            backgroundDivIndex === 4 ? "background-in-view" : ""
          }`}
        >
          <p>Etch your gaming milestones on CASUAL</p>
          <span className={`circle ${styles.casual_circle}`} />
        </div>
      </AnimateIn>
    </div>
  );
};

export default CasualTimeline;
