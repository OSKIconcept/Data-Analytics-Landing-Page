import React from "react";

export default function Newsletter() {
  return (
    <div className="text-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-center items-center">
        <div className="lg:flex-grow-1">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4 mx-12">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-[#00df9a] text-black rounded-md cursor-pointer py-3  font-medium w-[200px] mx-auto my-6 ml-4 hover:text-white hover:bg-green-600 ease-out duration-500">
              Notify Me
            </button>
          </div>
          <p>
            We care about the production of your data.
            <span className="text-[#00df9a]"> Read our privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
