import React, { useCallback, useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashbord from './Components/Dashbord/EmployeeDashbord'
import AdminDashbord from './Components/Dashbord/AdminDashbord'
import { setLocalStorage } from './Utils/LocalStorage'
import { getLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Contex/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedinuserdata, setloggedinuserdata] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if(authData){
      const loggedinuser = localStorage.getItem("loggedinuser")
      if(loggedinuser){
        const userData = JSON.parse(loggedinuser)
        setUser(userData.role)
        
        // Get fresh data from employees/admin array instead of cached data
        if(userData.role === 'employee') {
          const freshEmployee = authData.employee.find(emp => emp.id === userData.data.id)
          if(freshEmployee) {
            setloggedinuserdata(freshEmployee)
          }
        } else if(userData.role === 'admin') {
          const freshAdmin = authData.admin.find(adm => adm.id === userData.data.id)
          if(freshAdmin) {
            setloggedinuserdata(freshAdmin)
          }
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
        setloggedinuserdata(admin)  // Store admin data in state
        localStorage.setItem('loggedinuser', JSON.stringify({ role: 'admin', data: admin }))  // Store admin data in localStorage
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
    {/* Pass loggedinuserdata to both Admin and Employee dashboards */}
    {user == 'admin' ? <AdminDashbord data={loggedinuserdata} /> : user == 'employee' ? <EmployeeDashbord data={loggedinuserdata} /> : null}
    </>
  )
}

export default App
