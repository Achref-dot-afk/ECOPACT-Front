import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Linechart from '../components/Linechart'
import Piechart from '../components/Piechart'
import Heading from '../components/Heading'
import './Home.css'
const Home = () => {
  return (
    <>
    <div><Sidebar/></div>
    <div className='top ml-60'>
      <div className='tbar'><Topbar/></div>
      <Heading></Heading>
      <div className='flex w-full items-center '>
         <div style={{width:600,height:350}}>
           <Linechart></Linechart>
         </div>
         <div style={{width:400,height:300}}>
           <Piechart/>
         </div>
      </div>
    </div>
    </>
  )
}

export default Home