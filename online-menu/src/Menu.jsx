import React from 'react'

const Menu = ({items}) => {
  return (
    <>
      { items.map( (menuItems)=>{
        const {id, title, img, desc, price} = menuItems
        return (
          <div  key={id} className='dark:bg-indigo-600 dark:border-2 dark:hover:shadow-gray-100/10 bg-indigo-200 mt-5 rounded-lg hover:shadow-xl hover:-translate-y-1
          transition ease-in-out delay-50 '>
            <img className='h-[200px] w-[100%] object-cover rounded-t-lg' src={img} alt={title} />
            <div>
              <div className='flex p-3 gap-2 justify-around mt-4'>
                <h4 className='dark:text-white justify-right text-xl'>{title.toUpperCase()}</h4>
                <h4 className='dark:text-indigo-600 text-2xl bg-yellow-400 w-[100px] rounded-lg'>${price}</h4>
              </div>
              <p className='p-5 text-xl font-thin dark:text-white'>{desc}</p>

            </div>
          </div>
        )
      } )

      }
    </>
  )
}

export default Menu
