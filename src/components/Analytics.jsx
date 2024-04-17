import React from "react";
import Know from "../Assets/know.png";

export default function Analytics() {
  return (
    <div className="bg-white py-4 w-full">
      <div className="max-w-[1240px] mx-auto  md:flex ">
        <img src={Know} alt="" className="w-[500px] mx-auto  my-4" />
        <div className="flex flex-col justify-center mx-4">
          <p className="font-bold text-[#00df9a]"> DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            reprehenderit accusamus molestiae dolor, adipisci commodi veritatis
            itaque, debitis excepturi quos sit iste eligendi in eum quod nobis
            ut facere cum.
          </p>
          <button className="text-[#00df9a] bg-black rounded cursor-pointer py-3  font-bold w-[200px] mx-auto my-6 md:mx-0 hover:text-white hover:bg-green-600 ease-out duration-500 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
