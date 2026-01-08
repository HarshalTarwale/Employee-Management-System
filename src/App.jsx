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
  const [loggedinuserdata, setloggedinuserdata] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if(authData){
      const loggedinuser = localStorage.getItem("loggedinuser")
      if(loggedinuser){
        const userData = JSON.parse(loggedinuser)
        setUser(userData.role)
        if(userData.role === 'employee') {
          setloggedinuserdata(userData.data)
        }
      }
    }
  }, [authData])
  

 const handlelogin = (email, password) => {
    if (authData) {
      // Check if admin
      const admin = authData.admin.find((a) => email === a.email && a.password === password)
      if (admin) {
        setUser('admin')
        localStorage.setItem('loggedinuser', JSON.stringify({ role: 'admin' }))
        return
      }
      
      // Check if employee
      const employee = authData.employee.find((e) => email === e.email && e.password === password)
      if (employee) {
        setUser('employee')
        setloggedinuserdata(employee)
        localStorage.setItem('loggedinuser', JSON.stringify({ role: 'employee', data: employee }))
        return
      }
    }
    
    alert("Invalid Credentials")
  }

  return (
    <>
    {!user ? <Login  handlelogin={handlelogin} />:''}
    {user == 'admin' ? <AdminDashbord/> : user == 'employee' ? <EmployeeDashbord data={loggedinuserdata} /> : null}
    </>
  )
}

export default App
