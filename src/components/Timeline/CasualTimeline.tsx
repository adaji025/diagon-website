"use client";
import React from "react";
import styles from "../../styles/CasualTimeline.module.css";

const CasualTimeline = () => {
  const animationRef = React.useRef<HTMLDivElement>(null);
  

  console.log(animationRef.current);

  React.useEffect(() => {
    
    const handleScroll = () => {
      const element = animationRef.current;
      if (isElementInViewport(element)) {
        element?.classList.add(styles.timeline_item);
      } else {
        element?.classList.remove(styles.timeline_item);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isElementInViewport = (el: HTMLDivElement | null): boolean => {
    if (!el) return false;

    const trigerBottom = (window.innerHeight / 5) * 4;

    const rect = el.getBoundingClientRect();
    return rect.top < trigerBottom;
  };

  const timelineData = [
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
  ];

  return (
    <div className={`text-white ${styles.timeline_container}`}>
      {timelineData.map((data, index) => (
        <div
          ref={animationRef}
          className={`py-3 pl-10 pr-5 w-[80%]
           ${
            index === 0 ? styles.timeline_item : ""
            }
          `}
          key={index}
        >
          <p>{data}</p>
          <span ref={animationRef} className={`${index === 0 ? styles.casual_circle : ""}`} />
        </div>
      ))}
    </div>
  );
};

export default CasualTimeline;
