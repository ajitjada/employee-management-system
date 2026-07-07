import React from 'react'
import AccepteTask from '../TaskList/AccepteTask'
import CompleteTask from '../TaskList/CompleteTask'
import NewTask from '../TaskList/NewTask'
import FaileTask from '../TaskList/FailTask'

const ListAllTask = ({data}) => {
  return (
      <div id='tasklist' className='overflow-x:auto -mt-5 flex flex-nowrap  overflow-x-auto gap-7 p-10 rounded-xl'>
        {data.tasks.map((elem, idx) => {
          if(elem.active) {
            return <AccepteTask key={idx} data={elem}/>
          }
          if(elem.newTask) {
            return <NewTask key={idx} data={elem}/>
          }
          if(elem.completed) {
            return <CompleteTask key={idx} data={elem}/>
          }
          if(elem.failed) {
            return <FaileTask key={idx} data={elem}/>
          }
        })}      
      </div>
  )
}

export default ListAllTask
