"use client"
import TimeFilter from "@/components/TimeFilter/TimeFilter";
import React, { useState, useEffect } from "react";
import numeral from "numeral";

// ... (previous imports)

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const data = await fetch(`https://api.diagon.gg/leaderboard?limit=50`);
        const leadersData = await data.json();

        const leadersWithNumber = leadersData.map((leader, index) => ({
          ...leader,
          number: numeral(index + 1).format("0"),
        }));

        setLeaders(leadersWithNumber);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <div className="bg-black text-white pt-[200px]">
      <div className="max-w-[1200px] mx-auto  bg-[#1C1C1E] px-8 md:px-20 pb-[200px]">
        {/* ... (rest of the component code) */}
        <tbody>
          {leaders.map((leader, index) => (
            <tr key={index}>
              {/* ... (rest of the table row code) */}
              <td className="text-right">
                <div className="flex justify-end">
                  <div
                    className={`flex gap-1 justify-center items-center bg-[#292929] rounded-[50px] px-5 py-2 ml-auto max-w-[224px] `}
                  >
                    <img src="/svgs/ticket.svg" alt="" />
                    <div
                      className={`text-sm sm:text-base ${
                        leader.value && leader.value > 1000000
                          ? "text-[#FDD015]"
                          : "text-white"
                      }`}
                    >
                      {leader.value ? leader.value.toLocaleString() : "N/A"}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default Leaderboard;
