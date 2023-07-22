"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "../../styles/PointsTimeline.module.css";
import { AnimateIn } from "../AnimateScreen";

type PointTimelineProps = {
  backgroundDivIndex: number | null;
  setBackgroundDivIndex: Function;
};

const PointsTimeline: FC<PointTimelineProps> = ({
  backgroundDivIndex,
  setBackgroundDivIndex,
}) => {
  const [pointsscrollPosition, setPointsScrollPosition] = useState<number>(4);
  const divRefs: React.RefObject<HTMLDivElement>[] = [];

  const CreateDivRef = (index: number): React.RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);
    divRefs[index] = ref;
    return ref;
  };

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
      setPointsScrollPosition(window.scrollY);
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
            pointsscrollPosition;
          // @ts-ignore
          const isBottomInView = topPositions[i] > pointsscrollPosition;
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
  }, [pointsscrollPosition]);

  return (
    <div className={`text-white ${styles.timeline_container}`}>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(0)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center  ${
            styles.timeline_item
          } ${backgroundDivIndex === 0 ? "background_in_view" : ""}`}
        >
          <p>Experience a Redefined style of Casual Gaming</p>
          <span className={`circle ${styles.points_circle}`} />
        </div>
      </AnimateIn>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(1)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center ${
            styles.timeline_item
          } ${backgroundDivIndex === 1 ? "background_in_view" : ""}`}
        >
          <p>Experience a Redefined style of Casual Gaming</p>
          <span className={`circle" ${styles.points_circle}`} />
        </div>
      </AnimateIn>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(2)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center ${
            styles.timeline_item
          } ${backgroundDivIndex === 2 ? "background_in_view" : ""}`}
        >
          <p>Experience a Redefined style of Casual Gaming</p>
          <span className={`circle" ${styles.points_circle}`} />
        </div>
      </AnimateIn>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(3)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center ${
            styles.timeline_item
          } ${backgroundDivIndex === 3 ? "background_in_view" : ""}`}
        >
          <p>Experience a Redefined style of Casual Gaming</p>
          <span className={`circle" ${styles.points_circle}`} />
        </div>
      </AnimateIn>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(4)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center ${
            styles.timeline_item
          } ${backgroundDivIndex === 4 ? "background_in_view" : ""}`}
        >
          <p>Experience a Redefined style of Casual Gaming</p>
          <span className={`circle" ${styles.points_circle}`} />
        </div>
      </AnimateIn>
      <AnimateIn className="">
        <div
          ref={CreateDivRef(5)}
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center ${
            styles.timeline_item
          } ${backgroundDivIndex === 5 ? "background_in_view" : ""}`}
        >
          <p>Experience a Redefined style of Casual Gaming</p>
          <span className={`circle" ${styles.points_circle}`} />
        </div>
      </AnimateIn>
    </div>
  );
};

export default PointsTimeline;
