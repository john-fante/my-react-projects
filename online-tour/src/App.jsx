import './App.css'
import Loading from './Loading'
import Tour from './Tour'
import Tours from './Tours'
import { useState, useEffect } from 'react'
import data from './data'

const url = 'https://course-api.com/react-tours-project'
const expUrl = 'https://jsonplaceholder.typicode.com/posts'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter( (tour)=>tour.id != id )
    setTours(newTours)
  }

  async function fetchTours(){
    setLoading(true)
    try{
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  
  useEffect(()=>{
    fetchTours()
  },[])

  

  if(loading){
    return(
      <div>
        <Loading />
      </div>
    )
  }
  if(tours.length === 0){
    return(
      <div>
      <div className=' text-red-500 font-bold'>
        <h2>No Tours Left</h2>
        <button className='btn btn-warning' onClick={ ()=>fetchTours() }>Refresh</button>
      </div>
    </div>
    )
  }


  return(
    <div>
      <Tours tours ={tours} removeTour = {removeTour} />
    </div>
  )



}

export default App
