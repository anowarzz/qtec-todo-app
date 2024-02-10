import React from "react";
import TodoImage from "../assets/task.png";

const HeroSection = () => {
  return (
    <div className="container mt-14 md:mt-20 px-4 lg:px-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6  ">
        <div className="">
          <div className="px-4">
            <h1 className=" font-semibold  text-[#09060c] text-2xl md:text-3xl lg:text-4xl mb-2">
              Turn Chaos into Order
            </h1>
            <h1 className=" font-semibold  text-[#09060c] text-2xl md:text-3xl lg:text-4xl my-2">
              with QTEC TODO
            </h1>
          </div>
          <p className="text-lg my-2 text-gray-500 text-wrap">
            Your personal task management tool. Organize your tasks, prioritize
            your work, and track your progress, all in one place. Start
            achieving more today with @workspace.
          </p>
        </div>
        <div className=" w-2/3  flex justify-center items-center">
          <img src={TodoImage} alt="Todo Image" className="max-w-72" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
