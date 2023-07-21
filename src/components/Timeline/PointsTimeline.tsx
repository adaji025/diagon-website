"use client";
import React from "react";
import styles from "../../styles/PointsTimeline.module.css";
import { AnimateIn, useElementOnScreen } from "../AnimateScreen";

const PointsTimeline = () => {
  const [activetimeline, setActiveTime] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  const timelineData = [
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
    "Experience a Redefined style of Casual Gaming",
  ];

  React.useEffect(() => { }, []);
  
  console.log(onScreen)

  return (
    <div className={`text-white ${styles.timeline_container}`}>
      {timelineData.map((data, index) => (
        <AnimateIn
          className={`min-h-[80px] py-3 pl-10 pr-5 w-[80%] flex items-center ${
            onScreen ?  styles.timeline_item : ""
          }`}
          key={index}
        >
          <p>{data}</p>
          <span className={`${onScreen ? styles.points_circle : ""}`} />
        </AnimateIn>
      ))}
    </div>
  );
};

export default PointsTimeline;
