import React from "react";
import TodoImage from "../assets/task.png";

const HeroSection = () => {
  return (
    <div className=" mt-8 md:mt-12 px-4 lg:px-8 mx-auto md:mb-24 ">
      <div className="flex flex-col md:flex-row justify-end mx-auto items-center gap-6  ">
        <div className="w-full">
          <div className="px-4">
            <h1 className=" font-semibold text-center md:text-left text-[#09060c] text-2xl md:text-3xl lg:text-4xl mb-2">
              Turn Chaos into Order
            </h1>
            <h1 className=" font-semibold text-center md:text-left text-[#09060c] text-2xl md:text-3xl lg:text-4xl my-2 ">
              with QTEC TODO
            </h1>
          </div>
          <p className="text-lg text-gray-500 text-wrap px-4 text-justify mt-4">
            Your personal task management tool. Organize your tasks{" "}
            <br className="hidden md:block" /> and Start achieving more goals
            with QTec Todo.
          </p>
        </div>
        <div className=" w-2/3  flex justify-center items-center  lg:justify-end lg:pr-10">
          <img src={TodoImage} alt="Todo Image" className="max-w-72" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
