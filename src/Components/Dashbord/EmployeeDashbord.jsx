import React from 'react'
import Headder from '../Others/Headder'
import TaskNumber from '../Others/TaskNumber'
import TaskList from '../Others/TaskList'

const EmployeeDashbord = ({data}) => {

  return (
    <div className='bg-[#1b1a1a] h-screen w-screen py-9 px-10'>
      <Headder data={data}/>
      <TaskNumber  data={data}/>
      <TaskList  data={data}/>
    </div>
  )
}

export default EmployeeDashbord
