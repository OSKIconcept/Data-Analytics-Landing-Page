import React from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center py-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 "
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] text-black rounded cursor-pointer py-3  font-bold w-[200px] mx-auto my-6 hover:text-white hover:bg-green-600 ease-out duration-500">
          Get Started
        </button>
      </div>
    </div>
  );
}
