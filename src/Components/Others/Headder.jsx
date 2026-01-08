import React from 'react'

const Headder = ({data}) => {
  return (
    <div className='text-white flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Hello <br /><span className='text-3xl'>{data.firstName}✌️</span></h1>
      <div><button className='bg-red-500 px-5 py-2 rounded-[15px] font-bold'>Logout</button></div>
    </div>
  )
}

export default Headder
