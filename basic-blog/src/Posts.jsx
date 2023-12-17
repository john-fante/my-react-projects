import React from 'react'
import Post from './Post'



const Posts = ({data}) => {
  return (
    <div> 
        <div className='border-b-2 pb-4 m-2'>
            <h1 className='text-2xl text-primary font-bold'>My blog</h1>
        </div>

        <div className='grid grid-cols-3 gap-5 mt-2 p-2'>
            { data.map( (item)=>{
                return <Post key={item.id} {...item} />
             } ) }
        </div>
    </div>
  )
}

export default Posts
