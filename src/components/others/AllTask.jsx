import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'



const AllTask = () => {

    const authData = useContext(AuthContext)

  return (
    <div>
        <div>
            <div className='bg-[#1e4d89] flex items-center justify-between px-10 p-4 rounded-3xl font-semibold text-2xl m-5'>
                <h1 className='w-1/5 font-medium flex justify-center'>Name</h1>
                <h1 className='w-1/5 font-medium flex justify-center'>New Task</h1>
                <h1 className='w-1/5 font-medium flex justify-center'>Accept Task</h1>
                <h1 className='w-1/5 font-medium flex justify-center'>Complete Task</h1>
                <h1 className='w-1/5 font-medium flex justify-center'>Failed Task</h1>
            </div>
        </div>
        <div className='overflow-auto p-5 mt-5 scrollbar-thumb-blue-300 scrollbar- h-100 mb-10'>
        {authData.employees.map(function(elem, idx){
            return <div key={idx} className='bg-gray-800 border-3 border-blue-300 flex justify-between p-4 rounded-3xl font-semibold text-2xl m-4'>
                <h1 className='flex w-1/5 font-medium justify-center'>{elem.firstName}</h1>
                <h1 className='flex w-1/5 font-medium justify-center'>{elem.taskNo.newTask}</h1>
                <h1 className='flex w-1/5 font-medium justify-center'>{elem.taskNo.active}</h1>
                <h1 className='flex w-1/5 font-medium justify-center'>{elem.taskNo.completed}</h1>
                <h1 className='flex w-1/5 font-medium justify-center'>{elem.taskNo.failed}</h1>
            </div> 
        })}
        </div>
    </div>
  )
}

export default AllTask
