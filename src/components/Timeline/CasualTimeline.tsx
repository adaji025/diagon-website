"use client";
import React from "react";
import styles from "../../styles/CasualTimeline.module.css";

const CasualTimeline = () => {
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
        <div
          className={`py-3 pl-10 pr-5 w-[80%] ${
            index === 0 ? styles.timeline_item : ""
          }`}
          key={index}
        >
          <p>{data}</p>
          <span className={`${index === 0 ? styles.casual_circle : ""}`} />
        </div>
      ))}
    </div>
  );
};

export default CasualTimeline;
