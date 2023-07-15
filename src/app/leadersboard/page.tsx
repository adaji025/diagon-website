import TimeFilter from "@/components/TimeFilter/TimeFilter";
import React from "react";



const LeadersBoard = () => {
  const leaders = [
    {
      value: 3839456
    },
    {
      value: 1402956
    },
    {
      value: 1023721
    },
    {
      value: 23690
    },
    {
      value: 13512
    },
    {
      value: 9355
    },
    {
      value: 123
    },
    {
      value: 69
    },
  ]
  return (
    <div className="bg-black text-white pt-[200px]">
      <div className="max-w-[1200px] mx-auto  bg-[#1C1C1E] px-8 md:px-20 pb-[200px]">
        <div className="flex justify-between items-center pt-[90px]">
          <div className="flex-1 hidden md:block"></div>
          <div className="flex-1 text-[24px] md:text-[50px]">LEADERBOARD</div>
          <TimeFilter />
        </div>
        <div className="mt-20">
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
                        <img src="/svgs/leaders-avatar.svg" alt="" />
                        <div className="absolute bottom-0 right-0 h-[20px] sm:h-[30px] w-[20px] sm:w-[30px] rounded-full border-2 border-[#0F0F0F] bg-[#00C04E] flex justify-center items-center z-10">
                          <img src="/svgs/award.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="flex justify-end">
                      <div className={`flex gap-1 justify-center items-center bg-[#292929] rounded-[50px] px-5 py-2 ml-auto max-w-[224px] `}>
                        <img src="/svgs/ticket.svg" alt="" />
                        <div className={`text-sm sm:text-base ${leader.value > 1000000 ? "text-[#FDD015]" : "text-white"}`}>{leader.value.toLocaleString()}</div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadersBoard;
