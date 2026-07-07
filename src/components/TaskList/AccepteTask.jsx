import React from 'react'

const AccepteTask = ({data}) => {
  return (
    <div>
      <div className='flex flex-col bg-[#1e4d89] shrink-0 rounded-xl  h-100 w-90'>
            <div className='flex p-6 justify-between items-center'>
                <h1 className='text-black bg-[#c2d6e9] px-3 py-1 text-lg font-semibold rounded'>{data.category}</h1>
                <h2 className='text-lg font-semibold'>{data.taskDate}</h2>
            </div>
            <h1 className='text-3xl mt-4 mb-2 px-3 font-semibold '>
                {data.taskTitle}
            </h1>
            <h2 className='px-3 h-30 text-lg mt-5 text-[#d5dde6]'>{data.taskDescription}</h2>
            <div className='flex justify-between p-5'>
              <button className='bg-green-500 py-2 w-[45%] rounded-xl font-semibold text-lg mb-3'>Mark as Completed</button>
              <button className='bg-red-500 py-2 w-[45%] rounded-xl font-semibold text-lg mb-3'>Mark as Failed</button>
            </div>
        </div>
        
    </div>
  )
}

export default AccepteTask
