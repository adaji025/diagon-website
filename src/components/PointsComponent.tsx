"use client"

import React, { useState } from 'react'
import PointsTimeline from './Timeline/PointsTimeline'

import styles from "../styles/Home.module.css"

const PointsComponent = () => {
    const [backgroundDivIndex, setBackgroundDivIndex] = useState<number | null>(
        null
      );
  return (
    <div className="bg-black py-5">
        <div className={`py-20 ${styles.shop}`}>
          <div className="flex flex-col md:flex-row gap-10 items-center max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="flex-1 flex justify-center order-2">
              <img
                src={
                  backgroundDivIndex === 0
                    ? "/image/points.png"
                    : backgroundDivIndex === 1
                    ? "/image/points-1.png"
                    : backgroundDivIndex === 2
                    ? "/image/points-2.png"
                    : backgroundDivIndex === 3
                    ? "/image/points-3.png"
                    : backgroundDivIndex === 4
                    ? "/image/points-4.png"
                    : "/image/points-5.png"
                }
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col md:items-center justify-center order-1">
              <PointsTimeline
                {...{backgroundDivIndex, setBackgroundDivIndex }}
              />
              <div className="flex gap-5 mt-10 max-w-[450px]">
                <button className="w-[40%]">
                  <img src="/svgs/apple-btn.svg" alt="" />
                </button>
                <button className="w-[40%]">
                  <img src="/svgs/playstore-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PointsComponent
