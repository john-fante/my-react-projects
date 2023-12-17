import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { PlayIcon } from '@heroicons/react/24/solid'
import { useSpring,animated, easings, config } from '@react-spring/web'



function App() {
  const url = 'https://course-api.com/react-tabs-project'
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)


  const fetchJobs = async ()=>{
    try{
      const response = await axios.get(url)
      setJobs(response.data);
      setLoading(false)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect( ()=> fetchJobs, [])


  const [springs, api ] = useSpring(()=>{} )
  const basicTransition = ()=>{
    api.start( {
      from : { opacity: 0},
      to:  [ { opacity : 0.3 }, { opacity : 1 } ],
      config : { duration:300 }

    } )
  }

  const handleBtnClick = (idx)=>{
    setValue(idx);
    basicTransition();
  }


  if(loading === true){
    return( 
      <div className='mt-[200px] mx-auto max-w-xl'>
        <div className='loading loading-dots loading-lg text-[#e74c3c]'></div>
      </div>
    )
  }
  const {company, dates, duties, title } = jobs[value]


  return (
    <div className='mx-auto max-w-5xl  '>
      <div className='my-10 py-5 '>
        <h2 className='font-bold text-5xl text-[#e74c3c]'>Jobs</h2>
      </div>

      <div className='grid grid-cols-3 gap-5'> 
        <div className='flex flex-col  w-[50%]'>
        {
          jobs.map( (item, idx)=>{
          
            return (
              <button key={item.id} onClick={()=> handleBtnClick(idx)} 
              className={` text-[#e74c3c]  h-[50px]  my-2 pl-10 ${ idx === value ? ' text-[#e74c3c]/50 shadow-[-4px_0px_#e74c3c]' : "" }`} 

              >{item.company}</button>
            )
          } )
        }
        </div>

        <div className='text-left col-span-2' > 

        <animated.div style={ {...springs} }> 
        <div>
          <h3 className='text-slate-700 text-3xl font-light  ' >{title}</h3>
          <div className='my-5'>
            <span className='bg-[#e74c3c] text-white font-semibold rounded-md p-2'>{company}</span>

          </div>
          <p className='text-slate-500' >{dates}</p>

          <div className='mt-3'>
          { duties.map( (duty, idx)=>{
            return (
              <div key={idx} className='flex  p-2 m-2 items-center'>
                <PlayIcon className=' flex-shrink-0 w-[20px]  text-[#e74c3c] m-4 ' />
                <p className=' text-slate-700 text-justify' >{duty}</p>
              </div>
            )
          } ) }
          </div>

        </div>
        </animated.div>
        </div>

      </div>
    </div>
  )

  
}


export default App
