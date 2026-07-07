import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
      <div className='flex flex-col shrink-0 bg-[#1e4d89] rounded-xl  h-100 w-90'>
            <div className='flex p-6 justify-between items-center'>
                <h1 className='text-black bg-[#c2d6e9] px-3 py-1 text-lg font-semibold rounded'>{data.category}</h1>
                <h2 className='text-lg font-semibold'>{data.taskDate}</h2>
            </div>
            <h1 className='text-3xl mt-4 mb-2 px-3 font-semibold '>
                {data.taskTitle}
            </h1>
            <h2 className='px-3 text-[#d5dde6] h-30 text-lg mt-5'>{data.taskDescription}</h2>
            <button className='bg-green-500 items-center justify-center py-2 mt-5 ml-10 mr-10 rounded-xl font-semibold text-xl  cursor-pointer '>Accept New Task</button>
        </div>
    </div>
  )
}

export default NewTask
