import './App.css'
import data from './data'
import { useState } from 'react'
import Questions from './Questions'
import {MdOutlineQuestionAnswer} from 'react-icons/md'


function App() {
  const [questions, setQuestions ] = useState(data)

  return (
    <div className='mx-auto max-w-2xl mt-[80px] rounded-lg bg-white shadow-sm hover:shadow-xl'>
      <div>
        <div className='flex items-center justify-center pt-5 animate-pulse delay-100'>
          <h3 className='text-[50px] text-center'>Questions </h3>
          <span className='ml-2 text-[50px] text-[#1abc9c]' ><MdOutlineQuestionAnswer /></span>
        </div>
        <div className='p-5 m-2 '>
          {
            questions.map( (q) =>{
              return ( <Questions key={q.id} {...q} />)
            } )
          }
        </div>
      </div> 
    </div>
  )
}

export default App
