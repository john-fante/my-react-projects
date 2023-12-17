import React from 'react'
import Tour from './Tour'


const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <div>
        <h2 className='text-red-600 font-bold text-2xl'>Our Tours</h2>
        <div className="divider"></div> 
      </div>

      <div className='grid grid-cols-3 gap-2 items-center '>
        { tours.map( (ele) =>{ 
            return <Tour key={ele.id} {...ele} removeTour = {removeTour}/>


        } ) }
    
      </div>
    </div>
  )
}

export default Tours
