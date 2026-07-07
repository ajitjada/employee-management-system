import React, { useContext, useEffect, useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Login from './components/auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedUserData, setLoggedUserData] = useState(null)

  const authData = useContext(AuthContext)

  useEffect(() => {
    
    if(authData) {
      const loggedIn = localStorage.getItem("loggedInUser")

      if(loggedIn){
        const user = JSON.parse(loggedIn)
        
        setUser(user.role)
        setLoggedUserData(user.data)
      }
    }
  }, [authData])
  
 
  const handleLogin = (email, password)=> {
    if(authData && authData.admin.find((e)=>email == e.email && e.password == password)) {
      const admin = authData.admin.find((e)=>email == e.email && e.password == password)
      if(admin) {
        setUser('admin')     
        setLoggedUserData(admin)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin', data:admin}))
      }

    } else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)) {
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee) {
        setUser('employee')
        setLoggedUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }

    } else {
      alert('invalid')
    }
 }

 

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedUserData} /> : null}
      {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedUserData}  /> : null}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App
