import React from "react";
import AcceptTask from "../../Tasks/AcceptTask";
import NewTask from "../../Tasks/NewTask";
import CompleteTask from "../../Tasks/CompleteTask";
import FailedTask from "../../Tasks/FailedTask";

const TaskList = ({data}) => {
  console.log(data);
  return (
    <div
      id="tasklist"
      className="flex items-center justify-start gap-5 flex-nowrap w-full overflow-x-auto mt-23">
      {data?.tasks?.map((elem, idx)=>{
        if(elem.status === 'active'){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.status === 'newTask'){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.status === 'completed'){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.status === 'failed'){
          return <FailedTask key={idx} data={elem}/>
        }
      })}
    </div>
  );
};

export default TaskList;
