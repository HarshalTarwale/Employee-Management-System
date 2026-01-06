import React, { useState } from "react";
const Login = ({handlelogin}) => {

  console.log(handlelogin)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handlelogin(email,password)
    console.log("Email -",email)
    console.log("Passaward",password)
  }
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="login bg-zinc-800 rounded-[25px] w-[25%] h-[50%] flex flex-col  items-center py-5 gap-[12%]">
        <h1 className="text-white text-[5vh]">Login</h1>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className="flex flex-col items-center gap-[15px] w-full">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required
            className="bg-zinc-900 border-white border-1 text-white  rounded-[15px] h-[6.5vh] w-[79%] px-5 "
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            className="bg-zinc-900 border-white border-1 text-white  rounded-[15px] h-[6.5vh] w-[79%] px-5 "
            type="text"
            placeholder="Enter Passoward"
          />
          <button className="bg-white mt-[25px] px-6 py-2 rounded-[15px] text-zinc-900 font-medium">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
