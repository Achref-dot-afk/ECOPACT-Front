import React from 'react'

const Heading = () => {
  return (
    <div className='flex justify-between items-center mt-5'>
        <div className='ml-10'>
            <h2 className='font-extrabold text-xl text-center'>DASHBOARD</h2>
            <p className='text-lg'>Welcome to your Dashboard</p>
        </div>
        <div className='mr-10 border rounded p-2 hover:bg-indigo-600 transition-all'>
          <input type="file" id="fileInput" placeholder="Select a file"/>
        </div>
    </div>
  )
}

export default Heading