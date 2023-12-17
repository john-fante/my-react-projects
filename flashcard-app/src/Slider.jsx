import React from "react";
import { useState } from "react";
import Data from "./data2.js";
import { useSpring, animated, easings } from "@react-spring/web";


const Slider = ({currentData, currentWordId, springs}) => {
  const [data, setData] = useState(Data);

  if(currentWordId === 1){
    return (
            <div className=" px-10 text-[2rem] grid grid-cols-5 gap-3 justify-between text-[#525252] ">
            <span className="opacity-20 h-full w-[30px]"> </span>
            <span className="opacity-[30%] h-full w-[30px]"> </span>

            <animated.div style={{ ...springs }}>
              <div className="flex flex-col gap-3 items-center">
                <span>{data[currentData].character}</span>
                <span className="h-[10px] w-[10px] rounded-full bg-[#525252]"></span>
              </div>
            </animated.div>
          
            <span className="opacity-50" >
              {data[currentData + 1].character}
            </span>
            <span className="opacity-[30%]">
              {data[currentData + 2].character}
            </span>
            </div>
    )
  } else if(currentWordId === 2){
    return(
            <div className=" px-10 text-[2rem] grid grid-cols-5 gap-3 justify-between text-[#525252] ">
            <span className="opacity-20"> </span>
            <span className="opacity-[30%]">
              {data[currentData - 1].character}
            </span>

            <animated.div style={{ ...springs }}>
              <div className="flex flex-col gap-3 items-center">
                <span>{data[currentData].character}</span>
                <span className="h-[10px] w-[10px] rounded-full bg-[#525252]"></span>
              </div>
            </animated.div>

            <span className="opacity-50">
              {data[currentData + 1].character}
            </span>
            <span className="opacity-[30%]">
              {data[currentData + 2].character}
            </span>
            </div>
    )

  } else if((currentWordId > 2) & (currentWordId <= data.length - 2)){
    return(
            <div className=" px-10 text-[2rem] grid grid-cols-5 gap-3 justify-between text-[#525252] ">
            <span className="opacity-20">
              {data[currentData - 2].character}
            </span>
            <span className="opacity-[30%]">
              {data[currentData - 1].character}
            </span>

            <animated.div style={{ ...springs }}>
              <div className="flex flex-col gap-3 items-center">
                <span>{data[currentData].character}</span>
                <span className="h-[10px] w-[10px] rounded-full bg-[#525252]"></span>
              </div>
            </animated.div>

            <span className="opacity-50">
              {data[currentData + 1].character}
            </span>
            <span className="opacity-[30%]">
              {data[currentData + 2].character}
            </span>
            </div>

    )
  } else if(currentWordId === data.length - 1){
    return(
            <div className=" px-10 text-[2rem] grid grid-cols-5 gap-3 justify-between text-[#525252] ">
            <span className="opacity-20">
              {data[currentData - 2].character}
            </span>
            <span className="opacity-[30%]">
              {data[currentData - 1].character}
            </span>

            <animated.div style={{ ...springs }}>
              <div className="flex flex-col gap-3 items-center">
                <span>{data[currentData].character}</span>
                <span className="h-[10px] w-[10px] rounded-full bg-[#525252]"></span>
              </div>
            </animated.div>

            <span className="opacity-50">
              {data[currentData + 1].character}
            </span>
            <span className="opacity-[30%]"> </span>
            </div>

    )
  } else if(currentWordId === data.length ){
      return(
            <div className=" px-10 text-[2rem] grid grid-cols-5 justify-between text-[#525252] ">
            <span className="opacity-20">
              {data[currentData - 2].character}
            </span>
            <span className="opacity-[30%]">
              {data[currentData - 1].character}
            </span>

            <animated.div style={{ ...springs }}>
              <div className="flex flex-col gap-3 items-center">
                <span>{data[currentData].character}</span>
                <span className="h-[10px] w-[10px] rounded-full bg-[#525252]"></span>
              </div>
            </animated.div>
            <span className="opacity-50"> </span>
            <span className="opacity-[30%]"> </span>
            </div>
            )

  }



};

export default Slider;
