import React from "react";
import { useState } from "react";
import { useSpring, animated, easings } from "@react-spring/web";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import Data from "./data2.js";
import Modal from "./Modal.jsx"



const Card = ({prevHandleClick,nextHandleClick, currentData, currentWordId, springs, pinyins}) => {
      const [data, setData] = useState(Data);
      const [showModal, setShowModal] = useState(false)
      const [springs3, api3] = useSpring(() => ({}));
      
      const otherBasicAnimation = () => {
        api3.start({
        from: { opacity: 0, y: 35 },
        to: [{ opacity: 0.3,  y: 15 }, { opacity: 1,  y: 0  }],
        config: {easing: easings.easeInOut, duration: 120 },
        
      });
    };


    

      const handleModal =()=>{
        setShowModal(()=> !showModal);
        otherBasicAnimation()
      }




  return (
    <div>
    {showModal ? <Modal currentData={currentData}  pinyins={pinyins} handleModal={handleModal} springs={springs3} /> :
        <animated.div style={{ ...springs3 }}>

      <div className="relative sm:mt-15 bg-[#fdfdfd] my-20 p-2 mx-4 drop-shadow-2xl rounded-[30px] sm:h-[350px] h-[380px] flex flex-col ">
        <animated.div style={{ ...springs }}>
        <div className="flex flex-col">
          <span className="sm:text-[4rem] text-[5rem] text-[#525252]">
            {data[currentData].character}
          </span>
          <span className="text-[1.2rem] text-[#6e6e6e]">
          {pinyins}
          </span>
          </div>
        </animated.div>
        <div className="flex flex-row items-center justify-center my-2">
          <div
            className="flex justify-center text-[#525252]/50 hover:text-[#525252]/75 w-full
              hover:cursor-pointer"
            onClick={() => prevHandleClick()}
          >
            {" "}
            <ChevronLeftIcon className="w-[2rem] " />{" "}
          </div>
          <div
            className="flex justify-center text-[#525252]/50 hover:text-[#525252]/75 w-full
              hover:cursor-pointer"
            onClick={() => nextHandleClick()}
          >
            {" "}
            <ChevronRightIcon className="w-[2rem]  " />{" "}
          </div>
        </div>
        <span className="my-10 px-5 font-bold sm:text-[1.5rem] text-[2rem] text-left mt-2 text-[#525252]">
          {data[currentData].english}
        </span>

        <span className="mb-1 px-5 text-[1.2rem] sm:text-[1.1rem] text-left mt-2 text-[#525252]">
          {data[currentData].examples.chinese}
        </span>
        <span className="px-5 text-[0.9rem] sm:text-[0.8rem] text-left text-[#525252]/50">
          {data[currentData].examples.english}
        </span>

        <div className="absolute bottom-3 right-3 flex justify-end gap-2 hover:opacity-80" onClick={handleModal}>
          <button className="relative flex h-8 w-8 items-center justify-center">
            <span className=" absolute inline-flex h-full w-full  rounded-full bg-[#ee6f4c]  opacity-10"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-[#ee6f4c] "></span>
          </button>
        </div>
      </div>
      </animated.div>
      }
    </div>
  );
};

export default Card;
