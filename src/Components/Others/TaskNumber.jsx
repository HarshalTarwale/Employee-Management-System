import React from 'react'

const TaskNumber = ({data}) => {
  // Calculate task counts from the employee's tasks array
  const tasks = data?.tasks || []
  
  // Count new tasks (active tasks that are not completed or failed)
  const newTask = tasks.filter(task => task.active && !task.failed).length
  
  // Count active tasks
  const activeTask = tasks.filter(task => task.active).length
  
  // Count complicated tasks
  const complicatedTask = tasks.filter(task => task.complicated).length
  
  // Count failed tasks
  const failedTask = tasks.filter(task => task.failed).length

  return (
    <div className='flex mt-15 justify-between gap-5 w-full'>
      <div className='task rounded-[15px] w-1/2 bg-blue-400 py-5 px-10 text-white'>
        <h2 className='font-bold text-5xl'>{newTask}</h2>
        <h2 className='font-bold text-3xl mt-2'>New Task</h2>
      </div>
      <div className='task rounded-[15px] w-1/2 bg-yellow-400 py-5 px-10 text-white'>
        <h2 className='font-bold text-5xl'>{activeTask}</h2>
        <h2 className='font-bold text-3xl mt-2'>Active</h2>
      </div>
       <div className='task rounded-[15px] w-1/2 bg-green-400 py-5 px-10 text-white'>
        <h2 className='font-bold text-5xl'>{complicatedTask}</h2>
        <h2 className='font-bold text-3xl mt-2'>Complicated</h2>
      </div>
       <div className='task rounded-[15px] w-1/2 bg-red-400 py-5 px-10 text-white'>
        <h2 className='font-bold text-5xl'>{failedTask}</h2>
        <h2 className='font-bold text-3xl mt-2'>Failed</h2>
      </div>
    </div>
  )
}

export default TaskNumber
