import './App.css'
import { useEffect, useState } from 'react';
import Loading from './Loading'
import Post from './Post';
import Posts from './Posts';



const url = "https://jsonplaceholder.typicode.com/posts"

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchPosts(){
    try{
      const response = await fetch(url);
      const posts = await response.json();
      setData(posts)
      setLoading(false)
    }
    catch(err){
      setLoading(false)
      console.log(err)
    }
  } 

  useEffect( ()=>{
    fetchPosts();
  }, [] )


  if(loading){
    return ( <div>
      <Loading />
    </div>)
  }


  return (
    <div className='mx-auto max-w-screen-xl'>
     <Posts data={data}   />
    </div>
  )
}

export default App
