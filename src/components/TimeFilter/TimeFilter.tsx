"use client"

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../Svg/Svg";

const TimeFilter = () => {
  return (
    <div className="w-56 text-right flex-1">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-full bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          All Time
            <ChevronDownIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-[#131317] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#FDD015] text-black" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                   All Time
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#FDD015] text-black" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    This Week
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#FDD015] text-black" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Last Week
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#FDD015] text-black" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    This Month
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }: any) => (
                  <button
                    className={`${
                      active ? "bg-[#FDD015] text-black" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    This Year
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default TimeFilter;
