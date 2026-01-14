import React from 'react'

const Headder = ({data}) => {
  console.log('Headder data:', data) // Debug: Check if data is received

  const logout = ()=>{
    localStorage.setItem('loggedinuser','')
    window.location.reload()
  }
  return (
    <div className='text-white flex justify-between items-center'>
      {/* Display the employee/admin firstName from data object, show 'User' if data is not available */}
      <h1 className='text-2xl font-bold'>Hello <br /><span className='text-3xl'>{data?.firstName || 'User'}✌️</span></h1>
      <div><button onClick={logout} className='bg-red-500 px-5 py-2 rounded-[15px] font-bold'>Logout</button></div>
    </div>
  )
}

export default Headder
