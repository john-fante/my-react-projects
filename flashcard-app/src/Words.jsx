import React from 'react'
import Data from './data2.js'
import { useState,useEffect, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { easings } from '@react-spring/web'


const Words = ({data,currentData}) => {
  return (
    <div>
      <div className=' px-10 text-[2rem] flex flex-row gap-3 justify-between text-[#525252] '>
        
        <span  className='opacity-20'>{ data[currentData-2].character}</span> 
        <span  className='opacity-[30%]' >{data[currentData-1].character}</span>
        <animated.div
      style={{ 
       ...springs, 
      }}
      > 
        <div className='flex flex-col gap-3 items-center'>  
            <span >{data[currentData].character}</span>
       
          <span className='h-[10px] w-[10px] rounded-full bg-[#525252]'></span>
        </div>
        </animated.div>
        <span  className='opacity-50' >{data[currentData+1].character}</span>
        <span  className='opacity-[30%]' >{data[currentData+2].character}</span>

      </div>
    </div>
  )
}

export default Words
