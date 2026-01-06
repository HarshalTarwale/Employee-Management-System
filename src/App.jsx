import React, { useCallback, useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashbord from './Components/Dashbord/EmployeeDashbord'
import AdminDashbord from './Components/Dashbord/AdminDashbord'
import { setLocalStorage } from './Utils/LocalStorage'
import { getLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Contex/AuthProvider'

const App = () => {

  useEffect(() => {
    setLocalStorage()
  }, [])

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if(authData){
      const loggedinuser = localStorage.getItem("loggedinuser")
      if(loggedinuser){
        const userData = JSON.parse(loggedinuser)
        setUser(userData.role)
      }
    }
  }, [authData])
  

  const handlelogin = (email, password) => {
    console.log('Login attempt:', email)
    console.log('Auth data:', authData)
    
    if(!authData) {
      alert("Loading data, please wait and try again")
      return
    }
    
    // Check admin
    if(authData.admin) {
      const admin = authData.admin.find((a) => a.email === email && a.password === password)
      if(admin) {
        setUser('admin')
        localStorage.setItem('loggedinuser', JSON.stringify({role: 'admin'}))
        console.log('Admin logged in successfully')
        return
      }
    }
    
    // Check employees
    if(authData.employee) {
      const employee = authData.employee.find((e) => e.email === email && e.password === password)
      if(employee) {
        setUser('employee')
        localStorage.setItem('loggedinuser', JSON.stringify({role: 'employee'}))
        console.log('Employee logged in successfully')
        return
      }
    }
    
    alert("Invalid email or password")
  }

  return (
    <>
    {!user ? <Login  handlelogin={handlelogin} />:''}
    {user == 'admin' ? <AdminDashbord/> : <EmployeeDashbord/>}
    </>
  )
}

export default App
