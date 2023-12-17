import './App.css'
import Sidebar from './Sidebar'
import { SunIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { HomeIcon, GlobeAsiaAustraliaIcon, BriefcaseIcon, PlayIcon,
CommandLineIcon, CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import img1 from './assets/building.jpg'
import img2 from './assets/cauliflower.jpg'
import img3 from './assets/leaf.jpeg'
import img4 from './assets/women.png'
import { PiNewspaperThin } from 'react-icons/pi';
import { BsArrowRightShort, BsFillCloudHaze2Fill, BsPlayCircle, BsFillPlayCircleFill } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';




function App() {
  const name = 'Rose'

  
  return (
    <div className='mx-auto mt-10 grid grid-cols-6 gap-2'>

      <div className='col-span-1 mx-3'>
      <Sidebar />
      </div>

      <div  className='col-span-5 px-10'>

      <div className='bg-white flex justify-around'>
        <div className='flex flex-row items-center gap-3'>
        <SunIcon className='w-[25px] h-[25px] text-[#f1c40f]' />
        <span className='text-[2rem] text-[#343435]'> Good Morning, <span className='text-[#8b8b8c]'>  {name} </span></span>
        </div>
        
        <div className="join">
        <input className="input border-slate-300 join-item  " placeholder="Search for articles"/>
        <button className="btn join-item bg-indigo-600"> <MagnifyingGlassIcon  className='w-[25px] h-[25px] text-white font-bold'/> </button>
        </div>
      </div>


      <div className='bg-[#f5f7f8] grid grid-cols-3 gap-10 mt-28 m-2 p-10 rounded-3xl '>

      <div className=' col-span-2 p-2  bg-white  drop-shadow-2xl rounded-3xl grid grid-cols-3 gap-4  -translate-y-20'>
      <div className='relative  w-full h-full rounded-3xl'>
        <img alt='building' className=" p-1 w-full h-full  object-cover  absolute rounded-3xl" src={img1} ></img>
      </div>

      <div className='col-span-2 p-3'> 
      <div>
      <span className=' text-[#8b8b8c] '>Architecture</span>
      <p className='my-5 font-semibold text-xl'> Ground breaking building is a classic example of English architecture</p>
      </div>

      <div className='flex mt-12'>
      <img className='mask mask-squircle w-[50px] h-[50px] ' src='https://www.fakepersongenerator.com/Face/male/male1084127121796.jpg' alt='person'></img>
      <div className='flex flex-col ml-4'>
      <span >Tony Roseville</span>
      <span className='text-[#8b8b8c] text-sm' >Jul 13, 2023</span>


      </div>
      </div>


      </div>

      </div>

      <div className=' bg-white drop-shadow-2xl rounded-3xl  -translate-y-20'> {/* 2.kutu */}

      <div className='bg-[#ebeced] rounded-3xl grid grid-cols-3 gap-1 m-2 p-5'>
      <div className='col-span-1'> 
      <PiNewspaperThin className='text-[50px] ' />
      </div>

      <div className='col-span-2 flex flex-col'>
      <span className='font-semibold'>Tuesday Capsule</span>
      <span className='text-[#8b8b8c]'>Get updated on the fly</span>
      <span className='flex items-center  text-indigo-600 mt-2'>Brief me  <BsArrowRightShort /> </span>
      </div>

      </div>

  
      <div className='m-1 p-2' >
      <span>Amsterdam, Netherlands</span>

      <div className='flex flex-row gap-4 m-1 items-center p-2'>
      <span><BsFillCloudHaze2Fill className='text-[#f1c40f] text-4xl'/> </span>
      <div className='flex flex-col'>
      <span><span className='font-semibold text-2xl'> 28 </span> °C</span>
      <span>Cloud day, chances of rain</span>
      </div>
      </div>

      </div>

      </div>

      <div className=' bg-white drop-shadow-2xl rounded-3xl h-[150px]  -translate-y-20'> {/* 3.kutu */}

      <div className='m-1 p-5'>

      <span className='font-semibold my-3'>Subscribe to Newsletter</span>

      <div className="join mt-3">
        <input className="input  bg-[#ebeced] join-item  " placeholder="Enter email"/>
        <button className="btn join-item bg-indigo-600"> <EnvelopeIcon  className='hover:text-indigo-600 w-[25px] h-[25px] text-white font-bold'/> </button>
      </div>
      
      
      </div>
  

      </div>



      <div className=' bg-white drop-shadow-2xl rounded-3xl h-[150px]  -translate-y-20'> {/* 4.kutu */}

      <div className=' grid grid-cols-2 m-1 p-1 gap-2' >
      
      <div className=' col-span-1  relative w-full h-full rounded-3xl'>
        <img alt='building' className=" p-1 w-full h-full  object-cover  absolute rounded-3xl" src={img2} ></img>
        <BsFillPlayCircleFill  className='relative object-left-top m-4 text-2xl text-indigo-600'/>
      </div>

      <div className='col-span-1 mx-2 m-6 '>
      <div className=' flex flex-row gap-2 items-center' > <AiOutlineEye />  <span>12,090</span> </div>
      <p className='font-semibold my-2' >The benefits of Cauliflower</p>
      </div>



      </div>

      </div>


  <div className=' bg-white drop-shadow-2xl rounded-3xl h-[150px]  -translate-y-20'> {/* 5.kutu */}

      <div className=' grid grid-cols-2 m-1 p-1 gap-2' >
      
      <div className=' col-span-1  relative w-full h-full rounded-3xl'>
        <img alt='building' className=" p-1 w-full h-full  object-cover  absolute rounded-3xl" src={img3} ></img>
        <BsFillPlayCircleFill  className='relative object-left-top m-4 text-2xl text-indigo-600'/>
      </div>

      <div className='col-span-1 mx-2 m-6'>
      <div className=' flex flex-row gap-2 items-center' > <AiOutlineEye />  <span>12,090</span> </div>
      <p className='font-semibold my-2'  >Let us plant more trees this year</p>
      </div>



      </div>

      </div>



    <div className=' col-span-3 p-3  bg-white  drop-shadow-2xl rounded-3xl grid grid-cols-3 gap-4  -translate-y-20 h-[230px]  '>
      <div className='col-span-3 p-3  bg-[#eef5e6] rounded-3xl grid grid-cols-4 gap-4'> 
      <div className='col-span-3 '>
      <span className="badge bg-[#99c284] text-white p-4 my-2 rounded-md font-semibold flex flex-col ">Featured</span>
      <h1 className='my-2 font-semibold text-xl'>Natural mood regulation low or even absent in people with depression</h1>
      <span className='text-[#8b8b8c]' >Mood varies from hour-to-hour and healthy mood regulation involves choosing activities that help settle ones mood.</span>
      </div>
      <div className='col-span-1 h-[180px] flex justify-center'>
      <img className='h-full object-cover' src={img4} alt='depressed women'></img>
      </div>

      </div>


    

      </div>

      



      </div>

      </div>


    </div>
  )
}

export default App
