"use client"
import React, { useState, useEffect } from "react";
import numeral from 'numeral';

interface LeaderData {
  username: string;
  value: number;
  challenge: number;
  avatar: string;
  // Add other properties that are present in the leader data
}

const LeadersBoard = () => {
  const [leaders, setLeaders] = useState<LeaderData[]>([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const res = await fetch(`https://api.diagon.gg/leaderboard?limit=50`);
        const leaders = await res.json();

        // Add number 1 to 50 to each data in the `leaders` array
        const leadersWithNumber = leaders.map((leader: LeaderData, index: number) => {
          const number = index + 1;
          return {
            ...leader,
            number: numeral(number).format("0"),
          };
        });

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

        <table className="table-fixed w-full border-separate border-spacing-y-10">
          <thead className="bg-[#FDD015] text-black">
            <tr>
              <th className="py-5 pl-5 sm:pl-10 text-left">CAUSAL GAMERS</th>
              <th className="py-5 text-right pr-5 sm:pr-10">POINTS</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-5 sm:gap-10">
                    {index + 1}
                    <div className="flex h-[60px] sm:h-[80px] w-[60px] sm:w-[80px] rounded-full relative border-2 border-white/20">
                      <img
                        className="rounded-full"
                        src={
                          "/images/avatars/" + leader.avatar + ".png"
                        }

                        alt={leader.avatar}
                      />
                      <div className="absolute bottom-0 right-0 h-[20px] sm:h-[30px] w-[20px] sm:w-[30px] rounded-full border-2 border-[#0F0F0F] bg-[#00C04E] flex justify-center items-center z-10">
                        <img src="/svgs/award.svg" alt="" />
                      </div>
                    </div>

                    {leader.username}
                  </div>
                </td>
                <td className="text-right">
                  <div className="flex justify-end">
                    <div className={`flex gap-1 justify-center items-center bg-[#292929] rounded-[50px] px-5 py-2 ml-auto max-w-[224px] `}>
                      <img src="/svgs/ticket.svg" alt="" />
                      <div className="text-sm sm:text-base  text-[#FDD015]">  {numeral(leader.challenge).format("0,0")}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadersBoard;
