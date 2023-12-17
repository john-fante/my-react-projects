import React from 'react'
import { useState } from 'react'
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa'

const Questions = ({ id, title, info}) => {
    const [showInfo, setShowInfo] = useState(false)

  return (
    <div>
        <div className=' border-2 border-slate-300 m-4 p-3 rounded-md' >

            <div className='flex justify-between my-2 ' >
                <h5 className='text-[20px] text-slate-800 '>{id}. {title}</h5>
                <button className='text-[30px]' onClick={ ()=> setShowInfo(!showInfo) } > 
                    {showInfo ? <FaMinusCircle  className=' text-[#1abc9c]'/> : <FaPlusCircle className='text-[#1abc9c]'/> }
                </button>
            </div>

            
                {showInfo && <p className='mx-3 text-slate-600 text-justify' >{info}</p>}
            
            
        </div>
        
    
        

    </div>
  )
}

export default Questions
