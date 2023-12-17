import React from 'react'
import { useState } from 'react'

const Tour = ({ id, image, info,  name, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false)

  return (
    <div className='bg-blue-100 shadow-sm hover:shadow-xl rounded-md mx-5 mb-5 relative' >
        <img src={image} alt={name} className='rounded-tr-md rounded-tl-md w-[25rem] h-[25rem] object-cover block overflow-clip ' /> 
        <footer className='my-4'>
            <div>
                <h4 className='text-slate-800 font-bold my-2 ' >{name}</h4>
                <h4 className='font-bold absolute top-0 right-0 rounded-bl-md rounded-tr-md bg-red-600 text-white text-md p-2 '>${price}</h4>
            </div>
            
            <p className='p-3'>
                {readMore ? info : `${info.substring(0,150)}...`}
                <button className='text-red-600 font-bold ' onClick={()=>setReadMore(!readMore)}> 
                    {readMore ? " show less " : " read more "}
                </button>
            </p>

            <button className=' p-4 text-black btn btn-warning' onClick={()=>removeTour(id)}>not interested</button>


        </footer>
    </div>
  )
}

export default Tour
