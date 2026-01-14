import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contex/AuthProvider";

const CreateTask = () => {

   const userData = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = { 
            id: Date.now(),
            title: taskTitle, 
            description: taskDescription, 
            date: taskDate, 
            category, 
            active: true, 
            complicated: false,
            failed: false, 
            status: 'newTask'
        }

        console.log('New Task Created:', newTask)

        const employees = userData?.employee

        if (employees) {
            let taskAssigned = false
            employees.forEach(function (elem) {
                if (asignTo === elem.firstName) {
                    elem.tasks.push(newTask)
                    elem.taskCounts.newTask = elem.taskCounts.newTask + 1
                    elem.taskCounts.active = elem.taskCounts.active + 1
                    taskAssigned = true
                    console.log('Task assigned to:', elem.firstName)
                    console.log('Updated employee data:', elem)
                }
            })
            
            if (!taskAssigned) {
                alert('Employee not found! Please check the name.')
                return
            }

            // Update localStorage
            localStorage.setItem('employees', JSON.stringify(employees))
            console.log('Updated employees in localStorage:', employees)
            
            // Reload the page to refresh the data
            window.location.reload()
        } else {
            alert('No employee data available!')
        }

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
      }

  return (
    <div>
      <div className="text-white flex w-full justify-center mt-[4vh]">
        <div className="w-[90%] px-10 py-5 bg-zinc-800 flex gap-5 rounded-[16px]">
          <div className="flex flex-col gap-5 w-1/2">
            <h1 className="text-[3vh] font-bold">Create Task</h1>
            <form onSubmit={submitHandler} className="flex flex-col gap-3">
              <div>
                <h3 className="text-[2.5vh]">Task Title</h3>
                <input
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  className="h-[2vh] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[100%]"
                  type="text"
                  placeholder="make a ui desing"
                  required
                />
              </div>
              <div>
                <h3 className="text-[2.5vh]">Date</h3>
                <input
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                  className="h-[2vh] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[40%]"
                  type="date"
                  required
                />
              </div>
              <div>
                <h3 className="text-[2.5vh]">Assign to</h3>
                <input
                  value={asignTo}
                  onChange={(e) => setAsignTo(e.target.value)}
                  className="h-[2vh] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[100%]"
                  type="text"
                  placeholder="employee name"
                  required
                />
              </div>
              <div>
                <h3 className="text-[2.5vh]">Category</h3>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="h-[2vh] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[100%]"
                  type="text"
                  placeholder="design etc"
                  required
                />
              </div>
            </form>
          </div>
          <div className=" w-1/2 flex flex-col">
            <h3 className="text-[2.5vh]">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="h-[60%] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[100%]"
              placeholder="Enter task description"
              required
            />
            <div className="flex justify-center mt-[3vh]">
                <button type="submit" onClick={submitHandler} className="bg-white text-black rounded-[10px] px-5 py-2 ">
                  Create Task
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
