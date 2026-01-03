import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className="text-white flex w-full justify-center mt-[6vh]">
        <div className="w-[90%] px-10 py-5 bg-zinc-800 flex gap-5 rounded-[16px]">
          <div className="flex flex-col gap-5 w-1/2">
            <h1 className="text-[3vh] font-bold">Create Task</h1>
            <form className="flex flex-col gap-3">
              <div>
                <h3 className="text-[2.5vh]">Task Title</h3>
                <input
                  className="h-[2vh] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[100%]"
                  type="text"
                  placeholder="make a ui desing"
                />
              </div>
              <div>
                <h3 className="text-[2.5vh]">Date</h3>
                <input
                  className="h-[2vh] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[40%]"
                  type="date"
                />
              </div>
              <div>
                <h3 className="text-[2.5vh]">Assign to</h3>
                <input
                  className="h-[2vh] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[100%]"
                  type="text"
                  placeholder="employee name"
                />
              </div>
              <div>
                <h3 className="text-[2.5vh]">Category</h3>
                <input
                  className="h-[2vh] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[100%]"
                  type="text"
                  placeholder="design etc"
                />
              </div>
            </form>
          </div>
          <div className=" w-1/2 flex flex-col">
            <h3 className="text-[2.5vh]">Discription</h3>
            <input
              className="h-[60%] rounded-[10px] text-white  p-5 bg-zinc-700 mt-2  w-[100%]"
              type="text"
            />
            <div className="flex justify-center mt-[3vh]">
                <button className="bg-white text-black rounded-[10px] px-5 py-2 ">
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
