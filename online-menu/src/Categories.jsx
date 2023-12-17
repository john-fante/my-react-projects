import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div >
      { categories.map( (category,idx) =>{
        return <button className='btn  btn-outline my-4 mx-4 hover:bg-indigo-600 hover:text-white' type='button' key={idx}
        onClick={()=>filterItems(category)}>
            {category}
        </button>
      } )

      }
    </div>
  )
}

export default Categories
