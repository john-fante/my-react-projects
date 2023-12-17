import './App.css'
import { useState } from 'react'
import data from './data';
import List from './List';
import {IoMdPersonAdd} from 'react-icons/io'
import {RxReset} from 'react-icons/rx'
import { NewUser } from './NewUser';
import { useAutoAnimate } from '@formkit/auto-animate/react'

function App() {
  const [animationParent] = useAutoAnimate()
  const [people, setPeople] = useState(data)
  const [newUser, setNewUser] = useState(false)

  function addNewUser(){
    setNewUser(true)
  }
  
  function reset(){
    setNewUser(false)
    setPeople(data)

  }


  return (
    <>
      <div className='mx-auto max-w-md mt-10 bg-purple-100 p-2 rounded-md shadow-md'>
        <div className='indicator bg-white/50 p-2 rounded-md border-b-2 my-4 border-slate-400 border-dashed mx-auto flex items-center'>
          <span className='indicator-item badge badge-neutral text-white font-bold '>{people.length}</span>
          <h3 className='text-center font-bold text-[40px] text-slate-700 ' >Birthdays Today</h3>
        </div>
        <div className='flex flex-row gap-3 items-center justify-center mb-5'>
          <button onClick={ ()=> setPeople( [] ) } className='btn btn-outline p-2 mt-5' >Clear all</button>
          <button onClick={ reset } className='btn btn-outline p-2 mt-5' ><RxReset className='text-2xl' /> reset</button  >
          <button onClick={ addNewUser } className='btn btn-success p-2 mt-5' ><IoMdPersonAdd className='text-2xl' />Add user</button  >

        </div>
        {newUser ? <NewUser ref={animationParent} /> : <List ref={animationParent} people={people}/>}
        
    

      </div>

      
    </>
  )
}

export default App
