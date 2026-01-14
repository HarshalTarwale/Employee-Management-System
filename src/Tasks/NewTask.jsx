import React from 'react'

const NewTask = ({data, employeeId}) => {
  
  const handleAccept = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const employee = employees.find(emp => emp.id === employeeId)
    
    if (employee) {
      const task = employee.tasks.find(t => t.id === data.id)
      if (task) {
        task.status = 'active'
        employee.taskCounts.newTask = employee.taskCounts.newTask - 1
        
        localStorage.setItem('employees', JSON.stringify(employees))
        window.location.reload()
      }
    }
  }
  
  return (
    <div>
        <div className="bg-zinc-800 w-[26vw] h-[45vh] rounded-[15px] flex-shrink-0 p-5 px-7 text-white">
        <div className="flex justify-between text-white items-center">
          <h2 className="bg-red-400 py-1 px-3 rounded-[5px] font-semibold">
            {data.category}
          </h2>
          <h2 className="font-semibold">{data.date}</h2>
        </div>
        <div className="mt-9">
          <h1 className="text-[28px] font-semibold">
           {data.title}
          </h1>
          <p className="mt-3">
            {data.description}
          </p>
        </div>
         <div className='flex gap-[1vw] mt-[25px] '>
            <button onClick={handleAccept} className='bg-green-400 px-3 py-1 rounded-[5px] font-semibold'>Accept</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
