import React  from "react";
import Data from "./data2.js";
import { useState } from "react";
import { useSpring, animated, easings } from "@react-spring/web";
import { Bars3BottomLeftIcon, ChevronRightIcon, ChevronLeftIcon, CheckCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";



const Modal = ({currentData , pinyins, handleModal , springs }) => {
    const [data, setData] = useState(Data);

    console.log(data[currentData].character)
    

    return (
    <div>
    <animated.div style={{ ...springs }}>
    <div className="relative sm:mt-15 bg-[#fdfdfd] my-20 p-2 mx-4 drop-shadow-2xl rounded-[30px] sm:h-[350px] h-[380px] flex flex-col ">

        <div className="flex flex-col">
            <span className="sm:text-[8rem] text-[8rem] text-[#525252]">
            {data[currentData].character}
            </span>
            <span className="text-[1.4rem] text-[#6e6e6e]">
            {pinyins}
            </span>
            
        </div>
        <div className="absolute bottom-3 right-3 flex justify-end gap-2 hover:opacity-80" onClick={handleModal}>
            <button className="relative flex h-8 w-8 items-center justify-center">
                <span className=" absolute inline-flex h-full w-full  rounded-full bg-[#ee6f4c]  opacity-10"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-[#ee6f4c] justify-center"> <XMarkIcon className="text-white w-[18px]" /> </span>
                
            </button>
        </div>
          <div className=" flex flex-row justify-center mt-3 h-10 w-full px-2">
            <div className="tooltip  flex items-center justify-center bg-white  text-white hover:opacity-80 w-full
                hover:cursor-pointer" data-tip="I know" >
              <CheckCircleIcon className="w-[4rem] text-[#2ECC71]  " />

            </div>

            <div className="tooltip flex items-center  justify-center bg-white text-white  hover:opacity-80 w-full
              hover:cursor-pointer " data-tip="I don't know">
              <XCircleIcon className="w-[4rem] text-[#E74C3C]" />

            </div>
          </div>
    </div>
    </animated.div>
    </div>
    );
};

export default Modal;
