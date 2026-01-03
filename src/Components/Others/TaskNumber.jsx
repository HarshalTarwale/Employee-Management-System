import React from 'react'

const TaskNumber = () => {
  return (
    <div className='flex mt-15 justify-between gap-5 w-full'>
      <div className='task rounded-[15px] w-1/2 bg-blue-400 py-5 px-10 text-white'>
        <h2 className='font-bold text-5xl'>0</h2>
        <h2 className='font-bold text-3xl mt-2'>New Task</h2>
      </div>
      <div className='task rounded-[15px] w-1/2 bg-green-400 py-5 px-10 text-white'>
        <h2 className='font-bold text-5xl'>0</h2>
        <h2 className='font-bold text-3xl mt-2'>New Task</h2>
      </div>
       <div className='task rounded-[15px] w-1/2 bg-red-400 py-5 px-10 text-white'>
        <h2 className='font-bold text-5xl'>0</h2>
        <h2 className='font-bold text-3xl mt-2'>New Task</h2>
      </div>
       <div className='task rounded-[15px] w-1/2 bg-yellow-400 py-5 px-10 text-white'>
        <h2 className='font-bold text-5xl'>0</h2>
        <h2 className='font-bold text-3xl mt-2'>New Task</h2>
      </div>
    </div>
  )
}

export default TaskNumber
