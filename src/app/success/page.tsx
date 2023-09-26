"use client"
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  return (
    <div className="bg-[#2B00E90D]/5 min-h-screen relative">
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-medium text-center">
          Your form was successfully submitted.
        </h2>
        <button
          className="mt-2 font-bold underline text-[#190087] hover:scale-105 transition-all duration-300"
          onClick={() => router.push("/")}
        >
          Go back to main page
        </button>
      </div>
    </div>
  );
};

export default Success;
