import React from 'react'

const Post = ({id, userId, title, body }) => {
  return (
    <div >
      <div className='bg-white rounded-md'>
        <span className="indicator-item badge badge-primary text-white">{id}</span> 
        
        <div>
            <p>{userId}</p>
        </div>
        <h1>{title}</h1>
        <div>
            <p>{body}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
