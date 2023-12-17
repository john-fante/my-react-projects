import React from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'


const List = ( {people} ) => {
  const [animationParent] = useAutoAnimate()

    
  return (
    <div>
      { people.map( (person)=>{
        const {id, name, age ,image} = person;

        return(
            <div ref={animationParent}  key={id} className='flex my-4  mx-4 items-center gap-4 p-1 hover:bg-white/50 hover:rounded-xl
             ' >
                <img className=' w-24 h-24 object-cover mask mask-squircle' src={image} alt={name}/>
                <div className='p-2' >
                    <h4 className='font-bold text-2xl' >{name}</h4>
                    <p className=' text-slate-400 text-base text-left' >{age} years</p>
                </div>

            </div>
        )

      } )

      }
    </div>
  )
}

export default List
