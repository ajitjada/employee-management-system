import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { setLocalStorage } from '../../utils/LocalStorage'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = (props) => {

    const { employees, admin, setUserData } = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [first, setfirst] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = { taskTitle, taskDate, taskDescription, asignTo, category, active: false, newTask: true, completed: false, failed: false };

        const data = employees



        data.forEach(element => {
            if (asignTo === element.firstName) {

                element.tasks.push(newTask)

                element.taskNo.newTask += 1;
            }

        });

        localStorage.setItem('employees', JSON.stringify(data));

        setUserData({
            employees: data,
            admin,
        });

        setTaskTitle('')
        setTaskDate('')
        setAsignTo('')
        setTaskDescription('')
        setCategory('')
    }

    return (
        <div>
            <div className='p-5'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className='rounded-3xl px- flex bg-gray-900 h-full justify-between p-5'>
                    <div className='p-10 justify-center items-center w-[40%] '>
                        <h1 className='text-xl'>Task title</h1>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='border-3 text-[#d5dde6] border-blue-300 bg-gray-800 px-3 py-2 mt-1 text-lg rounded-xl  w-full ' type="text" placeholder='Write Title Here' />
                        <h1 className='text-xl mt-3 '>Date</h1>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='border-3 text-[#d5dde6] border-blue-300 bg-gray-800 px-3 py-2 mt-1 text-lg rounded-xl  w-full ' type="Date" />
                        <h1 className='text-xl mt-3'>Asign to</h1>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='border-3 text-[#d5dde6] border-blue-300 bg-gray-800 px-3 py-2 mt-1 text-lg rounded-xl  w-full ' type="text" placeholder='Employee Name' />
                        <h1 className='text-xl mt-3'>Category</h1>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='border-3 text-[#d5dde6] border-blue-300 bg-gray-800 px-3 py-2 mt-1 text-lg rounded-xl  w-full ' type="text" placeholder='Write Category' />
                    </div>
                    <div className='tems-center justify-center p-5  w-[40%]'>
                        <h1 className='text-2xl mt-2 font-semibold mb-1'>Description</h1>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }}
                            className='rounded-xl resize-none text-[#d5dde6] border-3 text-xl p-5 border-blue-300 bg-gray-800 w-full h-[63%]' name="text" id="" placeholder='Full Detail Description'></textarea>
                        <button className='bg-blue-500 cursor-pointer mt-5 w-full rounded-xl py-3 text-2xl font-semibold' >Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
