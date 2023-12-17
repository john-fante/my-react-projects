import './App.css'
import Data from './data'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])


  const handleSubmit = (e)=>{
    e.preventDefault();
    let amount = parseInt(count);
    if(amount <= 0 ){
      amount = 1;
    }

    if(amount >8 ){
      amount = 8;
    }
    setText(Data.slice(0,amount))

  }

  return (
    <>
    <section className='mx-auto max-w-5xl mt-10 text-center text-2xl '>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='my-10 flex flex-row items-center justify-center gap-2' onSubmit={handleSubmit}>
        <label htmlFor='amount' className='text-red-600'>Paragraphs:</label>
        <div className='join'> 
        <input type='number' name='amount' id='amount' min="1" max="8" className='input input-bordered input-error join-item ' value={count} onChange={ (e)=>{setCount(e.target.value)} }/>
        <button className='btn btn-error normal-case join-item text-white'>Generate</button>
        </div>
      </form>
      <article>
      {text.map((item, idx)=>{
        return <p className='indent-8 my-4 text-lg text-justify' key={idx}>{item}</p>
      } ) }
      </article>
    </section>  
    </>
  )
}

export default App

