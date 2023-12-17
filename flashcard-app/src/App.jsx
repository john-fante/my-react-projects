import "./App.css";
import Data from "./data2.js";
import { useState } from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { useSpring, animated, easings } from "@react-spring/web";
import Slider from "./Slider";
import Card from "./Card";
import {pinyin} from 'pinyin-pro'


function App() {
  const [data, setData] = useState(Data);
  const [currentData, setCurrentData] = useState(0);
  const currentWordId = data[currentData].id;
  const pinyins = pinyin(data[currentData].character)
  const [springs, api] = useSpring(() => ({}));

  {/* next button */}
  const nextHandleClick = () => {
    setCurrentData((e) => e + 1);
    mainWordAnimation();
    otherBasicAnimation()
    api.start({
      from: { y: 0, opacity: 0 },
      to: [
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1 },
      ],

      config: { easing: easings.easeOutQuart, duration: 300 },
    });

  };

    {/* previous button */}
  const prevHandleClick = () => {
    if (currentData === 0){
      setCurrentData(data.length-1)}

    setCurrentData((e) => e - 1);
    mainWordAnimation();
    api.start({
      from: { y: 0, opacity: 0 },
      to: [
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1 },
      ],

      config: { easing: easings.easeOutQuart, duration: 300 },
    });
  };

  const [springs2, api2] = useSpring(() => ({}));

  const mainWordAnimation = () => {
    api2.start({
      from: { opacity: 0 },
      to: [{ opacity: 0.3 }, { opacity: 1 }],
      config: { duration: 300 },
    });
  };

  const [springs3, api3] = useSpring(() => ({}));

      const otherBasicAnimation = () => {
        api3.start({
        from: { opacity: 0 , scale:1 },
        to: [{ opacity: 1 ,scale:1.2 }, { opacity: 1 , scale:1 }],
        config: {easing: easings.easeInOutBack},
        
      });
    };

  

  return (
    <div >
      <div className="mt-5 sm:mx-auto sm:max-w-sm  mx-auto max-w-md h-[700px] bg-[#f2f2f2] rounded-[40px]">
        <div className="mt-1 sm:mt-0">
          <div className="sm:mx-1 px-5 pt-3 mx-4 flex flex-row items-center justify-between">
            <button>
              <Bars3BottomLeftIcon className="w-[2.5rem] " />
            </button>
            <div className="flex items-center gap-2">
              <span className="relative flex sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee6f4c]  opacity-75"></span>
                <span className="relative inline-flex rounded-full sm:h-3 sm:w-3 h-4 w-4 bg-[#ee6f4c]"></span>
              </span>
              <animated.span style={{ ...springs3 }}>
              <span className="sm:text-[30px] text-[40px] font-bold text-[#525252] ">
                {" "}
                {currentWordId}
              </span>
              </animated.span>
            </div>
          </div>
          <div className="sm:px-2 px-5 mx-4 -translate-y-2 flex justify-end">
            <span className=" sm:text-[18px] text-[20px] text-[#dbdbdb] font-bold">
              {" "}
              /{data.length}
            </span>
          </div>

          <div className=" w-full h-[80px] "></div>

          <Slider currentData={currentData} currentWordId={currentWordId} springs={springs} />

        

          <Card prevHandleClick={prevHandleClick} nextHandleClick={nextHandleClick} 
          currentData={currentData} currentWordId={currentWordId} springs={springs2}
          pinyins ={pinyins} />





        </div>
      </div>
    </div>
  );
}

export default App;
