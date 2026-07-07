import React from 'react'

const TaskList = ({data}) => {
  return (
    <div>
      <div className='flex justify-center gap-2 p-5 items-center'>
        <div className='bg-blue-400 rounded-xl m-3 w-[35%] h-40 px-10 py-7 justify-center items-center'>
            <h1 className='font-bold mb-4 mt-3 text-4xl'>{data.taskNo.newTask}</h1>
            <h3 className='font-semibold text-3xl'>New Task</h3>
        </div>
        <div className='bg-blue-400 rounded-xl m-3 w-[35%] h-40 px-10 py-7 justify-center items-center'>
            <h1 className='font-bold mb-4 mt-3 text-4xl'>{data.taskNo.active}</h1>
            <h3 className='font-semibold text-3xl'>Accepted </h3>
        </div>
        <div className='bg-blue-400 rounded-xl m-3 w-[35%] h-40 px-10 py-7 justify-center items-center'>
            <h1 className='font-bold mb-4 mt-3 text-4xl'>{data.taskNo.completed}</h1>
            <h3 className='font-semibold text-3xl'>Completed </h3>
        </div>
        <div className='bg-blue-400 rounded-xl m-3 w-[35%] h-40 px-10 py-7 justify-center items-center'>
            <h1 className='font-bold mb-4 mt-3 text-4xl'>{data.taskNo.failed}</h1>
            <h3 className='font-semibold text-3xl'>Failed Task</h3>
        </div>
        

      </div>
    </div>
  )
}

export default TaskList
