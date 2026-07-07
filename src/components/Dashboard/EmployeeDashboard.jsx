import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import ListAllTask from '../others/ListAllTask'

const EmployeeDashboard = (props) => {
  return (
    <div>
      
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskList data={props.data} />
      <ListAllTask data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
