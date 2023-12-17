import './App.css'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
const allCategories = ["all", ...new Set( items.map( (ele)=> ele.category ) )]
import { useState } from 'react'


function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)



  const filterItems= (category) => {
    if(category ==="all"){
      setMenuItems(items);
      return ;
    }
    const newItems = items.filter( (item)=> item.category === category )
    setMenuItems(newItems);

  }

  

  return (
    <div >
      <div className='mx-auto flex justify-center'>
        <h2 className=' max-w-sm divide-y-2 border-b-4 border-indigo-200 text-indigo-600 font-bold  text-4xl p-4 '>Our Menu</h2>
      </div>
      <Categories  categories={categories} filterItems={filterItems} />
      <div className='grid grid-cols-3 gap-4 justify-center'>
        <Menu items={menuItems} />
      </div>

     
    </div>
  )
}

export default App
