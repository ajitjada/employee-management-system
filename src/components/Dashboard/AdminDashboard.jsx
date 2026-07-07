import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {

  return (
    <div className='bg-gray-950 '>

      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask data={props.data} />
      <AllTask data={props.data} />
    </div>
  )
}

export default AdminDashboard
