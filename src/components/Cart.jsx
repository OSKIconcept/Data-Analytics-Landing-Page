import React from "react";
import Invest from "../Assets/Invest.png";
import People from "../Assets/People.png";
import Peps from "../Assets/Peps.png";

export default function Cart() {
  return (
    <div className="w-full px-4 bg-white py-[10rem]">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-[1.2rem]">
        <div className="w-full shadow-xl flex flex-col py-8 my-8 rounded-lg  hover:scale-105 duration-300 mx-auto">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Invest}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className=" text-center font-bold text-4xl">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md cursor-pointer py-3  font-medium w-[200px] my-6 mx-auto hover:text-white hover:bg-green-600 ease-out duration-500 ">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col py-8 my-8 rounded-lg  hover:scale-105 duration-300 md:my-0">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={People}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className=" text-center font-bold text-4xl">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-black text-[#00df9a] rounded-md cursor-pointer py-3  font-medium w-[200px] my-6 hover:text-white hover:bg-green-600 ease-out duration-500 mx-auto">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col py-8 my-8 rounded-lg  hover:scale-105 duration-300 ">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Peps} alt="" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className=" text-center font-bold text-4xl">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md cursor-pointer py-3  font-medium w-[200px] my-6 mx-auto hover:text-white hover:bg-green-600 ease-out duration-500 ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}
