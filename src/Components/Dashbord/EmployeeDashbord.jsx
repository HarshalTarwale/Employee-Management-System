import React, { useEffect, useState } from 'react'
import Headder from '../Others/Headder'
import TaskNumber from '../Others/TaskNumber'
import TaskList from '../Others/TaskList'

const EmployeeDashbord = ({data}) => {
  const [employeeData, setEmployeeData] = useState(data)

  // Refresh employee data from localStorage
  useEffect(() => {
    const refreshData = () => {
      const employees = JSON.parse(localStorage.getItem('employees'))
      if (employees && data) {
        const updatedEmployee = employees.find(emp => emp.id === data.id)
        if (updatedEmployee) {
          setEmployeeData(updatedEmployee)
        }
      }
    }
    
    refreshData()
    
    // Refresh every 2 seconds to check for new tasks
    const interval = setInterval(refreshData, 2000)
    
    return () => clearInterval(interval)
  }, [data])

  return (
    <div className='bg-[#1b1a1a] h-screen w-screen py-9 px-10'>
      <Headder data={employeeData}/>
      <TaskNumber  data={employeeData}/>
      <TaskList  data={employeeData}/>
    </div>
  )
}

export default EmployeeDashbord
