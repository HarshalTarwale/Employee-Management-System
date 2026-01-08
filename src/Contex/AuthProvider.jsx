import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)
    
    useEffect(() => {
      setLocalStorage()
        const {employee, admin} = getLocalStorage()
    setUserData({employee,admin})
    },[])


  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
