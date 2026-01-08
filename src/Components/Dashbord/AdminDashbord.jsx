import React from "react";
import Headder from "../Others/Headder";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashbord = ({data}) => {
  return (
    <div className="bg-[#1b1a1a] h-screen w-screen py-4 px-10 ">
      <Headder data={data}/>
      <CreateTask data={data}/>
      <AllTask data={data}/>
    </div>
  );
};

export default AdminDashbord;
