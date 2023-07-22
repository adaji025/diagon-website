"use client"

import React, { useState } from 'react'
import styles from "../styles/Home.module.css"
import CasualTimeline from './Timeline/CasualTimeline';

const CasualComponent = () => {
    const [backgroundDivIndex, setBackgroundDivIndex] = useState<number | null>(
        null
      );
  return (
    <div className="bg-black py-5">
        <div className={`py-20 ${styles.exp}`}>
          <div className="flex flex-col md:flex-row gap-10 items-center max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="flex-1 flex justify-center order-2 md:order-1">
              <img
                src={
                  backgroundDivIndex === 0
                    ? "/image/casual.png"
                    : backgroundDivIndex === 1
                    ? "/image/casual-1.png"
                    : backgroundDivIndex === 2
                    ? "/image/casual-2.png"
                    : backgroundDivIndex === 3
                    ? "/image/casual-3.png"
                    : "/image/casual.png"
                }
                alt="casual"
                className="transition-all duration-300"
              />
            </div>
            <div className="flex-1 flex flex-col md:items-center justify-center order-1 md:order-2">
              <CasualTimeline
                {...{ backgroundDivIndex, setBackgroundDivIndex }}
              />
              <div className="flex gap-5 mt-10">
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

export default CasualComponent
