import React from 'react'
import Headder from '../Others/Headder'
import TaskNumber from '../Others/TaskNumber'
import TaskList from '../Others/TaskList'

const EmployeeDashbord = () => {
  return (
    <div className='bg-[#1b1a1a] h-screen w-screen py-9 px-10'>
      <Headder/>
      <TaskNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashbord
