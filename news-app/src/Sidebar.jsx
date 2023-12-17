import React from "react";
import {
HomeIcon, GlobeAsiaAustraliaIcon, BriefcaseIcon, PlayIcon, CommandLineIcon,CheckCircleIcon,EnvelopeIcon} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="bg-[#f5f7f8]  rounded-3xl mt-10 fixed">
      <div className="flex flex-col gap-3 p-3">
        <img
          alt="profile"
          className="w-[50px] h-[50px] mask mask-squircle"
          src="https://www.fakepersongenerator.com/Face/female/female1021576215485.jpg"
        ></img>
        <span className="font-bold">Feb 02, 2023</span>
        <span>08:43 AM</span>

        <div className="flex flex-col gap-6 mt-10">
          <button className="flex flex-row gap-5 items-center ">
            <HomeIcon className=" p-2 w-[40px] h-[40px] bg-[#d2d2d2] hover:bg-indigo-600 hover:text-white text-slate-600 mask mask-squircle" />
            <span>Home</span>
          </button>

          <button className="flex flex-row gap-5 items-center">
            <GlobeAsiaAustraliaIcon className=" p-2 w-[40px] h-[40px] bg-[#d2d2d2] hover:bg-indigo-600 hover:text-white text-slate-600 mask mask-squircle" />
            <span>International</span>
          </button>

          <button className="flex flex-row gap-5 items-center">
            <BriefcaseIcon className=" p-2 w-[40px] h-[40px] bg-[#d2d2d2] hover:bg-indigo-600 hover:text-white text-slate-600 mask mask-squircle" />
            <span>Business</span>
          </button>

          <button className="flex flex-row gap-5 items-center">
            <PlayIcon className=" p-2 w-[40px] h-[40px] bg-[#d2d2d2] hover:bg-indigo-600 hover:text-white text-slate-600 mask mask-squircle" />
            <span>Entertainment</span>
          </button>

          <button className="flex flex-row gap-5 items-center">
            <CommandLineIcon className=" p-2 w-[40px] h-[40px] bg-[#d2d2d2] hover:bg-indigo-600 hover:text-white text-slate-600 mask mask-squircle" />
            <span>Technology</span>
          </button>

          <button className="flex flex-row gap-5 items-center">
            <CheckCircleIcon className=" p-2 w-[40px] h-[40px] bg-[#d2d2d2] hover:bg-indigo-600 hover:text-white text-slate-600 mask mask-squircle" />
            <span>Health</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
