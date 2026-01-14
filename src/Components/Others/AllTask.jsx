import React, { useContext } from 'react'
import { AuthContext } from '../../Contex/AuthProvider'

const AllTask = () => {

  const userData = useContext(AuthContext)

  return (
    <div className='w-full flex justify-center mt-[2vh] flex-1 min-h-0'>
      <div className='w-[90%] bg-zinc-800 px-7 py-5 rounded-[25px] h-full flex flex-col'>
         <div className='bg-gray-300 mb-2 flex justify-between rounded-[10px] px-5 py-2 flex-shrink-0'>
            <h2 className='text-lg font-medium '>Employee Name</h2>
            <h3 className='text-lg font-medium '>New Task</h3>
            <h5 className='text-lg font-medium '>Active Task</h5>
            <h5 className='text-lg font-medium '>Completed</h5>
            <h5 className='text-lg font-medium '>Failed</h5>
        </div>
        <div className='overflow-auto scrollbar-hide flex-1'>
           {userData?.employee?.map(function(elem,idx){
            return <div key={idx} className='border-2 bg-yellow-300 mb-2 py-2 px-10 flex justify-between rounded-[10px]'>
            <h2 className='text-lg font-medium '>{elem.firstName}</h2>
            <h3 className='text-lg font-medium  text-black'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium  text-black'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium  text-green-600'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium  text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
      </div>
    </div>
  )
}

export default AllTask
