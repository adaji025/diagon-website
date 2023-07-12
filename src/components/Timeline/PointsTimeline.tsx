"use client";
import React from "react";
import styles from "../../styles/Timeline.module.css";

const PointsTimeline = () => {
  const [activetimeline, setActiveTime] = React.useState(10);

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
        <div className={`flex ${styles.timeline_item_content} `}>
          <div
            className={`py-3 pl-10 pr-5 w-[80%] ${
              index === 0 ? styles.timeline_item_2 : ""
            }`}
            key={index}
          >
            <p>{data}</p>
            <span className={`${index === 0 ? styles.points_circle  : ""}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PointsTimeline;
